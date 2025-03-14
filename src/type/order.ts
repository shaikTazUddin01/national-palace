import { TProduct, TUser } from ".";

export type TOrder = {
    _id?:string;
    key?: string;
    no: string;
    customerName: string;
    customerEmail: string;
    customerNumber: string;
    customerAddress: string;
    productName: string;
    productId?:TProduct;
    userId?:TUser
    productCategory: string;
    productPrice: number;
    totalItem: number;
    totalPrice: number;
    paymentStatus: string;
    status: string;
    transationId?:string;
    paymentMethos?:string;
  };
  