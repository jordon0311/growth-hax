export interface ReturnedDataType {
  data: {
    _meta: {
      usage: {
        completion_tokens: number;
        prompt_tokens: number;
        total_tokens: number;
      };
    };
    activityChart: null;
    avatarUrl: string;
    bio: string;
    blog: string;
    colorPalette: {
      accent: string;
      background: string;
      foreground: string;
      primary: string;
    };
    company: null;
    contactEmail: null;
    fontFamily: string;
    githubUrl: string;
    interests: string[];
    location: null;
    name: string;
    quote: string;
    skills: string[];
    socialLinks: {
      provider: string;
      url: string;
    }[];
    topProjects: any[];
  };
}
