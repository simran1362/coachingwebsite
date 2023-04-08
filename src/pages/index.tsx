import React from 'react';

import Navbar from '@/components/shared/Navbar';
import ProductSection from '@/pages/ProductSection';

import MainPage from './main';

const index = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <MainPage />
      <ProductSection />
    </div>
  );
};

export default index;
