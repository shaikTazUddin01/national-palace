
const ProductCardLoader = () => {
    return (
      <div className="card bg-base-100 shadow-xl rounded-md hover:shadow-2xl animate-pulse">
        {/* Image loader */}
        <div className="px-5 pt-5 h-[150px] flex items-center justify-center bg-gray-200 rounded-xl">
          <div className="w-[100%] h-full bg-gray-300 rounded-md"></div>
        </div>
        
        <div className="card-body">
          {/* Title loader */}
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
          
          {/* Price loader */}
          <div className="h-4 bg-gray-300 rounded-md w-1/2 "></div>
          
          {/* Rating loader */}
          <div className="flex items-center gap-2 mb-1">
            <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/5"></div>
          </div>
          
          {/* Button loader */}
          <div className="h-6 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
    );
  };
  
  export default ProductCardLoader;