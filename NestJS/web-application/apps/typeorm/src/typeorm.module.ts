import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';
import { User } from './entities/User';
import { mysqlConfig } from './environments/environment';

const databaseConfig = mysqlConfig;
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [TypeormController],
  providers: [TypeormService]
})
export class TypeormModule { }
