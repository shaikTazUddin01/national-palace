'use client'

import { useState } from "react";
import { useGetCategoryQuery } from "@/redux/features/category/category.api";
import { useGetProductsQuery } from "@/redux/features/product/products.api";
import { TCategory, TProduct } from "@/type";

const SubNavbar = () => {
  // State management
  const [activeCategory, setActiveCategory] = useState<string>("nodata");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // API queries
  const { data: categoryData, isLoading: isCategoryLoading } = useGetCategoryQuery(undefined);
  const { data: productsData, isLoading: isProductLoading } = useGetProductsQuery({});

  const categories = categoryData?.data;

  // Filter products by selected category
  const filteredProducts = productsData?.data?.result?.filter(
    (product: TProduct) => product?.category === activeCategory
  );

  // Generate dropdown items
  const getDropdownItems = () => {
    if (isProductLoading) {
      return Array.from({ length: 2 }).map((_, idx) => ({
        key: idx,
        label: <span className="text-gray-400">Loading...</span>,
      }));
    }

    return filteredProducts?.map((product: TProduct) => ({
      key: product?._id,
      label: (
        <a 
          href={`/productDetails/${product?._id}`} 
          className="text-sm hover:text-white transition-colors duration-200"
        >
          {product?.name}
        </a>
      ),
    })) || [];
  };

  // Event handlers
  const handleCategoryHover = (categoryName: string) => {
    setActiveCategory(categoryName);
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setActiveCategory("nodata");
  };

  return (
    <nav className="bg-white shadow-xl border-b-2">
      <div className="max-w-7xl mx-auto px-4 py-0.5" onMouseLeave={handleMouseLeave}>
        <div className="flex flex-wrap xl:justify-between gap-4">
          {isCategoryLoading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="w-32 h-6 bg-gray-200 rounded-md animate-pulse"
              />
            ))
          ) : (
            // Category list
            categories?.slice(0, 8)?.map((category: TCategory) => (
              <div
                key={category?._id}
                className="relative group"
                onMouseEnter={() => handleCategoryHover(category?.name)}
              >
                <button
                  className={`
                    text-[15px] transition-colors duration-200
                    hover:text-textSecondary
                    ${activeCategory === category?.name ? "text-textSecondary" : ""}
                  `}
                >
                  {category?.name}
                </button>

                {/* Dropdown menu */}
                {hoveredCategory === category?.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border-t-2 border-textSecondary">
                    <div className="py-2">
                      {getDropdownItems().length > 0 ? (
                        getDropdownItems().map((item: any) => (
                          <div
                            key={item.key}
                            className="px-4 py-2 hover:bg-textSecondary transition-colors duration-200"
                          >
                            {item.label}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500 text-sm text-center">
                          No items available
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;