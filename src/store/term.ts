import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  term: string;
}

const initialState: State = {
  term: '',
};

const termSlice = createSlice({
  name: 'term',
  initialState,
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
  },
});

export default termSlice.reducer;
export const { setTerm } = termSlice.actions;
