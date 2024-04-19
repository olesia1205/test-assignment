import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICard } from '../types/types';
import { baseUrl } from '../utils/constants';

type TInitialState = {
  data: ICard[];
  status: null | string;
  error: undefined | string | null;
};

const initialState: TInitialState = {
  data: [],
  status: null,
  error: null,
};

export const fetchCards = createAsyncThunk<ICard[], undefined, { rejectValue: string }>(
  'cards/fetchCards',
  async function (_, { rejectWithValue }) {
    const response = await fetch(`${baseUrl}images/search?limit=10`, {
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
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
  reducers: {
    toggleLike: (state, action) => {
      const likedCard = state.data.find((item) => item.id === action.payload.id);
      if (likedCard) {
        likedCard.liked = !likedCard.liked;
      }
    },
    removeCard: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { toggleLike, removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
