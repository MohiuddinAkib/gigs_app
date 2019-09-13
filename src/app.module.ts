import * as path from 'path';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { ConfigModule } from 'nestjs-config';
import { Module, MiddlewareConsumer } from '@nestjs/common';

import { AppService } from '@src/app.service';
import { AppController } from '@src/app.controller';
import { GigsModule } from '@modules/gigs/gigs.module';
import { DatabaseModule } from '@modules/database/database.module';

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
    consumer.apply(helmet(), compression()).forRoutes('*');
  }
}
