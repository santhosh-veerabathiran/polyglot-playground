import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environment';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, ...environment.dataSources, ...environment.entityProviders],
})
export class AppModule {}
