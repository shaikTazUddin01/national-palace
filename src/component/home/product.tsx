"use client";

import { useGetProductsQuery } from "@/redux/features/product/products.api";
import SectionTitle from "../template/section-title/section-title";
import ProductCardLoader from "../template/loader/product-card-loader";
import ProductCard from "../product/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import { TProduct } from "@/type";


const ProductsSection = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data?.result;
  console.log(products);

  return (
    <div className="mt-16">
      <div className="text-center">
        <SectionTitle
          heading="Shop Our Full Range"
          subHeading="Endless choices await you in our collection."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, idx) => (
            <ProductCardLoader key={idx} />
          ))
        ) : (
          products?.slice(0, 10).map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))
        )}
      </div>
      <div className="flex justify-end mt-5">
        <a href="/products">
          <p className="text-primaryColor flex items-center gap-2">
            Explore more
            <FaArrowRight />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProductsSection;