// Expand the schema of how responses should look.
import { z } from "zod";

export const CustomSchema = z.object({
  restaurants: z.array(z.string().describe("The name of a restaurant")),
});

export type CustomSchemaType = z.infer<typeof CustomSchema>;