const Typesense = require('typesense');

const client = new Typesense.Client({
    nodes: [
        {
        host: 'localhost',
        port: 8108,
        protocol: 'http'
        }
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2
});

async function search() {
    const searchParameters = {
        q: 'flower',
        // q: '*',
        // q: 'flower -secret', // Negative query

        query_by: 'title',
        // query_by: 'title,authors',
        // query_by: '*',

        // prefix: false,
        // infix: 'fallback',

        // pre_segmented_query: true,
        // preset: 'first_preset',
        // vector_query: '',
        // voice_query: '',

        // filter_by: 'publication_year: >2000',
        // enable_lazy_filter: true,

        // query_by_weights: '2,1',
        // text_match_type: 'max_weight',
        // sort_by: 'average_rating:desc',
        // prioritize_exact_match: false,
        // prioritize_token_position: true,
        // prioritize_num_matching_fields: false,
        // pinned_hits: '155:1,255:3',
        // hidden_hits: '123',
        // enable_overrides: false,
        // override_tags: '',
        // max_candidates: 100,

        // page: 2,
        // per_page: 5,
        // offset: 2,
        // limit: 5,

        // facet_by: 'authors',
        // max_facet_values: 12,
        // facet_query: 'authors: S',
        // facet_query_num_typos: 3,
        // facet_return_parent: '',
        // facet_simple_percent: 80,
        // facet_simple_threshold: 1,

        // group_by: '',
        // group_limit: 2,
        // group_missing_values: false,

        // include_fields: '',
        // exclude_fields: 'publication_year,ratings_count',
        // highlight_fields: '',
        // highlight_full_fields: '',
        // highlight_affix_num_tokens: 2,
        // highlight_start_tag: '<span class="s1">',
        // highlight_end_tag: '</span>',
        // enable_highlight_v1: false,
        // snippet_threshold: 50,
        // limt_hits: 5,
        // search_cutoff_ms: '',
        // exhaustive_search: true,

        // num_typos: 3,
        // min_len_1typo: 3,
        // min_len_2typo: 6,
        // split_join_tokens: 'off',
        // typo_tokens_threshold: 2,
        // drop_tokens_threshold: 2,
        // drop_tokens_mode: 'left_to_right',
        // enable_typos_for_numerical_tokens: false,

        // use_cache: true,
        // cache_ttl: 80,
    }

    try {
        console.dir(await client.collections('books').documents().search(searchParameters),{
            depth: null
        });
    }
    catch (e) {
        console.log(e.message)
    }
}

search();