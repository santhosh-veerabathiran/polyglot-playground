import { Body, Controller, Logger } from '@nestjs/common';
import { frameResponse, stringifyError } from '@workspace/utilities';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TypesensePattern } from '@workspace/constants';
import { IGatewayRequest } from '@workspace/interfaces';

@Controller()
export class AppController {
    private readonly logger = new Logger('TYPESENSE_CONTROLLER');

    constructor(private readonly as: AppService) {}

    @MessagePattern(TypesensePattern.MoviesSearch)
    async searchMovies(@Body() body: IGatewayRequest<{ query: string }>) {
        const { requestId, payload } = body;
        try {
            this.logger.log(`[${requestId}] [${TypesensePattern.MoviesSearch}] Request received with payload: ${JSON.stringify(payload)}`);
            return await this.as.searchMovies(payload);
        } catch (error) {
            this.logger.error(`[${requestId}] [${TypesensePattern.MoviesSearch}] Internal server error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Internal server error' });
        }
    }
}
