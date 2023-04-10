import React from 'react';

// eslint-disable-next-line import/no-named-as-default
import ProductSection from '@/components/ProductSection';
import Navbar from '@/components/shared/Navbar';

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
