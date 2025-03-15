import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ErrorResponse {
  message: string;
}

export const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError => {
  return error && "data" in error;
};

export const isErrorResponse = (data: any): data is ErrorResponse => {
  return data && "message" in data;
};

export interface CustomJwtPayload {
  user: string;
  role: string;
  [key: string]: any;
}

export type TUser = {
  exp: number;
  iat: number;
  id: string;
  role: string;
  user: string;
};

export type TUserInitialState = {
  user: null | TUser;
  token: null | string;
};

export type TUserData = {
  _id: string;
  customerId: Record<string, any>;
  address: string;
  age: number;
  email: string;
  gender: "Male" | "Female" | "Other";
  name: string;
  image?: string;
  phoneNumber: string;
  role?: "user";
  isDeleted: boolean;
};
