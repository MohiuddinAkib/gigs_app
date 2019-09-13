import * as constants from '@src/constants';
import { Gigs } from '../../models/gigs/gigs.model';
import { CreateGigDto } from '../../dto/create-gig-dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { GigsService } from '../../services/gigs/gigs.service';
import { ApiUseTags, ApiCreatedResponse } from '@nestjs/swagger';
@ApiUseTags(constants.GIGS_ROUTES)
@Controller('gigs')
export class GigsController {
  constructor(private readonly gigsService: GigsService) {}

  @Get()
  async getGigs(): Promise<Gigs[]> {
    return await this.gigsService.getGigs();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The gig has been successfully created.',
    type: CreateGigDto,
  })
  async createGig(@Body() createGigDto: CreateGigDto) {
    return await this.gigsService.createGig(createGigDto);
  }
}
