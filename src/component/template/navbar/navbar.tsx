'use client'

import { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdAdminPanelSettings, MdClose } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useAppSelector } from "@/redux/hook/hooks";
import { useGetCategoryQuery } from "@/redux/features/category/category.api";
import { useGetProductsQuery } from "@/redux/features/product/products.api";
import { TCategory, TProduct } from "@/type";
import logo from "@/assets/epicfit.png";
import SearchProduct from "@/component/functionallity/search-product";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { user, token } = useAppSelector((state) => state.userLoginInfo);
  const cartProduct = useAppSelector((state) => state.productCard?.productCart);
  
  const [showSearchBar, setShowSearchbar] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
  const { data: products } = useGetProductsQuery({});

  const categories = data?.data;

  const filterByCategory = products?.data?.result?.filter(
    (item: TProduct) => item?.category === activeCategory
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer") as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const closeSearchBar = () => {
    setShowSearchbar(false);
  };

  return (
    <div className="relative">
      <div className="text-white bg-primaryColor z-20 shadow-xl px-2 md:px-5 w-full fixed xl:relative">
        <div className="navbar max-w-7xl mx-auto p-0">
          <div className="navbar-start xl:w-[33%]">
            {/* Responsive Nav Drawer */}
            <div className="drawer xl:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="text-2xl cursor-pointer">
                  <AiOutlineMenuFold />
                </label>
              </div>
              <div className="drawer-side z-50">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="menu bg-white text-black min-h-full w-[65%] relative">
                  <div className="flex justify-end">
                    <button onClick={closeDrawer} className="text-2xl font-bold bg-slate-200 rounded px-1">
                      <MdClose />
                    </button>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex flex-col gap-1">
                      {categoryLoading ? (
                        Array.from({ length: 8 }).map((_, idx) => (
                          <div key={idx} className="w-32 h-6 bg-gray-200 rounded-md animate-pulse" />
                        ))
                      ) : (
                        categories?.map((category: TCategory) => (
                          <div key={category?._id}>
                            <div className="flex items-center justify-between">
                              <p
                                className={`px-1 py-2 hover:text-textSecondary text-sm ${
                                  activeCategory === category?.name && "text-textSecondary"
                                }`}
                                onClick={() => handleCategoryClick(category?.name)}
                              >
                                {category?.name}
                              </p>
                              <span 
                                className="text-xl"
                                onClick={() => handleCategoryClick(category?.name)}
                              >
                                {activeCategory === category?.name ? <LuMinus /> : <GoPlus />}
                              </span>
                            </div>
                            <div className="w-full h-[1px] bg-slate-200"></div>
                            {activeCategory === category?.name && (
                              <div
                                className={`bg-slate-100 px-2 py-[2px] text-black transition-all duration-800 ${
                                  activeCategory === category?.name
                                    ? "translate-y-0 opacity-100"
                                    : "-translate-y-2 opacity-0"
                                }`}
                              >
                                {filterByCategory?.length > 0 ? (
                                  filterByCategory?.map((product: TProduct) => (
                                    <div key={product?._id} className="py-1 px-2 hover:text-textSecondary">
                                      <a href={`/productDetails/${product?._id}`} className="text-sm">
                                        {product?.name}
                                      </a>
                                      <div className="bg-white h-[1px] w-full"></div>
                                    </div>
                                  ))
                                ) : (
                                  <div>
                                    <p>No Product Available!</p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                      <a href="/about">
                        <span className="px-1 py-2 hover:text-textSecondary text-sm">
                          Privacy Policy
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:flex">
              <Link href="/">
                <Image src={logo} alt="" className="w-[160px]" />
              </Link>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="navbar-center hidden xl:flex">
            <SearchProduct searchboxWidthpx={550} />
          </div>

          {/* Mobile Logo */}
          <div className="navbar-center xl:hidden justify-center w-full pr-12">
            <div className="xl:hidden flex">
              <Link href="/">
                <Image src={logo} alt="" className="w-[160px]" />
              </Link>
            </div>
          </div>

          {/* Navigation End */}
          <div className="navbar-end flex gap-4 xl:gap-8 items-center absolute end-2 z-20 xl:relative">
            <div className="hover:text-textSecondary hidden xl:flex">
              <a href="/about">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-textSecondary">
                    <MdAdminPanelSettings />
                  </div>
                  <div className="space-y-0 flex flex-col">
                    <span className="text-[13px]">Policy</span>
                    <span className="text-[10px]">privacy policy</span>
                  </div>
                </div>
              </a>
            </div>

            {user && token ? (
              <div className="hover:text-textSecondary hidden xl:flex">
                <a href="/user/dashboard">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-textSecondary">
                      <FaUserCog />
                    </div>
                    <div className="space-y-0 flex flex-col">
                      <span className="text-[13px]">Account</span>
                      <span className="text-[10px]">profile or dashboard</span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              <div className="hover:text-textSecondary hidden xl:flex">
                <a href="/login">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-textSecondary">
                      <FaUserCog />
                    </div>
                    <div className="space-y-0 flex flex-col">
                      <span className="text-[13px]">Account</span>
                      <span className="text-[10px]">login or signup</span>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Cart */}
            <div className="flex relative">
              <a href="/cart" className="hover:text-textSecondary text-2xl text-white">
                <GrCart />
              </a>
              <p className="bg-textSecondary items-start font-semibold text-[10px] rounded-full absolute -top-2 -end-2 border text-center size-4">
                {cartProduct?.length || "0"}
              </p>
            </div>

            {/* Mobile Search Toggle */}
            <div className="text-2xl xl:hidden pr-1" onClick={() => setShowSearchbar(!showSearchBar)}>
              <IoSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearchBar && (
        <div className="md:px-10 flex justify-center w-full fixed top-16 z-10">
          <SearchProduct searchboxWidthps={100} onClose={closeSearchBar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
