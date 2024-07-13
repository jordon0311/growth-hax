import { Project } from 'src/types/devWebsite';
import { ContributionDay } from 'src/types/githubContributions';
import { GithubUserSocial } from 'src/types/githubUser';

export type WebRes = {
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
};
