'use client';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

import { ArrowDown } from '@/public/svg';

import { Container } from '@/components/ui/container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { dataProdutos } from '../data';

export function ProdutosCarousel() {
  return (
    <Carousel
      className='relative overflow-hidden'
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <Container>
        <CarouselContent className='z-20 max-h-screen '>
          {dataProdutos.map((item, index) => (
            <CarouselItem
              className='basis-1/3 mt-12 w-full h-screen flex flex-col items-center justify-center text-branco'
              key={item.title + index}
            >
              <div className='_banner-title _shadow-text font-osvaldo'>
                {index == 0 ? (
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                ) : (
                  <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                )}
              </div>
              <p className='_font-30 _shadow-text uppercase font-extralight text-branco text-center'>
                {item.text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Container>

      <Link
        href={'#irrigacao'}
        className='_effect-reflection absolute py-4 px-[30px] bottom-0 left-1/2 -translate-x-1/2 z-20 mobile:py-3 mobile:px-6'
      >
        <span className='absolute' />
        <span className='absolute' />

        <ArrowDown className='absolute top-2 mobile:w-7 mobile:h-7' />
        <ArrowDown className='mt-[10px] mobile:w-7 mobile:h-7  mobile:mt-[8px]' />
      </Link>
    </Carousel>
  );
}
