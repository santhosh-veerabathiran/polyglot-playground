export type RESPONSE_STATUS = 'SUCCESS' | 'ERROR';

export interface IResponse<T = unknown> {
    status: RESPONSE_STATUS;
    message?: string;
    data?: T;
    errorCodes?: string[];
}
