import { SectionInfo } from '@/components/ui/section-info';

export function SobreNos() {
  return (
    <SectionInfo
      id='sobre'
      image={{
        src: '/images/homem_subindo.png',
        alt: 'o chão de um campo de milho bem perto, com a perna de um homem calçando uma bota marrom sob o campo',
      }}
      title='Sobre nós'
      subTitle='experiência faz a diferança'
      text='<p><b>AgroInfra - Excelência em Irrigação há Mais de 30 Anos</b>
      <br/><br/>
      A AgroInfra é referência em projetos e serviços de irrigação, com mais de <b>30 anos de experiência</b> no mercado. Nossa equipe de especialistas desenvolve soluções personalizadas que aumentam a produtividade agrícola, aliando tecnologia de ponta e sustentabilidade.
      <br/><br/>
      Com sistemas eficientes como pivôs, carretéis e gotejamento, oferecemos qualidade e confiança para atender às necessidades do agronegócio. <b>AgroInfra: soluções que irrigam o campo e impulsionam o futuro.</b></p>'
      invertContent
      darkMode
    />
  );
}
