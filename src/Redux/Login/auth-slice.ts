import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from './login.types';

const initialState: AuthType = {
  email: '',
  mobileNumber: '',
  isLoggedIn: false,
  token: '',
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<AuthType>) => {
      state.email = action.payload.email;
      state.mobileNumber = action.payload.mobileNumber;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = '';
      state.mobileNumber = '';
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const { setLoginData, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
