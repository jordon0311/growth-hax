import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** Open API documentation */
  const config = new DocumentBuilder()
    .setTitle('devpages-api')
    .setDescription('The main API for dev pages')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /** End Open API documentation  */

  app.enableCors({
    allowedHeaders: [
      'Authorization',
      'Content-Length',
      'Content-Type',
      'Origin',
    ],
    optionsSuccessStatus: 200,
    origin: '*',
  });

  await app.listen(3000);
}
bootstrap();
