import { AppState } from 'store/redux';

export const token = (state: AppState) => state.auth.token;

export default {
  token,
};
