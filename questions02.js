const questions = [
const questions = [
  {
    question: 'Qual tipo de cabo Ethernet não possui blindagem?',
    options: ['STP', 'FTP', 'UTP', 'SFTP'],
    answer: 'UTP',
    clue: 'UTP não possui blindagem. Em prova: UTP = sem blindagem.',
  },
  {
    question:
      'Qual categoria de cabo é comumente usada para Gigabit Ethernet (1 Gbps) em redes corporativas?',
    options: ['Cat3', 'Cat5', 'Cat5e', 'Cat4'],
    answer: 'Cat5e',
    clue: 'Cat5e suporta 1 Gbps com estabilidade.',
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
    clue: 'Cabos de cobre sofrem com ruído elétrico.',
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
    clue: 'Limite padrão: 90m + 10m = 100m.',
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
    clue: 'Usado para PC-PC, switch-switch, roteador-roteador.',
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
    clue: 'Detecta e ajusta automaticamente o tipo de cabo.',
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
    clue: 'Monomodo = longa distância.',
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
    clue: 'Multimodo = curta distância.',
  },
  {
    question: 'Qual conector é mais comum em cabos de par trançado Ethernet?',
    options: ['SC', 'LC', 'RJ45', 'BNC'],
    answer: 'RJ45',
    clue: 'Conector padrão de Ethernet cobre.',
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
    clue: 'Fibra transmite luz, não sinal elétrico.',
  },
  {
    question: 'Qual conector é mais comum em redes de fibra óptica modernas?',
    options: ['RJ11', 'BNC', 'LC', 'RJ45'],
    answer: 'LC',
    clue: 'Pequeno e ideal para alta densidade.',
  },
  {
    question: 'Qual conector de fibra é conhecido por seu encaixe quadrado?',
    options: ['LC', 'SC', 'ST', 'RJ45'],
    answer: 'SC',
    clue: 'Formato quadrado.',
  },
  {
    question:
      'Qual conector era muito utilizado em redes Ethernet antigas com cabo coaxial?',
    options: ['RJ45', 'SC', 'LC', 'BNC'],
    answer: 'BNC',
    clue: 'Usado em redes coaxiais antigas.',
  },
  {
    question:
      'Qual conector de fibra utiliza um sistema de encaixe tipo baioneta, com giro e trava?',
    options: ['SC', 'LC', 'ST', 'RJ45'],
    answer: 'ST',
    clue: 'Sistema de giro e trava.',
  },
  {
    question:
      'Qual conector é mais comum em linhas telefônicas, não sendo padrão para Ethernet?',
    options: ['RJ11', 'RJ45', 'LC', 'SC'],
    answer: 'RJ11',
    clue: 'Padrão de telefonia.',
  },
  {
    question:
      'Qual conector de fibra óptica é menor e mais compacto, permitindo maior densidade em switches?',
    options: ['SC', 'ST', 'LC', 'BNC'],
    answer: 'LC',
    clue: 'Permite maior número de portas.',
  },
  {
    question:
      'Qual padrão de pinagem é mais utilizado em redes corporativas para cabos Ethernet diretos?',
    options: ['T568A', 'T568B', 'Cross-over', 'Coaxial'],
    answer: 'T568B',
    clue: 'Padrão mais comum em redes corporativas.',
  },
    {
    question: 'Qual camada do modelo OSI é responsável pelo endereçamento lógico e roteamento?',
    options: ['Camada Física', 'Camada de Enlace', 'Camada de Rede', 'Camada de Transporte'],
    answer: 'Camada de Rede',
    clue: 'Camada 3 trabalha com IP e roteamento.',
  },
  {
    question: 'Qual protocolo é utilizado para descobrir o endereço MAC correspondente a um endereço IP?',
    options: ['DNS', 'ARP', 'DHCP', 'ICMP'],
    answer: 'ARP',
    clue: 'Resolve IP para MAC dentro da rede local.',
  },
  {
    question: 'Qual é o endereço IP padrão de broadcast em uma rede 192.168.1.0/24?',
    options: ['192.168.1.0', '192.168.1.1', '192.168.1.254', '192.168.1.255'],
    answer: '192.168.1.255',
    clue: 'Em /24, o último endereço é o broadcast.',
  },
  {
    question: 'Quantos hosts válidos existem em uma rede /26?',
    options: ['62', '64', '30', '126'],
    answer: '62',
    clue: '64 endereços totais menos rede e broadcast.',
  },
  {
    question: 'Qual é a máscara decimal correspondente ao prefixo /27?',
    options: ['255.255.255.0', '255.255.255.224', '255.255.255.240', '255.255.255.192'],
    answer: '255.255.255.224',
    clue: '/27 equivale a blocos de 32 endereços.',
  },
  {
    question: 'Qual é a função principal do protocolo ICMP?',
    options: ['Transferência de arquivos', 'Resolução de nomes', 'Mensagens de erro e diagnóstico', 'Atribuição automática de IP'],
    answer: 'Mensagens de erro e diagnóstico',
    clue: 'Ping usa ICMP.',
  },
  {
    question: 'Qual é o intervalo de endereços privados da classe C?',
    options: ['10.0.0.0 a 10.255.255.255', '172.16.0.0 a 172.31.255.255', '192.168.0.0 a 192.168.255.255', '169.254.0.0 a 169.254.255.255'],
    answer: '192.168.0.0 a 192.168.255.255',
    clue: 'Faixa privada classe C mais comum.',
  },
  {
    question: 'O que significa CIDR?',
    options: [
      'Classless Inter-Domain Routing',
      'Central Internet Data Routing',
      'Cisco Internal Data Routing',
      'Class Internal Domain Routing',
    ],
    answer: 'Classless Inter-Domain Routing',
    clue: 'Permite uso flexível de máscaras.',
  },
  {
    question: 'Qual dispositivo opera principalmente na Camada 2 do modelo OSI?',
    options: ['Roteador', 'Switch', 'Firewall', 'Servidor DNS'],
    answer: 'Switch',
    clue: 'Switch tradicional trabalha com MAC address.',
  },
  {
    question: 'Qual é a principal função do DNS?',
    options: [
      'Converter IP em MAC',
      'Atribuir IP automaticamente',
      'Resolver nomes em endereços IP',
      'Criptografar tráfego',
    ],
    answer: 'Resolver nomes em endereços IP',
    clue: 'Traduz nome de domínio para IP.',
  },
];


// 17 Questoes 18/02/2026


];

// 25 Questoes 18/02/2026
// Tota 25 +
