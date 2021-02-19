import { combineReducers } from '@reduxjs/toolkit';

import { auth } from 'features/auth';

export const reducer = combineReducers({
  auth,
});

export type AppState = ReturnType<typeof reducer>;
