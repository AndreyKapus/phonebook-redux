import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6369042115219b84960d01a5.mockapi.io/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `contacts/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = contactsApi