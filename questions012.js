function loadQuestions012() {
  return [
    {
      num: 1,
      question:
        'Uma empresa utiliza um switch central conectando todos os computadores. Se o switch falhar, toda a rede para. Essa topologia é:',
      options: ['Malha completa', 'Estrela', 'Barramento', 'Anel'],
      answer: ['Estrela'],
      clue: 'Topologia estrela possui ponto central que pode ser ponto único de falha.',
      Tip: 'Topologia.',
    },
    {
      num: 2,
      question:
        'Se a questão mencionar “alta redundância e múltiplos caminhos alternativos”, provavelmente está se referindo a qual topologia?',
      options: ['Barramento', 'Estrela simples', 'Malha', 'Topologia linear'],
      answer: ['Malha'],
      clue: 'Múltiplos caminhos são característica da malha.',
      Tip: 'Topologia.',
    },
    {
      num: 3,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma empresa interliga matriz e filiais em diferentes estados usando MPLS fornecido por uma operadora. Quais duas características são típicas desse cenário?',
      options: [
        'Dependência de provedor externo',
        'Controle total da infraestrutura física fim a fim',
        'Possibilidade de aplicar QoS no tráfego WAN',
        'Uso exclusivo de switches Layer 2',
      ],
      answer: [
        'Dependência de provedor externo',
        'Possibilidade de aplicar QoS no tráfego WAN',
      ],
      clue: 'MPLS depende de operadora e permite priorização de tráfego.',
    },
  ];
}
