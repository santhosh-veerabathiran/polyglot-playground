import { Test, TestingModule } from '@nestjs/testing';
import { TypesenseController } from './typesense.controller';
import { TypesenseService } from './typesense.service';

describe('TypesenseController', () => {
	let typesenseController: TypesenseController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [TypesenseController],
			providers: [TypesenseService],
		}).compile();

		typesenseController = app.get<TypesenseController>(TypesenseController);
	});
});
