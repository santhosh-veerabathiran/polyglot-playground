import { NestFactory } from '@nestjs/core';
import { FastifyAppModule } from './fastify-app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { logger } from './utils';
import { environment } from './environments/environment';

const appHost = environment.appHost;
const appPort = environment.appPort;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    FastifyAppModule,
    new FastifyAdapter(
      {
        logger: false,
      }
    )
  );
  await app.listen(appPort, appHost);
  logger.log(`Application is running on http://${appHost}:${appPort}`);
}
bootstrap();
