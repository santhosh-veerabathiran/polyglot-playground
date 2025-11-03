import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from './environment';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { logger } from './app/utils';

const { protocol, host, port } = environment;

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: false }));
    await app.listen(port, host);
    logger.log(`🚀 Application is running on: ${protocol}://${host}:${port}`);
}
bootstrap();
