import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import {
  EXAMPLE_PROMPT_PARAMS,
  getForgePrompt,
  PromptParams,
} from 'forge/util/getPrompt';
import { gitAxios } from 'src/lib/fetchGithubUser';
import { fetchWebsite } from 'src/lib/fetchWebsite';
import { DevWebsiteGithubProps } from 'src/types/devWebsite';
import { GithubUser, GithubUserSocial } from 'src/types/githubUser';

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
    const forgePrompt = getForgePrompt(prompt);
    const forgeData = await fetchWebsite(forgePrompt);
    return forgeData;
  }

  async fetchUserInfo(username: string): Promise<DevWebsiteGithubProps> {
    const res = await this.gitApi.get<GithubUser>(`/users/${username}`);
    const githubUser = res.data;

    const socialAccountsRes = await this.gitApi<GithubUserSocial[]>(
      `/users/${username}/social_accounts`,
    );
    const socials = socialAccountsRes.data;

    console.log({ socials });

    return {
      name: githubUser.name,
      avatarUrl: githubUser.avatar_url,
      githubUrl: githubUser.html_url,
      company: githubUser.company,
      contactEmail: githubUser.email,
      activityChart: null,
      location: githubUser.location,
      socialLinks: socials,
      bio: githubUser.bio,
      blog: githubUser.blog,
      topProjects: [],
    };
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
