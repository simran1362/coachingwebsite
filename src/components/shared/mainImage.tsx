import Image from 'next/image';
import mainpic from 'public/assets/images/bgmain.png';
import React from 'react';

export default function MainImage(props: any) {
  return <Image {...props} src={mainpic} alt="Main Image" />;
}
