import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
	private logger: Logger = new Logger('REDIS_CONTROLLER');
	constructor(private readonly redisService: RedisService) {}

	@Post()
	setKey(@Body() data: { id: string; value: any }) {
		this.logger.log(
			`Request received to set value with payload: ${JSON.stringify(data, null, 2)}`
		);
		return this.redisService.setKey(data.id, data.value);
	}

	@Get(':id')
	getKey(@Param('id') id: string) {
		this.logger.log(`Request received to get value for id: ${id}`);
		return this.redisService.getKey(id);
	}
}
