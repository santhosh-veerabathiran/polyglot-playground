import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { logger } from './utils';
import { environment } from './environments/environment';

const appHost = environment.appHost;
const appPort = environment.appPort;

async function bootstrap() {
	const app = await NestFactory.create(UsersModule);
	await app.listen(appPort, appHost);
	logger.log(`Application is running on http://${appHost}:${appPort}`);
}

bootstrap();
