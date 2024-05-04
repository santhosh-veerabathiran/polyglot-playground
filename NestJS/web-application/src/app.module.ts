import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { TypesenseModule } from './typesense/typesense.module';

@Module({
  imports: [
    // UserModule,
    // TypesenseModule,
    TypeormModule
  ],
})
export class AppModule { }