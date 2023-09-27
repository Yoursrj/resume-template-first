// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { resumeApi } from '../api/resumeApi';
import { mockResumeData } from '../api/mockData'; 
const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true'; 
export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: useMockData ? () => ({ data: mockResumeData }) : resumeApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resumeApi.middleware),
});

setupListeners(store.dispatch);

export default store;
