function loadQuestions013() {
  return [
    {
      num: 1,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura WAN – MPLS',
      question:
        'Uma empresa conecta sua matriz às filiais usando MPLS fornecido por uma operadora. Quem é responsável pelo roteamento dentro do backbone do provedor?',
      options: [
        'Equipe interna de TI da empresa',
        'Roteadores CE',
        'Operadora de telecomunicação',
        'Switches LAN da matriz',
      ],
      answer: ['Operadora de telecomunicação'],
      clue: 'Backbone MPLS pertence ao provedor.',
    },

    {
      num: 2,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Múltiplas respostas',
      question:
        'Quais duas vantagens o SD-WAN oferece em relação ao MPLS tradicional?',
      options: [
        'Uso simultâneo de múltiplos links como internet e MPLS',
        'Eliminação total de roteadores',
        'Gerenciamento centralizado por software',
        'Substituição da LAN interna',
      ],
      answer: [
        'Uso simultâneo de múltiplos links como internet e MPLS',
        'Gerenciamento centralizado por software',
      ],
      clue: 'SD-WAN é sobre controle centralizado e múltiplos transportes.',
    },

    {
      num: 3,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN Site-to-Site',
      question:
        'Uma empresa substitui MPLS por VPN site-to-site sobre internet pública. Qual é a principal diferença arquitetural?',
      options: [
        'A internet passa a ser o meio de transporte',
        'A LAN deixa de existir',
        'Não há mais criptografia',
        'Elimina a necessidade de roteamento',
      ],
      answer: ['A internet passa a ser o meio de transporte'],
      clue: 'VPN usa internet como WAN.',
    },

    {
      num: 4,
      tropic: '1. Network Fundamentals',
      subTropic: 'Análise de Latência',
      question:
        'Qual tecnologia normalmente apresenta menor latência para tráfego crítico corporativo?',
      options: [
        'VPN sobre internet residencial',
        'MPLS dedicado',
        'Bluetooth PAN',
        'Wi-Fi doméstico',
      ],
      answer: ['MPLS dedicado'],
      clue: 'Link dedicado e previsível.',
    },

    {
      num: 5,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura híbrida',
      question:
        'Uma empresa utiliza MPLS para sistemas críticos e VPN sobre internet para tráfego comum. Esse modelo é conhecido como:',
      options: [
        'PAN híbrida',
        'Arquitetura WAN híbrida',
        'LAN distribuída',
        'Topologia estrela simples',
      ],
      answer: ['Arquitetura WAN híbrida'],
      clue: 'Uso combinado de múltiplas WAN.',
    },

    {
      num: 6,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – decisão dinâmica',
      question:
        'Qual recurso do SD-WAN permite redirecionar tráfego automaticamente para o melhor link disponível?',
      options: [
        'Spanning Tree',
        'Dynamic Path Selection',
        'ARP Inspection',
        'Port Security',
      ],
      answer: ['Dynamic Path Selection'],
      clue: 'Escolha dinâmica baseada em métricas.',
    },

    {
      num: 7,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN – Múltiplas respostas',
      question: 'Quais duas características definem uma VPN site-to-site?',
      options: [
        'Criptografia de dados',
        'Uso de internet pública',
        'Substitui switches LAN',
        'Elimina endereçamento IP',
      ],
      answer: ['Criptografia de dados', 'Uso de internet pública'],
      clue: 'VPN encapsula e criptografa sobre internet.',
    },

    {
      num: 8,
      tropic: '1. Network Fundamentals',
      subTropic: 'Topologia WAN',
      question:
        'Em uma topologia MPLS full-mesh provida pelo carrier, quem define os caminhos internos entre as filiais?',
      options: [
        'Administrador local',
        'Operadora',
        'Usuário final',
        'Switch Layer 2',
      ],
      answer: ['Operadora'],
      clue: 'Controle do core é do provedor.',
    },

    {
      num: 9,
      tropic: '1. Network Fundamentals',
      subTropic: 'Segurança WAN',
      question:
        'Por que uma VPN é necessária quando se utiliza internet como meio de WAN?',
      options: [
        'Para aumentar velocidade',
        'Para fornecer criptografia e segurança',
        'Para eliminar roteadores',
        'Para reduzir latência física',
      ],
      answer: ['Para fornecer criptografia e segurança'],
      clue: 'Internet não é privada.',
    },

    {
      num: 10,
      tropic: '1. Network Fundamentals',
      subTropic: 'Comparação MPLS vs SD-WAN',
      question: 'Qual afirmação é verdadeira sobre SD-WAN?',
      options: [
        'Depende exclusivamente de MPLS',
        'Pode operar sobre múltiplos tipos de transporte',
        'Funciona apenas dentro da LAN',
        'Não utiliza roteamento IP',
      ],
      answer: ['Pode operar sobre múltiplos tipos de transporte'],
      clue: 'SD-WAN abstrai o transporte.',
    },

    {
      num: 11,
      tropic: '1. Network Fundamentals',
      subTropic: 'Cenário empresarial',
      question:
        'Uma empresa global precisa de QoS previsível para VoIP entre países. Qual solução é mais adequada?',
      options: [
        'Internet comum sem VPN',
        'MPLS com SLA',
        'PAN Bluetooth',
        'Wi-Fi público',
      ],
      answer: ['MPLS com SLA'],
      clue: 'QoS garantido via SLA.',
    },

    {
      num: 12,
      tropic: '1. Network Fundamentals',
      subTropic: 'Overlay vs Underlay',
      question: 'No contexto de SD-WAN, o termo overlay refere-se a:',
      options: [
        'Infraestrutura física MPLS',
        'Rede lógica criada sobre a WAN existente',
        'Switch LAN local',
        'Cabeamento estruturado',
      ],
      answer: ['Rede lógica criada sobre a WAN existente'],
      clue: 'Overlay roda sobre underlay.',
    },

    {
      num: 13,
      tropic: '1. Network Fundamentals',
      subTropic: 'Múltiplas respostas – Comparação',
      question:
        'Quais duas vantagens o MPLS oferece em relação à VPN sobre internet?',
      options: [
        'Menor previsibilidade',
        'SLA garantido',
        'Controle de QoS no backbone',
        'Gratuito',
      ],
      answer: ['SLA garantido', 'Controle de QoS no backbone'],
      clue: 'Carrier garante SLA.',
    },

    {
      num: 14,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura distribuída',
      question:
        'Em uma arquitetura hub-and-spoke usando VPN, todo tráfego entre filiais passa por:',
      options: [
        'Internet pública apenas',
        'Switch local',
        'Matriz ou data center central',
        'Bluetooth gateway',
      ],
      answer: ['Matriz ou data center central'],
      clue: 'Hub centraliza tráfego.',
    },

    {
      num: 15,
      tropic: '1. Network Fundamentals',
      subTropic: 'Análise de custo',
      question: 'Qual solução geralmente apresenta menor custo mensal?',
      options: [
        'MPLS dedicado',
        'Link satelital corporativo',
        'VPN sobre internet banda larga',
        'Fibra privada intercontinental',
      ],
      answer: ['VPN sobre internet banda larga'],
      clue: 'Internet é mais barata que MPLS.',
    },

    {
      num: 16,
      tropic: '1. Network Fundamentals',
      subTropic: 'Failover WAN',
      question:
        'Qual tecnologia permite failover automático entre MPLS e internet?',
      options: ['SD-WAN', 'Spanning Tree', 'ARP', 'DHCP'],
      answer: ['SD-WAN'],
      clue: 'Gerenciamento inteligente de links.',
    },

    {
      num: 17,
      tropic: '1. Network Fundamentals',
      subTropic: 'Múltiplas respostas – VPN',
      question:
        'Quais dois protocolos são frequentemente associados a VPN site-to-site?',
      options: ['IPsec', 'GRE', 'ARP', 'CDP'],
      answer: ['IPsec', 'GRE'],
      clue: 'Túnel e criptografia.',
    },

    {
      num: 18,
      tropic: '1. Network Fundamentals',
      subTropic: 'Escalabilidade',
      question:
        'Qual solução oferece maior flexibilidade para adicionar novos links rapidamente?',
      options: ['MPLS tradicional', 'SD-WAN', 'PAN', 'LAN isolada'],
      answer: ['SD-WAN'],
      clue: 'Provisionamento centralizado.',
    },

    {
      num: 19,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura moderna',
      question:
        'Uma empresa utiliza internet + 4G + MPLS integrados via controlador central. Essa abordagem é típica de:',
      options: [
        'LAN simples',
        'SD-WAN',
        'PAN corporativa',
        'Rede ponto a ponto física',
      ],
      answer: ['SD-WAN'],
      clue: 'Múltiplos transportes integrados.',
    },
    {
      num: 20,
      tropic: '1. Network Fundamentals',
      subTropic: 'Análise estratégica',
      question:
        'Qual solução oferece maior controle fim a fim da infraestrutura física?',
      options: [
        'Internet pública',
        'MPLS da operadora',
        'Fibra própria entre prédios',
        'VPN sobre Wi-Fi público',
      ],
      answer: ['Fibra própria entre prédios'],
      clue: 'Infraestrutura totalmente controlada.',
    },
    {
      num: 21,
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
    {
      num: 22,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Em uma LAN corporativa com múltiplas VLANs, quais dois dispositivos são fundamentais para permitir comunicação entre VLANs?',
      options: ['Switch Layer 3', 'Roteador', 'Hub', 'Repetidor'],
      answer: ['Switch Layer 3', 'Roteador'],
      clue: 'Inter-VLAN routing exige dispositivo de camada 3.',
    },
    {
      num: 23,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma MAN corporativa conecta vários prédios em uma cidade. Quais duas afirmações são verdadeiras?',
      options: [
        'Interliga múltiplas LANs',
        'Cobre área geográfica maior que WAN',
        'Pode utilizar fibra óptica metropolitana',
        'É limitada a dispositivos pessoais',
      ],
      answer: [
        'Interliga múltiplas LANs',
        'Pode utilizar fibra óptica metropolitana',
      ],
      clue: 'MAN conecta LANs dentro de área metropolitana.',
    },
    {
      num: 24,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Um administrador está solucionando lentidão entre matriz e filial. Quais dois fatores podem estar relacionados à WAN?',
      options: [
        'Alta latência',
        'Domínio de broadcast excessivo na LAN',
        'Congestionamento do link do provedor',
        'Erro de cabo dentro da sala do usuário',
      ],
      answer: ['Alta latência', 'Congestionamento do link do provedor'],
      clue: 'Sintomas típicos de problema WAN.',
    },
    {
      num: 25,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais duas características diferenciam uma LAN de uma WAN?',
      options: [
        'Menor latência típica',
        'Maior dependência de ISP',
        'Controle administrativo local',
        'Cobertura continental',
      ],
      answer: ['Menor latência típica', 'Controle administrativo local'],
      clue: 'LAN é local e gerenciada internamente.',
    },
    {
      num: 26,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma empresa implementa dois links WAN para redundância. Quais dois benefícios são obtidos?',
      options: [
        'Alta disponibilidade',
        'Failover automático',
        'Eliminação de roteadores',
        'Redução de VLANs',
      ],
      answer: ['Alta disponibilidade', 'Failover automático'],
      clue: 'Redundância melhora disponibilidade e continuidade.',
    },
    {
      num: 27,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais dois cenários representam uma PAN?',
      options: [
        'Smartwatch conectado ao celular',
        'Fone Bluetooth conectado ao notebook',
        'Campus com três prédios interligados',
        'Filial conectada via MPLS',
      ],
      answer: [
        'Smartwatch conectado ao celular',
        'Fone Bluetooth conectado ao notebook',
      ],
      clue: 'PAN é rede pessoal de curto alcance.',
    },
    {
      num: 28,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Quais dois dispositivos normalmente operam na borda entre LAN e WAN?',
      options: ['Roteador', 'Firewall', 'Hub', 'Repetidor'],
      answer: ['Roteador', 'Firewall'],
      clue: 'Dispositivos de borda conectam rede interna à WAN.',
    },
    {
      num: 29,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma empresa deseja priorizar voz sobre dados na WAN. Quais duas ações são necessárias?',
      options: [
        'Configurar QoS no roteador',
        'Classificar e marcar tráfego',
        'Adicionar hubs',
        'Remover VLANs',
      ],
      answer: ['Configurar QoS no roteador', 'Classificar e marcar tráfego'],
      clue: 'QoS envolve classificação e priorização.',
    },
    {
      num: 30,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Quais duas características são típicas de uma WAN baseada em Internet pública com VPN?',
      options: [
        'Criptografia de tráfego',
        'Dependência da qualidade da Internet',
        'SLA garantido pelo provedor corporativo',
        'Latência sempre baixa',
      ],
      answer: [
        'Criptografia de tráfego',
        'Dependência da qualidade da Internet',
      ],
      clue: 'VPN usa criptografia mas depende da internet pública.',
    },
        {
      num: 31,
      tropic: '1. Network Fundamentals',
      subTropic: 'Classificação de Rede',
      question: 'Uma empresa possui dois prédios conectados por fibra própria atravessando uma rua. Essa rede deve ser classificada como:',
      options: ['WAN', 'MAN', 'LAN estendida', 'Internet privada'],
      answer: ['LAN estendida'],
      clue: 'Controle total e pequena área geográfica.'
    },

    {
      num: 32,
      tropic: '1. Network Fundamentals',
      subTropic: 'MPLS – Segurança',
      question: 'Qual afirmação é verdadeira sobre MPLS puro fornecido por operadora?',
      options: [
        'É criptografado por padrão',
        'É considerado privado, mas não criptografado',
        'Funciona apenas com VPN IPsec',
        'Substitui firewall'
      ],
      answer: ['É considerado privado, mas não criptografado'],
      clue: 'Privado ≠ criptografado.'
    },

    {
      num: 33,
      tropic: '1. Network Fundamentals',
      subTropic: 'Overlay',
      question: 'Em uma solução SD-WAN, o túnel IPsec criado entre filiais pertence a qual camada arquitetural?',
      options: ['Underlay', 'Overlay', 'Camada Física', 'VLAN local'],
      answer: ['Overlay'],
      clue: 'Túnel lógico sobre rede física.'
    },

    {
      num: 34,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN – Pegadinha',
      question: 'Uma VPN site-to-site elimina a necessidade de roteamento?',
      options: ['Sim', 'Não'],
      answer: ['Não'],
      clue: 'VPN protege tráfego, não substitui roteamento.'
    },

    {
      num: 35,
      tropic: '1. Network Fundamentals',
      subTropic: 'Topologia WAN',
      question: 'Qual topologia WAN minimiza número de túneis, mas pode gerar gargalo?',
      options: ['Full mesh', 'Hub-and-spoke', 'Ponto a ponto dedicado', 'Anel'],
      answer: ['Hub-and-spoke'],
      clue: 'Centralização no hub.'
    },

    {
      num: 36,
      tropic: '1. Network Fundamentals',
      subTropic: 'Latência',
      question: 'Qual fator NÃO influencia diretamente a latência em uma WAN?',
      options: [
        'Distância física',
        'Qualidade do link',
        'Tipo de VLAN interna',
        'Congestionamento'
      ],
      answer: ['Tipo de VLAN interna'],
      clue: 'VLAN não altera latência WAN.'
    },

    {
      num: 37,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Benefício real',
      question: 'Qual é o principal ganho estratégico do SD-WAN?',
      options: [
        'Aumentar potência do Wi-Fi',
        'Separar control plane do data plane',
        'Eliminar necessidade de IP',
        'Remover NAT'
      ],
      answer: ['Separar control plane do data plane'],
      clue: 'Arquitetura definida por software.'
    },

    {
      num: 38,
      tropic: '1. Network Fundamentals',
      subTropic: 'Múltiplas respostas – WAN híbrida',
      question: 'Quais duas características definem uma WAN híbrida?',
      options: [
        'Uso combinado de MPLS e internet',
        'Substituição completa da LAN',
        'Balanceamento de custo e desempenho',
        'Uso exclusivo de satélite'
      ],
      answer: [
        'Uso combinado de MPLS e internet',
        'Balanceamento de custo e desempenho'
      ],
      clue: 'Híbrida mistura transportes.'
    },

    {
      num: 39,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN Remote Access',
      question: 'Qual componente é essencial para VPN de acesso remoto?',
      options: [
        'Switch Layer 2',
        'Concentrador VPN',
        'Servidor DNS externo',
        'Bridge física'
      ],
      answer: ['Concentrador VPN'],
      clue: 'Termina túneis de usuários.'
    },

    {
      num: 40,
      tropic: '1. Network Fundamentals',
      subTropic: 'MPLS – Papel do Cliente',
      question: 'Em um ambiente MPLS, quem é responsável pelo roteamento interno da LAN?',
      options: [
        'Operadora',
        'Cliente',
        'Internet pública',
        'Backbone global'
      ],
      answer: ['Cliente'],
      clue: 'LAN sempre é responsabilidade interna.'
    },

    {
      num: 41,
      tropic: '1. Network Fundamentals',
      subTropic: 'Full Mesh',
      question: 'Qual desvantagem de VPN full mesh cresce exponencialmente?',
      options: [
        'Latência',
        'Quantidade de túneis',
        'Criptografia',
        'QoS'
      ],
      answer: ['Quantidade de túneis'],
      clue: 'n(n-1)/2.'
    },

    {
      num: 42,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN',
      question: 'O SD-WAN substitui fisicamente os links MPLS?',
      options: ['Sim', 'Não'],
      answer: ['Não'],
      clue: 'Ele abstrai, não substitui fisicamente.'
    },

    {
      num: 43,
      tropic: '1. Network Fundamentals',
      subTropic: 'WAN Pública',
      question: 'A internet é classificada como:',
      options: [
        'LAN global',
        'WAN pública',
        'MAN internacional',
        'PAN expandida'
      ],
      answer: ['WAN pública'],
      clue: 'Rede mundial pública.'
    },

    {
      num: 44,
      tropic: '1. Network Fundamentals',
      subTropic: 'Criptografia',
      question: 'Qual tecnologia adiciona criptografia sobre MPLS?',
      options: [
        'IPsec',
        'ARP',
        'Spanning Tree',
        'DHCP'
      ],
      answer: ['IPsec'],
      clue: 'Criptografia via túnel.'
    },

    {
      num: 45,
      tropic: '1. Network Fundamentals',
      subTropic: 'Responsabilidade Operadora',
      question: 'Qual elemento está sob controle da operadora em MPLS?',
      options: [
        'Backbone PE-P',
        'Switch da LAN',
        'Firewall interno',
        'Servidor AD'
      ],
      answer: ['Backbone PE-P'],
      clue: 'Core do provedor.'
    },

    {
      num: 46,
      tropic: '1. Network Fundamentals',
      subTropic: 'SD-WAN – Política',
      question: 'Em SD-WAN, decisões baseadas em aplicação são tomadas com base em:',
      options: [
        'MAC Address',
        'Tipo de cabo',
        'Identificação da aplicação',
        'Cor do roteador'
      ],
      answer: ['Identificação da aplicação'],
      clue: 'Application-aware routing.'
    },

    {
      num: 47,
      tropic: '1. Network Fundamentals',
      subTropic: 'Comparação',
      question: 'Qual solução normalmente apresenta menor custo operacional?',
      options: [
        'MPLS dedicado global',
        'VPN sobre internet',
        'Fibra privada internacional',
        'Link satelital exclusivo'
      ],
      answer: ['VPN sobre internet'],
      clue: 'Internet é mais barata.'
    },

    {
      num: 48,
      tropic: '1. Network Fundamentals',
      subTropic: 'Failover',
      question: 'Failover automático entre dois links WAN pode ser feito com:',
      options: [
        'SD-WAN',
        'Hub USB',
        'Patch panel',
        'Cabo coaxial'
      ],
      answer: ['SD-WAN'],
      clue: 'Gerenciamento inteligente.'
    },

    {
      num: 49,
      tropic: '1. Network Fundamentals',
      subTropic: 'QoS',
      question: 'QoS é mais previsível em qual ambiente?',
      options: [
        'Internet pública',
        'MPLS com SLA',
        'Wi-Fi aberto',
        'Hotspot móvel'
      ],
      answer: ['MPLS com SLA'],
      clue: 'SLA garante métricas.'
    },

    {
      num: 50,
      tropic: '1. Network Fundamentals',
      subTropic: 'Overlay vs Underlay',
      question: 'Qual exemplo representa Underlay?',
      options: [
        'Túnel IPsec',
        'Internet física',
        'Política de aplicação',
        'Controlador SD-WAN'
      ],
      answer: ['Internet física'],
      clue: 'Rede de transporte real.'
    },

    {
      num: 51,
      tropic: '1. Network Fundamentals',
      subTropic: 'VPN',
      question: 'VPN site-to-site normalmente conecta:',
      options: [
        'Usuário individual a servidor',
        'Duas redes distintas',
        'Switch a switch Layer 2',
        'PAN devices'
      ],
      answer: ['Duas redes distintas'],
      clue: 'Rede com rede.'
    },

    {
      num: 52,
      tropic: '1. Network Fundamentals',
      subTropic: 'Latência e Banda',
      question: 'Alta largura de banda garante baixa latência?',
      options: ['Sim', 'Não'],
      answer: ['Não'],
      clue: 'São métricas diferentes.'
    },

    {
      num: 53,
      tropic: '1. Network Fundamentals',
      subTropic: 'Arquitetura',
      question: 'SD-WAN é considerado qual tipo de arquitetura?',
      options: [
        'Hardware-centric',
        'Software-defined',
        'Cable-based',
        'Manual routing'
      ],
      answer: ['Software-defined'],
      clue: 'Definido por software.'
    },

    {
      num: 54,
      tropic: '1. Network Fundamentals',
      subTropic: 'Controle',
      question: 'Qual solução oferece maior controle físico da infraestrutura?',
      options: [
        'Internet pública',
        'MPLS da operadora',
        'Fibra própria',
        'VPN remota'
      ],
      answer: ['Fibra própria'],
      clue: 'Infraestrutura própria.'
    },

    {
      num: 55,
      tropic: '1. Network Fundamentals',
      subTropic: 'Escalabilidade',
      question: 'Qual modelo escala melhor para 50 filiais?',
      options: [
        'VPN full mesh manual',
        'Hub-and-spoke estático',
        'SD-WAN com controller',
        'PAN Bluetooth'
      ],
      answer: ['SD-WAN com controller'],
      clue: 'Escalabilidade automatizada.'
    },

    {
      num: 56,
      tropic: '1. Network Fundamentals',
      subTropic: 'Segurança',
      question: 'MPLS elimina necessidade de firewall?',
      options: ['Sim', 'Não'],
      answer: ['Não'],
      clue: 'Firewall continua necessário.'
    },

    {
      num: 57,
      tropic: '1. Network Fundamentals',
      subTropic: 'Comparação prática',
      question: 'Qual solução é mais flexível para adicionar 4G como link secundário?',
      options: [
        'MPLS tradicional',
        'SD-WAN',
        'LAN isolada',
        'PAN'
      ],
      answer: ['SD-WAN'],
      clue: 'Integra múltiplos transportes.'
    },

    {
      num: 58,
      tropic: '1. Network Fundamentals',
      subTropic: 'Responsabilidade',
      question: 'Em VPN sobre internet, quem controla a infraestrutura da internet?',
      options: [
        'Empresa cliente',
        'Operadoras globais',
        'Administrador LAN',
        'Usuário remoto'
      ],
      answer: ['Operadoras globais'],
      clue: 'Internet não é controlada pela empresa.'
    },

    {
      num: 59,
      tropic: '1. Network Fundamentals',
      subTropic: 'Definição',
      question: 'Qual rede conecta dispositivos pessoais em poucos metros?',
      options: ['WAN', 'MAN', 'LAN', 'PAN'],
      answer: ['PAN'],
      clue: 'Personal Area Network.'
    },

    {
      num: 60,
      tropic: '1. Network Fundamentals',
      subTropic: 'Análise Final',
      question: 'Qual tecnologia oferece maior controle baseado em aplicação?',
      options: [
        'MPLS estático',
        'SD-WAN',
        'PAN',
        'Switch Layer 2'
      ],
      answer: ['SD-WAN'],
      clue: 'Application-aware routing.'
    }
  ];
}
