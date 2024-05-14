import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { logger } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000, '127.0.0.1');
  logger.log(`Application is running on http://localhost:3000`);
}

bootstrap();
