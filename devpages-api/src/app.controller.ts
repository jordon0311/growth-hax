import { Controller, Get, Param } from '@nestjs/common';
import { WebRes } from 'src/lib/WebRes';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/user/:username')
  async fetchUser(@Param('username') username: string) {
    const user = await this.appService.fetchUserInfo(username);
    return { data: user };
  }

  @Get('/user/:username/dev_page')
  async fetchUserDevPage(
    @Param('username') username: string,
  ): Promise<{ data: WebRes }> {
    const devPage = await this.appService.createUserDevPage(username);
    console.log('devPage', devPage);
    return { data: devPage };
  }
}
