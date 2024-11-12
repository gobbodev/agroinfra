import { Container } from "@/components/ui/container";
import { SectionInfo } from "@/components/ui/section-info";

export function PorqueIrrigar() {
  return (
    <Container>
      <SectionInfo
        title="Porque Irrigar?"
        subTitle="evite perdas na colheta"
        text="<p>A irrigação é a chave para garantir uma colheita abundante e saudável. Com as mudanças climáticas e a irregularidade das chuvas, depender exclusivamente do clima é arriscado e pode trazer grandes perdas. Ao irrigar sua plantação, você assume o controle do crescimento das suas culturas, proporcionando a quantidade ideal de água para que cada planta se desenvolva ao máximo.
        <br/><br/>
        Além disso, um sistema de irrigação bem planejado economiza água e reduz desperdícios, tornando sua produção mais sustentável e lucrativa. Irrigar é proteger seu investimento, garantir a qualidade dos seus produtos e, acima de tudo, assegurar que sua colheita não dependa do imprevisível.</p>"
        image={{
          src: "/images/homem_preocupado.png",
          alt: "homem preocupado pensando e sentado em uma cadeira ",
        }}
      />
    </Container>
  );
}
