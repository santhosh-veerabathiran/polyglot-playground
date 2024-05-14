import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';
import { logger } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  await app.listen(3000, '127.0.0.1');
  logger.log(`Application is running on http://localhost:3000`);
}

bootstrap();
