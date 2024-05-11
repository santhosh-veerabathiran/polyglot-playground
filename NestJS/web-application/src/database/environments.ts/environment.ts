import { DataSource, DataSourceOptions } from "typeorm";

export const mysqlConfig: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin123',
    database: 'MyDatabase1',
    synchronize: false
}

export const environment = {
    DatabaseConfig: {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource(mysqlConfig);
            return await dataSource.initialize();
        }
    }
}
