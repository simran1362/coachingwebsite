import Image from 'next/image';
import React from 'react';

const GalleryPics = () => {
  return (
    <div>
      <div className="m-12 flex flex-col items-center justify-center">
        <Image
          src="https://cdn1.byjus.com/byjusweb/img/home/image/the-learning-tree.jpg"
          alt=""
          height={300}
          width={300}
        />
        <div className="m-2 w-[450px] text-center text-[20px] font-semibold">
          A student go-to blog for the latest stories, discoveries, fun
          activities, exam tips, and more.
        </div>
      </div>
    </div>
  );
};

export default GalleryPics;
