import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeType = 'light' | 'dark';

interface State {
  theme: ThemeType;
}

const initialState: State = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
