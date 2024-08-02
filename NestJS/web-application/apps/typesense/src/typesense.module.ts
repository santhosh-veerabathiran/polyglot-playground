import { Module } from '@nestjs/common';
import { TypesenseController } from './typesense.controller';
import { TypesenseService } from './typesense.service';

@Module({
	imports: [],
	controllers: [TypesenseController],
	providers: [TypesenseService],
})
export class TypesenseModule {}
