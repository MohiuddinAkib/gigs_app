import { Gigs } from '@modules/gigs/models/gigs/gigs.model';
import * as constants from '@src/constants';

export const gigsProviders = [
  {
    provide: constants.GIGS_REPOSITORY,
    useValue: Gigs,
  },
];
