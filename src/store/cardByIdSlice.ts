import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICardById } from '../types/types';
import { baseUrl } from '../utils/constants';

type TInitialState = {
  data: ICardById | null;
  status: null | string;
  error: undefined | string | null;
};

const initialState: TInitialState = {
  data: null,
  status: null,
  error: null,
};

export const fetchCardById = createAsyncThunk<
  ICardById,
  string | undefined,
  { rejectValue: string }
>('card/fetchCardById', async function (id, { rejectWithValue }) {
  const response = await fetch(`${baseUrl}images/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    return rejectWithValue('Server Error!');
  }
  const data = await response.json();

  return data;
});

const cardSliceById = createSlice({
  name: 'card',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCardById.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchCardById.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
  reducers: {},
});

export default cardSliceById.reducer;
