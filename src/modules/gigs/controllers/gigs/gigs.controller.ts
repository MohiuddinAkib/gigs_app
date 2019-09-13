import { Controller, Get } from '@nestjs/common';

@Controller('gigs')
export class GigsController {
  @Get()
  getGigs() {
    return 'Hello gigs 2222';
  }
}
