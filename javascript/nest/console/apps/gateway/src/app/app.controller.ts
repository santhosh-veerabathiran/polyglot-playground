import { Body, Controller, Get, Headers, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { generateID } from '@jetit/id';
import { frameHeaders, frameResponse, stringifyError } from '@workspace/utilities';
import { IHeaders } from '@workspace/interfaces';

@Controller()
export class AppController {
    private readonly logger = new Logger('GATEWAY_CONTROLLER');

    constructor(private readonly as: AppService) {}

    @Get('/health')
    health() {
        return HttpStatus.OK;
    }

    @Post()
    async handleRequest<T>(@Res() response: Response, @Headers() headers?: IHeaders, @Body() payload?: T, requestId = generateID('HEX')) {
        try {
            const gatewayHeaders = frameHeaders(headers);
            const { authorization, ...gwHeaders } = gatewayHeaders;

            this.logger.log(`[${requestId}] Request received for headers: ${JSON.stringify(gwHeaders)}, payload: ${JSON.stringify(payload)}`);

            const { contentType, gatewayHeader } = gwHeaders;

            if (!contentType.includes('application/json')) {
                response.status(HttpStatus.BAD_REQUEST);
                return response.json(frameResponse({ status: 'ERROR', message: 'Request body should be in JSON format' }));
            }

            if (!gatewayHeader) {
                response.status(HttpStatus.BAD_REQUEST);
                return response.json(frameResponse({ status: 'ERROR', message: 'Gateway header is missing' }));
            }

            response.setHeader('Request-Id', requestId);
            response.status(HttpStatus.OK);
            return response.json(await this.as.handleRequest({ requestId, headers: gatewayHeaders, payload }));
        } catch (error) {
            this.logger.error(`[${requestId}] Internal server error: ${stringifyError(error)}`);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR);
            return response.json(frameResponse({ status: 'ERROR', message: 'Internal server error' }));
        }
    }
}
