import { Question } from '@/types/simulator';

export const fuvestQuestions: Question[] = [
  {
    id: 'fuv-01',
    number: 1,
    examId: 'fuvest-2024',
    discipline: 'Literatura e Língua Portuguesa',
    topic: 'Modernismo Brasileiro - Macunaíma de Mário de Andrade',
    stem: 'Em "Macunaíma, o herói sem nenhum caráter" (1928), de Mário de Andrade, o subtítulo da obra assume uma acepção que:',
    options: [
      { letter: 'A', text: 'Condena moralmente a conduta desonesta do protagonista perante a lei.' },
      { letter: 'B', text: 'Aponta para a maleabilidade identitária em formação do povo brasileiro, livre de contornos estanques.' },
      { letter: 'C', text: 'Critica a ausência de princípios éticos nos imigrantes italianos em São Paulo.' },
      { letter: 'D', text: 'Denuncia a passividade do herói romântico alencarino diante da colonização.' },
      { letter: 'E', text: 'Exalta o perfil dos bandeirantes como os verdadeiros fundadores da nacionalidade.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 660,
    explanation: {
      summary: 'A FUVEST analisa a obra sob o viés da rapsódia moderna e antropofagia cultural.',
      stepByStep: [
        'Na concepção modernista de Mário de Andrade, "sem nenhum caráter" significa não ter caráter fixo nem forma definitiva acabada.',
        'Simboliza a síntese heterogênea e antropofágica das etnias e mitos fundadores do Brasil.',
        'Não tem sentido puramente moralista pejorativo, mas ontológico e estético.'
      ],
      keyTakeaway: 'Macunaíma é uma rapsódia que funde lendas indígenas amazônicas com a febre urbana paulistana dos anos 1920.'
    }
  },
  {
    id: 'fuv-02',
    number: 2,
    examId: 'fuvest-2024',
    discipline: 'Física',
    topic: 'Mecânica Clássica - Conservação da Quantidade de Movimento',
    stem: 'Dois carrinhos A e B sobre um trilho de ar horizontal sem atrito, de massas mA = 2 kg e mB = 3 kg, movem-se um em direção ao outro. O carrinho A move-se para a direita com velocidade de 4 m/s e o carrinho B move-se para a esquerda com velocidade de 2 m/s. Após uma colisão perfeitamente inelástica (ficando unidos), a velocidade final do conjunto é:',
    options: [
      { letter: 'A', text: '0,4 m/s para a direita' },
      { letter: 'B', text: '0,4 m/s para a esquerda' },
      { letter: 'C', text: '2,8 m/s para a direita' },
      { letter: 'D', text: '1,2 m/s para a esquerda' },
      { letter: 'E', text: 'Zero (repouso total)' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 680,
    explanation: {
      summary: 'Conservação da quantidade de movimento linear em sistema isolado.',
      stepByStep: [
        'Orientando o eixo para a direita como positivo: vA = +4 m/s e vB = -2 m/s.',
        'Quantidade de movimento inicial: Q_total = mA · vA + mB · vB = 2 · (+4) + 3 · (-2) = 8 - 6 = +2 kg·m/s.',
        'Após a colisão inelástica, a massa total é (mA + mB) = 2 + 3 = 5 kg.',
        'Q_final = Q_total ⇒ 5 · vf = +2 ⇒ vf = +2 / 5 = +0,4 m/s.',
        'O sinal positivo indica sentido para a direita.'
      ],
      keyTakeaway: 'Em colisões perfeitamente inelásticas, a energia cinética dissipa-se ao máximo, mas a quantidade de movimento sempre se conserva.'
    }
  },
  {
    id: 'fuv-03',
    number: 3,
    examId: 'fuvest-2024',
    discipline: 'Química',
    topic: 'Equilíbrio Químico e Princípio de Le Chatelier',
    stem: 'Considere a reação reversível de síntese da amônia pelo processo Haber-Bosch: N2(g) + 3 H2(g) ⇌ 2 NH3(g) (ΔH = -92 kJ/mol). Para maximizar o rendimento na formação de amônia (NH3), os parâmetros operacionais de temperatura e pressão devem ser ajustados para:',
    options: [
      { letter: 'A', text: 'Alta temperatura e baixa pressão' },
      { letter: 'B', text: 'Baixa temperatura e alta pressão' },
      { letter: 'C', text: 'Baixa temperatura e baixa pressão' },
      { letter: 'D', text: 'Alta temperatura e alta pressão' },
      { letter: 'E', text: 'Adição de gás hélio inerte a volume constante' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 650,
    explanation: {
      summary: 'Princípio de Le Chatelier para reações exotérmicas e com contração de volume gasoso.',
      stepByStep: [
        'A reação direta é exotérmica (ΔH < 0). Pelo princípio de Le Chatelier, diminuir a temperatura desloca o equilíbrio no sentido exotérmico (favorece NH3).',
        'Contando os mols de gases: reagentes = 1 + 3 = 4 mols; produtos = 2 mols. A reação direta ocorre com contração de volume.',
        'Aumentar a pressão total desloca o equilíbrio para o lado com menor número de mols gasosos (favorece NH3).',
        'Portanto, o equilíbrio é maximizado com baixa temperatura e alta pressão.'
      ],
      keyTakeaway: 'Na indústria real usa-se uma temperatura moderada (~450 °C) com catalisador para equilibrar o rendimento termodinâmico com a velocidade cinética da reação.'
    }
  },
  {
    id: 'fuv-04',
    number: 4,
    examId: 'fuvest-2024',
    discipline: 'Biologia',
    topic: 'Botânica - Fisiologia Vegetal e Transporte de Seiva',
    stem: 'Pela teoria de Dixon (coesão-tensão-adesão), a ascensão contínua da seiva bruta (água e sais minerais) das raízes até a copa das árvores gigantescas (como as sequóias) é movida primordialmente por:',
    options: [
      { letter: 'A', text: 'Pressão positiva impulsionada pelo bombeamento das células do córtex radicular.' },
      { letter: 'B', text: 'Transpiração foliar estomática que cria uma tensão de sucção transmitida pela coluna contínua de água no xilema.' },
      { letter: 'C', text: 'Gravidade inversa atuante nos vasos crivados do floema.' },
      { letter: 'D', text: 'Digestão enzimática da celulose no parênquima aquífero.' },
      { letter: 'E', text: 'Fotossíntese noturna nos estômatos caulinares.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'A teoria da coesão-tensão explica a subida da seiva bruta através de forças intermoleculares de pontes de hidrogênio e perda de vapor d\'água nas folhas.',
      stepByStep: [
        'A transpiração foliar gera um déficit de pressão de água nas folhas.',
        'As moléculas de água mantêm-se coesas por ligações de hidrogênio, formando um fio contínuo no interior dos vasos xilemáticos.',
        'Essa tensão puxa a água desde a raiz até dezenas de metros de altura.'
      ],
      keyTakeaway: 'Lembre-se: Seiva bruta (água e sais) sobe pelo Xilema por sucção transpiratória; seiva elaborada (orgânica) desce/distribui-se pelo Floema por fluxo de massa de Münch.'
    }
  },
  {
    id: 'fuv-05',
    number: 5,
    examId: 'fuvest-2024',
    discipline: 'História Geral',
    topic: 'Revolução Francesa e a Declaração dos Direitos',
    stem: 'A Declaração dos Direitos do Homem e do Cidadão, aprovada pela Assembleia Constituinte Francesa em agosto de 1789, proclamou que "os homens nascem e são livres e iguais em direitos". Esse documento consagrou o princípio burguês de:',
    options: [
      { letter: 'A', text: 'Igualdade jurídica perante a lei e inviolabilidade da propriedade privada, extinguindo privilégios feudais de nascimento.' },
      { letter: 'B', text: 'Abolição imediata de todas as formas de propriedade privada e comunismo agrário coletivo.' },
      { letter: 'C', text: 'Submissão incondicional do Parlamento ao absolutismo papal.' },
      { letter: 'D', text: 'Extinção de todos os exércitos nacionais permanentes na Europa.' },
      { letter: 'E', text: 'Direito divino dos monarcas capetíngios na cobrança de dízimos nobiliárquicos.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 510,
    explanation: {
      summary: 'O marco iluminista da Revolução Francesa derrubou a sociedade de ordens (estamentos).',
      stepByStep: [
        'A burguesia desejava o fim dos privilégios do clero e da nobreza (isenção de impostos, tribunais especiais).',
        'A igualdade defendida é estritamente jurídica e civil (isonomia), não econômica material.',
        'A propriedade privada foi alçada a direito natural sagrado e inviolável.'
      ],
      keyTakeaway: 'A igualdade liberal de 1789 é formal perante a lei, mantendo a desigualdade de renda e patrimônio.'
    }
  },
  {
    id: 'fuv-06',
    number: 6,
    examId: 'fuvest-2024',
    discipline: 'Geografia',
    topic: 'Climatologia e Dinâmica de Massas de Ar no Brasil',
    stem: 'Durante o inverno no Centro-Sul brasileiro, a entrada vigorosa da Massa Polar Atlântica (mPa) canalizada pelas depressões dos vales dos rios Paraguai e Paraná provoca acentuada queda de temperatura e geadas, podendo atingir até o sul da Amazônia Ocidental. Esse fenômeno atmosférico regional na Amazônia é conhecido como:',
    options: [
      { letter: 'A', text: 'Inversão térmica industrial' },
      { letter: 'B', text: 'Friagem' },
      { letter: 'C', text: 'Ressaca barrométrica' },
      { letter: 'D', text: 'El Niño oscilatório' },
      { letter: 'E', text: 'Monção equatorial' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 530,
    explanation: {
      summary: 'Friagem é o declínio súbito de temperatura no sudoeste amazônico (Acre e Rondônia) provocado pelo avanço da mPa.',
      stepByStep: [
        'A Cordilheira dos Andes funciona como uma barreira que canaliza o ar frio polar para o norte.',
        'Ao atingir as baixas latitudes da Amazônia Ocidental, rompe o padrão térmico elevado, configurando a friagem.'
      ],
      keyTakeaway: 'Questão tradicional de vestibulares paulistas sobre dinâmica das massas de ar no território brasileiro.'
    }
  },
  {
    id: 'fuv-07',
    number: 7,
    examId: 'fuvest-2024',
    discipline: 'Matemática',
    topic: 'Geometria Analítica - Distância de Ponto à Reta',
    stem: 'No plano cartesiano com eixos ortogonais, a distância do ponto P(3, 4) à reta r de equação 3x + 4y - 10 = 0 é dada por:',
    options: [
      { letter: 'A', text: '3 unidades' },
      { letter: 'B', text: '5 unidades' },
      { letter: 'C', text: '15 unidades' },
      { letter: 'D', text: '2,5 unidades' },
      { letter: 'E', text: '1 unidade' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 670,
    explanation: {
      summary: 'Fórmula da distância de ponto à reta: d = |A·x0 + B·y0 + C| / √(A² + B²).',
      stepByStep: [
        'Equação da reta: 3x + 4y - 10 = 0, logo A = 3, B = 4 e C = -10.',
        'Ponto P(x0, y0) = (3, 4).',
        'Numerador: |3·3 + 4·4 - 10| = |9 + 16 - 10| = |15| = 15.',
        'Denominador: √(3² + 4²) = √(9 + 16) = √25 = 5.',
        'Distância d = 15 / 5 = 3 unidades.'
      ],
      keyTakeaway: 'Aplicação direta da fórmula da distância cartesiana com o clássico triângulo pitagórico 3-4-5.'
    }
  },
  {
    id: 'fuv-08',
    number: 8,
    examId: 'fuvest-2024',
    discipline: 'Física',
    topic: 'Óptica Geométrica - Lentes Delgadas e Imagens Reais',
    stem: 'Um objeto linear de 4 cm de altura é colocado perpendicularmente ao eixo principal de uma lente esférica delgada convergente de distância focal f = 20 cm, a uma distância de 30 cm do centro óptico da lente. A posição da imagem conjugada e sua respectiva altura são:',
    options: [
      { letter: 'A', text: 'p\' = 60 cm (imagem real) e altura de 8 cm (invertida)' },
      { letter: 'B', text: 'p\' = 12 cm (imagem virtual) e altura de 2 cm (direita)' },
      { letter: 'C', text: 'p\' = 50 cm (imagem real) e altura de 4 cm (invertida)' },
      { letter: 'D', text: 'p\' = 30 cm (imagem real) e altura de 4 cm (invertida)' },
      { letter: 'E', text: 'p\' = 15 cm (imagem virtual) e altura de 6 cm (invertida)' }
    ],
    correctOption: 'A',
    triDifficulty: 'Difícil',
    triScoreWeight: 740,
    explanation: {
      summary: 'Equação de Gauss dos pontos conjugados: 1/f = 1/p + 1/p\'.',
      stepByStep: [
        'Dado: f = +20 cm (lente convergente), p = 30 cm, o = 4 cm.',
        '1/20 = 1/30 + 1/p\' ⇒ 1/p\' = 1/20 - 1/30 = (3 - 2)/60 = 1/60.',
        'Logo, p\' = +60 cm (imagem real formada do outro lado da lente).',
        'Aumento linear transversal: A = i / o = -p\' / p = -60 / 30 = -2.',
        'Altura da imagem: i = A · o = -2 · 4 = -8 cm (o sinal negativo confirma imagem invertida).'
      ],
      keyTakeaway: 'Para lentes convergentes com objeto além do foco (p > f), a imagem é sempre real e invertida.'
    }
  },
  {
    id: 'fuv-09',
    number: 9,
    examId: 'fuvest-2024',
    discipline: 'Química',
    topic: 'Eletroquímica - Pilhas Galvânicas e Potencial Padrão',
    stem: 'Considere os potenciais padrão de redução a 25 °C: Zn²⁺(aq) + 2e⁻ → Zn(s) (E° = -0,76 V) e Cu²⁺(aq) + 2e⁻ → Cu(s) (E° = +0,34 V). Ao construir uma pilha de Daniell em condições padrão conectando esses dois eletrodos por uma ponte salina, a diferença de potencial (fem) padrão e o sentido espontâneo dos elétrons pelo fio condutor externo são:',
    options: [
      { letter: 'A', text: '+1,10 V; do eletrodo de zinco (ânodo) para o de cobre (cátodo)' },
      { letter: 'B', text: '+0,42 V; do eletrodo de cobre (ânodo) para o de zinco (cátodo)' },
      { letter: 'C', text: '-1,10 V; do eletrodo de cobre para o de zinco' },
      { letter: 'D', text: '+1,10 V; do eletrodo de cobre para o de zinco' },
      { letter: 'E', text: '+0,76 V; não há fluxo elétrico espontâneo' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 550,
    explanation: {
      summary: 'Cálculo de ddp padrão e polaridade em pilhas eletroquímicas.',
      stepByStep: [
        'O Cu²⁺ possui maior potencial de redução (+0,34 V > -0,76 V), portanto sofre redução no Cátodo (polo positivo).',
        'O Zn possui menor potencial de redução, portanto sofre oxidação no Ânodo (polo negativo).',
        'ΔE° = E°_maior - E°_menor = (+0,34 V) - (-0,76 V) = +1,10 V.',
        'Os elétrons fluem espontaneamente pelo circuito externo do Ânodo (oxidação/Zinco) para o Cátodo (redução/Cobre).'
      ],
      keyTakeaway: 'Mnemônica clássica: Ânodo Oxida (vogal com vogal); Cátodo Reduz (consoante com consoante). Elétrons sempre viajam do Ânodo para o Cátodo.'
    }
  },
  {
    id: 'fuv-10',
    number: 10,
    examId: 'fuvest-2024',
    discipline: 'Literatura e Língua Portuguesa',
    topic: 'Poesia Barroca e Gregório de Matos',
    stem: 'A lírica satírica de Gregório de Matos ("Boca do Inferno") no século XVII no Brasil colônia destaca-se pela virulência com que expunha:',
    options: [
      { letter: 'A', text: 'A corrupção administrativa dos governadores da Bahia e a ganância do clero e da nobreza decadente.' },
      { letter: 'B', text: 'O louvor incontido aos valores industriais da burguesia manufatureira paulistana.' },
      { letter: 'C', text: 'A defesa apologética do Santo Ofício da Inquisição contra a liberdade de culto dos escravizados.' },
      { letter: 'D', text: 'A exaltação idílica da vida campestre dos pastores do Arcadismo bucólico.' },
      { letter: 'E', text: 'A celebração do pacto colonial como modelo perfeito de justiça distributiva cristã.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 610,
    explanation: {
      summary: 'Gregório de Matos inaugurou a veia crítica da poesia brasileira através do Barroco baiano.',
      stepByStep: [
        'Em sonetos como "A cada canto um grande conselheiro", Gregório fustiga os juízes, fidalgos e padres de Salvador.',
        'Utiliza termos tupis e africanos em sua sátira ferina, rompendo com o purismo cortesão lusitano.'
      ],
      keyTakeaway: 'O Barroco gregoriocitadino mescla temas religiosos culposos com ferina crítica sociopolítica aos poderosos da colônia.'
    }
  },
  {
    id: 'fuv-11',
    number: 11,
    examId: 'fuvest-2024',
    discipline: 'Matemática',
    topic: 'Polinômios e Relações de Girard',
    stem: 'Se as raízes da equação polinomial x³ - 6x² + 11x - 6 = 0 estão em Progressão Aritmética (PA), a soma dos quadrados dessas raízes é igual a:',
    options: [
      { letter: 'A', text: '14' },
      { letter: 'B', text: '36' },
      { letter: 'C', text: '22' },
      { letter: 'D', text: '18' },
      { letter: 'E', text: '25' }
    ],
    correctOption: 'A',
    triDifficulty: 'Difícil',
    triScoreWeight: 750,
    explanation: {
      summary: 'Aplicação das relações de Girard para equações cúbicas.',
      stepByStep: [
        'Sejam as raízes em PA: r1 = a - r, r2 = a, r3 = a + r.',
        'Pela 1ª relação de Girard (soma das raízes): r1 + r2 + r3 = -(-6)/1 = 6.',
        '(a - r) + a + (a + r) = 3a = 6 ⇒ a = 2 (a raiz central é 2).',
        'Substituindo x = 2 para conferir: 2³ - 6·2² + 11·2 - 6 = 8 - 24 + 22 - 6 = 0 (confirma).',
        'Dividindo o polinômio por (x - 2): obtemos x² - 4x + 3 = (x - 1)(x - 3) = 0.',
        'Portanto, as três raízes são 1, 2 e 3 (PA de razão 1).',
        'Soma dos quadrados: 1² + 2² + 3² = 1 + 4 + 9 = 14.'
      ],
      keyTakeaway: 'Quando as raízes estão em PA, representar como (a - r), a, (a + r) simplifica a soma das raízes pela primeira relação de Girard.'
    }
  },
  {
    id: 'fuv-12',
    number: 12,
    examId: 'fuvest-2024',
    discipline: 'Biologia',
    topic: 'Imunologia - Vacinas de RNA Mensageiro vs Soros',
    stem: 'A tecnologia pioneira das vacinas baseadas em RNA mensageiro (mRNA) contra patógenos virais consiste em introduzir na célula humana uma fita de mRNA protegida por nanopartículas lipídicas que orienta os ribossomos do próprio hospedeiro a:',
    options: [
      { letter: 'A', text: 'Traduzir temporariamente uma proteína antigênica inofensiva do vírus, estimulando a imunidade ativa e a formação de linfócitos de memória.' },
      { letter: 'B', text: 'Inserir de forma irreversível o código viral no genoma dos neurônios humanos para bloquear a transcrição.' },
      { letter: 'C', text: 'Produzir anticorpos equinos pré-fabricados com atuação passiva de curto prazo.' },
      { letter: 'D', text: 'Eliminar os macrófagos e as células NK para impedir reações inflamatórias alérgicas.' },
      { letter: 'E', text: 'Sintetizar bacteriófagos lisogênicos nos lisossomos do epitélio pulmonar.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 620,
    explanation: {
      summary: 'Mecanismo molecular de imunização ativa por vacinas de mRNA.',
      stepByStep: [
        'O mRNA vacinal não entra no núcleo nem se integra ao DNA humano.',
        'Ele é traduzido nos ribossomos citoplasmáticos, produzindo a proteína de superfície (como a proteína Spike).',
        'O sistema imunológico reconhece o antígeno estranho, desencadeando resposta por linfócitos B e T de memória.',
        'O mRNA é degradado rapidamente pela maquinaria celular.'
      ],
      keyTakeaway: 'Vacina confere imunidade ativa de longa duração com produção própria de anticorpos; soro confere imunidade passiva imediata sem memória.'
    }
  },
  {
    id: 'fuv-13',
    number: 13,
    examId: 'fuvest-2024',
    discipline: 'História do Brasil',
    topic: 'Era Vargas - Legislação Trabalhista e Corporativismo',
    stem: 'O modelo sindical implementado durante o Estado Novo varguista (1937-1945), inspirado na Carta del Lavoro italiana, estruturou-se sob a diretriz de:',
    options: [
      { letter: 'A', text: 'Corporativismo com controle estatal dos sindicatos oficiais e proibição estrita do direito de greve.' },
      { letter: 'B', text: 'Anarcossindicalismo descentralizado com autogestão operária direta das fábricas.' },
      { letter: 'C', text: 'Subordinação integral dos industriais paulistas aos partidos de orientação trotskista.' },
      { letter: 'D', text: 'Liberdade plena de organização sindical sem recolhimento do imposto sindical compulsório.' },
      { letter: 'E', text: 'Aliança armada com o tenentismo para a dissolução do Ministério do Trabalho.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 640,
    explanation: {
      summary: 'O corporativismo da Era Vargas atrelou os sindicatos ao Ministério do Trabalho.',
      stepByStep: [
        'Vargas concedeu direitos trabalhistas históricos (CLT, férias, salário mínimo, jornada de 8h).',
        'Em contrapartida, impôs tutela estrita do Estado, permitindo apenas um sindicato por categoria (unicidade sindical) e proibindo greves.',
        'Isso neutralizou a influência autônoma comunista e anarquista sobre os trabalhadores.'
      ],
      keyTakeaway: 'A política trabalhista de Vargas é caracterizada pelo binômio: concessão de direitos reais combinada com controle autoritário do movimento operário.'
    }
  },
  {
    id: 'fuv-14',
    number: 14,
    examId: 'fuvest-2024',
    discipline: 'Geografia',
    topic: 'Demografia - Transição Demográfica e Envelhecimento Populacional',
    stem: 'A pirâmide etária brasileira revelada pelo Censo 2022 do IBGE evidencia o estreitamento progressivo de sua base e o alargamento de seu topo. Esse desenho demográfico reflete:',
    options: [
      { letter: 'A', text: 'Aumento expressivo nas taxas de fecundidade associado à redução da expectativa de vida média.' },
      { letter: 'B', text: 'Aceleração da transição demográfica, motivada pela queda contínua da fecundidade e pelo aumento da longevidade da população.' },
      { letter: 'C', text: 'Fluxo imigratório massivo de crianças em idade escolar vindas dos países do hemisfério norte.' },
      { letter: 'D', text: 'Descontinuidade total do bônus demográfico no setor agropecuário exportador.' },
      { letter: 'E', text: 'Estagnação das taxas de mortalidade infantil nos centros urbanos periféricos.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 520,
    explanation: {
      summary: 'O Brasil encontra-se em fase avançada de transição demográfica.',
      stepByStep: [
        'A taxa de fecundidade brasileira caiu para cerca de 1,5 filho por mulher (abaixo da reposição de 2,1).',
        'Ao mesmo tempo, as melhorias sanitárias elevaram a expectativa de vida para além dos 76 anos.',
        'O resultado é o estreitamento da base (menos jovens) e o topo expandido (mais idosos).'
      ],
      keyTakeaway: 'O envelhecimento populacional impõe desafios econômicos urgentes para a previdência social e para os serviços de saúde especializada.'
    }
  },
  {
    id: 'fuv-15',
    number: 15,
    examId: 'fuvest-2024',
    discipline: 'Química',
    topic: 'Estequiometria e Pureza de Reagentes',
    stem: 'Uma amostra de 200 g de calcário com 80% de pureza em carbonato de cálcio (CaCO3) é submetida a aquecimento e decompõe-se termicamente conforme a reação: CaCO3(s) → CaO(s) + CO2(g). Considerando as massas molares: Ca = 40 g/mol, C = 12 g/mol, O = 16 g/mol, a massa de óxido de cálcio (CaO) obtida com 100% de rendimento é:',
    options: [
      { letter: 'A', text: '89,6 g' },
      { letter: 'B', text: '112 g' },
      { letter: 'C', text: '56 g' },
      { letter: 'D', text: '160 g' },
      { letter: 'E', text: '44 g' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 670,
    explanation: {
      summary: 'Cálculo estequiométrico com teor de pureza.',
      stepByStep: [
        'Massa de CaCO3 puro na amostra: 80% de 200 g = 0,80 · 200 = 160 g.',
        'Massa molar do CaCO3 = 40 + 12 + 3·16 = 100 g/mol.',
        'Massa molar do CaO = 40 + 16 = 56 g/mol.',
        'Proporção estequiométrica 1:1: 100 g de CaCO3 produzem 56 g de CaO.',
        'Regra de três: 100 g de CaCO3 ---> 56 g de CaO; 160 g de CaCO3 ---> m_CaO.',
        'm_CaO = (160 · 56) / 100 = 8960 / 100 = 89,6 g de CaO.'
      ],
      keyTakeaway: 'Em cálculos com pureza de reagentes, sempre determine a massa efetiva pura antes de montar as proporções estequiométricas.'
    }
  },
  {
    id: 'fuv-16',
    number: 16,
    examId: 'fuvest-2024',
    discipline: 'Física',
    topic: 'Eletromagnetismo - Lei de Faraday e Indução Eletromagnética',
    stem: 'Uma espira condutora circular plana de área 0,05 m² é imersa perpendicularmente em uma região com campo magnético uniforme. O módulo do campo magnético aumenta uniformemente de 0,2 T para 0,8 T em um intervalo de tempo de 0,3 segundos. O módulo da força eletromotriz induzida média na espira nesse intervalo é de:',
    options: [
      { letter: 'A', text: '0,10 V' },
      { letter: 'B', text: '0,05 V' },
      { letter: 'C', text: '0,20 V' },
      { letter: 'D', text: '0,60 V' },
      { letter: 'E', text: '1,20 V' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 690,
    explanation: {
      summary: 'Aplicação da Lei de Faraday-Neumann: ε = |ΔΦ / Δt|.',
      stepByStep: [
        'Fluxo magnético inicial: Φ1 = B1 · A = 0,2 · 0,05 = 0,01 Wb.',
        'Fluxo magnético final: Φ2 = B2 · A = 0,8 · 0,05 = 0,04 Wb.',
        'Variação do fluxo: ΔΦ = Φ2 - Φ1 = 0,04 - 0,01 = 0,03 Wb.',
        'Intervalo de tempo: Δt = 0,3 s.',
        'fem induzida: ε = 0,03 / 0,3 = 0,10 V.'
      ],
      keyTakeaway: 'A força eletromotriz induzida não depende da intensidade do campo magnético em si, mas sim de sua taxa de variação temporal.'
    }
  },
  {
    id: 'fuv-17',
    number: 17,
    examId: 'fuvest-2024',
    discipline: 'Língua Inglesa',
    topic: 'Reading Comprehension - Artificial Intelligence Ethics',
    stem: 'According to the passage on generative AI algorithmic bias, which sentence best summarizes the authors conclusion?',
    contextDocument: '“Machine learning models trained on historical data often inherit and amplify existing social prejudices. Mitigation requires not merely technical debiasing, but multidisciplinary oversight and transparent auditing of training corpuses.” (Nature Machine Intelligence)',
    options: [
      { letter: 'A', text: 'Historical data is completely objective and free of any societal biases.' },
      { letter: 'B', text: 'Technical patches alone are insufficient to address algorithmic bias without broader interdisciplinary scrutiny.' },
      { letter: 'C', text: 'AI models should replace all human regulatory boards in legal and medical decisions.' },
      { letter: 'D', text: 'Training corpuses should be kept secret to prevent intellectual property leaks.' },
      { letter: 'E', text: 'Machine learning algorithms cannot replicate linguistic patterns accurately.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 530,
    explanation: {
      summary: 'Compreensão de texto em língua estrangeira.',
      stepByStep: [
        'O texto afirma explicitamente que o problema requer "not merely technical debiasing, but multidisciplinary oversight".',
        'Isso corresponde à alternativa B: remendos técnicos isolados não bastam sem vigilância interdisciplinar.'
      ],
      keyTakeaway: 'Preste atenção em conectivos como "not merely X, but Y", que indicam que X é insuficiente e Y é indispensável.'
    }
  },
  {
    id: 'fuv-18',
    number: 18,
    examId: 'fuvest-2024',
    discipline: 'Matemática',
    topic: 'Logaritmos e Decaimento Exponencial',
    stem: 'A quantidade de um elemento radioativo N(t) (em gramas) decai com o tempo t (em anos) segundo a lei exponencial N(t) = N0 · 2^(-t / 15). Se a massa inicial N0 é de 80 g, o tempo necessário para que a massa se reduza a 5 g é de:',
    options: [
      { letter: 'A', text: '60 anos' },
      { letter: 'B', text: '45 anos' },
      { letter: 'C', text: '30 anos' },
      { letter: 'D', text: '75 anos' },
      { letter: 'E', text: '90 anos' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 660,
    explanation: {
      summary: 'Equação exponencial aplicada à meia-vida.',
      stepByStep: [
        'A meia-vida do elemento é de 15 anos (tempo para a massa cair pela metade).',
        'Queremos saber o tempo para passar de 80 g para 5 g.',
        '80 g → 40 g (1ª meia-vida: 15 anos)',
        '40 g → 20 g (2ª meia-vida: 30 anos)',
        '20 g → 10 g (3ª meia-vida: 45 anos)',
        '10 g → 5 g (4ª meia-vida: 60 anos)',
        'Foram necessárias 4 meias-vidas: 4 · 15 = 60 anos.'
      ],
      keyTakeaway: 'Em decaimento radioativo com frações potências de 2 (80/5 = 16 = 2⁴), o cálculo por meia-vidas sucessivas é imediato.'
    }
  },
  {
    id: 'fuv-19',
    number: 19,
    examId: 'fuvest-2024',
    discipline: 'Filosofia e Sociologia',
    topic: 'Iluminismo - Kant e o Conceito de Maioridade Intelectual',
    stem: 'Em seu famoso ensaio "Resposta à pergunta: O que é Esclarecimento?" (1784), Immanuel Kant define o Esclarecimento (Aufklärung) como:',
    options: [
      { letter: 'A', text: 'A saída do homem de sua menoridade intelectual, da qual ele próprio é culpado, tendo a coragem de servir-se do próprio entendimento (Sapere aude!).' },
      { letter: 'B', text: 'A adesão irrefletida aos dogmas religiosos do clero tradicional como garantia de salvação da alma.' },
      { letter: 'C', text: 'A submissão voluntária dos cidadãos à tutela autoritária dos déspotas esclarecidos.' },
      { letter: 'D', text: 'A renúncia à razão científica em favor do misticismo cosmológico renascentista.' },
      { letter: 'E', text: 'A crença de que apenas a nobreza hereditária é capaz de produzir reflexões filosóficas válidas.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 540,
    explanation: {
      summary: 'O lema do Iluminismo kantiano: "Sapere aude" (Ousa saber).',
      stepByStep: [
        'Kant argumenta que a menoridade é a incapacidade de pensar por si mesmo sem a direção de outrem.',
        'A preguiça e a covardia são as causas de os homens permanecerem tutelados por sacerdotes, médicos e livros.',
        'O Esclarecimento é a emancipação racional autônoma.'
      ],
      keyTakeaway: 'Kant enfatiza o uso público da razão como vetor fundamental da liberdade e do progresso humano.'
    }
  },
  {
    id: 'fuv-20',
    number: 20,
    examId: 'fuvest-2024',
    discipline: 'Física',
    topic: 'Hidrostática - Princípio de Arquimedes e Empuxo',
    stem: 'Um bloco cúbico de madeira homogênea de volume 1.000 cm³ e massa 600 g flutua em equilíbrio estático na água pura (massa específica da água = 1,0 g/cm³). O volume da parte submersa do bloco e o valor do empuxo exercido pela água sobre ele (adote g = 10 m/s²) são, respectivamente:',
    options: [
      { letter: 'A', text: '600 cm³ e 6,0 N' },
      { letter: 'B', text: '400 cm³ e 4,0 N' },
      { letter: 'C', text: '1.000 cm³ e 10,0 N' },
      { letter: 'D', text: '600 cm³ e 600 N' },
      { letter: 'E', text: '800 cm³ e 8,0 N' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Equilíbrio de corpos flutuantes: Peso = Empuxo.',
      stepByStep: [
        'Massa do bloco: m = 600 g = 0,6 kg.',
        'Peso do bloco: P = m · g = 0,6 kg · 10 m/s² = 6,0 N.',
        'Em equilíbrio flutuante, a resultante vertical é nula, logo Empuxo E = P = 6,0 N.',
        'Pela lei de Arquimedes: E = d_líquido · V_submerso · g.',
        '6,0 N = 1000 kg/m³ · V_submerso · 10 m/s² ⇒ V_submerso = 6,0 / 10000 = 0,0006 m³ = 600 cm³.',
        'Como a densidade da madeira (0,6 g/cm³) é 60% da água, exatamente 60% de seu volume (600 cm³) fica submerso.'
      ],
      keyTakeaway: 'Para qualquer corpo que flutua livremente na superfície de um líquido, a fração submersa do volume é igual à razão entre a densidade do corpo e a do fluido.'
    }
  }
];
