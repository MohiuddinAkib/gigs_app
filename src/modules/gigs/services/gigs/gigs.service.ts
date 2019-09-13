import * as constants from '@src/constants';
import { Injectable, Inject } from '@nestjs/common';
import { Gigs } from '../../models/gigs/gigs.model';
import { Gigs as GigsInterface } from '@interfaces/gigs/gig.interface';

@Injectable()
export class GigsService {
  constructor(
    @Inject(constants.GIGS_REPOSITORY)
    private readonly GIGS_REPOSITORY: typeof Gigs,
  ) {}

  async getGigs(): Promise<Gigs[]> {
    return await this.GIGS_REPOSITORY.findAll<Gigs>();
  }

  async createGig(gig: GigsInterface): Promise<Gigs> {
    return await this.GIGS_REPOSITORY.create(gig);
  }
}
