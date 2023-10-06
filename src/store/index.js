import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import globalReducer from './reducers/globalReducer';
import authService from './services/authService';

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
