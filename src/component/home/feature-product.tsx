"use client";
import { useGetProductsQuery } from "@/redux/features/product/products.api";
import { FaArrowRight } from "react-icons/fa6";
import SectionTitle from "../template/section-title/section-title";
import ProductCardLoader from "../template/loader/product-card-loader";
import ProductCard from "../product/product-card";
import { TProduct } from "@/type";

const FeatureProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ feature: "True" });
  const products = data?.data?.result;

  return (
    <div className="my-16">
      <div className="text-center">
        <SectionTitle
          heading="Featured Products"
          subHeading="Discover Our Handpicked Selection of Elite Products"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {isLoading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <ProductCardLoader key={idx} />
            ))
          : products?.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>

      <div className="flex justify-end mt-5">
        <a href="/products?feature">
          <p className="flex items-center gap-2">
            Explore more
            <FaArrowRight />
          </p>
        </a>
      </div>
    </div>
  );
};

export default FeatureProducts;
