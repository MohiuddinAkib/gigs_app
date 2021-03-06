import { ConfigModule } from 'nestjs-config';
import { ConfigService } from 'nestjs-config';
import { Sequelize } from 'sequelize-typescript';
import { Gigs } from '../../modules/gigs/models/gigs/gigs.model';
import * as constants from '@src/constants';

export const databaseProviders = [
  {
    provide: constants.SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get('database.DB_DIALECT'),
        host: configService.get('database.DB_HOST'),
        port: configService.get('database.DB_PORT'),
        username: configService.get('database.DB_USER'),
        password: configService.get('database.DB_PASS'),
        database: configService.get('database.DB_NAME'),
      });
      sequelize.addModels([Gigs]);
      await sequelize.sync();
      return sequelize;
    },
    imports: [ConfigModule],
    inject: [ConfigService],
  },
];
