// ./forge/endpointSchema.ts
import z from 'zod';

// Define the main person schema
const WebsiteSchema = z.object({
  bio: z
    .string()
    .max(500)
    .min(300)
    .describe('A short bio of the user, between 300 and 500 characters long'),
  colorPalette: z.object({
    accent: z.string().regex(/^#[0-9A-F]{6}$/i),
    background: z.string().regex(/^#[0-9A-F]{6}$/i),
    foreground: z.string().regex(/^#[0-9A-F]{6}$/i),
    primary: z.string().regex(/^#[0-9A-F]{6}$/i),
  }),
  fontFamily: z
    .string()
    .describe('The font family for the website (formatted for css)'),
  interests: z
    .array(z.string())
    .min(5)
    .describe('A list of interests, at least 5 long'),
  location: z.object({
    city: z.string(),
    state: z.string(),
  }),
  quote: z.string().describe('A very profound quote from the user'),
  skills: z
    .array(z.string())
    .min(6)
    .describe('A list of skills, at least 6 long'),
});

export default WebsiteSchema;

type EndpointConfig = {
  /** path to the endpoint. one word, no special characters */
  path: string;
  /**
   * determines if the endpoint is available for public access
   * users must use their own OpenAI API key
   */
  public: boolean;
  /** name of the endpoint */
  name?: string;
  /** description of the endpoint */
  description?: string;
};

export const config: EndpointConfig = {
  path: 'dev-website',
  public: true,
  name: 'Dev Website',
  description: "Generates a schema for a developer's personal website",
};
