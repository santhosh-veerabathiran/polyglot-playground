import { Test, TestingModule } from '@nestjs/testing';
import { TypesenseController } from './typesense.controller';

describe('TypesenseController', () => {
  let controller: TypesenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesenseController],
    }).compile();

    controller = module.get<TypesenseController>(TypesenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
