import { usePathname } from 'next/navigation';
import { useGetCategoryQuery } from '@/redux/features/category/category.api';
import { useAppDispatch } from '@/redux/hook/hooks';
import { categoryFilter } from '@/redux/features/product/product.slice';
import Link from 'next/link';
import { TCategory } from '@/type';


const CategoriesFiltering = () => {
  const pathname = usePathname();
  const pathParts = pathname?.split('/');
  const lastSegment = pathParts[pathParts?.length-1];
  const formattedUrl = decodeURIComponent(lastSegment);
  
  const { data: categories, isLoading } = useGetCategoryQuery(undefined);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <p>loafdingsa...</p>;
  }

  const filterByCategory = (data: string) => {
    dispatch(categoryFilter(data));
  };

  return (
    <div>
      <div className="bg-white w-full rounded-lg py-3 px-5">
        <h1 className=" font-medium">Categories</h1>
        <div className="divider mt-0"></div>
        <div className="space-y-2 -mt-3">
          {categories?.data?.map((category: TCategory) => (
            <Link href={`/products/${category?.name}`} key={category?._id}>
              <p
                className={` hover:text-textSecondary ${formattedUrl == category?.name ? "text-textSecondary" : ""}`}
                onClick={() => filterByCategory(category?.name)}
              >
                {" "}
                {category?.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CategoriesFiltering;