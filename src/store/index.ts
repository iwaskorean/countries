import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';
import pageReducer from './page';
import themeReducer from './theme';
import termReducer from './term';

const reducer = {
  filter: filterReducer,
  page: pageReducer,
  theme: themeReducer,
  term: termReducer,
};

export const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;
