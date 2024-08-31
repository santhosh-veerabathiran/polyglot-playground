import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';
import { logger } from './utils';
import { environment } from './environments/environment';

const redisHost = environment.redisHost;
const redisPort = environment.redisPort;

async function bootstrap() {
	const app = await NestFactory.create(DatabaseModule);
	await app.listen(redisPort, redisHost);
	logger.log(`Application is running on http://${redisHost}:${redisPort}`);
}

bootstrap();
