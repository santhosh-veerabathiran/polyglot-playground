import { DataSourceOptions } from 'typeorm';

export interface IDatabaseConfig {
    config: DataSourceOptions;
    name?: string;
}
