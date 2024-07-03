import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';
import { Users } from './entities/Users';
import { mysqlConfig } from './environments/environment';

const databaseConfig = mysqlConfig;
@Module({
	imports: [
		TypeOrmModule.forRoot(databaseConfig),
		TypeOrmModule.forFeature([Users]),
	],
	controllers: [TypeormController],
	providers: [TypeormService],
})
export class TypeormModule {}
