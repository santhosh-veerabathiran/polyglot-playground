import { DataSource, DataSourceOptions, EntityTarget, ObjectLiteral } from 'typeorm';
import { convertStringCase } from '@workspace/utilities';
import { IDatabaseConfig } from '@workspace/interfaces';

export class DatabaseRepository {
    static getName<Entity extends ObjectLiteral>(entity: EntityTarget<Entity>, sourceName?: string) {
        return [convertStringCase(entity['name'], 'snake').toUpperCase(), sourceName].filter((v) => !!v).join('_');
    }

    static generateDataSources = (options: IDatabaseConfig[]) => {
        return options.map((v) => {
            return {
                provide: v.name || 'DATA_SOURCE',
                useFactory: () => new DataSource(v.config).initialize(),
            };
        });
    };

    static getProviders(options: IDatabaseConfig[]) {
        return options.flatMap((v) => {
            const entities = v.config.entities as Array<EntityTarget<ObjectLiteral>>;

            return entities.map((entity) => {
                return {
                    provide: DatabaseRepository.getName(entity, v.name),
                    useFactory: (dataSource: DataSource) => dataSource.getRepository(entity),
                    inject: [v.name || 'DATA_SOURCE'],
                };
            });
        });
    }
}
