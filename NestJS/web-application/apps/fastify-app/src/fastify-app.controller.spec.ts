import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAppController } from './fastify-app.controller';
import { FastifyAppService } from './fastify-app.service';

describe('FastifyAppController', () => {
	let fastifyAppController: FastifyAppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [FastifyAppController],
			providers: [FastifyAppService],
		}).compile();

		fastifyAppController = app.get<FastifyAppController>(FastifyAppController);
	});
});
