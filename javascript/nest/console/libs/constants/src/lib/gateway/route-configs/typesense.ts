import { IRouteConfig } from '@workspace/interfaces';

export enum TypesensePattern {
    MoviesSearch = 'SEARCH_MOVIES',
}

export const typesenseRouteConfigs: IRouteConfig[] = [
    {
        header: 'TYPESENSE_SEARCH_MOVIES',
        paths: [
            {
                pattern: TypesensePattern.MoviesSearch,
                key: 'movies',
                sync: true,
            },
        ],
    },
];
