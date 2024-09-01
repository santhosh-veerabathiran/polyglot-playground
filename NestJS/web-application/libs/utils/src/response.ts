export type RESPONSE_STATUS = 'SUCCESS' | 'ERROR';

export function frameResponse<T>(
    status: RESPONSE_STATUS,
    message: string,
    data?: T
) {
    return {
        status,
        message,
        data
    };
}
