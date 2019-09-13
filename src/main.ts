import * as path from 'path';
import * as moduleAlias from 'module-alias';

const getPath = (...folderPath: string[]): string =>
  path.resolve(__dirname, folderPath.join(', '));

moduleAlias.addAliases({
  '@src': path.resolve(__dirname),
  '@interfaces': getPath('interfaces'),
  '@modules': getPath('modules'),
  '@providers': getPath('providers'),
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable cors
  app.enableCors();
  // Path prefix
  app.setGlobalPrefix('api/v1');
  // Enable swagger
  const options = new DocumentBuilder()
    .setHost('localhost:3000')
    .setBasePath('/api/v1')
    .setTitle('Gigs app')
    .setDescription('The gigs API description')
    .setContactEmail('mohiuddinmostafakamal@gmail.com')
    .setVersion('1.0')
    .addTag('gigs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // Listen for server request
  await app.listen(app.get('ConfigService').get('express.PORT'));
}
bootstrap();
