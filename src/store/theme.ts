import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  theme: string;
}

const initialState: State = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
