export type TCategory = {
  _id?: string;
  key?: string;
  no?: number;
  category?: string;
  name: string;
  image: string;
};

export type TCategoryResponse = {
  success: boolean;
  data: TCategory[];
};
