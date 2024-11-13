import { SectionInfo } from "@/components/ui/section-info";

export function AumentandoLucros() {
  return (
    <SectionInfo
      invertDirection
      darkMode
      id="lucros"
      title="Aumentando Lucros"
      subTitle="água, o ouro da agricultura"
      image={{
        src: "/images/lucro_agro.png",
        alt: "colunas de gráficos com uma seta em cima que sobe com notas de dinheiro e moedas na sua frente",
      }}
      text="<p>Em um mundo cada vez mais suscetível às mudanças climáticas, a irrigação tornou-se o um trunfo indispensável. Assim como o ouro no passado, <b>a água é o recurso mais valioso que um agricultor pode ter em mãos.</b>
        <br/><br/> Imagine uma fazenda de 10 hectares, localizada em uma região marcada pela escassez hídrica. Sem acesso à irrigação, o produtor luta contra as secas recorrentes, obtendo uma produtividade média de apenas 40 sacas de soja por hectare. Com uma receita bruta anual de R$ 56.000 e lucro de R$ 21.000, esse cenário representa um desafio constante para a sustentabilidade do negócio.
        <br/><br/> Agora, visualize essa mesma fazenda com um sistema de irrigação. A produtividade média salta para incríveis 55 sacas de soja por hectare, elevando a receita bruta para R$ 77.000 e o lucro para impressionantes R$ 32.000. Isso representa um <b>aumento de 52% no lucro anual!</b>
        <br/><br/> Água é vida, e para o produtor rural, <b>a água é seu ouro</b> - a chave para colher fartos resultados, mesmo em tempos de escassez. Ao investir na irrigação, o agricultor se protege contra as intempéries, garante a produtividade de suas culturas e alavanca seus ganhos financeiros.
        <br/><br/><b> Não deixe que a sua fazenda fique à mercê das secas!"
    />
  );
}
