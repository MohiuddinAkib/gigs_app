import { AppService } from './app.service';
import * as constants from '@src/constants';
import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiUseTags(constants.HOME_ROUTES)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
