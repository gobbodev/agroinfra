"use client";
import Link from "next/link";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { ArrowDown } from "@/public/svg";

import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

import { dataBanner } from "./data";

export function Banner() {
  return (
    <Carousel
      className="relative overflow-hidden"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <div className="_bag-image absolute h-screen z-0 ">
        <Image
          src={"/images/fazenda_bg.jpg"}
          alt="plantação de arroz em um final de tarde"
          fill
          priority
        />
      </div>
      <div className="_overlay-full" />
      <CarouselContent className="z-20">
        {dataBanner.map((item, index) => (
          <CarouselItem
            className="w-screen h-screen flex flex-col items-center justify-center text-slate-200"
            key={item.titulo + index}
          >
            <div className="_title">
              {index == 0 ? <h1>{item.titulo}</h1> : <h2>{item.titulo}</h2>}
            </div>
            <p>{item.subTitulo}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Link
        href={"#irrigacao"}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown />
      </Link>
    </Carousel>
  );
}
