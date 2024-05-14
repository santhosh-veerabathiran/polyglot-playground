import { DataSource, DataSourceOptions } from "typeorm";

export function database() {
    let connection: DataSource = null;

    async function createConnection(connectionOptions: DataSourceOptions) {
        connection = await new DataSource(connectionOptions).initialize();
    }

    function getConnection() {
        if (!connection) throw new Error(`database connection isn't initiated`);
        return connection;
    }

    function closeConnection() {
        if (!connection) throw new Error(`database connection isn't initiated`);
        return connection.destroy();
    }

    return {
        createConnection,
        getConnection,
        closeConnection,
    }
}
