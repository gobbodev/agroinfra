'use client';

import Link from 'next/link';
import Image from 'next/image';

import { dataLayout } from '../data';
import { Container } from '@/components/ui/container';
import { useEffect, useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Exibir o menu imediatamente quando `isOpen` for verdadeiro
      setIsOpen(true);
    } else {
      // Aguarde a duração da transição antes de ocultar completamente
      const timeoutId = setTimeout(() => setIsOpen(false), 500);
      return () => clearTimeout(timeoutId); // Limpa o timeout caso o componente seja desmontado
    }
  }, [isOpen]);

  return (
    <header className='w-full absolute z-50 text-branco py-5'>
      <Container className='flex justify-between items-center'>
        <div className='_bag-image max-w-[350px] laptop:max-w-60 mobile_s:max-w-52 mobile_sx:max-w-[200px]'>
          <Image
            fill
            src={'/images/logo_escrita.png'}
            alt='logo triangular e retangular verde com a escrita AGROINFRA ENGENHARIA PROJETOS E SERVIÇOS EM IRRIGAÇÃO'
            priority
          />
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={`hidden fixed transition-all duration-500 bg-black w-screen h-screen left-0 bottom-0 mobile:block
          ${
            isOpen
              ? 'mobile:opacity-50 mobile:visible'
              : 'mobile:opacity-0 mobile:invisible'
          }
          `}
        />

        <nav
          className={`flex gap-8 justify-end transition-all duration-500 laptop:gap-6 mobile:fixed mobile:max-w-screen mobile:w-[75%] mobile:h-screen mobile:top-0 mobile:left-0 mobile:bg-preto mobile:flex-col mobile:justify-center mobile:items-center
          ${isOpen ? 'mobile:opacity-100 mobile:visible' : 'mobile:opacity-0 mobile:invisible'}
        `}
        >
          {dataLayout.map((item, index) => (
            <Link
              className='_font-16 _shadow-text _underline-effect relative font-semibold mobile:_font-24'
              href={item.link}
              key={item.text + index}
              onClick={() => isOpen && setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </Container>

      {/*btn mobile*/}
      <div
        className={`hidden absolute right-3 top-5 cursor-pointer mobile:block
          ${isOpen && '!fixed'} 
          `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            className={`relative block w-6 h-1 bg-verde-forte mt-1 transition ease duration-500
            ${isOpen && index == 0 && ' -rotate-45 translate-y-1'} 
            ${isOpen && index == 1 && ' rotate-45 -translate-y-1'}
            ${isOpen && index == 2 && ' -rotate-45 -translate-y-3'}
            `}
          />
        ))}
      </div>
    </header>
  );
}
