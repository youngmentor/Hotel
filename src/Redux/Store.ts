import { configureStore } from '@reduxjs/toolkit';
import featuresReducer from './Features';

const store = configureStore({
  reducer: {
    eBooking: featuresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
