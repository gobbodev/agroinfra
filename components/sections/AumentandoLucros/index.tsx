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
            text={`
        <p>Para analisar os resultados de investimentos em irrigação, utilizamos métodos e ferramentas que avaliam a viabilidade econômica, a eficiência do sistema e a sustentabilidade da produção. Esses métodos incluem análise de fluxo de caixa, indicadores de eficiência econômica como a taxa de retorno simples, e ferramentas de análise de desempenho da irrigação.</p>
        <br/>
        <h5>Análise da Viabilidade Econômica:</h5>
        <p><strong>Análise de Fluxo de Caixa:</strong> Reúne argumentos e informações para construir os fluxos de caixa esperados em cada período do investimento, aplicando técnicas para avaliar a viabilidade econômico-financeira.</p>
        <p><strong>Indicadores de Eficiência Econômica:</strong></p>
        <ul>
          <li><strong>Receita Líquida:</strong> Diferença entre a receita total e os custos totais do investimento.</li>
          <li><strong>Taxa de Retorno Simples:</strong> Relação entre a receita líquida anual e o custo total anual. Quanto maior a taxa, maior a rentabilidade.</li>
          <li><strong>Tempo de Retorno do Capital:</strong> Período necessário para recuperar o valor investido.</li>
        </ul>
        <p><strong>Análise de Sensibilidade:</strong> Avalia como as mudanças em variáveis-chave (como preço da água, custo de energia, etc.) afetam a viabilidade do projeto.</p>
        <br/>
        <h5>Análise de Eficiência do Sistema de Irrigação:</h5>
        <p><strong>Análise de Desempenho:</strong> Avalia a uniformidade da distribuição de água, a eficiência da aplicação e o consumo de água e energia do sistema.</p>
        <p><strong>Monitoramento da Umidade do Solo:</strong> Utilização de sensores e tecnologias para mapear a umidade do solo e ajustar a irrigação de acordo com as necessidades da cultura, otimizando o uso da água.</p>
        <p><strong>Análise da Qualidade da Água:</strong> Avalia a qualidade da água para fins de irrigação, identificando possíveis problemas que possam afetar a cultura e o sistema.</p>
        <br/>
        <h5>Ferramentas e Tecnologias:</h5>
        <ul>
          <li><strong>Softwares de Simulação:</strong> Permitem simular diferentes cenários de irrigação, avaliar o desempenho de sistemas e otimizar a gestão da água.</li>
          <li><strong>Sistemas de Monitoramento Remoto:</strong> Permitem o acompanhamento da umidade do solo, o clima e o desempenho do sistema à distância, facilitando a tomada de decisões.</li>
          <li><strong>Sensores:</strong> Utilizados para medir parâmetros como umidade do solo, temperatura, evapotranspiração e outros dados relevantes para o manejo da irrigação.</li>
          <li><strong>Plataformas de Análise de Dados:</strong> Permitem coletar, processar e analisar grandes volumes de dados para otimizar a irrigação e a gestão da fazenda.</li>
        </ul>
        <br/>
        <p>Ao combinar esses métodos e ferramentas, é possível tomar decisões mais assertivas sobre os investimentos em irrigação, maximizando a eficiência, a sustentabilidade e a lucratividade da produção agrícola.</p>
      `}
    />
  );
}
