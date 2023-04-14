import image from 'public/assets/images/btla.png';
import React from 'react';

import CardProduct from './card';

const Product = () => {
  return (
    <div>
      <div className="m-auto mt-12 flex w-[29rem] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold ">Comprehensive learning programs</h1>
        <h1 className="text-2xl font-bold">& classes for all students</h1>
        <p>Become lifelong learners with the best teachers,</p>
        <p>engaging video lessons and personalised learning journeys</p>
      </div>
      <div className="mt-4 flex">
        <CardProduct
          cardtitle="Classes 4th to 10th"
          image="https://cdn1.byjus.com/wp-content/uploads/2022/04/dbel.png"
          body="Personalised learning app
  to learn anytime, anywhere"
          btnText="Explore Now!"
          islogo="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_disney_logo.svg"
          style="ml-48 mr-4"
        />
        <CardProduct
          cardtitle="Classes 4th to 10th"
          image={image}
          body="Personalised learning app
  to learn anytime, anywhere"
          btnText="Explore Now!"
          islogo="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_disney_logo.svg"
          style="mr-48 ml-4"
        />
      </div>
      <div className="flex">
        <CardProduct
          cardtitle="Classes 4th to 10th"
          image={image}
          body="Personalised learning app
  to learn anytime, anywhere"
          btnText="Explore Now!"
          islogo="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_disney_logo.svg"
          style="ml-48 mr-4"
        />
        <CardProduct
          cardtitle="Classes 4th to 10th"
          image={image}
          body="Personalised learning app
  to learn anytime, anywhere"
          btnText="Explore Now!"
          islogo="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_disney_logo.svg"
          style="mr-48 ml-4"
        />
      </div>
    </div>
  );
};

export default Product;
