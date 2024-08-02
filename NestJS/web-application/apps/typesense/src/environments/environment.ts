import { ConfigurationOptions } from 'typesense/lib/Typesense/Configuration';
import * as env from 'dotenv';

env.config();

export const typesenseConfig: ConfigurationOptions = {
	nodes: [
		{
			host: process.env.TYPESENSE_HOST,
			port: parseInt(process.env.TYPESENSE_PORT),
			protocol: process.env.TYPESENSE_PROTOCOL,
		},
	],
	apiKey: process.env.TYPESENSE_API_KEY,
	connectionTimeoutSeconds: parseInt(process.env.TYPESENSE_TIMEOUT_SECONDS),
} as const;

import { DataSource, DataSourceOptions } from 'typeorm';

export const mysqlConfig: DataSourceOptions = {
	type: 'mysql',
	host: process.env.MYSQL_HOST,
	port: parseInt(process.env.MYSQL_PORT),
	username: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB_NAME,
	synchronize: false,
} as const;

export const postgreConfig: DataSourceOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB_NAME,
	synchronize: false,
} as const;

export const environment = {
	mysqlDatabaseConfig: {
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource(mysqlConfig);
			return await dataSource.initialize();
		},
	},
	postgreDatabaseConfig: {
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource(postgreConfig);
			return await dataSource.initialize();
		},
	},
	appHost: process.env.APP_HOST,
	appPort: parseInt(process.env.APP_PORT),
} as const;
