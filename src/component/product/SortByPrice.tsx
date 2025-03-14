import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { sortProduct } from "../../redux/features/products/productSort.slice";
import { useEffect } from "react";

// type TSort={
// sort:string
// }

const SortByPrice = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();

  //get reset value
  const resetFilter = useAppSelector((state) => state.resetFilter.reset);

  const handleSortByPrice = (data: any) => {
    dispatch(sortProduct({ sort: data?.sort }));
  };

  useEffect(() => {
    if (resetFilter === "reset") {
      reset();
    }
  }, [reset, resetFilter]);
  return (
    <form action="" onChange={handleSubmit(handleSortByPrice)}>
      <label className="text-sm">Sort By : {"  "}</label>
      <select
        className="select bg-slate-200 select-sm w-full md:w-[100px] max-w-xs  "
        {...register("sort")}
      >
        <option defaultValue="">Default</option>
        <option value={"asc"}>Price(low to High)</option>
        <option value={"dsc"}>Price(High to Low)</option>
      </select>
    </form>
  );
};

export default SortByPrice;
