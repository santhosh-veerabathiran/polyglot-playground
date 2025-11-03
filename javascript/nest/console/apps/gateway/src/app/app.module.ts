import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { GatewayClientOptions, getServerOptions } from '@workspace/utilities';

@Module({
    imports: [ClientsModule.register(getServerOptions(GatewayClientOptions.GW_CLIENT))],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
