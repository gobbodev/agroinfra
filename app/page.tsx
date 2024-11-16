import { AumentandoLucros } from '@/components/sections/AumentandoLucros';
import { Banner } from '@/components/sections/Banner';
import { FAQ } from '@/components/sections/FAQ';
import { PorqueIrrigar } from '@/components/sections/PorqueIrrigar';
import { Produtos } from '@/components/sections/Produtos';

export default function Home() {
  return (
    <div className=''>
      <Banner />

      <PorqueIrrigar />
      <main className=''>
        <FAQ />
      </main>
      <AumentandoLucros />
      <Produtos />
    </div>
  );
}
