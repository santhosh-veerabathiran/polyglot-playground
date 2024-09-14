import { Injectable, Logger } from '@nestjs/common';
import { createClient } from 'redis';
import { environment } from './environments/environment';

@Injectable()
export class RedisService {
	private redisClient;
	private logger: Logger = new Logger('REDIS_SERVICE');
	constructor() {
		this.redisClient = createClient({
			url: `redis://${environment.redisHost}:${environment.redisPort}`,
		});
		this.redisClient.on('error', err => {
			console.error('Redis Client Error', err);
		});
		this.redisClient.connect().catch(err => {
			console.error('Error connecting to Redis', err);
		});
	}

	async setKey<T>(
		id: string,
		value: T,
		entity: string = 'users'
	): Promise<void> {
		try {
			this.redisClient.set(
				`${entity}:${id}`,
				JSON.stringify(value),
				(err, reply) => {
					if (err) throw err;
					this.logger.log(reply);
				}
			);
		} catch (e) {
			this.logger.error(`Failed to execute the request with error: ${e}`);
		}
	}

	async getKey<T>(id: string, entity: string = 'users'): Promise<T> {
		try {
			return this.redisClient.get(`${entity}:${id}`, (err, reply) => {
				if (err) throw err;
				return reply ? (JSON.parse(reply) as T) : null;
			});
		} catch (e) {
			this.logger.error(`Failed to execute the request with error: ${e}`);
		}
	}
}
