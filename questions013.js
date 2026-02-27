function loadQuestions013() {
  return [
   {
      num: 1,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Uma empresa interliga matriz e filiais em diferentes estados usando MPLS fornecido por uma operadora. Quais duas características são típicas desse cenário?',
      options: [
        'Dependência de provedor externo',
        'Controle total da infraestrutura física fim a fim',
        'Possibilidade de aplicar QoS no tráfego WAN',
        'Uso exclusivo de switches Layer 2'
      ],
      answer: [
        'Dependência de provedor externo',
        'Possibilidade de aplicar QoS no tráfego WAN'
      ],
      clue: 'MPLS depende de operadora e permite priorização de tráfego.'
    },
    {
      num: 2,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Em uma LAN corporativa com múltiplas VLANs, quais dois dispositivos são fundamentais para permitir comunicação entre VLANs?',
      options: [
        'Switch Layer 3',
        'Roteador',
        'Hub',
        'Repetidor'
      ],
      answer: [
        'Switch Layer 3',
        'Roteador'
      ],
      clue: 'Inter-VLAN routing exige dispositivo de camada 3.'
    },
    {
      num: 3,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Uma MAN corporativa conecta vários prédios em uma cidade. Quais duas afirmações são verdadeiras?',
      options: [
        'Interliga múltiplas LANs',
        'Cobre área geográfica maior que WAN',
        'Pode utilizar fibra óptica metropolitana',
        'É limitada a dispositivos pessoais'
      ],
      answer: [
        'Interliga múltiplas LANs',
        'Pode utilizar fibra óptica metropolitana'
      ],
      clue: 'MAN conecta LANs dentro de área metropolitana.'
    },
    {
      num: 4,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Um administrador está solucionando lentidão entre matriz e filial. Quais dois fatores podem estar relacionados à WAN?',
      options: [
        'Alta latência',
        'Domínio de broadcast excessivo na LAN',
        'Congestionamento do link do provedor',
        'Erro de cabo dentro da sala do usuário'
      ],
      answer: [
        'Alta latência',
        'Congestionamento do link do provedor'
      ],
      clue: 'Sintomas típicos de problema WAN.'
    },
    {
      num: 5,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais duas características diferenciam uma LAN de uma WAN?',
      options: [
        'Menor latência típica',
        'Maior dependência de ISP',
        'Controle administrativo local',
        'Cobertura continental'
      ],
      answer: [
        'Menor latência típica',
        'Controle administrativo local'
      ],
      clue: 'LAN é local e gerenciada internamente.'
    },
    {
      num: 6,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Uma empresa implementa dois links WAN para redundância. Quais dois benefícios são obtidos?',
      options: [
        'Alta disponibilidade',
        'Failover automático',
        'Eliminação de roteadores',
        'Redução de VLANs'
      ],
      answer: [
        'Alta disponibilidade',
        'Failover automático'
      ],
      clue: 'Redundância melhora disponibilidade e continuidade.'
    },
    {
      num: 7,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais dois cenários representam uma PAN?',
      options: [
        'Smartwatch conectado ao celular',
        'Fone Bluetooth conectado ao notebook',
        'Campus com três prédios interligados',
        'Filial conectada via MPLS'
      ],
      answer: [
        'Smartwatch conectado ao celular',
        'Fone Bluetooth conectado ao notebook'
      ],
      clue: 'PAN é rede pessoal de curto alcance.'
    },
    {
      num: 8,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais dois dispositivos normalmente operam na borda entre LAN e WAN?',
      options: [
        'Roteador',
        'Firewall',
        'Hub',
        'Repetidor'
      ],
      answer: [
        'Roteador',
        'Firewall'
      ],
      clue: 'Dispositivos de borda conectam rede interna à WAN.'
    },
    {
      num: 9,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Uma empresa deseja priorizar voz sobre dados na WAN. Quais duas ações são necessárias?',
      options: [
        'Configurar QoS no roteador',
        'Classificar e marcar tráfego',
        'Adicionar hubs',
        'Remover VLANs'
      ],
      answer: [
        'Configurar QoS no roteador',
        'Classificar e marcar tráfego'
      ],
      clue: 'QoS envolve classificação e priorização.'
    },
    {
      num: 10,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question: 'Quais duas características são típicas de uma WAN baseada em Internet pública com VPN?',
      options: [
        'Criptografia de tráfego',
        'Dependência da qualidade da Internet',
        'SLA garantido pelo provedor corporativo',
        'Latência sempre baixa'
      ],
      answer: [
        'Criptografia de tráfego',
        'Dependência da qualidade da Internet'
      ],
      clue: 'VPN usa criptografia mas depende da internet pública.'
    }
  ];
}
