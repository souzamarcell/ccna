const questions = [
  {
    question: 'Qual tipo de cabo Ethernet não possui blindagem?',
    options: ['STP', 'FTP', 'UTP', 'SFTP'],
    answer: 'UTP',
    clue: 'UTP: Unshielded Twisted Pair. Ele não tem blindagem, apenas os pares trançados. É o mais comum em escritórios e residências. Em prova: UTP = sem blindagem. STP, FTP e SFTP possuem algum tipo de blindagem.',
  },

  {
    question:
      'Qual categoria de cabo é comumente usada para Gigabit Ethernet (1 Gbps) em redes corporativas?',
    options: ['Cat3', 'Cat5', 'Cat5e', 'Cat4'],
    answer: 'Cat5e',
    clue: 'O Cat5e foi projetado para suportar 1 Gbps com estabilidade. É muito usado em redes corporativas por custo e desempenho. Cat5 comum não é mais recomendado.',
  },

  {
    question:
      'Qual fator mais afeta negativamente cabos de par trançado de cobre?',
    options: [
      'Luz solar',
      'Interferência eletromagnética',
      'Umidade do ar',
      'Temperatura ambiente',
    ],
    answer: 'Interferência eletromagnética',
    clue: 'Cabos de cobre sofrem com ruído elétrico de motores, máquinas e cabos energizados. O trançamento existe justamente para reduzir esse problema.',
  },

  {
    question: 'Em um enlace Ethernet padrão, qual afirmação está correta?',
    options: [
      'O cabo pode ter até 200 metros sem perda',
      'O limite é definido apenas pelo switch',
      'O comprimento máximo é 100 metros',
      'Depende apenas da categoria do conector',
    ],
    answer: 'O comprimento máximo é 100 metros',
    clue: 'Valor clássico de prova. São 90 metros de cabo horizontal mais 10 metros de patch cords. Passou disso, começa perda de sinal.',
  },

  {
    question: 'Quando um cabo crossover é tradicionalmente utilizado?',
    options: [
      'Para ligar computador a switch',
      'Para ligar switch a roteador',
      'Para ligar dispositivos do mesmo tipo',
      'Para conexões de fibra óptica',
    ],
    answer: 'Para ligar dispositivos do mesmo tipo',
    clue: 'Tradicionalmente usado para PC com PC, switch com switch e roteador com roteador. Hoje o Auto MDI-X reduziu essa necessidade, mas ainda cai em prova.',
  },

  {
    question: 'O que a tecnologia Auto MDI-X permite?',
    options: [
      'Aumentar a velocidade do cabo',
      'Detectar falhas de fibra',
      'Usar cabo direto ou crossover automaticamente',
      'Reduzir interferência eletromagnética',
    ],
    answer: 'Usar cabo direto ou crossover automaticamente',
    clue: 'Essa tecnologia detecta o tipo de conexão e ajusta internamente. Resultado: você não precisa se preocupar com o tipo de cabo.',
  },

  {
    question: 'Qual característica é típica da fibra óptica monomodo?',
    options: [
      'Curta distância e baixo custo',
      'Usa vários caminhos de luz',
      'Longas distâncias e alta velocidade',
      'Sensível a interferência elétrica',
    ],
    answer: 'Longas distâncias e alta velocidade',
    clue: 'A monomodo usa um único feixe de luz com menos dispersão. Ideal para backbone e longas distâncias. Em prova: Monomodo = longa distância.',
  },

  {
    question: 'A fibra óptica multimodo é mais indicada para:',
    options: [
      'Links entre cidades',
      'Longas distâncias acima de 100 km',
      'Conexões internas e curtas distâncias',
      'Ambientes com alta voltagem elétrica',
    ],
    answer: 'Conexões internas e curtas distâncias',
    clue: 'A multimodo usa vários caminhos de luz, o que limita a distância. Muito comum em data centers e prédios. Em prova: Multimodo = curta distância.',
  },

  {
    question: 'Qual conector é mais comum em cabos de par trançado Ethernet?',
    options: ['SC', 'LC', 'RJ45', 'BNC'],
    answer: 'RJ45',
    clue: 'RJ45 é o conector padrão para cabos Ethernet de cobre. SC e LC são de fibra. BNC é coaxial.',
  },

  {
    question:
      'Por que a fibra óptica é considerada mais segura que o cabo de cobre?',
    options: [
      'Usa voltagem mais alta',
      'Não pode ser cortada',
      'Não emite sinais elétricos',
      'Funciona apenas em redes privadas',
    ],
    answer: 'Não emite sinais elétricos',
    clue: 'Fibra transmite luz, não sinal elétrico. Isso dificulta interceptação e interferência, tornando a comunicação mais segura.',
  },
];
