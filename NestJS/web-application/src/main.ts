import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger: Logger = new Logger('APP');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '127.0.0.1');
  logger.log(`Application is running on http://localhost:3000`);
}

bootstrap();
