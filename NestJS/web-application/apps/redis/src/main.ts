import { NestFactory } from '@nestjs/core';
import { RedisModule } from './redis.module';
import { environment } from './environments/environment';

const { appHost, appPort } = environment;
async function bootstrap() {
	const app = await NestFactory.create(RedisModule);
	await app.listen(appPort, appHost);
	console.log(`Application is running on http://${appHost}:${appPort}`);
}
bootstrap();
