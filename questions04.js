function loadQuestions04() {
  return [
{
      num: 1,
      question: 'O que um roteador faz ao receber um quadro e analisar o IP de destino?',
      options: ['Encapsulamento', 'Desencapsulamento', 'Segmentação', 'Modulação'],
      answer: 'Desencapsulamento',
      clue: 'Ele remove as camadas inferiores para ler a camada de Rede (IP).',
    },
    {
      num: 2,
      question: 'Qual é a PDU correspondente à Camada 2 do modelo OSI?',
      options: ['Pacote', 'Segmento', 'Quadro', 'Bit'],
      answer: 'Quadro',
      clue: 'A Camada de Enlace trabalha com Quadros (Frames).',
    },
    {
      num: 3,
      question: 'Em qual camada do modelo OSI operam os protocolos TCP e UDP?',
      options: ['Sessão', 'Rede', 'Transporte', 'Aplicação'],
      answer: 'Transporte',
      clue: 'TCP e UDP cuidam do transporte de dados ponta a ponta.',
    },
    {
      num: 4,
      question: 'Um switch de Camada 2 baseia suas decisões em qual endereço?',
      options: ['IP de destino', 'MAC de destino', 'Porta TCP', 'Endereço lógico'],
      answer: 'MAC de destino',
      clue: 'Switches usam a tabela MAC para encaminhar dados.',
    },
    {
      num: 5,
      question: 'Qual camada é responsável pela criptografia e compressão?',
      options: ['Aplicação', 'Sessão', 'Apresentação', 'Rede'],
      answer: 'Apresentação',
      clue: 'Ela garante que os dados sejam legíveis para a aplicação.',
    },
    {
      num: 6,
      question: 'O protocolo ICMP (usado no ping) opera em qual camada?',
      options: ['Física', 'Rede', 'Transporte', 'Enlace'],
      answer: 'Rede',
      clue: 'O ICMP auxilia o IP em diagnósticos na Camada 3.',
    },
    {
      num: 7,
      question: 'Qual subcamada da Camada 2 faz a ponte com a Camada de Rede?',
      options: ['MAC', 'LLC', 'ARP', 'Física'],
      answer: 'LLC',
      clue: 'O Logical Link Control identifica os protocolos de rede.',
    },
    {
      num: 8,
      question: 'O que a Camada de Enlace adiciona ao Pacote além do cabeçalho?',
      options: ['Rodapé (Trailer)', 'Porta TCP', 'IP de Origem', 'Nada'],
      answer: 'Rodapé (Trailer)',
      clue: 'Ela adiciona o FCS no trailer para checar erros.',
    },
    {
      num: 9,
      question: 'Qual destes dispositivos é considerado Camada 1 (Física)?',
      options: ['Switch', 'Roteador', 'Hub', 'Firewall'],
      answer: 'Hub',
      clue: 'O Hub apenas replica sinais elétricos (bits).',
    },
    {
      num: 10,
      question: 'As camadas 5, 6 e 7 do OSI equivalem a qual camada no TCP/IP?',
      options: ['Internet', 'Acesso à Rede', 'Aplicação', 'Transporte'],
      answer: 'Aplicação',
      clue: 'O modelo TCP/IP agrupa o topo do OSI em uma só camada.',
    },

  ];
}
