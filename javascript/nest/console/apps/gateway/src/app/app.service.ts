import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IGatewayRequest, IParentResponses, IRouteConfig, IRoutePath } from '@workspace/interfaces';
import { frameResponse, GatewayClientOptions, getGatewayRouteConfigs, stringifyError } from '@workspace/utilities';
import { catchError, firstValueFrom, of } from 'rxjs';

@Injectable()
export class AppService {
    private readonly logger = new Logger('GATEWAY_SERVICE');
    private readonly configs = getGatewayRouteConfigs();

    constructor(@Inject(GatewayClientOptions.GW_CLIENT) private readonly client: ClientProxy) {}

    async handleRequest<T>(request: IGatewayRequest<T>) {
        const { requestId, headers, payload } = request;

        try {
            const { authorization, ...gatewayHeaders } = headers;
            this.logger.log(`[${requestId}] Request received for headers: ${JSON.stringify(gatewayHeaders)}, payload: ${JSON.stringify(payload)}`);

            const config = this.configs.get(gatewayHeaders.gatewayHeader);

            if (!config) {
                this.logger.error(`[${requestId}] Invalid gateway header: ${gatewayHeaders.gatewayHeader}`);
                return frameResponse({ status: 'ERROR', message: 'Invalid gateway header' });
            }

            return frameResponse({ status: 'SUCCESS', data: await this.executePaths(requestId, config, request) });
        } catch (error) {
            this.logger.error(`[${requestId}] Internal server error: ${stringifyError(error)}`);
            return frameResponse({ status: 'ERROR', message: 'Internal server error' });
        }
    }

    private async executePaths<T>(requestId: string, config: IRouteConfig, request: IGatewayRequest<T>) {
        this.logger.log(`[${requestId}] Total Executable Paths: ${config.paths.length}, [ ${config.paths.map((p) => p.pattern).join(', ')} ]`);
        const [path] = config.paths;
        const responses: IParentResponses = {
            [path.key]: await firstValueFrom(this.sendToClient(path, request), {
                defaultValue: undefined,
            }),
        };
        return responses;
    }

    private sendToClient<T>(path: IRoutePath, request: IGatewayRequest<T>) {
        if (path.sync) {
            return this.client.send(path.pattern, request).pipe(catchError((e) => of(frameResponse({ status: 'ERROR', message: e.message }))));
        }
        return this.client.emit(path.pattern, request).pipe(catchError((e) => of(frameResponse({ status: 'ERROR', message: e.message }))));
    }
}
