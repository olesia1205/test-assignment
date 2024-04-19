import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICard } from '../types/types';

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1' }),
  endpoints: (builder) => ({
    getCards: builder.query<ICard[], number>({
      query: () => ({
        url: `/images/search?limit=10`,
      }),
    }),
    getCard: builder.query({
      query: (id) => ({ url: `/images/${id}` }),
    }),
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  refetchOnFocus: true,
});

export const { useGetCardsQuery, useGetCardQuery } = cardsAPI;
