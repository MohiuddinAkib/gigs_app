import { Module } from '@nestjs/common';
import { GigsService } from './services/gigs/gigs.service';
import { GigsController } from './controllers/gigs/gigs.controller';
import { gigsProviders } from '@src/providers/gigs/gigs.providers';

@Module({
  controllers: [GigsController],
  providers: [GigsService, ...gigsProviders],
  imports: [],
})
export class GigsModule {}
