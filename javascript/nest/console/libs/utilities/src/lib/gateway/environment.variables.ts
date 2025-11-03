import { Logger } from '@nestjs/common';
import { IEnvironmentVariableOptions } from '@workspace/interfaces';

const logger = new Logger('ENVIRONMENT_VARIABLES');

export function checkEnvironmentVariables(options: IEnvironmentVariableOptions) {
    const { required = [], optional = [] } = options;

    const requiredParams = required.filter((v) => !process.env[v]);
    const optionalParams = optional.filter((v) => !process.env[v]);

    if (requiredParams.length) {
        logger.error(`Required environment variables are not set: [${requiredParams.join(', ')}]`);
        process.exit(1);
    }

    if (optionalParams.length) {
        logger.warn(`Optional environment variables are not set: [${optionalParams.join(', ')}]`);
    }
}
