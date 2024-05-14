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
            name: 'popularity',
            type: 'float',
        },
        {
            name: 'release_date',
            type: 'string',
        },
        {
            name: 'poster_path',
            type: 'string',
        },
        {
            name: 'genres',
            type: 'string[]',
        }
    ],
    default_sorting_field: 'popularity',
    symbols_to_index: [],
    enable_nested_fields: true,
    token_separators: [],
}
