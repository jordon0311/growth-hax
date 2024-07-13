import { Injectable } from '@nestjs/common';
import { EXAMPLE_PROMPT_PARAMS, getForgePrompt } from 'forge/util/getPrompt';
import { fetchGithubUser } from 'src/lib/fetchGithubUser';
import { fetchWebsite } from 'src/lib/fetchWebsite';

@Injectable()
export class AppService {
  async getHello() {
    const forgePrompt = getForgePrompt(EXAMPLE_PROMPT_PARAMS);
    console.log({ forgePrompt });
    const forgeData = await fetchWebsite(forgePrompt);
    console.log({ forgeData });
    return 'Hello World!';
  }
  async fetchUser(username: string) {
    const githubUser = await fetchGithubUser(username);
    console.log({ githubUser });
    return githubUser;
  }
}
