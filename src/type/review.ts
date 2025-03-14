import {  TUserData } from "./user"

export type TReview={
    _id:string;
    userId:TUserData;
    review:string;
    rating:number
}