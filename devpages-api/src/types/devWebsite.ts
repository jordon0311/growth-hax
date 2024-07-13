import { ContributionDay } from 'src/types/githubContributions';
import { GithubUserSocial } from 'src/types/githubUser';

export type DevWebsite = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  company: string | null;
  contactEmail: string | null;
  activityChart: unknown;
  location: string;
  socialLinks: string[];
  topProjects: string[];
  bio: string;
  skills: string[];
  interests: string[];
  quote: string;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fontFamily: string;
  };
};

export type DevWebsiteGithubProps = {
  name: string | null;
  avatarUrl: string;
  githubUrl: string;
  company: string | null;
  contactEmail: string | null;
  activityChart: unknown;
  location: string | null;
  bio: string | null;
  blog: string | null;
  socialLinks: GithubUserSocial[];

  topProjects: Project[];
  favoriteProjects: Project[];
  contributions: {
    totalContributions: number;
    weeks: {
      contributionDays: ContributionDay[];
    }[];
  };
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
