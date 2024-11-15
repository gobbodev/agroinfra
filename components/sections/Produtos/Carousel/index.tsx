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
      className='relative overflow-hidden'
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <Container>
        <CarouselContent className='z-20 '>
          {dataProdutos.map((item, index) => (
            <CarouselItem
              className='bg-preto px-10 py-12 basis-1/3 mt-12 flex flex-col items-center text-branco'
              key={item.title + index}
            >
              <div className='_bag-image h-60 _margin-13b'>
                <Image src={item.image.src} alt={item.image.alt} fill />
              </div>
              <div className='_shadow-text font-osvaldo _font-36 uppercase _margin-25b text-verde-forte'>
                {index == 0 ? (
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                ) : (
                  <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                )}
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
