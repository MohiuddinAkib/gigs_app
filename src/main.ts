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
import * as constants from '@src/constants';

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
  // App desciption
  const APP_DESCRIPTION = CONFIG.get('express.APP_DESCRIPTION');
  // Contact email
  const APP_CONTACT_EMAIL = CONFIG.get('express.APP_CONTACT_EMAIL');
  // Api version
  const API_VERSION = CONFIG.get('express.API_VERSION');
  // Swagger host
  const API_HOST = CONFIG.get('express.API_HOST');

  // Path prefix
  app.setGlobalPrefix(`api/v${parseInt(API_VERSION)}`);
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  // Enable swagger
  const options = new DocumentBuilder()
    .setHost(API_HOST)
    .setBasePath(`/api/v${parseInt(API_VERSION)}`)
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .setContactEmail(APP_CONTACT_EMAIL)
    .setVersion(API_VERSION)
    .setLicense('MIT', 'https://choosealicense.com/licenses/mit/')
    .addTag(constants.GIGS_ROUTES)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  // Listen for server request
  await app.listen(PORT);
}
bootstrap();
