// import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { categoryFilter } from "../../redux/features/products/categoryFilter.slice";
// import Spring from "../shared/Loading/Spring";
import { TCategory } from "../../Type";
import { useLocation } from "react-router-dom";
import CategoriesFilterLoader from "../shared/Loading/CategoriesFilterLoader";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoriesFiltering = () => {
  const location=useLocation()
  const pathParts=location?.pathname?.split('/')
  const laseSegment = pathParts[pathParts?.length-1]
  const formattedUrl =decodeURIComponent(laseSegment)
  const { data: categories, isLoading } = useGetCategoryQuery(undefined);
  const dispatch = useAppDispatch();
  //get selected category

  if (isLoading) {
    return <CategoriesFilterLoader/>;
  }

  const filterByCategory = (data: any) => {
    dispatch(categoryFilter(data));
  };

  return (
    <div>
      <div className="bg-white w-full rounded-lg py-3 px-5">
        <h1 className=" font-medium">Categories</h1>
        <div className="divider mt-0"></div>
        <div className="space-y-2 -mt-3">
          {categories?.data?.map((category: TCategory) => (
            <a href={`/products/${category?.name}`} key={category?._id}>
              <p
                className={` hover:text-textSecondary ${formattedUrl == category?.name ?"text-textSecondary":""}`}
                onClick={() => filterByCategory(category?.name)}
              >
                {" "}
                {category?.name}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CategoriesFiltering;
