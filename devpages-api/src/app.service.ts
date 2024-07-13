import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';

import {
  EXAMPLE_PROMPT_PARAMS,
  getForgePrompt,
  PromptParams,
} from 'forge/util/getPrompt';

import { fetchGithubContributions } from 'src/lib/fetchGithubContributions';

import { gitAxios } from 'src/lib/fetchGithubUser';
import { fetchWebsite } from 'src/lib/fetchWebsite';
import { DevWebsiteGithubProps, Project } from 'src/types/devWebsite';
import { GithubRepo, GithubUser, GithubUserSocial } from 'src/types/githubUser';

@Injectable()
export class AppService {
  gitApi: AxiosInstance;
  constructor() {
    this.gitApi = gitAxios;
  }
  async getHello() {
    const forgePrompt = getForgePrompt(EXAMPLE_PROMPT_PARAMS);
    console.log({ forgePrompt });
    const forgeData = await fetchWebsite(forgePrompt);
    console.log({ forgeData });
    return 'Hello World!';
  }

  async getWebsite(prompt: PromptParams) {
    console.log(prompt);
    const forgePrompt = getForgePrompt(prompt);
    console.log({ forgePrompt });
    const forgeData = await fetchWebsite(forgePrompt);
    console.log({ forgeData });
    return forgeData;
  }

  async fetchUserInfo(username: string): Promise<DevWebsiteGithubProps> {
    try {
      const res = await this.gitApi.get<GithubUser>(`/users/${username}`);
      const githubUser = res.data;
      console.log({ githubUser });

      const socialAccountsRes = await this.gitApi<GithubUserSocial[]>(
        `/users/${username}/social_accounts`,
      );
      const socials = socialAccountsRes.data;

      const favoriteProjectsRes = await this.gitApi<GithubRepo[]>(
        `/users/${username}/starred`,
      );
      const favoriteProjects: Project[] = favoriteProjectsRes.data
        .map((p) => ({
          name: p.name,
          url: p.html_url,
          description: p.description,
          language: p.language,
          stargazersCount: p.stargazers_count,
          owner: {
            username: p.owner.login,
            avatarUrl: p.owner.avatar_url,
            githubUrl: p.owner.html_url,
          },
        }))
        .sort((a, b) => b.stargazersCount - a.stargazersCount);
      const repoRes = await this.gitApi<GithubRepo[]>(
        `/users/${username}/repos`,
      );
      const repos = repoRes.data
        .map((p) => ({
          name: p.name,
          url: p.html_url,
          description: p.description,
          language: p.language,
          stargazersCount: p.stargazers_count,
          owner: {
            username: p.owner.login,
            avatarUrl: p.owner.avatar_url,
            githubUrl: p.owner.html_url,
          },
        }))
        .sort((a, b) => b.stargazersCount - a.stargazersCount);

      const contributionRes = await fetchGithubContributions(username);
      console.log(contributionRes?.data);
      return {
        name: githubUser.name,
        avatarUrl: githubUser.avatar_url,
        githubUrl: githubUser.html_url,
        company: githubUser.company,
        contactEmail: githubUser.email,
        location: githubUser.location,
        socialLinks: socials,
        bio: githubUser.bio,
        blog: githubUser.blog,
        topProjects: repos
          .sort((a, b) => b.stargazersCount - a.stargazersCount)
          .slice(0, 3),
        favoriteProjects: favoriteProjects
          .sort((a, b) => b.stargazersCount - a.stargazersCount)
          .slice(0, 3),
        contributions:
          contributionRes.data.user.contributionsCollection
            .contributionCalendar,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async createUserDevPage(username: string) {
    const userInfo = await this.fetchUserInfo(username);
    const website = await this.getWebsite(
      this.transformUserInfoToPromptParams(userInfo),
    );
    console.log({ userInfo });
    return { ...website, ...userInfo, bio: website.bio };
  }

  transformUserInfoToPromptParams(
    userInfo: DevWebsiteGithubProps,
  ): PromptParams {
    return {
      textBlocks: [
        userInfo.githubUrl,
        userInfo.company,
        userInfo.contactEmail,
        userInfo.location,
        userInfo.bio,
      ],
      company: userInfo.company,
      name: userInfo.name,
      primaryCodeLanguage: userInfo.topProjects?.[0]?.language,
    };
  }
}
