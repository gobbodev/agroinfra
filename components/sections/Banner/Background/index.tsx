'use client';
import Image from 'next/image';
import { useState } from 'react';

export function Background() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className='_bag-image absolute h-screen z-0 mobile_g:h-[80vh]'>
        <Image
          src={'/images/fazenda_bg.jpg'}
          alt='plantação de arroz em um final de tarde'
          fill
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
      <div
        className={`_overlay-full mobile_g:!h-[80vh] relative transition-opacity duration-500
        ${!imageLoaded && '!opacity-100'}
        `}
      />
    </>
  );
}
