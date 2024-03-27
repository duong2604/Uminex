import { apiSlice } from "../../app/api/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: `/api/users/reset-password/${token}`,
        method: "POST",
        body: { password },
      }),
    }),
  }),
});

export const { useForgotPasswordMutation, useResetPasswordMutation } =
  userApiSlice;
