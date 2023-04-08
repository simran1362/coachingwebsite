import Link from 'next/link';
import React from 'react';

import { getNavbarList } from '@/lib/datastore';

import Call from './call';
import Logo from './logo';

const Navbar = () => {
  const NavbarList = getNavbarList();
  return (
    <div className="flex flex-row items-center justify-between bg-[#813588]">
      <div className="m-4 ml-40">
        <Logo className="scale-50" />
      </div>
      <div className="mr-64 flex flex-row gap-20">
        {NavbarList.map((index: any) => {
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <Link className="text-[#F9C847]" href={`${index}`}>
              {index}
            </Link>
          );
        })}
      </div>
      <Call className="mr-12 bg-[#813588]" />
    </div>
  );
};

export default Navbar;
