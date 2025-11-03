import { IGatewayHeaders, IHeaders } from '@workspace/interfaces';

export function frameHeaders(headers: IHeaders): IGatewayHeaders {
    return {
        contentType: headers['Content-Type'] || 'application/json',
        accept: headers.accept || '*/*',
        gatewayHeader: headers['gateway-header'],
        authorization: headers.authorization,
    };
}
