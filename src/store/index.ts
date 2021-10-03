import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';
import pageReducer from './page';
import themeReducer from './theme';

const reducer = {
  filter: filterReducer,
  page: pageReducer,
  theme: themeReducer,
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
