import Link from 'next/link';

import { Container } from '@/components/ui/container';

import { dataLayout } from '../data';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='pt-12 pb-8 bg-preto-fraco border-t-2 border-solid border-verde-forte'>
      <Container className='flex items-center flex-col'>
        <nav className='_font-16 w-full uppercase font-semibold text-branco flex justify-evenly items-center container:justify-between mobile:flex-col gap-3'>
          <Link
            className='hidden w-full mobile:_margin-25b mobile:flex mobile:justify-center'
            href={'#header'}
          >
            <div className='_bag-image max-w-96 mobile_g:max-w-80 mobile_m:max-w-60 mobile_sx:max-w-56'>
              <Image
                src='/images/logo_escrita.png'
                alt='logo triangular e retangular verde com a escrita AGROINFRA ENGENHARIA PROJETOS E SERVIÇOS EM IRRIGAÇÃO'
                priority
                fill
              />
            </div>
          </Link>

          {dataLayout.slice(1, 3).map((item, index) => (
            <Link
              className='_underline-effect relative'
              href={item.link}
              key={item.text + index}
            >
              {item.text}
            </Link>
          ))}
          <Link className='mobile:hidden' href={'#header'}>
            <div className='_bag-image max-w-80 laptop:max-w-60'>
              <Image
                src='/images/logo_escrita.png'
                alt='logo triangular e retangular verde com a escrita AGROINFRA ENGENHARIA PROJETOS E SERVIÇOS EM IRRIGAÇÃO'
                priority
                fill
              />
            </div>
          </Link>

          {dataLayout.slice(3, 5).map((item, index) => (
            <Link
              className='_underline-effect relative'
              href={item.link}
              key={item.text + index}
            >
              {item.text}
            </Link>
          ))}
        </nav>

        <div className='mt-14 mobile:mt-10'>
          <Link
            target='_blank'
            href={'http://gobbo.dev/'}
            className='_font-18 font-light text-branco flex text-nowrap'
          >
            Desenvolvido por:
            <div className='_effect-glitch'>
              <span className='_glitch font-semibold'>‎ gobbo.dev</span>
            </div>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
