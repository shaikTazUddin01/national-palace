// import SearchProduct from "./SearchProduct";
import { useLocation } from "react-router-dom";
import ShowProduct from "./ShowProductPerPage";
import SortByPrice from "./SortByPrice";

const FIlterProduct = () => {
  const {search}=useLocation()
  const queryParams= new URLSearchParams(search)
  

  let feature="False"

  if (queryParams.has("feature")) {
    feature=
      "True"
    
  }
  return (
    <div className="bg-white py-2 px-5 flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg gap-2 ">
      {/* search area */}
      <div className="w-full ">
        <p className="font-medium">
          {feature =="True"?"All Feature In One":"All In One"}
        </p>
        {/* <SearchProduct searchboxWidthps={80}></SearchProduct> */}
      </div>

      <div className="w-full  md:text-end flex items-center justify-end gap-5">
        <ShowProduct/>
        <SortByPrice></SortByPrice>
      </div>
    </div>
  );
};

export default FIlterProduct;
