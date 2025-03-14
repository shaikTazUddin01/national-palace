import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fitness-equipment-server-silk.vercel.app/api",
  // "http://localhost:3000/api"
  mode: 'cors',
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Products", "category","orders","user","review"],
  endpoints: () => ({}),
});