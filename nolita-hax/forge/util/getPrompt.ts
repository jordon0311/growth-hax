export type PromptParams = {
  name: string;
  company?: string;
  textBlocks: string[];
  pronouns?: string;
  primaryCodeLanguage?: string;
};

export const getForgePrompt = (params: PromptParams): string => {
  const stringy = JSON.stringify(params);

  return stringy;
};
