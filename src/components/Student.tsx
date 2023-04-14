import Image from 'next/image';
import React from 'react';

const Student = () => {
  return (
    <div className="flex flex-col">
      <h1 className="m-auto mt-32 text-4xl font-bold text-[#333333]">
        Our students and parents love us
      </h1>
      <div className="mx-64 my-16 flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-app%20rating.svg"
            alt=""
            height={50}
            width={50}
            className=""
          />
          <h1 className="text-center text-[40px] font-bold text-[#813588]">
            4.7+ Star
          </h1>
          <p className="text-[20px]">people rating</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-cities.svg"
            alt=""
            height={50}
            width={50}
            className=""
          />
          <h1 className="items-center text-center text-[40px] font-bold text-[#813588]">
            1701+ Cities
          </h1>
          <p className="text-[20px]">worldwide</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-time.svg"
            alt=""
            height={50}
            width={50}
            className=""
          />
          <h1 className="text-center text-[40px] font-bold text-[#813588]">
            71 mins avg.
          </h1>
          <p className="text-[20px]">time spent daily</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
