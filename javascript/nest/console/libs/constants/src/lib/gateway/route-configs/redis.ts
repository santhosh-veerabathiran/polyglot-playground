import { IRouteConfig } from '@workspace/interfaces';

export enum RedisPattern {
    SetKey = 'SET_KEY',
    GetKey = 'GET_KEY',
}

export const redisRouteConfigs: IRouteConfig[] = [
    {
        header: 'REDIS_SET_KEY',
        paths: [
            {
                pattern: RedisPattern.SetKey,
                key: 'key',
                sync: true,
            },
        ],
    },
    {
        header: 'REDIS_GET_KEY',
        paths: [
            {
                pattern: RedisPattern.GetKey,
                key: 'key',
                sync: true,
            },
        ],
    },
];
