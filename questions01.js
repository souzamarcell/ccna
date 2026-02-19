function loadQuestions01() {
  return [
    {
      num: 1,
      question:
        'Uma empresa possui matriz em São Paulo e filial no Rio de Janeiro. Ambas possuem suas próprias redes internas. Para interligá-las, contratou um link dedicado de operadora. Esse cenário representa qual tipo de rede?',
      options: ['LAN', 'MAN', 'WAN', 'VLAN'],
      answer: 'WAN',
      clue: 'Interligação de redes em cidades diferentes caracteriza WAN.',
    },
    {
      num: 2,
      question:
        'Um administrador afirma que a rede do escritório é uma WAN porque utiliza internet. Qual análise está correta?',
      options: [
        'Está correto, qualquer uso de internet é WAN',
        'Está incorreto, a rede interna continua sendo LAN',
        'Está correto, pois usa IP público',
        'Depende do tipo de switch utilizado',
      ],
      answer: 'Está incorreto, a rede interna continua sendo LAN',
      clue: 'Mesmo com acesso à internet, a rede local interna ainda é LAN.',
    },
    {
      num: 3,
      question:
        'Uma universidade conecta vários prédios dentro da mesma cidade por meio de fibra óptica própria. Qual tipo de rede melhor descreve esse cenário?',
      options: ['LAN', 'WAN', 'MAN', 'SAN'],
      answer: 'MAN',
      clue: 'Rede cobrindo área metropolitana é classificada como MAN.',
    },
    {
      num: 4,
      question:
        'Qual característica diferencia principalmente uma LAN de uma WAN em ambiente corporativo?',
      options: [
        'Uso de protocolo IP',
        'Tipo de endereço MAC',
        'Escopo geográfico e responsabilidade administrativa',
        'Quantidade de switches',
      ],
      answer: 'Escopo geográfico e responsabilidade administrativa',
      clue: 'WAN envolve maior distância e geralmente operadora externa.',
    },
    {
      num: 5,
      question:
        'Uma pequena empresa possui 20 computadores conectados a dois switches e um roteador interno. Não há conexão externa. Essa rede é classificada como:',
      options: ['LAN', 'WAN', 'MAN', 'Internet privada'],
      answer: 'LAN',
      clue: 'Rede restrita a um único local físico é LAN.',
    },
    {
      num: 6,
      question:
        'Qual cenário representa corretamente uma WAN corporativa moderna?',
      options: [
        'Rede entre departamentos no mesmo prédio',
        'Conexão MPLS entre matriz e filiais em diferentes estados',
        'Rede Wi-Fi doméstica',
        'Comunicação entre dois PCs no mesmo switch',
      ],
      answer: 'Conexão MPLS entre matriz e filiais em diferentes estados',
      clue: 'Tecnologias como MPLS são típicas de WAN.',
    },
    {
      num: 7,
      question:
        'Em qual tipo de rede a latência tende a ser maior devido à distância física?',
      options: ['LAN', 'WAN', 'VLAN', 'Rede local cabeada'],
      answer: 'WAN',
      clue: 'Maior distância normalmente implica maior latência.',
    },
    {
      num: 8,
      question:
        'Um administrador conecta dois prédios vizinhos usando cabo de fibra óptica próprio. Ambos pertencem à mesma empresa e estão na mesma cidade. Esse cenário é melhor descrito como:',
      options: [
        'LAN estendida ou MAN',
        'WAN global',
        'Internet pública',
        'SAN',
      ],
      answer: 'LAN estendida ou MAN',
      clue: 'Pode ser considerada LAN estendida ou MAN dependendo da escala metropolitana.',
    },
    {
      num: 9,
      question:
        'Qual é a principal responsabilidade de um roteador em um ambiente que conecta LAN a WAN?',
      options: [
        'Amplificar sinal elétrico',
        'Encaminhar pacotes entre redes diferentes',
        'Atribuir endereços MAC',
        'Criptografar automaticamente todo o tráfego',
      ],
      answer: 'Encaminhar pacotes entre redes diferentes',
      clue: 'Roteadores operam na camada 3 interligando redes distintas.',
    },
    {
      num: 10,
      question:
        'Uma empresa decide substituir seu link dedicado WAN por conexão via internet com VPN site-to-site. Do ponto de vista conceitual, isso continua sendo:',
      options: ['LAN', 'MAN', 'WAN', 'VLAN'],
      answer: 'WAN',
      clue: 'Mesmo usando internet, continua interligando redes distantes.',
    },
    {
      num: 11,
      question:
        'Uma empresa possui três andares no mesmo prédio, cada um com seu próprio switch. Todos estão interligados e compartilham a mesma infraestrutura interna. Essa rede é classificada como:',
      options: ['WAN', 'MAN', 'LAN', 'Rede pública'],
      answer: 'LAN',
      clue: 'Mesmo distribuída em andares, ainda está em área local.',
    },
    {
      num: 12,
      question:
        'Um administrador afirma que qualquer rede que utilize fibra óptica é uma WAN. Qual é a análise correta?',
      options: [
        'Correto, fibra é usada apenas em WAN',
        'Correto, fibra implica longa distância',
        'Incorreto, o tipo de mídia não define o tipo de rede',
        'Depende do modelo do roteador',
      ],
      answer: 'Incorreto, o tipo de mídia não define o tipo de rede',
      clue: 'Classificação depende do escopo geográfico, não do cabo.',
    },
    {
      num: 13,
      question:
        'Uma organização conecta duas filiais na mesma cidade utilizando infraestrutura própria de fibra. Não há operadora envolvida. Essa rede é melhor classificada como:',
      options: [
        'WAN obrigatoriamente',
        'MAN ou LAN estendida',
        'Internet pública',
        'Rede doméstica',
      ],
      answer: 'MAN ou LAN estendida',
      clue: 'Está dentro da mesma cidade e sob mesma administração.',
    },
    {
      num: 14,
      question:
        'Qual característica é mais comum em uma WAN corporativa do que em uma LAN?',
      options: [
        'Uso de switches',
        'Controle total pela própria empresa',
        'Dependência de provedor de serviços',
        'Uso de endereços IP',
      ],
      answer: 'Dependência de provedor de serviços',
      clue: 'WAN geralmente envolve operadoras externas.',
    },
    {
      num: 15,
      question:
        'Um técnico conecta dois computadores diretamente com cabo Ethernet para compartilhar arquivos temporariamente. Essa conexão é considerada:',
      options: ['WAN', 'MAN', 'LAN', 'VPN'],
      answer: 'LAN',
      clue: 'Rede local, mesmo que composta por apenas dois dispositivos.',
    },
    {
      num: 16,
      question: 'Qual cenário melhor representa uma MAN?',
      options: [
        'Rede interna de um único escritório',
        'Conexão entre matriz no Brasil e filial na Europa',
        'Rede interligando prédios de um hospital em uma cidade',
        'Rede Wi-Fi residencial',
      ],
      answer: 'Rede interligando prédios de um hospital em uma cidade',
      clue: 'Abrange área metropolitana.',
    },
    {
      num: 17,
      question:
        'Uma empresa utiliza VPN site-to-site sobre internet para conectar filiais internacionais. Conceitualmente, essa solução substitui qual tipo de infraestrutura?',
      options: ['LAN', 'MAN', 'WAN', 'VLAN'],
      answer: 'WAN',
      clue: 'Continua sendo comunicação entre redes geograficamente distantes.',
    },
    {
      num: 18,
      question:
        'Qual fator NÃO é usado para classificar uma rede como LAN, MAN ou WAN?',
      options: [
        'Área geográfica coberta',
        'Responsabilidade administrativa',
        'Distância entre os pontos',
        'Sistema operacional dos computadores',
      ],
      answer: 'Sistema operacional dos computadores',
      clue: 'Classificação não depende do SO utilizado.',
    },
    {
      num: 19,
      question: 'Em comparação com LAN, uma WAN normalmente apresenta:',
      options: [
        'Menor latência e maior velocidade',
        'Maior latência e menor controle administrativo direto',
        'Ausência de roteadores',
        'Uso exclusivo de IPv6',
      ],
      answer: 'Maior latência e menor controle administrativo direto',
      clue: 'WAN envolve maior distância e operadora externa.',
    },
    {
      num: 20,
      question:
        'Uma empresa decide conectar todos os departamentos internos usando apenas switches, sem necessidade de operadora externa. Essa decisão caracteriza qual tipo de rede?',
      options: ['LAN', 'WAN', 'MAN', 'Internet global'],
      answer: 'LAN',
      clue: 'Rede interna sob controle total da organização.',
    },
    {
      num: 21,
      question:
        'Uma empresa possui dois prédios separados por 3 km na mesma cidade. Ela utiliza fibra própria, sem operadora, e administra todos os equipamentos. Do ponto de vista de classificação e responsabilidade, essa rede é melhor descrita como:',
      options: [
        'WAN obrigatoriamente',
        'MAN ou LAN estendida sob mesma administração',
        'Internet pública',
        'Rede híbrida automática',
      ],
      answer: 'MAN ou LAN estendida sob mesma administração',
      clue: 'Mesmo sendo alguns quilômetros, está na mesma cidade e sob controle da empresa.',
    },
    {
      num: 22,
      question:
        'Qual critério é tecnicamente mais determinante para classificar uma rede como WAN em ambiente corporativo moderno?',
      options: [
        'Uso de fibra óptica',
        'Uso de IP público',
        'Dependência de infraestrutura de provedor externo',
        'Distância superior a 1 km',
      ],
      answer: 'Dependência de infraestrutura de provedor externo',
      clue: 'WAN corporativa normalmente envolve operadora ou backbone externo.',
    },
    {
      num: 23,
      question:
        'Uma organização interliga filiais internacionais por meio de VPN sobre internet. Qual afirmação é mais precisa?',
      options: [
        'Não é WAN porque usa internet pública',
        'Continua sendo WAN, pois conecta redes geograficamente distantes',
        'É LAN porque usa IP privado internamente',
        'É MAN porque depende de roteadores',
      ],
      answer:
        'Continua sendo WAN, pois conecta redes geograficamente distantes',
      clue: 'A tecnologia usada não altera o conceito de escopo geográfico.',
    },
    {
      num: 24,
      question: 'Qual cenário poderia gerar confusão entre MAN e WAN na prova?',
      options: [
        'Rede entre dois computadores no mesmo switch',
        'Rede entre matriz e filial no mesmo bairro',
        'Rede doméstica com Wi-Fi',
        'Rede Bluetooth pessoal',
      ],
      answer: 'Rede entre matriz e filial no mesmo bairro',
      clue: 'Pode ser MAN ou LAN estendida dependendo da infraestrutura e administração.',
    },
    {
      num: 25,
      question:
        'Em termos de latência, throughput e controle administrativo, qual alternativa descreve corretamente uma WAN típica?',
      options: [
        'Baixa latência e controle total interno',
        'Alta latência potencial e dependência de SLA de provedor',
        'Velocidade sempre superior à LAN',
        'Sem roteamento entre redes',
      ],
      answer: 'Alta latência potencial e dependência de SLA de provedor',
      clue: 'WAN depende de contratos e infraestrutura externa.',
    },
    {
      num: 26,
      question:
        'Uma empresa conecta seus departamentos internos por switches Layer 2 e utiliza um roteador apenas para saída à internet. Internamente, a rede é classificada como:',
      options: ['WAN', 'MAN', 'LAN', 'Rede pública'],
      answer: 'LAN',
      clue: 'A classificação interna não muda por ter acesso externo.',
    },
    {
      num: 27,
      question:
        'Qual afirmação demonstra entendimento incorreto sobre LAN, MAN e WAN?',
      options: [
        'LAN é limitada a área geográfica pequena',
        'WAN normalmente envolve operadora',
        'MAN cobre área metropolitana',
        'Qualquer rede com roteador é WAN',
      ],
      answer: 'Qualquer rede com roteador é WAN',
      clue: 'Uso de roteador não define o tipo de rede.',
    },
    {
      num: 28,
      question:
        'Uma multinacional possui data centers em dois países conectados por link dedicado internacional. Qual característica reforça que isso é uma WAN?',
      options: [
        'Uso de switches core',
        'Conexão entre países com infraestrutura de telecom',
        'Uso de VLANs internas',
        'Endereçamento IPv4 privado',
      ],
      answer: 'Conexão entre países com infraestrutura de telecom',
      clue: 'Escala geográfica ampla e dependência de telecom caracterizam WAN.',
    },
    {
      num: 29,
      question:
        'Se uma empresa expande sua LAN conectando prédios vizinhos utilizando dark fiber própria, qual fator impede a classificação automática como WAN?',
      options: [
        'Uso de fibra óptica',
        'Distância física pequena',
        'Controle administrativo centralizado',
        'Presença de roteadores',
      ],
      answer: 'Controle administrativo centralizado',
      clue: 'Se a empresa controla toda a infraestrutura, pode ser LAN estendida ou MAN.',
    },
    {
      num: 30,
      question:
        'Em uma questão de prova, o termo “rede corporativa interna” normalmente indica qual tipo de rede, salvo indicação contrária?',
      options: ['WAN', 'MAN', 'LAN', 'Internet pública'],
      answer: 'LAN',
      clue: 'Rede interna corporativa é tipicamente LAN.',
    },
  ];
}
