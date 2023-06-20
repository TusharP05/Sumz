import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey= import.meta.env.VITE_RAPID_API_KEY;
  



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://wiki-briefs.p.rapidapi.com/',
    prepareHeaders: (headers) => {
        headers.set( 'X-RapidAPI-Key', 'ba6c14760amsh841867caeca5d1cp1509d3jsn6e9427c5a1b9');
        headers.set( 'X-RapidAPI-Host', 'wiki-briefs.p.rapidapi.com');
        return headers;
    }

     }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params)=> `/search?q=${params.articleText}`
        })
    })

});

export const {useLazyGetSummaryQuery} = articleApi;