const PriceRangeLoader = () => {
    return (
      <div className="bg-white w-full rounded-lg px-5 py-3 mb-3 animate-pulse">
        <div className="h-6 bg-gray-300 rounded-md w-1/3 mb-2"></div>
        <div className="h-px bg-gray-300 my-3"></div>
        <div className="space-y-4 mb-3">
          {/* Slider Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
          
          {/* Input Fields Placeholder */}
          <div className="flex justify-around space-x-4 mb-">
            <div className="h-6 bg-gray-300 rounded w-20"></div>
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>
          
          {/* Reset Button Placeholder */}
          {/* <div className="pt-1"> */}
            {/* <div className="h-8 bg-gray-300 rounded w-full"></div> */}
          {/* </div> */}
        </div>
      </div>
    );
  };
  
  export default PriceRangeLoader;
  