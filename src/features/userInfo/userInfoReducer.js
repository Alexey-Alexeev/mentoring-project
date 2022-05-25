import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import $api from "../../http";

const initialState = {
  name: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
