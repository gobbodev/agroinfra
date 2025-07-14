import { SectionInfo } from "@/components/ui/section-info";

export function PorqueIrrigar() {
  return (
    <SectionInfo
      id="irrigacao"
      title="Porque Irrigar?"
      subTitle="evite perdas na colheita"
      text="A irrigação é uma prática agrícola que visa complementar a água da chuva, <b>fornecendo água de forma artificial para as culturas</b>, especialmente quando as <b>precipitações naturais são insuficientes ou irregulares.</b>  Isso é feito para garantir que as plantas recebam a <b>quantidade adequada de água para seu desenvolvimento e produção</b>, mesmo em regiões com clima seco ou durante períodos de estiagem."
      image={{
        src: "/images/homem_preocupado.png",
        alt: "um homem com um lapis na mão subindo uma escada verde em formato de seta, existem setas subindo para cima ao seu lado também",
      }}
    />
  );
}
