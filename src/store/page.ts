import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  pageNumber: number;
}

const initialState: State = {
  pageNumber: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
  },
});

export default pageSlice.reducer;
export const { setPageNumber } = pageSlice.actions;
