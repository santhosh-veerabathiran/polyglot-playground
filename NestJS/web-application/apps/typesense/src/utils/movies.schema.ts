import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

export const moviesSchema: CollectionCreateSchema = {
    name: 'movies',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'overview',
            type: 'string',
        },
        {
            name: 'genres',
            type: 'string[]',
        },
        {
            name: 'poster',
            type: 'string',
        },
        {
            name: 'release_date',
            type: 'int64',
        },
    ],
    default_sorting_field: 'release_date',
    symbols_to_index: [],
    enable_nested_fields: true,
    token_separators: [],
}
