import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className="mx-[150px] flex flex-col">
      <h1 className="m-auto mt-16 text-4xl font-bold text-[#333333]">
        Get the classes advantage
      </h1>
      <div className="flex flex-row justify-between">
        <div className="mt-16 flex flex-row">
          <div>
            <Image
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png"
              alt=""
              className=""
              height={300}
              width={300}
            />
            <p className="m-auto w-[300px] text-center text-[26px] text-[#333333]">
              Conceptual clarity through visualisation
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-row">
          <div>
            <Image
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
              alt=""
              className=""
              height={300}
              width={300}
            />
            <p className="m-auto w-[300px] text-center text-[26px] text-[#333333]">
              Personalised learning programs
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-row">
          <div>
            <Image
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"
              alt=""
              className=""
              height={300}
              width={300}
            />
            <p className="m-auto w-[300px] text-center text-[26px] text-[#333333]">
              Unmatched individual attention
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
