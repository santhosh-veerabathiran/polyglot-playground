import { Injectable, Logger } from '@nestjs/common';
import { IGetKey, IResponse, ISetKey } from '@workspace/interfaces';
import { frameResponse, stringifyError } from '@workspace/utilities';
import Redis from 'ioredis';

@Injectable()
export class AppService {
    private readonly logger = new Logger('REDIS_SERVICE');
    private readonly redis: Redis;

    constructor() {
        this.redis = new Redis();
    }

    async setKey(requestId: string, payload: ISetKey): Promise<IResponse<'OK'>> {
        this.logger.log(`[${requestId}] Request received to set value with payload: ${JSON.stringify(payload)}`);
        const { id, value, entity = 'users' } = payload;

        try {
            const reply = await this.redis.set(`${entity}:${id}`, JSON.stringify(value));
            return frameResponse({ status: 'SUCCESS', message: 'Key set successfully', data: reply });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to execute the request with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Failed to set key' });
        }
    }

    async getKey(requestId: string, payload: IGetKey): Promise<IResponse> {
        this.logger.log(`[${requestId}] Request received to get value with payload: ${JSON.stringify(payload)}`);
        const { id, entity = 'users' } = payload;

        try {
            const reply = await this.redis.get(`${entity}:${id}`);
            return frameResponse({ status: 'SUCCESS', message: 'Key get successfully', data: reply ? JSON.parse(reply) : null });
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to execute the request with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Failed to get key' });
        }
    }
}
