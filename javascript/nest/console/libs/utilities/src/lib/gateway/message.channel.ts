import { Logger } from '@nestjs/common';
import { checkEnvironmentVariables } from './environment.variables';
import { ClientOptions, ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { environment } from '../../environment';

const logger = new Logger('GW_MESSAGE_CHANNEL');

export function getClientOptions(): ClientOptions {
    const channel = environment.channel;

    if (channel === 'redis') {
        checkEnvironmentVariables({
            required: ['REDIS_HOST', 'REDIS_PORT'],
        });

        return {
            transport: Transport.REDIS,
            options: environment.redis,
        };
    }

    if (channel === 'rabbitmq') {
        checkEnvironmentVariables({
            required: ['RABBITMQ_URLS', 'RABBITMQ_QUEUE'],
        });

        return {
            transport: Transport.RMQ,
            options: {
                ...environment.rabbitmq,
                noAck: false,
                queueOptions: {
                    durable: false,
                },
            },
        };
    }

    throw new Error('Invalid channel option');
}

export function getServerOptions(name: GatewayClientOptions = GatewayClientOptions.GW_CLIENT): ClientsModuleOptions {
    return [
        {
            name,
            ...getClientOptions(),
        },
    ];
}

export enum GatewayClientOptions {
    GW_CLIENT = 'GW_CLIENT',
}
