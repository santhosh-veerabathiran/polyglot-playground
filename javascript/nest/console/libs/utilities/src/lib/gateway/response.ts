import { IResponse } from '@workspace/interfaces';

export function frameResponse<T>({ status, message, data, errorCodes }: IResponse<T>): IResponse<T> {
    return {
        status: status || 'SUCCESS',
        message: message,
        data,
        errorCodes,
    };
}
