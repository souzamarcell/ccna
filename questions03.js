function loadQuestions03() {
  return [
    {
      question: 'Qual tipo de cabo Ethernet não possui blindagem?',
      options: ['STP', 'FTP', 'UTP', 'SFTP'],
      answer: 'UTP',
      clue: 'UTP não possui blindagem.',
    },
    {
      question:
        'Qual categoria de cabo é comumente usada para Gigabit Ethernet (1 Gbps) em redes corporativas?',
      options: ['Cat3', 'Cat5', 'Cat5e', 'Cat4'],
      answer: 'Cat5e',
      clue: 'Cat5e suporta 1 Gbps.',
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
      clue: 'Cobre sofre com ruído elétrico.',
    },
    {
      question:
        'Em um enlace Ethernet padrão, qual é o comprimento máximo recomendado?',
      options: [
        '200 metros',
        'Depende apenas do switch',
        '100 metros',
        'Depende do conector',
      ],
      answer: '100 metros',
      clue: '90m + 10m = 100m.',
    },
    {
      question: 'Quando um cabo crossover é tradicionalmente utilizado?',
      options: [
        'PC para switch',
        'Switch para roteador',
        'Dispositivos do mesmo tipo',
        'Fibra óptica',
      ],
      answer: 'Dispositivos do mesmo tipo',
      clue: 'PC-PC ou switch-switch.',
    },
    {
      question: 'O que a tecnologia Auto MDI-X permite?',
      options: [
        'Aumentar velocidade',
        'Detectar falhas de fibra',
        'Usar direto ou crossover automaticamente',
        'Reduzir interferência',
      ],
      answer: 'Usar direto ou crossover automaticamente',
      clue: 'Detecta o tipo de cabo automaticamente.',
    },
    {
      question: 'Qual característica é típica da fibra óptica monomodo?',
      options: [
        'Curta distância',
        'Vários caminhos de luz',
        'Longas distâncias',
        'Sensível a interferência',
      ],
      answer: 'Longas distâncias',
      clue: 'Monomodo é usada para longas distâncias.',
    },
    {
      question: 'A fibra óptica multimodo é mais indicada para:',
      options: [
        'Entre cidades',
        'Acima de 100 km',
        'Curtas distâncias internas',
        'Alta voltagem',
      ],
      answer: 'Curtas distâncias internas',
      clue: 'Multimodo é usada em ambientes internos.',
    },
    {
      question: 'Qual conector é mais comum em cabos Ethernet de cobre?',
      options: ['SC', 'LC', 'RJ45', 'BNC'],
      answer: 'RJ45',
      clue: 'Padrão de rede Ethernet.',
    },
    {
      question: 'Por que a fibra óptica é mais segura que o cobre?',
      options: [
        'Alta voltagem',
        'Não pode ser cortada',
        'Não emite sinais elétricos',
        'Só redes privadas',
      ],
      answer: 'Não emite sinais elétricos',
      clue: 'Transmite luz.',
    },
    {
      question: 'Qual conector era usado em redes coaxiais antigas?',
      options: ['RJ45', 'SC', 'LC', 'BNC'],
      answer: 'BNC',
      clue: 'Usado em Ethernet coaxial.',
    },
    {
      question: 'Qual conector utiliza sistema de encaixe tipo baioneta?',
      options: ['SC', 'LC', 'ST', 'RJ45'],
      answer: 'ST',
      clue: 'Gira para travar.',
    },
    {
      question:
        'Qual padrão de pinagem é mais usado em cabos Ethernet diretos?',
      options: ['T568A', 'T568B', 'Cross-over', 'Coaxial'],
      answer: 'T568B',
      clue: 'Mais comum em redes corporativas.',
    },
    {
      question: 'Qual camada do OSI é responsável pelo roteamento?',
      options: ['Física', 'Enlace', 'Rede', 'Transporte'],
      answer: 'Rede',
      clue: 'Camada 3.',
    },
    {
      question: 'Qual protocolo resolve IP para MAC?',
      options: ['DNS', 'ARP', 'DHCP', 'ICMP'],
      answer: 'ARP',
      clue: 'Funciona na rede local.',
    },
    {
      question: 'Quantos hosts válidos existem em uma rede /26?',
      options: ['62', '64', '30', '126'],
      answer: '62',
      clue: '64 menos rede e broadcast.',
    },
    {
      question: 'Qual é a máscara decimal do prefixo /27?',
      options: [
        '255.255.255.0',
        '255.255.255.224',
        '255.255.255.240',
        '255.255.255.192',
      ],
      answer: '255.255.255.224',
      clue: 'Blocos de 32.',
    },
    {
      question: 'Qual é a função do ICMP?',
      options: ['Arquivos', 'Nomes', 'Diagnóstico', 'IP automático'],
      answer: 'Diagnóstico',
      clue: 'Ping usa ICMP.',
    },
    {
      question: 'O que significa CIDR?',
      options: [
        'Classless Inter-Domain Routing',
        'Central Internet Data Routing',
        'Cisco Internal Routing',
        'Class Internal Domain Routing',
      ],
      answer: 'Classless Inter-Domain Routing',
      clue: 'Permite máscaras variáveis.',
    },
    {
      question: 'Qual dispositivo opera na camada 2?',
      options: ['Roteador', 'Switch', 'Firewall', 'Servidor DNS'],
      answer: 'Switch',
      clue: 'Trabalha com MAC.',
    },
    {
      question: 'Qual é a principal função do DNS?',
      options: [
        'IP para MAC',
        'IP automático',
        'Resolver nomes',
        'Criptografar',
      ],
      answer: 'Resolver nomes',
      clue: 'Traduz nome em IP.',
    },
    {
      question: 'Quantos bits possui um endereço IPv4?',
      options: ['32', '64', '128', '48'],
      answer: '32',
      clue: '4 octetos.',
    },
    {
      question: 'Quantos bits possui um endereço IPv6?',
      options: ['32', '64', '128', '256'],
      answer: '128',
      clue: 'Muito maior que IPv4.',
    },
    {
      question: 'Qual é a função do gateway padrão?',
      options: [
        'Resolver nomes',
        'Enviar para outras redes',
        'Converter IP em MAC',
        'Filtrar vírus',
      ],
      answer: 'Enviar para outras redes',
      clue: 'Saída da rede.',
    },
    {
      question: 'Qual endereço IPv4 é reservado para loopback?',
      options: ['127.0.0.1', '0.0.0.0', '255.255.255.255', '169.254.1.1'],
      answer: '127.0.0.1',
      clue: 'Teste local.',
    },
    {
      question: 'Qual protocolo atribui IP automaticamente?',
      options: ['DNS', 'ARP', 'DHCP', 'ICMP'],
      answer: 'DHCP',
      clue: 'Configuração automática.',
    },
    {
      question: 'Qual é a função do endereço MAC?',
      options: [
        'Identificação lógica',
        'Identificação física local',
        'Criptografia',
        'Definir máscara',
      ],
      answer: 'Identificação física local',
      clue: 'Camada 2.',
    },
    {
      question: 'Qual tipo de comunicação envia para todos na rede?',
      options: ['Unicast', 'Multicast', 'Broadcast', 'Anycast'],
      answer: 'Broadcast',
      clue: 'Todos os dispositivos.',
    },
    {
      question: 'Qual tipo envia para um único destino?',
      options: ['Unicast', 'Broadcast', 'Multicast', 'Flood'],
      answer: 'Unicast',
      clue: 'Um para um.',
    },
    {
      question: 'Qual dispositivo encaminha pacotes entre redes diferentes?',
      options: ['Switch', 'Hub', 'Roteador', 'Access Point'],
      answer: 'Roteador',
      clue: 'Camada 3.',
    },
    // ------------------- 30 iniciais
    // ------------------- Criado pela ISO
    {
      question: 'Qual organização foi responsável pela criação do modelo OSI?',
      options: ['IEEE', 'ISO', 'IETF', 'Cisco'],
      answer: 'ISO',
      clue: 'O modelo OSI foi desenvolvido pela International Organization for Standardization.',
    },
    {
      question: 'Qual foi o principal objetivo da criação do modelo OSI?',
      options: [
        'Criar um protocolo de roteamento',
        'Padronizar a comunicação entre sistemas',
        'Substituir o TCP/IP',
        'Criar o protocolo Ethernet',
      ],
      answer: 'Padronizar a comunicação entre sistemas',
      clue: 'O modelo OSI foi criado para estabelecer um padrão de comunicação em camadas.',
    },
    {
      question: 'O modelo OSI é classificado como:',
      options: [
        'Protocolo de comunicação',
        'Modelo conceitual de referência',
        'Padrão exclusivo de switches',
        'Tecnologia de fibra óptica',
      ],
      answer: 'Modelo conceitual de referência',
      clue: 'O OSI não é um protocolo, é um modelo teórico dividido em 7 camadas.',
    },
    {
      question: 'Quantas camadas possui o modelo OSI criado pela ISO?',
      options: ['4 camadas', '5 camadas', '7 camadas', '8 camadas'],
      answer: '7 camadas',
      clue: 'O modelo OSI é dividido em sete camadas.',
    },
    {
      question: 'Qual alternativa descreve corretamente o modelo OSI?',
      options: [
        'Modelo prático usado diretamente na internet',
        'Modelo proprietário da Cisco',
        'Modelo de referência criado para padronização',
        'Protocolo da camada física',
      ],
      answer: 'Modelo de referência criado para padronização',
      clue: 'Ele serve como base teórica para entender a comunicação em redes.',
    },
    // ------------------- Criado pela ISO
    // ------------------- Possui 7 camadas
    {
      question: 'Quantas camadas possui o modelo OSI?',
      options: ['4 camadas', '5 camadas', '7 camadas', '8 camadas'],
      answer: '7 camadas',
      clue: 'O modelo OSI é dividido em sete camadas bem definidas.',
    },
    {
      question:
        'Qual alternativa representa corretamente a estrutura do modelo OSI?',
      options: [
        '4 camadas práticas',
        '7 camadas hierárquicas',
        '3 camadas físicas',
        '8 camadas independentes',
      ],
      answer: '7 camadas hierárquicas',
      clue: 'O OSI organiza a comunicação em sete níveis organizados.',
    },
    {
      question: 'O modelo OSI é dividido em quantos níveis funcionais?',
      options: ['2', '4', '7', '10'],
      answer: '7',
      clue: 'Cada nível do OSI possui uma função específica.',
    },
    {
      question:
        'Qual modelo de referência é conhecido por possuir sete camadas?',
      options: ['TCP/IP', 'OSI', 'Ethernet', 'ARP'],
      answer: 'OSI',
      clue: 'O TCP/IP possui 4 camadas, o OSI possui 7.',
    },
    {
      question:
        'Qual é a camada mais alta do modelo OSI entre suas sete camadas?',
      options: ['Aplicação', 'Física', 'Rede', 'Transporte'],
      answer: 'Aplicação',
      clue: 'A camada 7 é a de Aplicação.',
    },
    {
      question: 'Qual é a camada mais baixa do modelo OSI?',
      options: ['Transporte', 'Física', 'Sessão', 'Apresentação'],
      answer: 'Física',
      clue: 'A camada 1 do OSI é a Física.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável pelo endereçamento lógico?',
      options: ['Enlace', 'Aplicação', 'Rede', 'Sessão'],
      answer: 'Rede',
      clue: 'A camada 3, Rede, trabalha com endereços IP.',
    },
    {
      question: 'Em qual camada do modelo OSI ocorre a criptografia?',
      options: ['Apresentação', 'Física', 'Rede', 'Enlace'],
      answer: 'Apresentação',
      clue: 'A camada 6 cuida de criptografia e formatação.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável por portas e protocolos como TCP e UDP?',
      options: ['Transporte', 'Aplicação', 'Física', 'Rede'],
      answer: 'Transporte',
      clue: 'A camada 4 trabalha com portas e controle de comunicação.',
    },
    {
      question: 'A camada de Enlace no modelo OSI corresponde a qual número?',
      options: ['Camada 1', 'Camada 2', 'Camada 3', 'Camada 7'],
      answer: 'Camada 2',
      clue: 'A camada 2 trabalha com MAC e frames.',
    },
    {
      question: 'Em qual camada do modelo OSI trabalha o endereço MAC?',
      options: ['Física', 'Enlace', 'Rede', 'Transporte'],
      answer: 'Enlace',
      clue: 'A camada 2 é responsável por MAC e frames.',
    },
    {
      question: 'Em qual camada do modelo OSI ocorre o roteamento?',
      options: ['Rede', 'Transporte', 'Sessão', 'Apresentação'],
      answer: 'Rede',
      clue: 'A camada 3 define o melhor caminho usando IP.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável pela transmissão de bits no meio físico?',
      options: ['Física', 'Enlace', 'Rede', 'Aplicação'],
      answer: 'Física',
      clue: 'A camada 1 trata de sinais elétricos ou ópticos.',
    },
    {
      question: 'Em qual camada do modelo OSI atuam os protocolos TCP e UDP?',
      options: ['Aplicação', 'Transporte', 'Rede', 'Enlace'],
      answer: 'Transporte',
      clue: 'A camada 4 trabalha com portas e controle de conexão.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável por estabelecer e encerrar sessões?',
      options: ['Sessão', 'Apresentação', 'Transporte', 'Rede'],
      answer: 'Sessão',
      clue: 'A camada 5 controla sessões entre aplicações.',
    },
    {
      question: 'Em qual camada ocorre a criptografia de dados no modelo OSI?',
      options: ['Aplicação', 'Apresentação', 'Rede', 'Física'],
      answer: 'Apresentação',
      clue: 'A camada 6 trata de criptografia e formatação.',
    },
    {
      question:
        'Qual camada do modelo OSI fornece serviços diretamente ao usuário final?',
      options: ['Aplicação', 'Transporte', 'Enlace', 'Rede'],
      answer: 'Aplicação',
      clue: 'A camada 7 é a interface entre o usuário e a rede.',
    },
    {
      question: 'A criação de frames ocorre em qual camada do modelo OSI?',
      options: ['Física', 'Enlace', 'Rede', 'Sessão'],
      answer: 'Enlace',
      clue: 'A camada 2 encapsula dados em frames.',
    },
    {
      question:
        'Qual camada do modelo OSI trabalha com endereçamento lógico IP?',
      options: ['Rede', 'Transporte', 'Aplicação', 'Física'],
      answer: 'Rede',
      clue: 'A camada 3 utiliza endereços IP.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável pelo controle de fluxo e confiabilidade ponta a ponta?',
      options: ['Transporte', 'Rede', 'Enlace', 'Apresentação'],
      answer: 'Transporte',
      clue: 'A camada 4 garante entrega confiável com TCP.',
    },
    {
      question: 'Em qual camada do modelo OSI atua um switch tradicional?',
      options: ['Física', 'Enlace', 'Rede', 'Transporte'],
      answer: 'Enlace',
      clue: 'Switch trabalha principalmente com endereços MAC, camada 2.',
    },
    {
      question: 'Em qual camada do modelo OSI atua um roteador?',
      options: ['Enlace', 'Rede', 'Transporte', 'Sessão'],
      answer: 'Rede',
      clue: 'Roteadores trabalham com endereços IP, camada 3.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável por converter dados em formato compreensível para a aplicação?',
      options: ['Apresentação', 'Sessão', 'Rede', 'Física'],
      answer: 'Apresentação',
      clue: 'A camada 6 trata da formatação e conversão de dados.',
    },
    {
      question: 'Em qual camada do modelo OSI ocorre a segmentação dos dados?',
      options: ['Transporte', 'Rede', 'Enlace', 'Aplicação'],
      answer: 'Transporte',
      clue: 'A camada 4 divide os dados em segmentos.',
    },
    {
      question:
        'Qual camada do modelo OSI é responsável pela transmissão do sinal elétrico ou óptico?',
      options: ['Física', 'Enlace', 'Rede', 'Aplicação'],
      answer: 'Física',
      clue: 'A camada 1 trata diretamente do meio físico.',
    },

    // ------------------- Possui 7 camadas
  ];
}
// 451 / 6 =
// 30 Questoes 18/02/2026
// Tota 25 +
