import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './region';
import pageReducer from './page';
import themeReducer from './theme';
import termReducer from './term';

const reducer = {
  region: regionReducer,
  page: pageReducer,
  theme: themeReducer,
  term: termReducer,
};

export const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;

export { setRegion } from './region';
export { setPageNumber } from './page';
export { setTerm } from './term';
export { setTheme } from './theme';
