import { baseApi } from "@/redux/api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/user/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "auth/user-login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    findUser: builder.query({
      query: (email) => ({
        url: "/user/user-info",
        method: "GET",
        params: { email },
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: { userData },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useUpdateUserMutation,
} = user;
