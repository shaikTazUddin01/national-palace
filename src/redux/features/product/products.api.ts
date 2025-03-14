import { baseApi } from "../../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ sortProductByPrice, searchProduct ,selectedCategory,feature,priceRange,limit,skip}) => ({
        url: `/product`,
        params: { sortProductByPrice, searchProduct ,selectedCategory,feature,priceRange,limit,skip },
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getSingleProducts: builder.query({
      query: ({_id}) => ({
        url: `/product/${_id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    createProduct: builder.mutation({
      query: (productInFo) => ({
        url: "/product",
        method: "POST",
        body: productInFo,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log("pre update-->>",data);
        return{
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }},
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
