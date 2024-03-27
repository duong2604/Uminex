import { apiSlice } from "../../app/api/apiSlice";
import { Product } from "../../types/data.types";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], any>({
      query: ({ brands, price, sort, searchParams, page, limit }) => {
        return `/api/products?search=${searchParams}&brand=${brands}&price=${price}&sort=${sort}&page=${page}&limit=${limit}`;
      },
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),
    getProductDetail: builder.query<Product, number>({
      query: (productId) => `/api/products/${productId}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } =
  productApiSlice;
