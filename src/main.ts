import * as path from 'path';
import * as moduleAlias from 'module-alias';

const getPath = (...folderPath: string[]): string =>
  path.resolve(__dirname, folderPath.join(', '));

moduleAlias.addAliases({
  '@src': path.resolve(__dirname),
  '@interfaces': getPath('interfaces'),
  '@modules': getPath('modules'),
  '@providers': getPath('providers'),
  '@middlewares': getPath('middlewares'),
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable cors
  app.enableCors();
  // Config service
  const CONFIG = app.get('ConfigService');
  // App port
  const PORT = CONFIG.get('express.PORT');
  // App name
  const APP_NAME = CONFIG.get('express.APP_NAME');
  // Api version
  const API_VERSION = CONFIG.get('express.API_VERSION');
  // Path prefix
  app.setGlobalPrefix(`api/v${parseInt(API_VERSION)}`);
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  // Enable swagger
  const options = new DocumentBuilder()
    .setHost(`localhost:3000`)
    .setBasePath(`/api/v${parseInt(API_VERSION)}`)
    .setTitle(APP_NAME)
    .setDescription('The gigs app API description')
    .setContactEmail('mohiuddinmostafakamal@gmail.com')
    .setVersion(API_VERSION)
    .setLicense('MIT', 'https://choosealicense.com/licenses/mit/')
    .addTag('GIGS ROUTES')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  // Listen for server request
  await app.listen(PORT);
}
bootstrap();
