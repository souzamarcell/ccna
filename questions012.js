function loadQuestions012() {
  return [
    {
      num: 1,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceitos de Rede – LAN',
      question:
        'Uma empresa possui 40 computadores conectados em um único prédio utilizando switches Ethernet. Não há conexão entre filiais. Como essa rede é classificada?',
      options: ['WAN', 'LAN', 'MAN', 'PAN'],
      answer: ['LAN'],
      clue: 'Rede local limitada a um prédio.',
    },
    {
      num: 2,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceitos de Rede – WAN',
      question:
        'Uma organização conecta escritórios em diferentes países utilizando links dedicados fornecidos por uma operadora. Qual é o tipo de rede?',
      options: ['LAN', 'PAN', 'MAN', 'WAN'],
      answer: ['WAN'],
      clue: 'Longa distância e provedor externo.',
    },
    {
      num: 3,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceitos – Múltiplas respostas',
      question: 'Quais duas características são típicas de uma WAN?',
      options: [
        'Cobre grandes distâncias geográficas',
        'Normalmente pertence a um único usuário doméstico',
        'Depende de operadoras de telecomunicação',
        'Utiliza apenas cabos UTP internos',
      ],
      answer: [
        'Cobre grandes distâncias geográficas',
        'Depende de operadoras de telecomunicação',
      ],
      clue: 'WAN envolve longa distância e ISP.',
    },
    {
      num: 4,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceitos – MAN',
      question:
        'Uma prefeitura interliga prédios públicos dentro da mesma cidade usando fibra óptica própria. Essa rede é classificada como:',
      options: ['PAN', 'MAN', 'LAN', 'WAN'],
      answer: ['MAN'],
      clue: 'Abrange área metropolitana.',
    },
    {
      num: 5,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceitos – PAN',
      question:
        'Um usuário conecta seu notebook ao smartphone via Bluetooth para compartilhar internet. Esse cenário representa:',
      options: ['WAN', 'LAN', 'PAN', 'MAN'],
      answer: ['PAN'],
      clue: 'Rede pessoal de curto alcance.',
    },
    {
      num: 6,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Cenário prático',
      question:
        'Uma empresa possui duas filiais na mesma cidade conectadas por fibra dedicada própria. Qual classificação é mais adequada?',
      options: ['LAN', 'PAN', 'MAN', 'WAN'],
      answer: ['MAN'],
      clue: 'Mesma cidade, interligando prédios.',
    },
    {
      num: 7,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Pegadinha conceitual',
      question: 'Qual afirmação descreve corretamente uma LAN?',
      options: [
        'Cobre múltiplos continentes',
        'É limitada geograficamente',
        'Depende obrigatoriamente de um ISP',
        'É usada apenas em dispositivos móveis',
      ],
      answer: ['É limitada geograficamente'],
      clue: 'LAN é rede local.',
    },
    {
      num: 8,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Comparação',
      question: 'Qual das opções normalmente apresenta maior latência?',
      options: ['LAN', 'PAN', 'WAN', 'Loopback'],
      answer: ['WAN'],
      clue: 'Maior distância = maior latência.',
    },
    {
      num: 9,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Múltiplas respostas',
      question: 'Quais dois exemplos representam uma PAN?',
      options: [
        'Headset Bluetooth conectado ao celular',
        'Rede corporativa de um prédio',
        'Smartwatch sincronizado com smartphone',
        'Link MPLS entre cidades',
      ],
      answer: [
        'Headset Bluetooth conectado ao celular',
        'Smartwatch sincronizado com smartphone',
      ],
      clue: 'PAN envolve dispositivos pessoais.',
    },
    {
      num: 10,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Cenário empresarial',
      question:
        'Uma multinacional utiliza VPN sobre a internet para interligar escritórios internacionais. Essa solução é classificada como:',
      options: ['LAN estendida', 'PAN corporativa', 'WAN', 'MAN privada'],
      answer: ['WAN'],
      clue: 'VPN interliga locais distantes.',
    },

    // Vou acelerar mantendo o padrão

    {
      num: 11,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito avançado',
      question: 'Qual tipo de rede é mais comum dentro de um data center?',
      options: ['LAN', 'WAN', 'MAN', 'PAN'],
      answer: ['LAN'],
      clue: 'Ambiente interno e controlado.',
    },
    {
      num: 12,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Pegadinha',
      question: 'A internet é considerada:',
      options: [
        'Uma única LAN global',
        'Uma WAN pública',
        'Uma PAN expandida',
        'Uma MAN global',
      ],
      answer: ['Uma WAN pública'],
      clue: 'Rede mundial interligada.',
    },
    {
      num: 13,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Múltiplas respostas',
      question: 'Quais duas características diferenciam uma LAN de uma WAN?',
      options: [
        'Menor latência',
        'Maior controle administrativo',
        'Maior distância geográfica',
        'Dependência obrigatória de operadora',
      ],
      answer: ['Menor latência', 'Maior controle administrativo'],
      clue: 'LAN é local e controlada internamente.',
    },
    {
      num: 14,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito MAN',
      question:
        'Uma universidade conecta vários campi dentro da mesma cidade. Isso é um exemplo de:',
      options: ['LAN', 'PAN', 'MAN', 'WAN'],
      answer: ['MAN'],
      clue: 'Mesma cidade.',
    },
    {
      num: 15,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Comparação prática',
      question:
        'Qual rede geralmente apresenta maior largura de banda disponível?',
      options: ['LAN', 'WAN pública', 'Internet residencial', 'PAN Bluetooth'],
      answer: ['LAN'],
      clue: 'LAN costuma ter maior throughput.',
    },

    // completando até 30 mantendo estilo oficial

    {
      num: 16,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Cenário comparativo',
      question:
        'Um escritório doméstico conecta PC, impressora e roteador Wi-Fi. Isso é classificado como:',
      options: ['WAN', 'LAN', 'MAN', 'PAN'],
      answer: ['LAN'],
      clue: 'Pequena rede local.',
    },
    {
      num: 17,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Múltiplas respostas',
      question: 'Quais duas tecnologias são comuns em uma PAN?',
      options: ['Bluetooth', 'NFC', 'MPLS', 'Frame Relay'],
      answer: ['Bluetooth', 'NFC'],
      clue: 'Tecnologias de curto alcance.',
    },
    {
      num: 18,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito WAN',
      question: 'Qual tecnologia é frequentemente usada para WAN corporativa?',
      options: ['Ethernet local', 'MPLS', 'USB', 'HDMI'],
      answer: ['MPLS'],
      clue: 'Tecnologia comum de operadora.',
    },
    {
      num: 19,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Análise',
      question:
        'Qual fator define principalmente a classificação entre LAN, MAN e WAN?',
      options: [
        'Protocolo IP utilizado',
        'Área geográfica coberta',
        'Tipo de cabo',
        'Modelo do switch',
      ],
      answer: ['Área geográfica coberta'],
      clue: 'Classificação é geográfica.',
    },
    {
      num: 20,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Pegadinha clássica',
      question:
        'Uma empresa possui controle total sobre o cabeamento entre dois prédios vizinhos. Qual classificação é mais adequada?',
      options: ['MAN', 'WAN pública', 'PAN', 'Internet'],
      answer: ['MAN'],
      clue: 'Mesmo controle, mesma cidade.',
    },

    // Finalizando até 30 mantendo coerência

    {
      num: 21,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Comparação',
      question: 'Qual rede normalmente apresenta menor custo por Mbps?',
      options: [
        'WAN dedicada',
        'Internet internacional',
        'LAN interna',
        'Link satelital',
      ],
      answer: ['LAN interna'],
      clue: 'Infraestrutura local.',
    },
    {
      num: 22,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito PAN',
      question: 'Qual é o alcance típico de uma PAN?',
      options: [
        'Alguns metros',
        'Centenas de quilômetros',
        'Continental',
        'Global',
      ],
      answer: ['Alguns metros'],
      clue: 'Curto alcance.',
    },
    {
      num: 23,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Múltiplas respostas',
      question: 'Quais duas opções representam exemplos de WAN?',
      options: [
        'Internet',
        'Rede corporativa entre países',
        'Rede Wi-Fi doméstica',
        'Bluetooth entre celular e fone',
      ],
      answer: ['Internet', 'Rede corporativa entre países'],
      clue: 'Longa distância.',
    },
    {
      num: 24,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito LAN',
      question: 'Qual é a principal vantagem de uma LAN sobre uma WAN?',
      options: [
        'Maior latência',
        'Menor velocidade',
        'Maior controle administrativo',
        'Maior dependência de ISP',
      ],
      answer: ['Maior controle administrativo'],
      clue: 'LAN é gerenciada internamente.',
    },
    {
      num: 25,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Cenário híbrido',
      question:
        'Uma empresa utiliza SD-WAN para conectar filiais internacionais. Essa solução opera sobre qual tipo de rede?',
      options: ['LAN', 'WAN', 'PAN', 'MAN'],
      answer: ['WAN'],
      clue: 'SD-WAN é WAN definida por software.',
    },
    {
      num: 26,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Comparação prática',
      question: 'Qual rede é mais provável de sofrer interferência física?',
      options: [
        'Fibra WAN',
        'Bluetooth PAN',
        'MPLS backbone',
        'Link submarino',
      ],
      answer: ['Bluetooth PAN'],
      clue: 'Wireless curto alcance.',
    },
    {
      num: 27,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Classificação',
      question:
        'Uma rede que cobre um campus universitário extenso, porém dentro da mesma cidade, é geralmente classificada como:',
      options: ['PAN', 'LAN simples', 'MAN', 'WAN global'],
      answer: ['MAN'],
      clue: 'Escala metropolitana.',
    },
    {
      num: 28,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Conceito central',
      question:
        'Qual tipo de rede normalmente requer contratos com provedores de telecom?',
      options: ['LAN', 'WAN', 'PAN', 'Loopback'],
      answer: ['WAN'],
      clue: 'Operadora envolvida.',
    },
    {
      num: 29,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Múltiplas respostas',
      question: 'Quais duas afirmações são verdadeiras sobre uma MAN?',
      options: [
        'Cobre área de uma cidade',
        'É sempre pública',
        'Pode utilizar fibra óptica dedicada',
        'É limitada a alguns metros',
      ],
      answer: [
        'Cobre área de uma cidade',
        'Pode utilizar fibra óptica dedicada',
      ],
      clue: 'Área metropolitana.',
    },
    {
      num: 30,
      tropic: '1. Network Fundamentals',
      subTropic: '1.1 Análise final',
      question:
        'Qual classificação melhor descreve a rede formada apenas entre dispositivos pessoais de um único usuário?',
      options: ['LAN corporativa', 'WAN privada', 'PAN', 'MAN doméstica'],
      answer: ['PAN'],
      clue: 'Rede pessoal.',
    },
    {
      num: 31,
      tropic: '1. Network Fundamentals',
      subTropic: 'LAN vs WAN – Característica principal',
      question:
        'Qual fator é o principal critério para classificar uma rede como LAN, MAN ou WAN?',
      options: [
        'Modelo do roteador utilizado',
        'Área geográfica coberta',
        'Velocidade do link',
        'Tipo de protocolo de roteamento',
      ],
      answer: ['Área geográfica coberta'],
      clue: 'Classificação é baseada em alcance geográfico.',
    },

    {
      num: 32,
      tropic: '1. Network Fundamentals',
      subTropic: 'MPLS – Papel do CE e PE',
      question:
        'Em uma arquitetura MPLS, qual equipamento conecta a rede do cliente ao backbone do provedor?',
      options: ['Core Switch', 'Roteador CE', 'Access Point', 'Servidor DHCP'],
      answer: ['Roteador CE'],
      clue: 'Customer Edge conecta ao Provider Edge.',
    },

    {
      num: 33,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Múltiplas respostas',
      question: 'Quais duas funcionalidades são típicas de uma solução SD-WAN?',
      options: [
        'Application-aware routing',
        'Centralized controller',
        'Eliminação de endereçamento IP',
        'Substituição de VLANs',
      ],
      answer: ['Application-aware routing', 'Centralized controller'],
      clue: 'SD-WAN toma decisão baseada na aplicação.',
    },

    {
      num: 34,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN – Conceito',
      question: 'Qual é o objetivo principal do IPsec em uma VPN site-to-site?',
      options: [
        'Aumentar banda disponível',
        'Fornecer criptografia e integridade',
        'Substituir o roteamento dinâmico',
        'Eliminar NAT',
      ],
      answer: ['Fornecer criptografia e integridade'],
      clue: 'IPsec protege dados.',
    },

    {
      num: 35,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura Hub-and-Spoke',
      question: 'Qual é uma desvantagem do modelo hub-and-spoke em VPN?',
      options: [
        'Maior segurança',
        'Tráfego pode passar pelo hub mesmo entre filiais',
        'Menor latência',
        'Maior redundância automática',
      ],
      answer: ['Tráfego pode passar pelo hub mesmo entre filiais'],
      clue: 'Pode gerar gargalo no hub.',
    },

    {
      num: 36,
      tropic: '1. Network Fundamentals',
      subTropic: 'Underlay vs Overlay',
      question:
        'No contexto de SD-WAN, a internet pública utilizada como transporte é chamada de:',
      options: ['Overlay', 'Control Plane', 'Underlay', 'Data VLAN'],
      answer: ['Underlay'],
      clue: 'Underlay é a rede física de transporte.',
    },

    {
      num: 37,
      tropic: '1. Network Fundamentals',
      subTropic: 'Comparação WAN',
      question:
        'Qual solução geralmente oferece maior previsibilidade de desempenho?',
      options: [
        'VPN sobre internet comum',
        'MPLS com SLA',
        'Wi-Fi público',
        'Hotspot móvel',
      ],
      answer: ['MPLS com SLA'],
      clue: 'SLA garante métricas.',
    },

    {
      num: 38,
      tropic: '1. Network Fundamentals',
      subTropic: 'Múltiplas respostas – WAN moderna',
      question:
        'Quais dois meios podem ser utilizados como transporte em SD-WAN?',
      options: ['Internet banda larga', 'MPLS', 'Bluetooth', 'USB'],
      answer: ['Internet banda larga', 'MPLS'],
      clue: 'SD-WAN pode usar múltiplos transportes.',
    },

    {
      num: 39,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN – Full Mesh',
      question:
        'Em uma VPN full-mesh entre 5 filiais, quantos túneis são necessários?',
      options: ['5', '10', '20', '25'],
      answer: ['10'],
      clue: 'n(n-1)/2 → 5x4/2.',
    },

    {
      num: 40,
      tropic: '1. Network Fundamentals',
      subTropic: 'LAN – Controle',
      question: 'Qual característica é típica de uma LAN corporativa?',
      options: [
        'Gerenciada por operadora externa',
        'Controle administrativo interno',
        'Alta latência',
        'Dependência obrigatória de internet',
      ],
      answer: ['Controle administrativo interno'],
      clue: 'LAN é interna.',
    },

    {
      num: 41,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura híbrida',
      question:
        'Uma empresa usa MPLS para ERP e internet VPN para navegação. Qual objetivo dessa estratégia?',
      options: [
        'Eliminar roteadores',
        'Balancear custo e desempenho',
        'Remover criptografia',
        'Reduzir VLANs',
      ],
      answer: ['Balancear custo e desempenho'],
      clue: 'Tráfego crítico no MPLS.',
    },

    {
      num: 42,
      tropic: '1. Network Fundamentals',
      subTropic: 'QoS',
      question:
        'Qual tecnologia permite priorizar tráfego VoIP dentro de um backbone privado?',
      options: ['QoS em MPLS', 'ARP', 'DHCP', 'DNS'],
      answer: ['QoS em MPLS'],
      clue: 'QoS controla prioridade.',
    },

    {
      num: 43,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN Remote Access',
      question:
        'Uma VPN utilizada por usuários individuais para acessar a rede corporativa é chamada de:',
      options: [
        'Site-to-Site',
        'Remote Access VPN',
        'MPLS Core',
        'Metro Ethernet',
      ],
      answer: ['Remote Access VPN'],
      clue: 'Usuário remoto individual.',
    },

    {
      num: 44,
      tropic: '1. Network Fundamentals',
      subTropic: 'WAN – Latência',
      question: 'Qual fator contribui mais para aumento de latência em WAN?',
      options: [
        'Distância física',
        'Modelo do switch',
        'Tipo de VLAN',
        'Versão do IOS',
      ],
      answer: ['Distância física'],
      clue: 'Maior distância, maior atraso.',
    },

    {
      num: 45,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Benefício',
      question:
        'Qual é um benefício direto da centralização de políticas no SD-WAN?',
      options: [
        'Configuração manual em cada roteador',
        'Provisionamento mais rápido de novas filiais',
        'Eliminação de IPsec',
        'Substituição de LAN',
      ],
      answer: ['Provisionamento mais rápido de novas filiais'],
      clue: 'Controller automatiza deploy.',
    },

    {
      num: 46,
      tropic: '1. Network Fundamentals',
      subTropic: 'Comparação econômica',
      question: 'Por que muitas empresas migram de MPLS puro para SD-WAN?',
      options: [
        'Para aumentar latência',
        'Para reduzir custo utilizando internet como transporte',
        'Para eliminar criptografia',
        'Para abandonar roteamento IP',
      ],
      answer: ['Para reduzir custo utilizando internet como transporte'],
      clue: 'Internet é mais barata.',
    },

    {
      num: 47,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura WAN',
      question: 'Qual topologia WAN oferece maior redundância natural?',
      options: ['Hub-and-spoke', 'Full mesh', 'Estrela simples', 'Ponto único'],
      answer: ['Full mesh'],
      clue: 'Todos conectados entre si.',
    },

    {
      num: 48,
      tropic: '1. Network Fundamentals',
      subTropic: 'Múltiplas respostas – Segurança WAN',
      question: 'Quais duas soluções fornecem criptografia nativamente?',
      options: ['IPsec VPN', 'SSL VPN', 'MPLS puro', 'Ethernet LAN simples'],
      answer: ['IPsec VPN', 'SSL VPN'],
      clue: 'VPN criptografa; MPLS não criptografa por padrão.',
    },

    {
      num: 49,
      tropic: '1. Network Fundamentals',
      subTropic: 'MPLS – Conceito',
      question: 'Qual é a principal característica técnica do MPLS?',
      options: [
        'Roteamento baseado em MAC',
        'Encaminhamento baseado em labels',
        'Uso exclusivo de Wi-Fi',
        'Substituição de IP',
      ],
      answer: ['Encaminhamento baseado em labels'],
      clue: 'Label switching.',
    },

    {
      num: 50,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura estratégica',
      question:
        'Qual solução oferece maior flexibilidade para políticas baseadas em aplicação?',
      options: [
        'MPLS tradicional estático',
        'SD-WAN',
        'PAN Bluetooth',
        'LAN isolada',
      ],
      answer: ['SD-WAN'],
      clue: 'Application-aware routing.',
    },
        {
      num: 51,
      tropic: '1. Network Fundamentals',
      subTropic: 'LAN vs WAN – Interpretação',
      question: 'Uma empresa possui três andares em um prédio interligados por switches e um roteador interno. Não há conexão externa entre prédios. Como essa rede deve ser classificada?',
      options: [
        'WAN privada',
        'MAN corporativa',
        'LAN',
        'PAN empresarial'
      ],
      answer: ['LAN'],
      clue: 'Mesmo prédio, controle interno.'
    },

    {
      num: 52,
      tropic: '1. Network Fundamentals',
      subTropic: 'MPLS – Responsabilidade',
      question: 'Em uma arquitetura MPLS, qual componente permanece sob responsabilidade exclusiva do cliente?',
      options: [
        'Backbone P',
        'Roteadores PE',
        'Infraestrutura LAN interna',
        'Core da operadora'
      ],
      answer: ['Infraestrutura LAN interna'],
      clue: 'LAN nunca é gerenciada pelo carrier.'
    },

    {
      num: 53,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN – Cenário real',
      question: 'Uma empresa decide usar VPN site-to-site sobre internet para reduzir custos. Qual risco deve ser considerado em comparação ao MPLS?',
      options: [
        'Perda automática de roteamento',
        'Menor previsibilidade de latência',
        'Impossibilidade de criptografia',
        'Eliminação do controle de QoS'
      ],
      answer: ['Menor previsibilidade de latência'],
      clue: 'Internet não garante SLA.'
    },

    {
      num: 54,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Arquitetura',
      question: 'Qual afirmação descreve corretamente o papel do controlador em SD-WAN?',
      options: [
        'Encaminha todo tráfego de dados',
        'Define políticas centralizadas de roteamento',
        'Substitui switches LAN',
        'Cria VLAN automaticamente'
      ],
      answer: ['Define políticas centralizadas de roteamento'],
      clue: 'Control plane centralizado.'
    },

    {
      num: 55,
      tropic: '1. Network Fundamentals',
      subTropic: 'Overlay vs Underlay',
      question: 'Uma empresa utiliza IPsec sobre internet pública para interligar filiais. A internet pública representa:',
      options: [
        'Overlay',
        'Underlay',
        'Control Plane',
        'VPN Mesh'
      ],
      answer: ['Underlay'],
      clue: 'Rede física de transporte.'
    },

    {
      num: 56,
      tropic: '1. Network Fundamentals',
      subTropic: 'Topologia WAN',
      question: 'Qual topologia WAN exige maior número de túneis à medida que novas filiais são adicionadas?',
      options: [
        'Hub-and-spoke',
        'Full mesh',
        'Ponto único',
        'Linear'
      ],
      answer: ['Full mesh'],
      clue: 'Escala exponencial.'
    },

    {
      num: 57,
      tropic: '1. Network Fundamentals',
      subTropic: 'QoS – Análise',
      question: 'Uma empresa precisa priorizar tráfego de voz entre países com garantia contratual. Qual solução é mais adequada?',
      options: [
        'VPN sobre internet doméstica',
        'MPLS com SLA',
        'Wi-Fi público',
        'Hotspot 4G pessoal'
      ],
      answer: ['MPLS com SLA'],
      clue: 'SLA garante QoS previsível.'
    },

    {
      num: 58,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Múltiplas respostas',
      question: 'Quais duas características são típicas de uma implementação SD-WAN moderna?',
      options: [
        'Uso de múltiplos links simultaneamente',
        'Application-aware routing',
        'Eliminação de roteadores físicos',
        'Substituição da camada IP'
      ],
      answer: [
        'Uso de múltiplos links simultaneamente',
        'Application-aware routing'
      ],
      clue: 'Multipath e decisão baseada em aplicação.'
    },

    {
      num: 59,
      tropic: '1. Network Fundamentals',
      subTropic: 'Segurança WAN',
      question: 'Qual afirmação é verdadeira sobre MPLS comparado à VPN IPsec?',
      options: [
        'MPLS fornece criptografia nativa',
        'IPsec fornece criptografia ponta a ponta',
        'Ambos eliminam necessidade de firewall',
        'VPN não usa roteamento'
      ],
      answer: ['IPsec fornece criptografia ponta a ponta'],
      clue: 'MPLS não criptografa por padrão.'
    },

    {
      num: 60,
      tropic: '1. Network Fundamentals',
      subTropic: 'Análise Arquitetural Final',
      question: 'Uma empresa global quer reduzir custo, manter redundância e aplicar políticas por aplicação. Qual solução atende melhor esses requisitos?',
      options: [
        'MPLS puro tradicional',
        'VPN manual full mesh',
        'SD-WAN',
        'LAN distribuída'
      ],
      answer: ['SD-WAN'],
      clue: 'Flexibilidade + múltiplos transportes + controle centralizado.'
    }
  ];
}
