import { Title } from '@/components/ui/title';
import { ProdutosCarousel } from './Carousel';

export function Produtos() {
  return (
    <section className='_p-section'>
      <Title title='Produtos Ofertados' subTitle='acompanham nossas soluções' />

      <ProdutosCarousel />
    </section>
  );
}
