'use client'
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Divider, Input } from "antd";
import { useGetProductsQuery } from "@/redux/features/product/products.api";
import { TProduct } from "@/type";
import { useAppDispatch } from "@/redux/hook/hooks";
import { searchProduct } from "@/redux/features/product/product.slice";
import { useRouter } from "next/navigation";

type SearchProductProps = {
  searchboxWidthpx?: number;
  searchboxWidthps?: number;
  onClose?: () => void;
};

const SearchProduct = ({ searchboxWidthpx, searchboxWidthps, onClose }: SearchProductProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: productsData } = useGetProductsQuery({});
  const products = productsData?.data?.result;

  // Debounce implementation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // Filter products based on search term
  useEffect(() => {
    if (debouncedSearchTerm && products) {
      const searchItem = products.filter((product: TProduct) =>
        product.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredProducts(searchItem);
      
      // Update Redux state with search term
      dispatch(searchProduct({ searchItem: debouncedSearchTerm }));
    } else {
      setFilteredProducts([]);
      if (debouncedSearchTerm === "") {
        dispatch(searchProduct({ searchItem: "" }));
      }
    }
  }, [debouncedSearchTerm, products, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchProduct({ searchItem: searchTerm }));
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
      if (onClose) {
        onClose();
      }
    }
  };

  const handleProductClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="relative z-50 w-full">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div 
          className="relative flex items-center text-black"
          style={{
            width: searchboxWidthps ? `${searchboxWidthps}%` : `${searchboxWidthpx}px`,
          }}
        >
          <input
            style={{ width: "100%" }}
            className="border text-sm p-2 rounded-md"
            placeholder="Search fitness equipment..."
            name="search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button 
            type="submit" 
            className="absolute text-black end-2 cursor-pointer"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {debouncedSearchTerm && (
        <div className="absolute z-[1001] bg-white text-black w-full rounded px-5 py-2 shadow-lg max-h-[80vh] overflow-y-auto">
          {filteredProducts?.length > 0 ? (
            filteredProducts.slice(0, 10).map((product: TProduct) => (
              <a 
                key={product._id} 
                href={`/productDetails/${product._id}`}
                onClick={handleProductClick}
              >
                <div className="flex items-center gap-3 mb-1">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="size-8 rounded-lg border border-textSecondary"
                  />
                  <div>
                    <p className="text-[13px] -mb-1">{product.name}</p>
                    <span className="text-textSecondary text-[13px]">
                      ${product.price}
                    </span>
                  </div>
                </div>
                <Divider className="my-1" />
              </a>
            ))
          ) : (
            <div>
              <p className="text-center">No Product Found!</p>
            </div>
          )}
          {filteredProducts.length > 10 && (
            <div className="text-center text-sm text-textSecondary">
              <a 
                href={`/products?search=${encodeURIComponent(searchTerm)}`}
                onClick={handleProductClick}
              >
                View all {filteredProducts.length} results
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;