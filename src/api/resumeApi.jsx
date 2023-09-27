import { createApi } from '@reduxjs/toolkit/query/react';
import { mockResumeData } from './mockData';

const getResumeData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockResumeData;
};

export const resumeApi = createApi({
  baseQuery: () => getResumeData(),
  endpoints: (builder) => ({
    getResume: builder.query({
      query: () => 'resume',
    }),
  }),
});

export const { useGetResumeQuery } = resumeApi;





