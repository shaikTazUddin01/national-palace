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

export type TAdmin = {
  exp: number;
  iat: number;
  role: string;
  user: string;
};

export type TAdminInitialState = {
  user: null | TAdmin;
  token: null | string;
};
export type TUser = {
  exp: number;
  iat: number;
  id:string;
  role: string;
  user: string;
};

export type TUserInitialState = {
  user: null | TUser;
  token: null | string;
};

export type TAdminData = {
  _id: string;
  key?: string;
  name: string;
  email: string;
  phoneNumber: string;
  role?: "Admin" | "SubAdmin";
  password: string;
  age: number;
  address: string;
  status: string;
  isDeleted: boolean;
  gender: "Male" | "Female" | "Other";
};

export type TUserData = {
  
  _id:string;
  customerId:Record<string,any>
  address: string;
  age: number;
  email: string;
  gender: "Male" | "Female" | "Other";
  name: string;
image?:string;
  phoneNumber: string;
  role?: "user";
  isDeleted: boolean;
};
