import { Agent, completionApiBuilder } from "nolita";
import { nolitarc } from "./config";
import "dotenv/config";

const { agentProvider, agentApiKey, agentModel } = nolitarc();
const providerOptions = {
  apiKey: process.env.PROVIDER_API_KEY || agentApiKey,
  provider: process.env.MODEL_PROVIDER || agentProvider,
};

if (!providerOptions.provider) {
  throw new Error("No provider specified. Did you forget to make a .env file or run `npx nolita auth`? See README.md for more.");
}

const modelApi = completionApiBuilder(providerOptions, {
  model: process.env.MODEL || agentModel,
});

const agent = new Agent({ modelApi });

export default agent;
