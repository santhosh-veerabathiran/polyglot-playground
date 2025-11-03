import { GW_CHANNEL_OPTION } from '@workspace/interfaces';

export const environment = {
    channel: <GW_CHANNEL_OPTION>process.env.GW_CHANNEL_OPTION?.toLowerCase() || 'redis',
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
    },
    rabbitmq: {
        urls: process.env.RABBITMQ_URLS?.split(','),
        queue: process.env.RABBITMQ_QUEUE,
    },
};
