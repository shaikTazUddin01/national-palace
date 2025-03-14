/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { FaSearch } from "react-icons/fa";
import Debounce from "../../utiles/Debounce";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../Type";
import { Divider } from "antd";


type SearchProductProps = {
  searchboxWidthpx?: number;
  searchboxWidthps?: number;
};

const SearchProduct = ({searchboxWidthpx ,searchboxWidthps}:SearchProductProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  // debounce function
  const debouncedSearchTerm = Debounce(searchTerm, 500);
  // get product data query
  const { data: productsData} = useGetProductsQuery(
    {}
  );

  let products = productsData?.data?.result;

  // filter search product
  useEffect(() => {
    if (debouncedSearchTerm && products) {
      const searchItem = products?.filter((product: TProduct) =>
        product?.name
          .toLocaleLowerCase()
          .includes(debouncedSearchTerm.toLocaleLowerCase())
      );
      setFilteredProducts(searchItem);
    }
  }, [debouncedSearchTerm, products]);

  // handle search
  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // console.log(filteredProducts);

  return (
    <div className="relative z-50 w-full">
      <form action="" className="flex gap-2">
      <div className="relative flex items-center text-black" 
      style={{
        width: searchboxWidthps ? `${searchboxWidthps}%` : `${searchboxWidthpx}px`,
      }}
      >
          <input
            style={{
              width: "100%", 
           
            }}
            className="border text-sm p-2 rounded-md"
            placeholder="Search in Epicfit..."
            name="search"
            onChange={handleSearch}
          />
          <span className="absolute text-black end-2 cursor-pointer">
            <FaSearch />
          </span>
        </div>
      </form>
      {debouncedSearchTerm && (
        <div className="absolute z-1000 bg-white text-black w-full rounded px-5 py-2">
          {filteredProducts?.length > 0 ? (
            filteredProducts?.map((product: TProduct) => {
              return (
                <a href={`/productDetails/${product?._id}`}>
                  <div className="flex items-center gap-3 mb-1 ">
                    <img
                      src={product?.images}
                      alt=""
                      className="size-8 rounded-lg border border-textSecondary"
                    />
                    <div>
                      <p className="text-[13px] -mb-1">{product?.name}</p>
                      <span className="text-textSecondary text-[13px] ">
                        ${product?.price}
                      </span>
                    </div>
                  </div>
                  <Divider className="my-1" />
                </a>
              );
            })
          ) : (
            <div>
              <p className="text-center">No Product Found .!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
