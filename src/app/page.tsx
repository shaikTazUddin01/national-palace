import React from 'react';
import HeroSection from '@/component/home/hero';
import CategorySection from '@/component/home/category';
import ProductsSection from '@/component/home/product';
import FeaturedProducts from '@/component/home/feature-product';
const Page = () => {
  return (
    <div>
     <HeroSection/>
      <div className="container mx-auto">
        <CategorySection />
        <ProductsSection />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Page;