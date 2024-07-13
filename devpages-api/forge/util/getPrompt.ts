export type PromptParams = {
  name: string;
  company?: string;
  textBlocks: string[];
  pronouns?: string;
  primaryCodeLanguage?: string;
};

export const EXAMPLE_PROMPT_PARAMS: PromptParams = {
  name: 'Jordon Waters',
  company: 'Forge',
  textBlocks: [
    "I'm a software engineer at Forge.",
    'I love to build cool stuff with code.',
    "I'm passionate about helping others learn to code.",
  ],
  pronouns: 'he/him',
  primaryCodeLanguage: 'TypeScript',
};

export const getForgePrompt = (params: PromptParams): string => {
  const stringy = JSON.stringify(params);

  return stringy;
};
