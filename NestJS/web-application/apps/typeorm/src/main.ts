import { NestFactory } from '@nestjs/core';
import { TypeormModule } from './typeorm.module';
import { logger } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(TypeormModule);
  await app.listen(3000, '127.0.0.1');
  logger.log(`Application is running on http://localhost:3000`);
}

bootstrap();
