import { Module } from '@nestjs/common';
import { GigsController } from './controllers/gigs/gigs.controller';
import { GigsService } from './services/gigs/gigs.service';

@Module({
  controllers: [GigsController],
  providers: [GigsService],
  imports: [],
})
export class GigsModule {}
