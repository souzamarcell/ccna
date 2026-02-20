function loadQuestions03() {
  return [
    {
      num: 1,
      question: 'Uma empresa utiliza switches conectados a um único switch central. Quando o switch central falha, toda a rede fica indisponível. Qual topologia física está sendo utilizada?',
      options: ['Malha completa', 'Barramento', 'Estrela', 'Anel'],
      answer: 'Estrela',
      clue: 'Existe um ponto único de falha central.',
    },
    {
      num: 2,
      question: 'Qual característica é típica de uma topologia malha completa?',
      options: [
        'Baixo custo e fácil implementação',
        'Cada dispositivo conecta-se a todos os outros',
        'Dependência de um backbone único',
        'Uso exclusivo de cabo coaxial'
      ],
      answer: 'Cada dispositivo conecta-se a todos os outros',
      clue: 'Malha completa elimina ponto único de falha.',
    },
    {
      num: 3,
      question: 'Um ambiente exige alta disponibilidade entre 5 roteadores WAN. Qual topologia oferece maior redundância nativa?',
      options: ['Estrela', 'Barramento', 'Malha completa', 'Ponto a ponto'],
      answer: 'Malha completa',
      clue: 'Cada roteador possui múltiplos caminhos.',
    },
    {
      num: 4,
      question: 'Qual desvantagem clássica da topologia barramento impacta diretamente desempenho?',
      options: [
        'Alto consumo de portas',
        'Colisões em meio compartilhado',
        'Custo elevado de cabeamento',
        'Excesso de links redundantes'
      ],
      answer: 'Colisões em meio compartilhado',
      clue: 'Barramento usa meio compartilhado.',
    },
    {
      num: 5,
      question: 'Uma rede em estrela utiliza um hub como dispositivo central. Qual problema pode ocorrer?',
      options: [
        'Loop de camada 3',
        'Domínio de colisão único',
        'Roteamento incorreto',
        'Fragmentação excessiva'
      ],
      answer: 'Domínio de colisão único',
      clue: 'Hub opera na camada 1.',
    },
    {
      num: 6,
      question: 'Qual afirmação diferencia malha parcial de malha completa?',
      options: [
        'Malha parcial elimina qualquer falha',
        'Malha parcial reduz custo mantendo alguma redundância',
        'Malha completa usa backbone',
        'Malha parcial usa apenas switches'
      ],
      answer: 'Malha parcial reduz custo mantendo alguma redundância',
      clue: 'Nem todos os nós se conectam entre si.',
    },
    {
      num: 7,
      question: 'Em qual topologia a adição de novos dispositivos tende a aumentar significativamente o número de conexões físicas?',
      options: ['Estrela', 'Barramento', 'Malha completa', 'Árvore'],
      answer: 'Malha completa',
      clue: 'Número de links cresce exponencialmente.',
    },
    {
      num: 8,
      question: 'Qual cenário indica topologia lógica diferente da física?',
      options: [
        'Switch central com cabeamento radial',
        'Rede com switches em estrela operando Ethernet',
        'Rede com MAU Token Ring',
        'Rede Wi-Fi corporativa'
      ],
      answer: 'Rede com MAU Token Ring',
      clue: 'Fisicamente estrela, logicamente anel.',
    },
    {
      num: 9,
      question: 'Uma falha em um cabo individual não impacta os demais hosts. Qual topologia física apresenta esse comportamento?',
      options: ['Barramento', 'Estrela', 'Malha completa', 'Anel simples'],
      answer: 'Estrela',
      clue: 'Cada host possui link dedicado ao central.',
    },
    {
      num: 10,
      question: 'Qual característica torna a topologia barramento inadequada para redes modernas?',
      options: [
        'Uso obrigatório de fibra',
        'Impossibilidade de usar IP',
        'Escalabilidade limitada e colisões',
        'Necessidade de roteadores'
      ],
      answer: 'Escalabilidade limitada e colisões',
      clue: 'Meio compartilhado prejudica expansão.',
    },
    {
      num: 11,
      question: 'Uma empresa deseja reduzir custo mantendo redundância mínima entre 4 filiais. Qual topologia WAN é mais indicada?',
      options: ['Malha completa', 'Estrela', 'Barramento', 'Malha parcial'],
      answer: 'Malha parcial',
      clue: 'Equilíbrio entre custo e disponibilidade.',
    },
    {
      num: 12,
      question: 'Qual topologia depende fortemente de protocolo como STP para evitar loops?',
      options: ['Barramento', 'Estrela com switches redundantes', 'Malha lógica de hub', 'Ponto a ponto'],
      answer: 'Estrela com switches redundantes',
      clue: 'Redundância em camada 2 gera loops.',
    },
    {
      num: 13,
      question: 'Em termos de troubleshooting, qual topologia facilita isolamento de falha de cabo?',
      options: ['Barramento', 'Estrela', 'Malha completa', 'Anel lógico'],
      answer: 'Estrela',
      clue: 'Falha afeta apenas um segmento.',
    },
    {
      num: 14,
      question: 'Qual é a principal vantagem da topologia malha em ambientes críticos?',
      options: [
        'Baixo custo',
        'Configuração simples',
        'Alta tolerância a falhas',
        'Menor consumo de banda'
      ],
      answer: 'Alta tolerância a falhas',
      clue: 'Múltiplos caminhos disponíveis.',
    },
    {
      num: 15,
      question: 'Uma rede utiliza coaxial com terminadores em ambas extremidades. Qual topologia está representada?',
      options: ['Estrela', 'Barramento', 'Malha', 'Árvore'],
      answer: 'Barramento',
      clue: 'Coaxial com terminadores é clássico do barramento.',
    },
    {
      num: 16,
      question: 'Se o dispositivo central falha em uma estrela, qual impacto ocorre?',
      options: [
        'Apenas um host cai',
        'Somente metade da rede cai',
        'Toda a rede fica indisponível',
        'Nenhum impacto'
      ],
      answer: 'Toda a rede fica indisponível',
      clue: 'Ponto único de falha.',
    },
    {
      num: 17,
      question: 'Qual topologia apresenta maior complexidade de cabeamento?',
      options: ['Barramento', 'Estrela simples', 'Malha completa', 'Ponto a ponto único'],
      answer: 'Malha completa',
      clue: 'Todos conectam com todos.',
    },
    {
      num: 18,
      question: 'Em uma topologia estrela moderna com switches, o domínio de colisão é:',
      options: [
        'Único para todos',
        'Dividido por porta',
        'Inexistente em half duplex',
        'Compartilhado por VLAN'
      ],
      answer: 'Dividido por porta',
      clue: 'Switch cria microsegmentação.',
    },
    {
      num: 19,
      question: 'Qual topologia é mais comum em redes Ethernet corporativas atuais?',
      options: ['Barramento', 'Estrela com switches', 'Malha coaxial', 'Anel físico'],
      answer: 'Estrela com switches',
      clue: 'Modelo padrão Ethernet moderno.',
    },
    {
      num: 20,
      question: 'Qual fator limita adoção de malha completa em larga escala?',
      options: [
        'Baixa redundância',
        'Excesso de broadcast',
        'Custo e complexidade exponencial',
        'Incompatibilidade com IP'
      ],
      answer: 'Custo e complexidade exponencial',
      clue: 'Número de links cresce rapidamente.',
    },
    {
      num: 21,
      question: 'Uma rede Wi-Fi com AP central conectado a switch representa fisicamente qual topologia?',
      options: ['Barramento', 'Estrela', 'Malha completa', 'Anel'],
      answer: 'Estrela',
      clue: 'Todos convergem para ponto central.',
    },
    {
      num: 22,
      question: 'Qual topologia foi amplamente usada nas primeiras implementações Ethernet 10BASE2?',
      options: ['Estrela', 'Barramento', 'Malha', 'Árvore'],
      answer: 'Barramento',
      clue: 'Coaxial fino compartilhado.',
    },
    {
      num: 23,
      question: 'Qual topologia minimiza impacto de falha individual de link em WAN?',
      options: ['Estrela simples', 'Barramento WAN', 'Malha parcial ou completa', 'Ponto único'],
      answer: 'Malha parcial ou completa',
      clue: 'Existem caminhos alternativos.',
    },
    {
      num: 24,
      question: 'Em uma estrela com dois switches centrais redundantes interligados, a topologia resultante tende a se aproximar de:',
      options: ['Barramento', 'Malha parcial', 'Anel puro', 'Ponto a ponto único'],
      answer: 'Malha parcial',
      clue: 'Há múltiplos caminhos entre nós.',
    },
    {
      num: 25,
      question: 'Qual topologia apresenta maior facilidade de expansão adicionando um único cabo por host?',
      options: ['Malha completa', 'Barramento', 'Estrela', 'Anel'],
      answer: 'Estrela',
      clue: 'Conecta direto ao dispositivo central.',
    },
    {
      num: 26,
      question: 'Qual topologia física pode operar logicamente como barramento em Ethernet tradicional?',
      options: ['Estrela com hub', 'Malha completa', 'Ponto a ponto roteado', 'Árvore IP'],
      answer: 'Estrela com hub',
      clue: 'Hub replica sinal para todas portas.',
    },
    {
      num: 27,
      question: 'Qual característica define claramente topologia barramento?',
      options: [
        'Backbone único compartilhado',
        'Switch central inteligente',
        'Conexões redundantes totais',
        'Encaminhamento por roteador'
      ],
      answer: 'Backbone único compartilhado',
      clue: 'Todos dependem do mesmo meio.',
    },
    {
      num: 28,
      question: 'Em malha completa com 4 roteadores, quantos links são necessários?',
      options: ['4', '5', '6', '8'],
      answer: '6',
      clue: 'Fórmula n(n-1)/2.',
    },
    {
      num: 29,
      question: 'Qual topologia apresenta maior risco de interrupção total por falha de cabo backbone?',
      options: ['Estrela', 'Malha', 'Barramento', 'Malha parcial'],
      answer: 'Barramento',
      clue: 'Backbone único é crítico.',
    },
    {
      num: 30,
      question: 'Qual afirmação está correta sobre topologias modernas?',
      options: [
        'Barramento é padrão atual',
        'Malha completa é sempre usada em LAN',
        'Estrela com switches domina LAN corporativa',
        'Todas usam coaxial'
      ],
      answer: 'Estrela com switches domina LAN corporativa',
      clue: 'Modelo padrão Ethernet atual.',
    },
  ];
}
