'use client'
import { useSearchParams } from 'next/navigation'
import ShowProduct from './product-perPage';
import SortByPrice from './price-sorting';


const FilterProduct = () => {
  const searchParams = useSearchParams()
  const feature = searchParams.has("feature") ? "True" : "False"

  return (
    <div className="bg-white py-2 px-5 flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg gap-2 ">
      {/* search area */}
      <div className="w-full ">
        <p className="font-medium">
          {feature === "True" ? "All Feature In One" : "All In One"}
        </p>
        {/* <SearchProduct searchboxWidthps={80}></SearchProduct> */}
      </div>

      <div className="w-full md:text-end flex items-center justify-end gap-5">
      <ShowProduct/>
      <SortByPrice/>
      </div>
    </div>
  );
};

export default FilterProduct;