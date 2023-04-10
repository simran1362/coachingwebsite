import Image from 'next/image';
import React from 'react';

const CardProduct = (props: any) => {
  return (
    <div
      className={`mt-12 flex w-1/2 flex-col rounded-xl bg-[#F2F2F2] shadow-xl ${props.style}`}
    >
      <div className="flex items-center justify-center">
        <div className="rounded-b-xl bg-blue-500 px-4 py-2 text-white">
          {props.cardtitle}
        </div>
      </div>
      <div className="m-4 flex flex-row justify-between gap-5">
        <Image
          src={props.image}
          alt=""
          className="ml-12"
          height={100}
          width={100}
        />
        <div className="mb-4 flex flex-col items-center justify-center">
          <Image
            className="mt-4"
            src={props.islogo}
            alt=""
            height={100}
            width={100}
          />
          <p className="m-auto mt-4 flex w-1/2 items-center justify-center text-center">
            {props.body}
          </p>
          <button className="mt-4 rounded-xl bg-orange-500 py-4 px-10 font-bold text-white hover:bg-red-700">
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
