'use server';
import Image from 'next/image';

export async function Background() {
  return (
    <>
      <div className='_bag-image absolute h-screen z-0 mobile_g:h-[80vh]'>
        <Image
          src={'/images/fazenda_bg.jpg'}
          alt='plantação de arroz em um final de tarde'
          fill
        />
      </div>
      <div className='_overlay-full mobile_g:!h-[80vh] relative' />
    </>
  );
}
