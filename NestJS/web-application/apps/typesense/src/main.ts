import { NestFactory } from '@nestjs/core';
import { TypesenseModule } from './typesense.module';
import { logger } from './utils';
import { environment } from './environments/environment';

const appHost = environment.appHost;
const appPort = environment.appPort;

async function bootstrap() {
	const app = await NestFactory.create(TypesenseModule);
	await app.listen(appPort, appHost);
	logger.log(`Application is running on http://${appHost}:${appPort}`);
}

bootstrap();
