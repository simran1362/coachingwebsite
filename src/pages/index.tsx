import React from 'react';

import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
// eslint-disable-next-line import/no-named-as-default
import ProductSection from '@/components/ProductSection';
import Navbar from '@/components/shared/Navbar';
import Student from '@/components/Student';

import MainPage from './main';

const index = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <MainPage />
      <ProductSection />
      <Features />
      <Student />
      <Gallery />
      <Footer />
    </div>
  );
};

export default index;
