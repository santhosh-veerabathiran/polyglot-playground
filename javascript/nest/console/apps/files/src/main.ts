import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from './environment';
import { json } from 'body-parser';
import { logger } from './app/utils';

const { protocol, host, port } = environment;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
    });

    app.use(json({ limit: '50kb' }));
    app.getHttpAdapter().getInstance().disable('x-powered-by');

    await app.listen(port);
    logger.log(`🚀 Application is running on: ${protocol}://${host}:${port}`);
}

bootstrap();
