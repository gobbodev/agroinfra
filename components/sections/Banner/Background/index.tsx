'use server';
import Image from 'next/image';

export async function Background() {
  return (
    <>
      <div className='_bag-image absolute h-screen z-0 '>
        <Image
          src={'/images/fazenda_bg.jpg'}
          alt='plantação de arroz em um final de tarde'
          fill
        />
      </div>
      <div className='_overlay-full relative' />
    </>
  );
}
