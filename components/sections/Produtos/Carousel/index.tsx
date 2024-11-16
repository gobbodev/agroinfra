'use client';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';

import { Container } from '@/components/ui/container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { dataProdutos } from '../data';

//componentizar isso tb?
export function ProdutosCarousel() {
  return (
    <Carousel
      className='relative overflow-hidden '
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <Container>
        <CarouselContent className='z-20 -ml-6'>
          {dataProdutos.map((item, index) => (
            <CarouselItem
              className='rounded-r-lg bg-preto-fraco ml-6 px-10 py-12 basis-[31%] mt-12 flex flex-col items-center text-branco'
              key={item.title + index}
            >
              <div className='_margin-25b h-60 '>
                <Image
                  className='min-h-[235px] rounded-md'
                  src={item.image.src}
                  alt={item.image.alt}
                  width={400}
                  height={200}
                />
              </div>
              <div className='_shadow-text _font-36 relative pt-2 font-osvaldo uppercase _margin-25b text-branco'>
                {index == 0 ? (
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                ) : (
                  <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                )}

                <span className='absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-[2px] bg-verde-forte' />
              </div>
              <p className='_font-18 font-light text-branco text-justify'>
                {item.text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Container>
    </Carousel>
  );
}
