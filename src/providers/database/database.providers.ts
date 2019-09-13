import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from 'nestjs-config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get('database.DB_DIALECT'),
        host: configService.get('database.DB_DIALECT'),
        port: configService.get('database.DB_PORT'),
        username: configService.get('database.DB_USER'),
        password: configService.get('database.DB_PASS'),
        database: configService.get('database.DB_NAME'),
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
