import { Body, Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { IGatewayRequest, IGetKey, ISetKey } from '@workspace/interfaces';
import { frameResponse, stringifyError } from '@workspace/utilities';
import { RedisPattern } from '@workspace/constants';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    private readonly logger = new Logger('REDIS_CONTROLLER');
    constructor(private readonly as: AppService) {}

    @MessagePattern(RedisPattern.SetKey)
    async setKey(@Body() body: IGatewayRequest<ISetKey>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] Request received to set value with payload: ${JSON.stringify(payload)}`);
            return await this.as.setKey(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to execute the request with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Failed to set key' });
        }
    }

    @MessagePattern(RedisPattern.GetKey)
    async getKey(@Body() body: IGatewayRequest<IGetKey>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] Request received to get value with payload: ${JSON.stringify(payload)}`);
            return await this.as.getKey(requestId, payload);
        } catch (error) {
            this.logger.error(`[${requestId}] Failed to execute the request with error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Failed to get key' });
        }
    }
}
