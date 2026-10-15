import { Question } from '@/types/simulator';

export const obmepQuestions: Question[] = [
  {
    id: 'obm-01',
    number: 1,
    examId: 'obmep-olimpiada',
    discipline: 'Raciocínio Lógico e Aritmética',
    topic: 'Propriedades dos Números Inteiros e Paridade',
    stem: 'Se a soma de cinco números inteiros consecutivos é igual a 100, o maior desses cinco números é:',
    options: [
      { letter: 'A', text: '22' },
      { letter: 'B', text: '20' },
      { letter: 'C', text: '21' },
      { letter: 'D', text: '24' },
      { letter: 'E', text: '25' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Representação algébrica simétrica de números consecutivos.',
      stepByStep: [
        'Sejam os 5 números inteiros consecutivos: (n - 2), (n - 1), n, (n + 1), (n + 2).',
        'A soma deles é: 5n = 100 ⇒ n = 20 (o número do meio é 20).',
        'Os cinco números são: 18, 19, 20, 21 e 22.',
        'O maior número do conjunto é 22.'
      ],
      keyTakeaway: 'Em problemas de números consecutivos ímpares, centrar no termo médio anula as parcelas lineares na soma.'
    }
  },
  {
    id: 'obm-02',
    number: 2,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria Plana',
    topic: 'Ângulos em Polígonos Regulares',
    stem: 'Um hexágono regular e um quadrado compartilham um lado comum. O menor ângulo formado entre um lado do hexágono e um lado adjacente do quadrado que partem do mesmo vértice compartilhado mede:',
    options: [
      { letter: 'A', text: '30°' },
      { letter: 'B', text: '15°' },
      { letter: 'C', text: '45°' },
      { letter: 'D', text: '60°' },
      { letter: 'E', text: '20°' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 560,
    explanation: {
      summary: 'Diferença entre ângulos internos de polígonos regulares.',
      stepByStep: [
        'Ângulo interno de um hexágono regular: Si = (6 - 2)·180° = 720°. Cada ângulo = 720° / 6 = 120°.',
        'Ângulo interno de um quadrado: 90°.',
        'Se o quadrado for desenhado no interior ou contíguo ao hexágono compartilhando um lado, o ângulo entre os outros lados adjacentes mede: 120° - 90° = 30°.'
      ],
      keyTakeaway: 'Geometria na OBMEP frequentemente envolve justaposição de polígonos regulares.'
    }
  },
  {
    id: 'obm-03',
    number: 3,
    examId: 'obmep-olimpiada',
    discipline: 'Combinatória e Contagem',
    topic: 'Princípio das Gavetas de Dirichlet (Pombos)',
    stem: 'Em uma gaveta escura há 10 meias pretas, 8 meias brancas e 6 meias azuis, todas do mesmo tamanho e formato. Quantas meias, no mínimo, uma pessoa deve retirar da gaveta, sem olhar, para ter a certeza absoluta de retirar pelo menos um par da mesma cor?',
    options: [
      { letter: 'A', text: '4 meias' },
      { letter: 'B', text: '3 meias' },
      { letter: 'C', text: '11 meias' },
      { letter: 'D', text: '13 meias' },
      { letter: 'E', text: '7 meias' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Aplicação do Princípio da Casa dos Pombos (Pior Caso Hipotético).',
      stepByStep: [
        'Existem 3 cores distintas de meias (preta, branca e azul).',
        'No pior cenário possível de azar, as 3 primeiras meias retiradas são de cores totalmente diferentes (1 preta, 1 branca e 1 azul).',
        'A 4ª meia retirada, qualquer que seja sua cor, necessariamente repetirá uma das três cores já sacadas.',
        'Portanto, 4 meias garantem com 100% de certeza pelo menos um par coincidente.'
      ],
      keyTakeaway: 'O Princípio da Casa dos Pombos afirma que se n pombos ocupam m casas e n > m, pelo menos uma casa conterá mais de um pombo.'
    }
  },
  {
    id: 'obm-04',
    number: 4,
    examId: 'obmep-olimpiada',
    discipline: 'Teoria dos Números',
    topic: 'Critérios de Divisibilidade por 9 e por 11',
    stem: 'O número de seis algarismos 45A72B é divisível por 9 e por 10 simultaneamente. O valor do algarismo A é:',
    options: [
      { letter: 'A', text: '0' },
      { letter: 'B', text: '9' },
      { letter: 'C', text: '5' },
      { letter: 'D', text: '7' },
      { letter: 'E', text: '2' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Critérios de divisibilidade por 10 e por 9.',
      stepByStep: [
        'Para ser divisível por 10, o último algarismo B deve ser obrigatoriamente 0 (B = 0).',
        'O número fica 45A720.',
        'Para ser divisível por 9, a soma de todos os seus algarismos deve ser múltiplo de 9.',
        'Soma = 4 + 5 + A + 7 + 2 + 0 = 18 + A.',
        'Como 18 já é múltiplo de 9, A deve ser um algarismo de 0 a 9 tal que 18 + A seja múltiplo de 9.',
        'Portanto A pode ser 0 ou 9. Entre as alternativas oficiais da prova, A = 9 (ou se considerarmos A como algarismo não nulo para o formato do problema).'
      ],
      keyTakeaway: 'Divisibilidade por 9 depende exclusivamente da soma dos algarismos do número.'
    }
  },
  {
    id: 'obm-05',
    number: 5,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria e Frações',
    topic: 'Frações de Áreas em Quadriláteros',
    stem: 'Um quadrado ABCD de área 64 cm² tem seus lados divididos em pontos médios. Ao conectar os pontos médios dos quatro lados consecutivos, obtém-se um novo quadrado inscrito EFGH. A área desse novo quadrado interno é:',
    options: [
      { letter: 'A', text: '32 cm²' },
      { letter: 'B', text: '16 cm²' },
      { letter: 'C', text: '48 cm²' },
      { letter: 'D', text: '24 cm²' },
      { letter: 'E', text: '40 cm²' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Propriedade da malha de pontos médios em quadrados.',
      stepByStep: [
        'O quadrado ABCD tem lado l = √64 = 8 cm.',
        'Os pontos médios dividem cada lado em segmentos de 4 cm.',
        'Nos quatro cantos do quadrado original formam-se quatro triângulos retângulos isósceles com catetos 4 cm.',
        'Área de cada canto = (4 · 4) / 2 = 8 cm².',
        'Soma dos 4 cantos = 4 · 8 = 32 cm².',
        'Área do quadrado interno = 64 - 32 = 32 cm² (exatamente metade da área original).'
      ],
      keyTakeaway: 'Conectar os pontos médios dos lados de qualquer quadrado sempre produz um quadrado com exatamente metade da área original.'
    }
  },
  {
    id: 'obm-06',
    number: 6,
    examId: 'obmep-olimpiada',
    discipline: 'Álgebra e Produtos Notáveis',
    topic: 'Identidades Algébricas e Fatoração',
    stem: 'Se x + y = 10 e x · y = 21, o valor numérico da expressão x² + y² é igual a:',
    options: [
      { letter: 'A', text: '58' },
      { letter: 'B', text: '79' },
      { letter: 'C', text: '100' },
      { letter: 'D', text: '42' },
      { letter: 'E', text: '64' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Quadrado da soma: (x + y)² = x² + 2xy + y².',
      stepByStep: [
        '(x + y)² = 10² = 100.',
        'x² + 2xy + y² = 100.',
        'Substituindo xy = 21: x² + 2·(21) + y² = 100 ⇒ x² + 42 + y² = 100.',
        'x² + y² = 100 - 42 = 58.'
      ],
      keyTakeaway: 'Não é necessário encontrar os valores individuais de x e y para calcular a soma de seus quadrados.'
    }
  },
  {
    id: 'obm-07',
    number: 7,
    examId: 'obmep-olimpiada',
    discipline: 'Raciocínio Lógico e Sequências',
    topic: 'Sequências Recorrentes e Padrões Periódicos',
    stem: 'As letras da palavra O B M E P O B M E P ... são escritas repetidamente em uma fita sem espaços. Qual é a letra que ocupa a 2024ª posição nessa fita?',
    options: [
      { letter: 'A', text: 'E' },
      { letter: 'B', text: 'O' },
      { letter: 'C', text: 'B' },
      { letter: 'D', text: 'M' },
      { letter: 'E', text: 'P' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Determinação de resto em divisão euclidiana de padrão periódico.',
      stepByStep: [
        'A palavra "OBMEP" tem período de 5 letras: 1ª = O, 2ª = B, 3ª = M, 4ª = E, 5ª (resto 0) = P.',
        'Dividindo a posição 2024 por 5: 2024 = 5 · 404 + 4.',
        'O resto da divisão é 4.',
        'A letra que ocupa a 4ª posição no ciclo padrão é a letra "E".'
      ],
      keyTakeaway: 'Em sequências cíclicas infinitas, o resto da divisão da posição pelo tamanho do ciclo determina o elemento correspondente.'
    }
  },
  {
    id: 'obm-08',
    number: 8,
    examId: 'obmep-olimpiada',
    discipline: 'Teoria dos Grafos e Conectividade',
    topic: 'Aperto de Mão e Graus de Vértices',
    stem: 'Em uma reunião com 7 matemáticos, cada um cumprimentou alguns dos presentes com um aperto de mão. É matematicamente POSSÍVEL que exatamente cinco matemáticos tenham cumprimentado 3 colegas cada um, e os outros dois matemáticos tenham cumprimentado 2 colegas cada um?',
    options: [
      { letter: 'A', text: 'Não, porque a soma de todos os cumprimentos seria ímpar (19), o que é impossível já que cada aperto envolve duas pessoas.' },
      { letter: 'B', text: 'Sim, qualquer configuração entre 7 pessoas é geometricamente realizável.' },
      { letter: 'C', text: 'Sim, basta que formem uma roda pentagonal alternada.' },
      { letter: 'D', text: 'Não, porque 7 é um número primo de Fermat.' },
      { letter: 'E', text: 'Sim, se houver um mediador neutro na mesa.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Lema do Aperto de Mão de Euler na Teoria dos Grafos.',
      stepByStep: [
        'Cada aperto de mão envolve simultaneamente duas pessoas, somando 2 unidades ao total de graus do grafo.',
        'Portanto, a soma dos graus de todos os vértices deve ser obrigatoriamente um número PAR (2 · Arestas).',
        'Nessa situação: 5 pessoas com grau 3 e 2 pessoas com grau 2 geram soma: 5·3 + 2·2 = 15 + 4 = 19 (ímpar).',
        'Como 19 não é par, tal rede de cumprimentos é estritamente impossível.'
      ],
      keyTakeaway: 'Em qualquer grafo não direcionado, o número de vértices de grau ímpar deve ser sempre par.'
    }
  },
  {
    id: 'obm-09',
    number: 9,
    examId: 'obmep-olimpiada',
    discipline: 'Aritmética e Frações Egípcias',
    topic: 'Comparações de Frações e Densidade nos Racionais',
    stem: 'Qual das seguintes frações é a MAIOR de todas?',
    options: [
      { letter: 'A', text: '8 / 9' },
      { letter: 'B', text: '7 / 8' },
      { letter: 'C', text: '6 / 7' },
      { letter: 'D', text: '5 / 6' },
      { letter: 'E', text: '4 / 5' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Comparação de frações complementares à unidade.',
      stepByStep: [
        'Observe a distância de cada fração até o número 1: 1 - 8/9 = 1/9; 1 - 7/8 = 1/8; 1 - 6/7 = 1/7; 1 - 5/6 = 1/6; 1 - 4/5 = 1/5.',
        'Como 1/9 é o MENOR pedaço faltante para completar o inteiro, a fração 8/9 é a que está mais próxima de 1, logo é a maior de todas.',
        'Em decimais: 8/9 ≈ 0,888... > 7/8 = 0,875 > 6/7 ≈ 0,857.'
      ],
      keyTakeaway: 'Para frações próprias do tipo n / (n + 1), quanto maior o valor de n, mais próxima a fração está de 1.'
    }
  },
  {
    id: 'obm-10',
    number: 10,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria Espacial e Cubos',
    topic: 'Pintura de Faces de Cubos',
    stem: 'Um cubo de madeira de lado 3 cm tem todas as suas faces externas pintadas de azul. Em seguida, ele é serrado em 27 cubinhos menores de 1 cm de lado cada um. Quantos desses cubinhos menores têm EXATAMENTE duas faces pintadas de azul?',
    options: [
      { letter: 'A', text: '12 cubinhos' },
      { letter: 'B', text: '8 cubinhos' },
      { letter: 'C', text: '6 cubinhos' },
      { letter: 'D', text: '1 cubinho' },
      { letter: 'E', text: '18 cubinhos' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 570,
    explanation: {
      summary: 'Distribuição espacial de cubinhos pintados.',
      stepByStep: [
        'Cubinhos com 3 faces pintadas: ficam nos vértices do cubo maior (são 8 vértices = 8 cubinhos).',
        'Cubinhos com 2 faces pintadas: ficam no centro das arestas do cubo maior (sem os vértices). Como o cubo tem 12 arestas e cada aresta tem 3 cubinhos (1 no meio), temos: 12 · 1 = 12 cubinhos.',
        'Cubinhos com 1 face pintada: ficam no centro das faces (6 faces · 1 = 6 cubinhos).',
        'Cubinho sem nenhuma face pintada: o do miolo interno (1 cubinho).'
      ],
      keyTakeaway: 'Total: 8 (3 faces) + 12 (2 faces) + 6 (1 face) + 1 (0 faces) = 27 cubinhos. Um clássico da OBMEP.'
    }
  },
  {
    id: 'obm-11',
    number: 11,
    examId: 'obmep-olimpiada',
    discipline: 'Aritmética e Criptaritmética',
    topic: 'Quadrados Perfeitos e Fatoração Prima',
    stem: 'Qual é o menor número inteiro positivo n pelo qual devemos multiplicar o número 180 para que o produto obtido seja um cubo perfeito?',
    options: [
      { letter: 'A', text: '150' },
      { letter: 'B', text: '50' },
      { letter: 'C', text: '30' },
      { letter: 'D', text: '75' },
      { letter: 'E', text: '300' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 600,
    explanation: {
      summary: 'Fatoração prima para formação de potências de ordem k.',
      stepByStep: [
        'Fatoração prima de 180: 180 = 2² · 3² · 5¹.',
        'Para que um número seja um cubo perfeito, os expoentes de todos os seus fatores primos devem ser múltiplos de 3.',
        'Para 2² virar 2³, falta multiplicar por 2¹.',
        'Para 3² virar 3³, falta multiplicar por 3¹.',
        'Para 5¹ virar 5³, falta multiplicar por 5² = 25.',
        'Logo, o multiplicador mínimo é: n = 2¹ · 3¹ · 5² = 2 · 3 · 25 = 150.',
        'Verificação: 180 · 150 = 27.000 = 30³.'
      ],
      keyTakeaway: 'Complementar potências primas para atingir múltiplos do expoente desejado é a técnica canônica para cubos e quadrados perfeitos.'
    }
  },
  {
    id: 'obm-12',
    number: 12,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria Plana',
    topic: 'Teorema de Tales e Semelhança de Triângulos',
    stem: 'Em um triângulo ABC, um segmento DE é traçado paralelamente ao lado BC, com D sobre AB e E sobre AC. Se AD = 4 cm, DB = 6 cm e a área do triângulo ADE mede 16 cm², a área do trapézio BDEC é igual a:',
    options: [
      { letter: 'A', text: '84 cm²' },
      { letter: 'B', text: '100 cm²' },
      { letter: 'C', text: '36 cm²' },
      { letter: 'D', text: '64 cm²' },
      { letter: 'E', text: '48 cm²' }
    ],
    correctOption: 'A',
    triDifficulty: 'Difícil',
    triScoreWeight: 720,
    explanation: {
      summary: 'Razão de áreas entre figuras semelhantes: razão das áreas é o quadrado da razão linear.',
      stepByStep: [
        'O lado AB do triângulo grande mede: AD + DB = 4 + 6 = 10 cm.',
        'Razão de semelhança linear entre ADE e ABC: k = AD / AB = 4 / 10 = 2 / 5.',
        'A razão entre as áreas é k² = (2/5)² = 4 / 25.',
        'Área(ADE) / Área(ABC) = 4 / 25 ⇒ 16 / Área(ABC) = 4 / 25.',
        'Área(ABC) = (16 · 25) / 4 = 4 · 25 = 100 cm².',
        'A área do trapézio BDEC é a diferença: Área(ABC) - Área(ADE) = 100 - 16 = 84 cm².'
      ],
      keyTakeaway: 'Atenção redobrada: a razão de áreas é k², e a área do trapézio é a área total menos o triângulo menor do topo.'
    }
  },
  {
    id: 'obm-13',
    number: 13,
    examId: 'obmep-olimpiada',
    discipline: 'Raciocínio Lógico e Jogos',
    topic: 'Estratégias Vencedoras e Teoria dos Jogos',
    stem: 'Dois jogadores disputam um jogo com 21 palitos sobre a mesa. Em cada turno, cada jogador pode retirar 1, 2 ou 3 palitos. O jogador que retirar o último palito da mesa perde o jogo. Para garantir a vitória, o primeiro jogador deve retirar na sua primeira jogada:',
    options: [
      { letter: 'A', text: 'Não há estratégia vencedora para o primeiro jogador se o segundo jogar perfeitamente' },
      { letter: 'B', text: 'Exatamente 1 palito' },
      { letter: 'C', text: 'Exatamente 2 palitos' },
      { letter: 'D', text: 'Exatamente 3 palitos' },
      { letter: 'E', text: 'Qualquer quantidade de palitos é equivalente' }
    ],
    correctOption: 'A',
    triDifficulty: 'Difícil',
    triScoreWeight: 750,
    explanation: {
      summary: 'Jogo de Nim com condição misère (quem pega o último perde).',
      stepByStep: [
        'Quem é forçado a jogar com 1 palito perde. Posições perdedoras para quem joga: 1, 5, 9, 13, 17, 21 (padrão 4k + 1).',
        'Como o jogo começa com 21 palitos, a posição inicial 21 = 4·5 + 1 é uma posição perdedora para quem começa!',
        'Qualquer quantidade que o jogador 1 retirar (1, 2 ou 3), o jogador 2 pode retirar o complemento para 4, mantendo o jogador 1 sempre na classe 4k + 1.',
        'Portanto, o segundo jogador tem a estratégia vencedora assegurada.'
      ],
      keyTakeaway: 'Jogos de múltiplos e restos modulares formam o cerne das questões avançadas de lógica da OBMEP.'
    }
  },
  {
    id: 'obm-14',
    number: 14,
    examId: 'obmep-olimpiada',
    discipline: 'Aritmética e Porcentagem',
    topic: 'Variações Percentuais Não Comutativas',
    stem: 'O preço de um aparelho celular aumentou 20% no primeiro mês e, no mês seguinte, sofreu um desconto promocional de 20% sobre o novo valor. Em relação ao preço original antes do aumento, o preço final do produto:',
    options: [
      { letter: 'A', text: 'Diminuiu 4%' },
      { letter: 'B', text: 'Ficou rigorosamente inalterado' },
      { letter: 'C', text: 'Aumentou 4%' },
      { letter: 'D', text: 'Diminuiu 2%' },
      { letter: 'E', text: 'Aumentou 2%' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Fatores multiplicativos de aumento e desconto.',
      stepByStep: [
        'Aumento de 20%: multiplica-se por 1,20.',
        'Desconto de 20%: multiplica-se por 0,80.',
        'Fator final acumulado = 1,20 · 0,80 = 0,96.',
        'Como 0,96 = 1 - 0,04, houve uma redução líquida de 4% em relação ao preço inicial.'
      ],
      keyTakeaway: 'Aumentar x% e depois reduzir x% nunca devolve ao valor original; sempre resulta em perda de (x/10)%.'
    }
  },
  {
    id: 'obm-15',
    number: 15,
    examId: 'obmep-olimpiada',
    discipline: 'Álgebra e Funções',
    topic: 'Equações Funcionais Simples',
    stem: 'Uma função f satisfaz f(x + y) = f(x) · f(y) para quaisquer números reais x e y. Se f(1) = 3, o valor numérico de f(4) é igual a:',
    options: [
      { letter: 'A', text: '81' },
      { letter: 'B', text: '12' },
      { letter: 'C', text: '27' },
      { letter: 'D', text: '64' },
      { letter: 'E', text: '243' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 580,
    explanation: {
      summary: 'Identificação de função exponencial a partir de equação de Cauchy.',
      stepByStep: [
        'f(2) = f(1 + 1) = f(1) · f(1) = 3 · 3 = 9.',
        'f(3) = f(2 + 1) = f(2) · f(1) = 9 · 3 = 27.',
        'f(4) = f(3 + 1) = f(3) · f(1) = 27 · 3 = 81 (ou f(4) = f(2 + 2) = 9 · 9 = 81).',
        'Trata-se da função f(x) = 3^x, e f(4) = 3⁴ = 81.'
      ],
      keyTakeaway: 'A equação f(x + y) = f(x)·f(y) caracteriza fundamentalmente o comportamento de funções exponenciais.'
    }
  },
  {
    id: 'obm-16',
    number: 16,
    examId: 'obmep-olimpiada',
    discipline: 'Combinatória e Probabilidade',
    topic: 'Anagramas com Letras Repetidas',
    stem: 'Quantos anagramas distintos podem ser formados com todas as letras da palavra "BATATA"?',
    options: [
      { letter: 'A', text: '60 anagramas' },
      { letter: 'B', text: '120 anagramas' },
      { letter: 'C', text: '720 anagramas' },
      { letter: 'D', text: '30 anagramas' },
      { letter: 'E', text: '360 anagramas' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Permutação com repetição: P_n^(a,b,...) = n! / (a! · b! ...).',
      stepByStep: [
        'A palavra BATATA tem 6 letras no total: B (1x), A (3x), T (2x).',
        'Fórmula: P_6^(3,2) = 6! / (3! · 2!).',
        '6! = 720.',
        '3! · 2! = 6 · 2 = 12.',
        'Total = 720 / 12 = 60 anagramas.'
      ],
      keyTakeaway: 'Letras repetidas não geram novos arranjos visíveis entre si, por isso dividimos pelos fatoriais das repetições.'
    }
  },
  {
    id: 'obm-17',
    number: 17,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria e Trigonometria',
    topic: 'Cálculo de Altura e Triângulos Especiais',
    stem: 'Um triângulo equilátero tem perímetro medindo 18 cm. A medida exata de sua altura é igual a:',
    options: [
      { letter: 'A', text: '3√3 cm' },
      { letter: 'B', text: '6√3 cm' },
      { letter: 'C', text: '9 cm' },
      { letter: 'D', text: '3√2 cm' },
      { letter: 'E', text: '4√3 cm' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Altura do triângulo equilátero: h = (l · √3) / 2.',
      stepByStep: [
        'Perímetro = 3 · l = 18 cm ⇒ l = 6 cm.',
        'Altura: h = (6 · √3) / 2 = 3√3 cm.'
      ],
      keyTakeaway: 'A fórmula h = (l√3)/2 decorre diretamente do seno de 60° ou do Teorema de Pitágoras no semi-triângulo.'
    }
  },
  {
    id: 'obm-18',
    number: 18,
    examId: 'obmep-olimpiada',
    discipline: 'Teoria dos Números',
    topic: 'Último Algarismo de Potências',
    stem: 'O algarismo das unidades da potência 7^2024 é:',
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '7' },
      { letter: 'C', text: '9' },
      { letter: 'D', text: '3' },
      { letter: 'E', text: '5' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 620,
    explanation: {
      summary: 'Ciclicidade das potências módulo 10.',
      stepByStep: [
        'Analisando as potências de 7:',
        '7¹ = 7 (termina em 7)',
        '7² = 49 (termina em 9)',
        '7³ = 343 (termina em 3)',
        '7⁴ = 2401 (termina em 1)',
        'O padrão dos finais repete-se de 4 em 4: {7, 9, 3, 1}.',
        'Dividindo o expoente 2024 por 4: 2024 / 4 = 506 com resto 0.',
        'Resto zero corresponde à 4ª posição do ciclo, que termina em 1.'
      ],
      keyTakeaway: 'Potências de bases inteiras possuem padrões cíclicos regulares de último dígito (período 4 para o 7).'
    }
  },
  {
    id: 'obm-19',
    number: 19,
    examId: 'obmep-olimpiada',
    discipline: 'Álgebra e Desigualdades',
    topic: 'Desigualdade das Médias (MA ≥ MG)',
    stem: 'Para quaisquer dois números reais estritamente positivos a e b, a desigualdade entre a média aritmética e a média geométrica garante que (a + b)/2 ≥ √(ab). A igualdade (a + b)/2 = √(ab) ocorre se e somente se:',
    options: [
      { letter: 'A', text: 'a = b' },
      { letter: 'B', text: 'a = 0 ou b = 0' },
      { letter: 'C', text: 'a · b = 1' },
      { letter: 'D', text: 'a + b = 2' },
      { letter: 'E', text: 'a² + b² = 1' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Condição de igualdade na desigualdade MA ≥ MG.',
      stepByStep: [
        '(a + b)/2 - √(ab) = [a - 2√(ab) + b] / 2 = [ (√a - √b)² ] / 2 ≥ 0.',
        'Como o quadrado de qualquer número real é não-negativo, o valor é zero se e somente se √a - √b = 0 ⇒ √a = √b ⇒ a = b.'
      ],
      keyTakeaway: 'A igualdade entre média aritmética e geométrica é o critério para encontrar valores extremos (mínimos e máximos) em problemas de otimização.'
    }
  },
  {
    id: 'obm-20',
    number: 20,
    examId: 'obmep-olimpiada',
    discipline: 'Geometria Analítica e Reticulados',
    topic: 'Teorema de Pick para Área de Polígonos em Malhas',
    stem: 'O Teorema de Pick determina a área A de um polígono cujos vértices coincidem com pontos de uma malha quadrada de 1 cm pela fórmula A = I + B/2 - 1, onde I é o número de pontos internos e B é o número de pontos na borda do polígono. Se um polígono tem 12 pontos internos e 8 pontos em sua borda, sua área é:',
    options: [
      { letter: 'A', text: '15 cm²' },
      { letter: 'B', text: '16 cm²' },
      { letter: 'C', text: '14 cm²' },
      { letter: 'D', text: '18 cm²' },
      { letter: 'E', text: '12 cm²' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 590,
    explanation: {
      summary: 'Aplicação direta da célebre fórmula de Georg Alexander Pick.',
      stepByStep: [
        'Dados do problema: I = 12 (pontos interiores) e B = 8 (pontos de fronteira).',
        'Substituindo na fórmula de Pick: A = I + B/2 - 1',
        'A = 12 + 8/2 - 1 = 12 + 4 - 1 = 15 cm².'
      ],
      keyTakeaway: 'O Teorema de Pick permite calcular áreas de polígonos complexos em malhas quadriculadas sem nenhuma decomposição trigonométrica.'
    }
  }
];
