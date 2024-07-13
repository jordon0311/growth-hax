import { Injectable } from '@nestjs/common';
import { EXAMPLE_PROMPT_PARAMS, getForgePrompt } from 'forge/util/getPrompt';
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
}
