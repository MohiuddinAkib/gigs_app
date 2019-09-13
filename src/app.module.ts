import * as path from 'path';
import * as csurf from 'csurf';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { ConfigModule } from 'nestjs-config';
import * as rateLimit from 'express-rate-limit';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppService } from '@src/app.service';
import { AppController } from '@src/app.controller';
import { GigsModule } from '@modules/gigs/gigs.module';
import { DatabaseModule } from '@modules/database/database.module';
import { CsrfMiddleware } from '@middlewares/csrf-middleware';

@Module({
  imports: [
    GigsModule,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        helmet(),
        compression(),
        rateLimit({
          windowMs: 15 * 60 * 1000, // 15 minutes
          max: 100, // limit each IP to 100 requests per windowMs
        }),
        cookieParser(),
        csurf({ cookie: true }),
        CsrfMiddleware,
      )
      .forRoutes('*');
  }
}
