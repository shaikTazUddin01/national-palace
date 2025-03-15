export type TProduct = {
  key?: string;
  _id: string;
  name: string;
  images: string;
  price: number;
  detail: string;
  rating: number;
  isFeature: "True" | "False";
  category: string;
  stockQuantity: number;
};
