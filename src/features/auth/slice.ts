import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  token: string;
};

export const initialState = {
  token: '',
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const auth = authSlice.reducer;
