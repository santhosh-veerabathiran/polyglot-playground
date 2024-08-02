import { Module } from '@nestjs/common';
import { FastifyAppController } from './fastify-app.controller';
import { FastifyAppService } from './fastify-app.service';

@Module({
	imports: [],
	controllers: [FastifyAppController],
	providers: [FastifyAppService],
})
export class FastifyAppModule {}
