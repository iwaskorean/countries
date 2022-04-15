import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REGIONS } from '../constants/regions';

interface State {
  region: typeof REGIONS[keyof typeof REGIONS];
}

const initialState: State = {
  region: 'Filter by Region',
};

const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
  },
});

export default regionSlice.reducer;
export const { setRegion } = regionSlice.actions;
