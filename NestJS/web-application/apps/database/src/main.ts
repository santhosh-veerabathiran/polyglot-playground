import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';
import { logger } from './utils';
import { environment } from './environments/environment';

const appHost = environment.appHost;
const appPort = environment.appPort;

async function bootstrap() {
	const app = await NestFactory.create(DatabaseModule);
	await app.listen(3000, appHost);
	logger.log(`Application is running on http://${appHost}:${appPort}`);
}

bootstrap();
