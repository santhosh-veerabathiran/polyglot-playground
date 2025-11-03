import { GW_CHANNEL_OPTION } from '@workspace/interfaces';

export const environment = {
    production: process.env.NODE_ENV?.toLowerCase() === 'production',
    channel: <GW_CHANNEL_OPTION>process.env.GW_CHANNEL_OPTION?.toLowerCase() || 'redis',
    redis: {
        redisType: process.env.REDIS_TYPE?.toLowerCase() || 'redis',
        redis: {
            host: process.env.REDIS_HOST || 'localhost',
            port: parseInt(process.env.REDIS_PORT || '6379'),
            user: process.env.REDIS_USER,
            password: process.env.REDIS_PASSWORD,
        },
        cluster: {
            host: process.env.REDIS_CLUSTER_HOST || 'localhost',
            port: parseInt(process.env.REDIS_CLUSTER_PORT || '6379'),
            user: process.env.REDIS_CLUSTER_USER,
            password: process.env.REDIS_CLUSTER_PASSWORD,
        },
    },
};
