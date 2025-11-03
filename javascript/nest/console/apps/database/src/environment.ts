import { DatabaseRepository } from '@workspace/constants';
import { GW_CHANNEL_OPTION, IDatabaseConfig } from '@workspace/interfaces';
import { DataSourceOptions } from 'typeorm';
import { entities } from './app/entities';

export const mysqlConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DB_NAME || 'root',
    synchronize: false,
} as const;

export const postgresConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USERNAME || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'postgres',
    entities: [...entities],
    synchronize: true,
} as const;

export const databaseConfigs: IDatabaseConfig[] = [
    {
        config: postgresConfig,
    },
];

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
    dataSources: DatabaseRepository.generateDataSources(databaseConfigs),
    entityProviders: DatabaseRepository.getProviders(databaseConfigs),
};
