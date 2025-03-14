import { toast } from "sonner";
import { Rate } from "antd";
import { TProduct } from "@/type";
import { productCart } from "@/redux/features/my-cart/myCart.slice";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";


const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, name, price, images } = product;

  // get review section
  // const { data: review, isLoading: pLoading } = useGetReviewQuery(_id);

  const dispatch = useAppDispatch();
  
  // get my cart
  const mycartProduct = useAppSelector(
    (state: any) => state.productCard?.productCart
  );

  // if (pLoading) {
  //   return <ProductCardLoader />;
  // }

  // calculate review
  // const reviews = review?.data?.review;
  // const sumOfTotalReview = reviews?.reduce(
  //   (acc: number, curr: TReview) => acc + Number(curr?.rating),
  //   0
  // );

  const reviews = ["",""];
  const sumOfTotalReview = 0;
 

  const aveRating = Number(sumOfTotalReview / reviews?.length);

  // add product to cart
  const handleAddToCart = () => {
    //check product is exists or not
    const isExists = mycartProduct?.find(
      (item: any) => item?._id == product?._id
    );
    if (isExists) {
      // get product quantity
      const myCartProductQuantity = isExists?.stockQuantity;
      //check stock is full or not
      if (product?.stockQuantity > myCartProductQuantity) {
        toast.success("This Product is added to cart", {
          duration: 1000,
        });
        return dispatch(productCart({ ...product, stockQuantity: 1 }));
      } else {
        return toast.warning("This Product is Stock Out", {
          duration: 1000,
        });
      }
    }

    dispatch(productCart({ ...product, stockQuantity: 1 }));
    toast.success("This Product is added to cart", {
      duration: 1000,
    });
  };

  return (
    <div className="card bg-base-100  shadow-xl rounded-md hover:shadow-2xl">
      <a href={`/productDetails/${_id}`}>
        <figure className="px-2 pt-2 ">
          <img
            src={images}
            alt={name}
            className=" w-[95%] object-cover h-[150px]"
          />
        </figure>
      </a>
      <div className="card-body px-5">
        <a href={`/productDetails/${_id}`}>
          <h2 className="hover:text-textSecondary hover:underline">{name}</h2>
          <p className="text-textSecondary font-semibold">
            ${price}{" "}
            <span className="text-gray-400 line-through font-normal">
              ${price + 15}
            </span>
          </p>
        </a>
        <span className="flex items-center gap-2 -mt-1">
          <Rate
            disabled
            allowHalf
            defaultValue={Number(aveRating)}
            className="custom-rate text-[13px]"
          />
          <p className="text-[13px] text-[#515151]">
            ({reviews?.length ? reviews?.length : "0"})
          </p>
        </span>
        <>
          <button
            className="bg-slate-100 hover:bg-slate-200 rounded-md py-1 text-textSecondary text-sm flex items-center gap-1 justify-center"
            onClick={() => handleAddToCart()}
          >
            {" "}
            <span className="text-xl">
              <IoCartOutline />
            </span>
            Add To Cart
          </button>
        </>
      </div>
    </div>
  );
};

export default ProductCard;
