import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { TypesenseModule } from './typesense/typesense.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UserModule,
    TypesenseModule,
    TypeormModule,
    DatabaseModule
  ],
})
export class AppModule { }
