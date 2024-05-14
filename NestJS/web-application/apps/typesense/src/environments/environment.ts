import { ConfigurationOptions } from "typesense/lib/Typesense/Configuration";

export const typesenseConfig: ConfigurationOptions = {
    nodes: [
        {
            host: 'localhost',
            port: 8108,
            protocol: 'http'
        }
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 10
}
