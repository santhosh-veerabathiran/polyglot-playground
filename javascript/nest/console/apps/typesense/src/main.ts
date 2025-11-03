import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { logger } from './app/utils';
import { getClientOptions } from '@workspace/utilities';
import { environment } from './environment';

const { channel, redis } = environment;

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, getClientOptions());
    app.listen();
    logger.log(`🚀 Application is started in: ${channel}://${redis.redis.host}:${redis.redis.port}`);
}

bootstrap();
