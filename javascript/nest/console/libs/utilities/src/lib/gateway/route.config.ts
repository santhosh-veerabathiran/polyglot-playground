import { IRouteConfig } from '@workspace/interfaces';
import { routeConfigs } from '@workspace/constants';

export function validateRouteConfig(config: IRouteConfig) {
    const { header, paths } = config;

    if (!header) {
        throw new Error('Header is required');
    }

    if (!paths || !paths.length) {
        throw new Error('Paths are required');
    }

    paths.forEach((path) => {
        if (!path.pattern) {
            throw new Error('Pattern is required');
        }

        if (!path.key) {
            throw new Error('Key is required');
        }
    });

    return config;
}

export function getGatewayRouteConfigs() {
    return routeConfigs.reduce((a, b) => a.set(b.header, validateRouteConfig(b)), new Map<string, IRouteConfig>());
}
