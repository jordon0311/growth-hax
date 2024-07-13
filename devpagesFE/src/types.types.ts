export interface ReturnedDataType {
  data: {
    bio: string;
    colorPalette: {
      accent: string;
      background: string;
      foreground: string;
      primary: string;
    };
    fontFamily: string;
    interests: string[];
    location: string | null;
    quote: string;
    skills: string[];
    name: string | null;
    avatarUrl: string;
    githubUrl: string;
    company: string | null;
    contactEmail: string | null;
    socialLinks: GithubUserSocial[];
    blog: string;
    topProjects: Project[];
    favoriteProjects: Project[];
    contributions: {
      totalContributions: number;
      weeks: {
        contributionDays: ContributionDay[];
      }[];
    };
  };
}

export type GithubUserSocial = {
  provider: string;
  url: string;
};
export type ContributionDay = {
  contributionCount: number;
  date: string;
};

export type Project = {
  name: string;
  url: string;
  description: string | null;
  language: string;
  stargazersCount: number;
  owner: {
    username: string;
    avatarUrl: string;
    githubUrl: string;
  };
};
