import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';

describe('DatabaseController', () => {
  let databaseController: DatabaseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseController],
      providers: [DatabaseService],
    }).compile();

    databaseController = app.get<DatabaseController>(DatabaseController);
  });
});
