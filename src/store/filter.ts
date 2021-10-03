import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  region: string;
}

const initialState: State = {
  region: 'Filter by Region',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
