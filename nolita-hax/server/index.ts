import chalk from "chalk";
import "dotenv/config";
import express from "express";
import { Browser, Logger } from "nolita";
import path from "path";
import { fileURLToPath } from "url";
import agent from "../agent";
import { nolitarc } from "../agent/config";
import inventory from "../extensions/inventory";
import { CustomSchema } from "../extensions/schema";
import { fetchWebsite } from "../external/fetchWebsite";
import { EXAMPLE_PROMPT_PARAMS, getForgePrompt } from "../forge/util/getPrompt";

// add dirname var for esm
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { hdrApiKey } = nolitarc();

const app = express();
const port = process.env.NODE_ENV === "production" ? 80 : 3040;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const cors = {
  origin: ["http://localhost:5173"],
  default: "http://localhost:5173",
};

app.all("*", function (req, res, next) {
  const origin = cors.origin.includes(req?.headers?.origin?.toLowerCase() || "")
    ? req.headers.origin
    : cors.default;
  res.header("Access-Control-Allow-Origin", origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// In prod, serve the front-end
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "../app/dist")));
}

app.get("/api/browse", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  const logger = new Logger(["info"], (msg) => {
    let inc = msg;
    try {
      inc = JSON.parse(msg);
    } catch (e) {
      console.error(chalk.redBright("Error parsing log message: ", e));
    }
    console.log(inc.message || msg);
    return res.write(`data: ${inc.message || msg}\n\n`);
  });
  const browser = await Browser.launch(true, agent, logger, {
    inventory,
    ...(process.env.HDR_API_KEY || hdrApiKey
      ? {
          endpoint: process.env.HDR_ENDPOINT || "https://api.hdr.is",
          apiKey: process.env.HDR_API_KEY || hdrApiKey,
        }
      : {}),
  });
  const page = await browser.newPage({});
  await page.goto(req.query.url as string);
  const answer = await page.browse(req.query.objective, {
    schema: CustomSchema,
    maxTurns: parseInt(req.query.maxIterations as string) || 10,
  });
  if (answer) {
    res.write(`data: ${JSON.stringify(answer)}\n\n`);
    res.write(`data: {"done": true}\n\n`);
    return res.end();
  } else {
    res.write(`data: {"error": "no answer found"}\n\n`);
    res.write(`data: {"done": true}\n\n`);
    return res.end();
  }
});

app.get("/test", async (req, res) => {
  const forgePrompt = getForgePrompt(EXAMPLE_PROMPT_PARAMS);
  console.log({ forgePrompt });
  const forgeData = await fetchWebsite(forgePrompt);
  console.log({ forgeData });

  res.json({ data: forgeData });
});
