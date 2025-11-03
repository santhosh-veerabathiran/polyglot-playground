import { databaseRouteConfigs } from './database';
import { redisRouteConfigs } from './redis';
import { typesenseRouteConfigs } from './typesense';

export * from './database';
export * from './typesense';
export * from './redis';

export const routeConfigs = [databaseRouteConfigs, typesenseRouteConfigs, redisRouteConfigs].flat();
