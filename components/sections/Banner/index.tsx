"use client";

import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { dataBanner } from "./data";

export function Banner() {
  return (
    <Carousel
      className="bg-neutral-800"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
          
        }),
      ]}
    >
      <CarouselContent className="">
        {dataBanner.map((item, index) => (
          <CarouselItem
            className="w-screen h-screen flex flex-col items-center justify-center text-slate-200"
            key={item.titulo + index}
          >
            <div className="title ">
              {index == 0 ? <h1>{item.titulo}</h1> : <h2>{item.titulo}</h2>}
            </div>
            <p>{item.subTitulo}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
