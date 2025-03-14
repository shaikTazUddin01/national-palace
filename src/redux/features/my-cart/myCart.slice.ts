import { TProduct } from "@/type";
import { createSlice } from "@reduxjs/toolkit";


type TInitialState = {
  productCart: TProduct[];
};

export const initialState: TInitialState = {
  productCart: [],
};

export const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    productCart: (state, action) => {
      const existingProduct = state.productCart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.stockQuantity = action.payload.stockQuantity + 1;
      } else {
        state.productCart.push(action.payload);
      }
    },
    clearCart:(state)=>{
      state.productCart=[]
    },
    decrementProductInToCart: (state, action) => {
      const existingProduct = state.productCart.find(
        (item) => item._id === action.payload._id
      );
      if ((existingProduct?.stockQuantity as number) > 1) {
        existingProduct!.stockQuantity = action.payload.stockQuantity - 1;
      }
    },
    removedItem: (state, action) => {
      state.productCart = state.productCart.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { productCart, decrementProductInToCart, removedItem,clearCart } =
  productCartSlice.actions;
export default productCartSlice.reducer;

// export const AddProductToCart=(state:RootState)=>{return(state.productCart)}
