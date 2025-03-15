'use client'

import { useSearchParams } from 'next/navigation'
import { FaHome } from "react-icons/fa"
import { useAppSelector } from "@/redux/hook/hooks"
import { useGetProductsQuery } from "@/redux/features/product/products.api"
import { TProduct } from "@/type"
import PriceRangeFiltering from '@/component/functionallity/price-filtering'
import CategoriesFiltering from '@/component/functionallity/sidebar-filter'
import FilterProduct from '@/component/functionallity/filter-product'
import ProductCardLoader from '@/component/template/loader/product-card-loader'
import ProductCard from '@/component/product/product-card'
import Pagination from '@/utili/pagination'


const Products = () => {
  const searchParams = useSearchParams()
  const feature = searchParams.has("feature") ? "True" : "False"

  // Get sort, search, and price range values from Redux store
  const sortProductByPrice = useAppSelector((state) => state.sortProduct?.sort)
  const priceRange = useAppSelector((state) => state.priceRange)
  const filterPrice = priceRange?.priceRange
  const searchProduct = useAppSelector((state) => state.searchProduct?.searchItem)
  const category = useAppSelector((state) => state.categoryFilter?.categoris)
  const { skip, limit } = useAppSelector((state) => state.pagination)

  // Fetch products with filters
  const { data, isLoading } = useGetProductsQuery({
    sortProductByPrice,
    searchProduct,
    priceRange: filterPrice,
    skip,
    limit,
    selectedCategory: category,
    feature
  })

  const products = data?.data

  return (
    <div className="min-h-screen pb-20 pt-3 px-5 xl:px-0 max-w-7xl mx-auto">
      {/* Page navigator */}
      <div className="flex gap-2 text-sm items-center mb-3 text-[#545454]">
        <a href="/" className="hover:text-textSecondary">
          <span className="text-[16px]">
            <FaHome />
          </span>
        </a>
        <span className="text-[12px]">/</span>
        <a href="/products" className="hover:text-textSecondary">
          <span>Products</span>
        </a>
        {searchParams.has("feature") && (
          <>
            <span className="text-[12px]">/</span>
            <a href="/products?feature" className="hover:text-textSecondary">
              <span>Feature</span>
            </a>
          </>
        )}
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Left sidebar for filters */}
        <div className="md:w-[20%] rounded-lg">
          <PriceRangeFiltering />
          <CategoriesFiltering />
        </div>

        {/* Main content area for products */}
        <div className="md:w-[80%]">
          <FilterProduct />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
              {Array.from({ length: 8 }).map((_, idx) => (
                <ProductCardLoader key={idx} />
              ))}
            </div>
          ) : (
            <>
              {products && products.result?.length > 0 ? (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                    {products.result.map((item: TProduct) => (
                      <ProductCard key={item._id} product={item} />
                    ))}
                  </div>
                  <Pagination totalProducts={products.totalProducts} />
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl text-center mt-10">
                    No Product Available!
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products