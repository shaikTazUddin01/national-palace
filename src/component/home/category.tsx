"use client";
import SectionTitle from "../template/section-title/section-title";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../type";
import CategoryCardLoader from "../template/loader/category-card-loader";
import { useRouter } from "next/navigation";

const CategorySection = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const router = useRouter();

  const categories = data?.data;

  const handleNavigate = (categoryName: string) => {
    router.push(`/products?category=${categoryName}`);
  };

  return (
    <div className="mt-16 text-center">
      <div className="">
        <SectionTitle
          heading="Featured Category"
          subHeading="Get Your Desired Product from Featured Category!"
        />
      </div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {isLoading ? (
            Array.from({ length: 7 }).map((_, idx) => (
              <CategoryCardLoader key={idx} />
            ))
          ) : (
            categories?.slice(0, categories.length >= 14 ? 14 : categories.length >= 7 ? 7 : categories.length)?.map((category: TCategory) => (
              <div
                key={category?._id}
                className="shadow border-[#d8d8d8] hover:border-[#b0b0b0] hover:cursor-pointer bg-white text-black transform hover:shadow-xl transition-all duration-200 ease-in-out rounded-md p-2 min-h-[207px]"
                onClick={() => handleNavigate(category?.name)}
              >
                <img
                  src={category?.image}
                  alt={category?.name}
                  className="h-32 w-full object-cover"
                />
                <h1 className="py-3 text-sm px-2">{category?.name}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;