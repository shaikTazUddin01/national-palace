'use client'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook/hooks";
import { paginationProduct } from "@/redux/features/product/product.slice";
import "./pagination.css";


const Pagination = ({ totalProducts }: { totalProducts: number }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { limit } = useAppSelector((state) => state?.pagination);
  // const limit = 6;
  // console.log("-->",limit);
  const handlePageChange = (pageNum: number) => {
    setPage(pageNum);
  };
  useEffect(() => {
    const skip = (page - 1) * (limit as number);
    dispatch(paginationProduct({ skip, limit }));
  }, [page, limit, dispatch]);
  const totalPage = Math.ceil(totalProducts / (limit as number));

  // console.log(totalPage, page);

  return (
    <div className="flex justify-end mt-5">
       <button
          className={`btn btn-sm rounded-sm mr-2 ${
            Number(totalPage) === page ? "disabled" : ""
          }`}
          onClick={() => {
            if (page >=1) {
              setPage(page - 1);
            }
          }}
          disabled={page <= 1}
        >
          Prev{" "}
        </button>
      <div className=" ">
        {Array.from({ length: totalPage }).map((_, num) => (
          <input
            key={num + 1}
            className="btn  active-btn  btn-sm mr-2 rounded-sm"
            type="radio"
            name="options"
            aria-label={(num + 1).toString()}
            checked={page === num + 1}
            onChange={() => handlePageChange(num + 1)}
          />
        ))}
      </div>
        <button
          className={`btn btn-sm rounded-sm ${
            Number(totalPage) === page ? "disabled" : ""
          }`}
          onClick={() => {
            if (page < totalPage) {
              setPage(page + 1);
            }
          }}
          disabled={page >= totalPage}
        >
          Next{" "}
        </button>
      {/* <div className="ml-4">Page: {page}</div>  */}
    </div>
  );
};

export default Pagination;