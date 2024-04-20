import { Module } from '@nestjs/common';
import { TypesenseService } from './typesense.service';
import { TypesenseController } from './typesense.controller';

@Module({
  providers: [TypesenseService],
  controllers: [TypesenseController]
})
export class TypesenseModule {}
