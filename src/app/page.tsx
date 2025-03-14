import React from 'react';
import HeroSection from '@/component/home/hero';
import CategorySection from '@/component/home/category';
import ProductsSection from '@/component/home/product';
const Page = () => {
  return (
    <div>
     <HeroSection/>
     <CategorySection/>
     <ProductsSection/>
    </div>
  );
};

export default Page;