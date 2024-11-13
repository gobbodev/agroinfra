import { SectionInfo } from "@/components/ui/section-info";

export function PorqueIrrigar() {
  return (
      <SectionInfo
        title="Porque Irrigar?"
        subTitle="evite perdas na colheta"
        text="<p> Você não pode mais depender apenas da chuva. Os tempos mudaram. Aquele calendário agrícola que seu pai e seu avô seguiam já não funciona mais. As chuvas que antes eram regulares agora são irregulares e imprevisíveis. Em um momento, sua plantação pode estar sofrendo com a seca; em outro, enfrentando chuvas torrenciais.
        <br/><br/>
        Um sistema de irrigação bem planejado economiza água e reduz desperdícios, tornando sua produção mais sustentável e lucrativa. Irrigar é proteger seu investimento, garantir a qualidade dos seus produtos e, acima de tudo, assegurar que sua colheita não dependa do imprevisível.</p>"
        image={{
          src: "/images/homem_preocupado.png",
          alt: "homem preocupado pensando e sentado em uma cadeira ",
        }}
      />
  );
}
