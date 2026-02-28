function loadQuestions021() {
  return [
    // =========================
    // STAR TOPOLOGY
    // =========================

    {
      num: 1,
      tropic: '1. Network Fundamentals',
      subTropic: 'Star Topology – Conceito',
      question:
        'Em uma topologia estrela física tradicional com switch central, qual é o impacto da falha de um único cabo que conecta um host?',
      options: [
        'Toda a rede para',
        'Apenas aquele host perde conectividade',
        'Todos os hosts perdem acesso externo',
        'O domínio de broadcast é dividido',
      ],
      answer: ['Apenas aquele host perde conectividade'],
      clue: 'Em estrela, falha é isolada no enlace.',
    },

    {
      num: 2,
      tropic: '1. Network Fundamentals',
      subTropic: 'Star Topology – Falha Crítica',
      question:
        'Qual é o principal ponto único de falha em uma topologia estrela simples?',
      options: [
        'Cada cabo individual',
        'Switch central',
        'Placas de rede dos hosts',
        'Servidor DHCP',
      ],
      answer: ['Switch central'],
      clue: 'Dispositivo central é crítico.',
    },

    {
      num: 3,
      tropic: '1. Network Fundamentals',
      subTropic: 'Star vs Bus',
      question: 'Qual característica diferencia estrela de barramento?',
      options: [
        'Estrela usa IP e barramento não',
        'Estrela possui dispositivo central',
        'Barramento permite VLAN',
        'Estrela não utiliza cabos',
      ],
      answer: ['Estrela possui dispositivo central'],
      clue: 'Elemento central define estrela.',
    },

    {
      num: 4,
      tropic: '1. Network Fundamentals',
      subTropic: 'Star – Escalabilidade',
      question:
        'Ao adicionar novos dispositivos em uma topologia estrela, qual fator pode se tornar limitante?',
      options: [
        'Comprimento total do backbone coaxial',
        'Número de portas disponíveis no switch',
        'Quantidade de hubs no anel',
        'Número de broadcast domains automaticamente criados',
      ],
      answer: ['Número de portas disponíveis no switch'],
      clue: 'Escalabilidade depende do dispositivo central.',
    },

    {
      num: 5,
      tropic: '1. Network Fundamentals',
      subTropic: 'Star – Múltiplas respostas',
      question: 'Quais características são típicas de uma topologia estrela?',
      options: [
        'Isolamento de falha por enlace',
        'Ponto único de falha no núcleo',
        'Uso obrigatório de fibra',
        'Facilidade de gerenciamento centralizado',
      ],
      answer: [
        'Isolamento de falha por enlace',
        'Ponto único de falha no núcleo',
        'Facilidade de gerenciamento centralizado',
      ],
      clue: 'Estrela isola enlaces mas centraliza controle.',
    },

    // =========================
    // BUS TOPOLOGY
    // =========================

    {
      num: 6,
      tropic: '1. Network Fundamentals',
      subTropic: 'Bus – Conceito',
      question: 'Qual problema clássico está associado à topologia barramento?',
      options: [
        'Colisões frequentes',
        'Loop de camada 2',
        'Spanning Tree bloqueado',
        'Overhead de encapsulamento VXLAN',
      ],
      answer: ['Colisões frequentes'],
      clue: 'Meio compartilhado.',
    },

    {
      num: 7,
      tropic: '1. Network Fundamentals',
      subTropic: 'Bus – Falha Física',
      question:
        'Em uma rede barramento com cabo coaxial, se o cabo principal for rompido, qual é o impacto?',
      options: [
        'Apenas um host falha',
        'A rede inteira pode parar',
        'Switch alternativo assume',
        'Somente tráfego externo falha',
      ],
      answer: ['A rede inteira pode parar'],
      clue: 'Barramento depende de meio único.',
    },

    {
      num: 8,
      tropic: '1. Network Fundamentals',
      subTropic: 'Bus vs Star – Pegadinha',
      question:
        'Qual vantagem levou a substituição do barramento pela estrela em redes Ethernet modernas?',
      options: [
        'Menor custo',
        'Redução de colisões',
        'Eliminação de IP',
        'Uso exclusivo de VLAN',
      ],
      answer: ['Redução de colisões'],
      clue: 'Switch elimina domínio de colisão compartilhado.',
    },

    // =========================
    // MESH TOPOLOGY
    // =========================

    {
      num: 9,
      tropic: '1. Network Fundamentals',
      subTropic: 'Mesh – Conceito',
      question:
        'Em uma topologia full mesh com 4 roteadores, quantos links são necessários?',
      options: ['4', '5', '6', '8'],
      answer: ['6'],
      clue: 'n(n-1)/2.',
    },

    {
      num: 10,
      tropic: '1. Network Fundamentals',
      subTropic: 'Mesh – Característica',
      question: 'Qual é o principal benefício da topologia full mesh?',
      options: [
        'Baixo custo',
        'Alta redundância',
        'Simplicidade de configuração',
        'Menor uso de cabos',
      ],
      answer: ['Alta redundância'],
      clue: 'Múltiplos caminhos.',
    },

    {
      num: 11,
      tropic: '1. Network Fundamentals',
      subTropic: 'Mesh – Escalabilidade',
      question: 'Qual é o principal desafio da topologia full mesh?',
      options: [
        'Colisões excessivas',
        'Escalabilidade limitada',
        'Ausência de redundância',
        'Dependência de hub',
      ],
      answer: ['Escalabilidade limitada'],
      clue: 'Número de links cresce exponencialmente.',
    },

    {
      num: 12,
      tropic: '1. Network Fundamentals',
      subTropic: 'Mesh – Múltiplas respostas',
      question: 'Quais características são verdadeiras sobre partial mesh?',
      options: [
        'Nem todos os dispositivos são interligados diretamente',
        'Oferece equilíbrio entre custo e redundância',
        'Elimina necessidade de roteamento',
        'Escala melhor que full mesh',
      ],
      answer: [
        'Nem todos os dispositivos são interligados diretamente',
        'Oferece equilíbrio entre custo e redundância',
        'Escala melhor que full mesh',
      ],
      clue: 'Partial mesh é compromisso arquitetural.',
    },

    // =========================
    // SPINE-LEAF
    // =========================

    {
      num: 13,
      tropic: '1. Network Fundamentals',
      subTropic: 'Spine-Leaf – Conceito',
      question:
        'Qual afirmação descreve corretamente uma arquitetura spine-leaf?',
      options: [
        'Leaf conecta a outros leaf diretamente',
        'Spine conecta apenas a leaf',
        'Barramento centralizado',
        'Topologia linear',
      ],
      answer: ['Spine conecta apenas a leaf'],
      clue: 'Leaf não conecta leaf diretamente.',
    },

    {
      num: 14,
      tropic: '1. Network Fundamentals',
      subTropic: 'Spine-Leaf – Benefício',
      question:
        'Qual benefício principal do spine-leaf em data centers modernos?',
      options: [
        'Redução de IP',
        'Latência previsível',
        'Eliminação de roteadores',
        'Uso exclusivo de STP',
      ],
      answer: ['Latência previsível'],
      clue: 'Saltos iguais entre qualquer leaf.',
    },

    {
      num: 15,
      tropic: '1. Network Fundamentals',
      subTropic: 'Spine-Leaf – Múltiplas respostas',
      question: 'Quais características são típicas de spine-leaf?',
      options: [
        'Todos os leaf conectam a todos os spine',
        'Alta largura de banda leste-oeste',
        'Dependência de cabo coaxial',
        'Escalabilidade horizontal',
      ],
      answer: [
        'Todos os leaf conectam a todos os spine',
        'Alta largura de banda leste-oeste',
        'Escalabilidade horizontal',
      ],
      clue: 'Modelo moderno de data center.',
    },

    // =========================
    // CENÁRIOS AVANÇADOS
    // =========================

    {
      num: 16,
      tropic: '1. Network Fundamentals',
      subTropic: 'Cenário Arquitetural',
      question:
        'Uma empresa precisa garantir que a falha de um único link não interrompa comunicação entre roteadores principais. Qual topologia é mais adequada?',
      options: ['Star', 'Bus', 'Full Mesh', 'Linear'],
      answer: ['Full Mesh'],
      clue: 'Redundância máxima.',
    },

    {
      num: 17,
      tropic: '1. Network Fundamentals',
      subTropic: 'Cenário Campus',
      question:
        'Um campus utiliza core central com múltiplos switches de acesso conectados. Essa arquitetura é exemplo de:',
      options: ['Bus', 'Star hierárquica', 'Full mesh', 'Spine-leaf pura'],
      answer: ['Star hierárquica'],
      clue: 'Modelo tradicional core-distribution-access.',
    },

    {
      num: 18,
      tropic: '1. Network Fundamentals',
      subTropic: 'Pegadinha Conceitual',
      question:
        'Spine-leaf pode ser considerada uma forma moderna de qual topologia lógica?',
      options: [
        'Barramento',
        'Malha parcial',
        'Anel simples',
        'Ponto a ponto único',
      ],
      answer: ['Malha parcial'],
      clue: 'Alta interconectividade estruturada.',
    },
    {
      num: 19,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-datacenter',
      question:
        'Em um data center moderno com arquitetura Spine-Leaf, um engenheiro adiciona um novo switch leaf ao ambiente. Quais duas afirmações são verdadeiras?',
      options: [
        'O novo leaf deve conectar-se a todos os spines',
        'O novo leaf deve conectar-se a todos os outros leafs',
        'A escalabilidade é horizontal',
        'É necessário eleger um root bridge STP para toda a malha',
      ],
      answer: [
        'O novo leaf deve conectar-se a todos os spines',
        'A escalabilidade é horizontal',
      ],
      clue: 'Leaf conecta apenas aos spines. A arquitetura escala horizontalmente e normalmente utiliza ECMP em vez de depender de STP tradicional.',
    },
    {
      num: 20,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Uma rede Ethernet moderna utiliza switches conectando todos os hosts a um ponto central. Qual é a topologia física implementada?',
      options: ['Barramento', 'Malha total', 'Estrela', 'Anel'],
      answer: ['Estrela'],
      clue: 'Switch central caracteriza estrela física.',
    },
    {
      num: 21,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Em uma rede com hub compartilhado, vários hosts competem pelo mesmo meio físico. Qual topologia lógica é utilizada?',
      options: ['Estrela', 'Barramento', 'Malha', 'Spine-Leaf'],
      answer: ['Barramento'],
      clue: 'Hub opera como meio compartilhado, lógica em barramento.',
    },
    {
      num: 22,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Qual é a principal desvantagem da topologia estrela tradicional?',
      options: [
        'Alto custo de cabeamento coaxial',
        'Dependência de um ponto central',
        'Impossibilidade de segmentação',
        'Ausência de broadcast',
      ],
      answer: ['Dependência de um ponto central'],
      clue: 'Se o switch central falhar, toda rede é afetada.',
    },
    {
      num: 23,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Uma rede malha total é escolhida para alta disponibilidade. Qual característica é verdadeira?',
      options: [
        'Cada dispositivo conecta-se a todos os outros',
        'Existe apenas um caminho possível',
        'Não há redundância',
        'É comum em redes domésticas simples',
      ],
      answer: ['Cada dispositivo conecta-se a todos os outros'],
      clue: 'Malha total garante múltiplos caminhos.',
    },
    {
      num: 24,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question: 'Qual cenário representa melhor uma topologia Spine-Leaf?',
      options: [
        'Rede doméstica com roteador Wi-Fi',
        'Data center com múltiplos switches interconectados horizontalmente',
        'Rede coaxial antiga',
        'Conexão ponto a ponto serial',
      ],
      answer: [
        'Data center com múltiplos switches interconectados horizontalmente',
      ],
      clue: 'Spine-Leaf é típica de data center moderno.',
    },
    {
      num: 25,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Quais duas características são típicas de uma topologia malha parcial?',
      options: [
        'Todos conectados a todos',
        'Redundância limitada',
        'Menor custo comparado à malha total',
        'Sem caminhos alternativos',
      ],
      answer: ['Redundância limitada', 'Menor custo comparado à malha total'],
      clue: 'Malha parcial equilibra custo e redundância.',
    },
    {
      num: 26,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Em qual topologia física um único cabo principal conecta vários dispositivos diretamente?',
      options: ['Barramento', 'Estrela', 'Spine-Leaf', 'Malha'],
      answer: ['Barramento'],
      clue: 'Barramento utiliza cabo compartilhado.',
    },

    // Continuando padrão até 59

    {
      num: 27,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma empresa deseja reduzir latência leste-oeste entre servidores virtualizados. Quais duas características justificam a escolha de Spine-Leaf?',
      options: [
        'Comunicação previsível entre racks',
        'Hierarquia tradicional core-distribution',
        'Escalabilidade horizontal',
        'Dependência de STP',
      ],
      answer: [
        'Comunicação previsível entre racks',
        'Escalabilidade horizontal',
      ],
      clue: 'Spine-Leaf melhora tráfego leste-oeste e escala horizontalmente.',
    },

    {
      num: 28,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question: 'Qual topologia apresenta maior tolerância a falhas?',
      options: ['Barramento', 'Estrela simples', 'Malha total', 'Anel simples'],
      answer: ['Malha total'],
      clue: 'Malha total possui múltiplos caminhos redundantes.',
    },

    {
      num: 29,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Em uma rede estrela, se um cabo de um host falhar, qual é o impacto?',
      options: [
        'Toda a rede para',
        'Apenas aquele host é afetado',
        'Todos os switches reiniciam',
        'O backbone falha',
      ],
      answer: ['Apenas aquele host é afetado'],
      clue: 'Falha isolada afeta apenas o nó conectado.',
    },
    {
      num: 30,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Uma empresa utiliza switches para conectar todos os dispositivos a um equipamento central no rack. Apesar disso, cada host possui um domínio de colisão próprio. Qual afirmação descreve corretamente esse cenário?',
      options: [
        'Topologia física em barramento e lógica em estrela',
        'Topologia física em estrela e lógica ponto a ponto',
        'Topologia física em malha total',
        'Topologia lógica em barramento devido ao broadcast',
      ],
      answer: ['Topologia física em estrela e lógica ponto a ponto'],
      clue: 'Switch cria conexões ponto a ponto, embora fisicamente seja estrela.',
    },
    {
      num: 31,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Um administrador conecta três switches adicionais diretamente entre si, criando múltiplos caminhos redundantes. Qual tecnologia será necessária para evitar loops Layer 2?',
      options: ['ARP', 'STP', 'NAT', 'ICMP'],
      answer: ['STP'],
      clue: 'Topologias com redundância em estrela estendida exigem STP para evitar loops.',
    },
    {
      num: 32,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question: 'Qual característica diferencia malha parcial de malha total?',
      options: [
        'Todos os dispositivos conectados entre si',
        'Alguns dispositivos possuem múltiplos caminhos redundantes',
        'Ausência de redundância',
        'Uso exclusivo em LAN',
      ],
      answer: ['Alguns dispositivos possuem múltiplos caminhos redundantes'],
      clue: 'Malha parcial reduz custo mantendo redundância estratégica.',
    },
    {
      num: 33,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Uma organização precisa garantir alta disponibilidade entre dois data centers críticos. Quais duas topologias são mais indicadas?',
      options: [
        'Malha total',
        'Barramento',
        'Malha parcial com múltiplos caminhos',
        'Estrela simples',
      ],
      answer: ['Malha total', 'Malha parcial com múltiplos caminhos'],
      clue: 'Alta disponibilidade exige caminhos redundantes.',
    },
    {
      num: 34,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Uma rede antiga baseada em cabo coaxial apresenta queda total quando o cabo principal é rompido. Qual topologia está sendo utilizada?',
      options: ['Estrela', 'Malha', 'Barramento', 'Spine-Leaf'],
      answer: ['Barramento'],
      clue: 'Barramento depende de um único meio físico compartilhado.',
    },
    {
      num: 35,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question: 'Qual afirmação é verdadeira sobre Spine-Leaf?',
      options: [
        'Switches leaf se conectam diretamente entre si',
        'Cada leaf conecta-se a todos os spines',
        'Há apenas um caminho entre servidores',
        'Elimina completamente a necessidade de roteamento',
      ],
      answer: ['Cada leaf conecta-se a todos os spines'],
      clue: 'Leaf conecta em todos os spines, não entre si.',
    },
    {
      num: 36,
      tropic: '1. Network Fundamentals',
      subTropic: '1.4 Cenários avançados – múltiplas respostas',
      question:
        'Em um ambiente Spine-Leaf, quais duas características são esperadas?',
      options: [
        'Baixa latência leste-oeste',
        'Escalabilidade horizontal',
        'Dependência de hub central',
        'Domínio único de colisão',
      ],
      answer: ['Baixa latência leste-oeste', 'Escalabilidade horizontal'],
      clue: 'Spine-Leaf melhora tráfego entre servidores e escala facilmente.',
    },
    {
      num: 37,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Qual topologia apresenta maior custo de implementação devido à quantidade de conexões físicas?',
      options: ['Barramento', 'Estrela', 'Malha total', 'Spine-Leaf básica'],
      answer: ['Malha total'],
      clue: 'Malha total exige conexões entre todos os nós.',
    },
    {
      num: 38,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Um técnico afirma que uma rede com switch central sempre elimina loops. Por que essa afirmação pode estar incorreta?',
      options: [
        'Switches não operam em Layer 2',
        'Loops podem ocorrer se houver conexões redundantes entre switches',
        'Broadcast não existe em redes estrela',
        'Switches funcionam como hubs',
      ],
      answer: [
        'Loops podem ocorrer se houver conexões redundantes entre switches',
      ],
      clue: 'Redundância entre switches pode criar loop sem STP.',
    },
    {
      num: 39,
      tropic: '1. Network Fundamentals',
      subTropic: '1.2 Topologias Físicas e Lógicas',
      question:
        'Em qual cenário a topologia Spine-Leaf é preferível em vez de uma arquitetura core-distribution tradicional?',
      options: [
        'Rede residencial simples',
        'Ambiente de data center com alta virtualização',
        'Rede com apenas cinco dispositivos',
        'Laboratório com um único switch',
      ],
      answer: ['Ambiente de data center com alta virtualização'],
      clue: 'Spine-Leaf é ideal para tráfego leste-oeste em data centers.',
    },
    {
      num: 40,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-conceito',
      question:
        'Uma rede utiliza switches conectando todos os hosts a um ponto central. O tráfego é encaminhado apenas à porta de destino. Como essa rede deve ser classificada?',
      options: [
        'Física em estrela e lógica ponto a ponto',
        'Física em barramento e lógica em estrela',
        'Física em malha e lógica em anel',
        'Física em estrela e lógica em barramento',
      ],
      answer: ['Física em estrela e lógica ponto a ponto'],
      clue: 'Switch cria enlaces dedicados, diferente do hub.',
    },
    {
      num: 41,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-conceito',
      question:
        'Qual situação representa física em estrela e lógica em barramento?',
      options: [
        'Switch conectando PCs',
        'Hub conectando PCs',
        'Spine-Leaf em data center',
        'Malha total entre roteadores',
      ],
      answer: ['Hub conectando PCs'],
      clue: 'Hub é fisicamente estrela, mas logicamente barramento.',
    },
    {
      num: 42,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-classicas',
      question: 'Qual é a principal limitação da topologia barramento?',
      options: [
        'Alto custo',
        'Dependência de cabo principal',
        'Excesso de redundância',
        'Impossibilidade de broadcast',
      ],
      answer: ['Dependência de cabo principal'],
      clue: 'Se o backbone falhar, toda rede cai.',
    },
    {
      num: 43,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-classicas',
      question: 'Quais duas características são típicas de malha total?',
      options: [
        'Alta redundância',
        'Alto custo de cabeamento',
        'Domínio único de colisão',
        'Uso exclusivo em LAN doméstica',
      ],
      answer: ['Alta redundância', 'Alto custo de cabeamento'],
      clue: 'Malha total maximiza disponibilidade e custo.',
    },
    {
      num: 44,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-logicas',
      question:
        'Qual tecnologia histórica utilizava lógica em anel com controle por token?',
      options: ['Ethernet moderna', 'Token Ring', 'Spine-Leaf', 'Frame Relay'],
      answer: ['Token Ring'],
      clue: 'Token Ring utilizava passagem de token.',
    },
    {
      num: 45,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-logicas',
      question:
        'Em uma rede Ethernet tradicional com hub, qual é o comportamento esperado?',
      options: [
        'Sem colisões',
        'Domínio único de colisão',
        'Roteamento automático',
        'Encaminhamento baseado em MAC table',
      ],
      answer: ['Domínio único de colisão'],
      clue: 'Hub compartilha o meio físico.',
    },
    {
      num: 46,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-dominio',
      question:
        'Qual dispositivo segmenta domínios de colisão mas mantém o mesmo domínio de broadcast?',
      options: ['Hub', 'Switch', 'Roteador', 'Modem'],
      answer: ['Switch'],
      clue: 'Switch separa colisão, não broadcast.',
    },
    {
      num: 47,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-dominio',
      question: 'Qual dispositivo separa domínios de broadcast?',
      options: ['Hub', 'Switch Layer 2', 'Roteador', 'Access Point isolado'],
      answer: ['Roteador'],
      clue: 'Roteadores delimitam broadcast.',
    },
    {
      num: 48,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-datacenter',
      question:
        'Qual é a principal vantagem do Spine-Leaf sobre arquitetura core tradicional?',
      options: [
        'Hierarquia rígida de três camadas',
        'Baixa latência leste-oeste',
        'Uso obrigatório de STP',
        'Redução total de roteamento',
      ],
      answer: ['Baixa latência leste-oeste'],
      clue: 'Spine-Leaf otimiza tráfego entre servidores.',
    },
    {
      num: 49,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-datacenter',
      question: 'Quais duas características são esperadas em Spine-Leaf?',
      options: [
        'Escalabilidade horizontal',
        'Múltiplos caminhos ativos',
        'Dependência de hub central',
        'Domínio único de colisão',
      ],
      answer: ['Escalabilidade horizontal', 'Múltiplos caminhos ativos'],
      clue: 'Utiliza ECMP e escala adicionando switches.',
    },
    {
      num: 50,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-dispositivos',
      question: 'Qual associação está correta?',
      options: [
        'Hub – estrela lógica',
        'Switch – barramento lógico',
        'Hub – barramento lógico',
        'Roteador – domínio único de colisão',
      ],
      answer: ['Hub – barramento lógico'],
      clue: 'Hub compartilha meio, lógica barramento.',
    },
    {
      num: 51,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-redundancia',
      question:
        'Em estrela redundante com múltiplos switches interligados, qual protocolo previne loops?',
      options: ['ICMP', 'STP', 'DHCP', 'DNS'],
      answer: ['STP'],
      clue: 'STP evita loop Layer 2.',
    },
    {
      num: 52,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-redundancia',
      question: 'Qual característica diferencia malha parcial de total?',
      options: [
        'Todos conectados entre si',
        'Redundância estratégica',
        'Sem caminhos alternativos',
        'Uso apenas em LAN',
      ],
      answer: ['Redundância estratégica'],
      clue: 'Parcial reduz custo mantendo disponibilidade.',
    },
    {
      num: 53,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-classicas',
      question: 'Qual topologia é mais comum em LAN corporativa moderna?',
      options: [
        'Barramento coaxial',
        'Estrela com switch',
        'Malha total',
        'Anel físico',
      ],
      answer: ['Estrela com switch'],
      clue: 'Switch central domina LAN moderna.',
    },
    {
      num: 54,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-conceito',
      question:
        'Uma rede física em estrela pode operar logicamente como barramento quando:',
      options: [
        'Utiliza roteador central',
        'Utiliza hub como dispositivo central',
        'Utiliza VLANs',
        'Utiliza firewall',
      ],
      answer: ['Utiliza hub como dispositivo central'],
      clue: 'Hub compartilha meio, lógica barramento.',
    },
    {
      num: 55,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-dominio',
      question:
        'Adicionar um switch a uma rede existente impacta qual domínio?',
      options: [
        'Broadcast apenas',
        'Colisão apenas',
        'Nenhum domínio',
        'Ambos broadcast e colisão',
      ],
      answer: ['Colisão apenas'],
      clue: 'Switch segmenta colisão.',
    },
    {
      num: 56,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-datacenter',
      question:
        'Qual protocolo é frequentemente utilizado em Spine-Leaf para balanceamento de múltiplos caminhos?',
      options: ['STP', 'ECMP', 'ARP', 'FTP'],
      answer: ['ECMP'],
      clue: 'Spine-Leaf usa ECMP para múltiplos caminhos ativos.',
    },
    {
      num: 57,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-logicas',
      question:
        'Qual afirmação sobre broadcast em lógica barramento é correta?',
      options: [
        'Somente um host recebe',
        'Todos recebem o frame',
        'É bloqueado por padrão',
        'Depende de roteador',
      ],
      answer: ['Todos recebem o frame'],
      clue: 'Barramento compartilha o meio.',
    },
    {
      num: 58,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-redundancia',
      question: 'Quais duas vantagens da malha parcial em WAN?',
      options: [
        'Redução de custo',
        'Alta disponibilidade',
        'Domínio único de colisão',
        'Eliminação de roteamento',
      ],
      answer: ['Redução de custo', 'Alta disponibilidade'],
      clue: 'Equilíbrio entre custo e redundância.',
    },
    {
      num: 59,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-datacenter',
      question: 'Por que Spine-Leaf não utiliza core tradicional?',
      options: [
        'Para eliminar redundância',
        'Para permitir comunicação previsível entre leafs via spines',
        'Para reduzir broadcast',
        'Para evitar uso de roteamento',
      ],
      answer: ['Para permitir comunicação previsível entre leafs via spines'],
      clue: 'Arquitetura plana substitui core hierárquico.',
    },
    {
      num: 60,
      tropic: '1. Network Fundamentals',
      subTropic: 'topologias-conceito',
      question:
        'Um administrador afirma que uma rede física em estrela sempre elimina colisões. Após análise, identifica-se que o dispositivo central é um hub. Quais duas afirmações estão corretas nesse cenário?',
      options: [
        'Existe um único domínio de colisão',
        'Cada porta possui domínio de colisão próprio',
        'A topologia lógica é em barramento',
        'Não ocorre broadcast na rede',
      ],
      answer: [
        'Existe um único domínio de colisão',
        'A topologia lógica é em barramento',
      ],
      clue: 'Hub compartilha o meio físico, mantendo lógica em barramento e único domínio de colisão.',
    },
  ];
}
