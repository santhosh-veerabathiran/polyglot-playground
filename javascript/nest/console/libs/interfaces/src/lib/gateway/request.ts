import { IParentResponses } from './route.config';

export interface IHeaders {
    host: string;
    'content-type'?: string;
    accept?: string;
    'gateway-header'?: string;
    authorization?: string;
}

export interface IGatewayHeaders {
    contentType: string;
    accept: string;
    gatewayHeader?: string;
    authorization?: string;
}

export interface IGatewayRequest<T = any, S = IParentResponses> {
    requestId: string;
    headers: IGatewayHeaders;
    payload: T;
    parentResponses?: S;
}
