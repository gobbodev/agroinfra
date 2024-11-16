import { SectionInfo } from '@/components/ui/section-info';

export function PorqueIrrigar() {
  return (
    <SectionInfo
      id='irrigacao'
      title='Porque Irrigar?'
      subTitle='evite perdas na colheita'
      text='<p> Você não pode mais depender apenas da chuva. Os tempos mudaram. Aquele calendário agrícola que seu pai e seu avô seguiam já <b>não funciona mais.</b> As chuvas que antes eram regulares agora são <b>irregulares</b> e <b>imprevisíveis</b>. Em um momento, sua plantação pode estar sofrendo com a seca; em outro, enfrentando chuvas torrenciais.
        <br/><br/>
        Um sistema de irrigação bem planejado economiza água e reduz desperdícios, tornando sua produção <b>mais sustentável e lucrativa</b>. Irrigar é proteger seu investimento, garantir a qualidade dos seus produtos e, acima de tudo, assegurar que sua colheita não dependa do imprevisível.</p>'
      image={{
        src: '/images/homem_preocupado.png',
        alt: 'um homem com um lapis na mão subindo uma escada verde em formato de seta, existem setas subindo para cima ao seu lado também',
      }}
    />
  );
}
