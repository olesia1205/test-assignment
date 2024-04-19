import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  filter: 'all' | 'liked';
}

const initialState: FilterState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'liked'>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
