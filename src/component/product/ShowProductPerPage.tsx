import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { paginationProduct } from "../../redux/features/products/productPagination.slice";



// type TSort={
// sort:string
// }

const ShowProduct = () => {
  const { register, handleSubmit} = useForm();
  const dispatch = useAppDispatch();

 

  const handleShowProduct = (data: any) => {
    // console.log(data);
    dispatch(paginationProduct({ limit:Number( data?.size) }));
  };


  return (
    <form action="" onChange={handleSubmit(handleShowProduct)}>
      <label className="text-sm text-gray-600 mr-2">Show : {"  "}</label>
      <select
        className="select bg-slate-100 select-sm w-full md:w-[90px] max-w-xs  "
        {...register("size")}
      >
        {/* <option defaultValue="">6</option> */}
        <option value={"8"}>8</option>
        <option value={"12"}>12</option>
        <option value={"16"}>16</option>
        <option value={"20"}>20</option>
        <option value={"24"}>24</option>
      </select>
    </form>
  );
};

export default ShowProduct;
