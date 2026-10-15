import { Question } from '@/types/simulator';

export const microAjusteQuestions: Question[] = [
  {
    id: 'mic-01',
    number: 1,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Primeira Lei da Termodinâmica em Transformação Isobárica',
    stem: 'Um gás ideal monoatômico contido em um cilindro com êmbolo móvel recebe 1.500 J de calor a pressão constante de 1,0 · 10⁵ Pa. O volume do gás expande-se de 0,02 m³ para 0,025 m³. O trabalho realizado pelo gás e a variação da sua energia interna (ΔU) são, respectivamente:',
    options: [
      { letter: 'A', text: '500 J e 1.000 J' },
      { letter: 'B', text: '500 J e 2.000 J' },
      { letter: 'C', text: '250 J e 1.250 J' },
      { letter: 'D', text: '1.000 J e 500 J' },
      { letter: 'E', text: '1.500 J e 0 J' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Aplicação da Primeira Lei da Termodinâmica: Q = W + ΔU.',
      stepByStep: [
        'Variação de volume: ΔV = 0,025 - 0,020 = 0,005 m³.',
        'Trabalho isobárico: W = p · ΔV = (1,0 · 10⁵ Pa) · (0,005 m³) = 500 J.',
        'Pela Primeira Lei: ΔU = Q - W = 1.500 J - 500 J = 1.000 J.'
      ],
      keyTakeaway: 'Em expansão isobárica, parte do calor recebido realiza trabalho mecânico de expansão contra o êmbolo e o restante aquece o gás (ΔU).'
    }
  },
  {
    id: 'mic-02',
    number: 2,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Funções Trigonométricas - Período e Frequência',
    stem: 'Dada a função periódica f(x) = 3 + 5 · cos(4x - π/3), o período fundamental T dessa função é igual a:',
    options: [
      { letter: 'A', text: 'π / 2' },
      { letter: 'B', text: '2π' },
      { letter: 'C', text: 'π' },
      { letter: 'D', text: '4π' },
      { letter: 'E', text: 'π / 4' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Cálculo do período fundamental de funções trigonométricas da forma f(x) = a + b·cos(cx + d).',
      stepByStep: [
        'A fórmula do período do cosseno é: T = 2π / |c|.',
        'No modelo f(x) = 3 + 5 · cos(4x - π/3), o coeficiente de x é c = 4.',
        'T = 2π / 4 = π / 2 radianos.'
      ],
      keyTakeaway: 'O período depende unicamente do coeficiente que multiplica a variável x dentro do cosseno/seno.'
    }
  },
  {
    id: 'mic-03',
    number: 3,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Transformação Isotérmica e Lei de Boyle',
    stem: 'Uma certa massa de gás perfeito a 300 K ocupa um volume de 6 litros sob pressão de 4 atm. Se o gás sofrer uma expansão isotérmica (temperatura rigorosamente constante) até que seu volume quadruplique para 24 litros, a nova pressão do gás será de:',
    options: [
      { letter: 'A', text: '1 atm' },
      { letter: 'B', text: '2 atm' },
      { letter: 'C', text: '0,5 atm' },
      { letter: 'D', text: '16 atm' },
      { letter: 'E', text: '8 atm' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Lei de Boyle-Mariotte para transformações isotérmicas: p1 · V1 = p2 · V2.',
      stepByStep: [
        'p1 = 4 atm; V1 = 6 L; V2 = 24 L.',
        'p1 · V1 = p2 · V2 ⇒ 4 · 6 = p2 · 24 ⇒ 24 = 24 · p2.',
        'p2 = 1 atm.'
      ],
      keyTakeaway: 'Em transformação isotérmica, pressão e volume são grandezas inversamente proporcionais; quadruplicar o volume reduz a pressão a 1/4.'
    }
  },
  {
    id: 'mic-04',
    number: 4,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Funções Trigonométricas - Conjunto Imagem e Extremos',
    stem: 'O conjunto imagem da função real f(x) = -2 + 3 · sen(x) para todo x pertencente ao conjunto dos números reais é o intervalo fechado:',
    options: [
      { letter: 'A', text: '[-5, 1]' },
      { letter: 'B', text: '[-1, 5]' },
      { letter: 'C', text: '[-3, 3]' },
      { letter: 'D', text: '[-2, 3]' },
      { letter: 'E', text: '[1, 5]' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Variação da função seno entre -1 e +1.',
      stepByStep: [
        'Sabemos que: -1 ≤ sen(x) ≤ 1.',
        'Multiplicando por 3: -3 ≤ 3·sen(x) ≤ 3.',
        'Subtraindo 2 em todos os membros: -3 - 2 ≤ -2 + 3·sen(x) ≤ 3 - 2.',
        '-5 ≤ f(x) ≤ 1.',
        'Conjunto imagem: Im(f) = [-5, 1].'
      ],
      keyTakeaway: 'O valor mínimo ocorre quando o seno vale -1 (f_mín = -2 - 3 = -5) e o máximo quando vale +1 (f_máx = -2 + 3 = 1).'
    }
  },
  {
    id: 'mic-05',
    number: 5,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Segunda Lei da Termodinâmica e Entropia',
    stem: 'A Segunda Lei da Termodinâmica, no enunciado de Clausius e Kelvin-Planck, estabelece que em qualquer processo natural espontâneo que ocorre em um sistema isolado:',
    options: [
      { letter: 'A', text: 'A entropia total do sistema sempre aumenta (ou permanece constante em processos reversíveis ideais), sendo impossível o calor fluir espontaneamente de um corpo frio para um corpo quente.' },
      { letter: 'B', text: 'A energia mecânica do universo é destruída de maneira irreversível.' },
      { letter: 'C', text: 'É perfeitamente possível construir uma máquina térmica com 100% de rendimento que transforme todo o calor de uma fonte em trabalho mecânico sem rejeitar nada.' },
      { letter: 'D', text: 'A temperatura de qualquer gás atinge o zero absoluto (-273,15 °C) em expansões livres adiabáticas.' },
      { letter: 'E', text: 'O calor específico das substâncias dobra a cada ciclo de expansão isovolumétrica.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 590,
    explanation: {
      summary: 'Fundamentos da Segunda Lei da Termodinâmica e irreversibilidade dos processos naturais.',
      stepByStep: [
        'O fluxo espontâneo de calor sempre ocorre do corpo de maior temperatura para o de menor temperatura.',
        'A entropia (medida do grau de dispersão da energia) do universo nunca diminui em processos espontâneos.',
        'Nenhum ciclo térmico pode ter eficiência de 100% (Kelvin-Planck).'
      ],
      keyTakeaway: 'A Segunda Lei define a "flecha do tempo" na física clássica por meio da não-diminuição da entropia.'
    }
  },
  {
    id: 'mic-06',
    number: 6,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Equações Trigonométricas Fundamentais',
    stem: 'No intervalo 0 ≤ x < 2π, o número total de soluções distintas da equação trigonométrica 2 · cos²(x) - 1 = 0 é:',
    options: [
      { letter: 'A', text: '4 soluções' },
      { letter: 'B', text: '2 soluções' },
      { letter: 'C', text: '1 solução' },
      { letter: 'D', text: '3 soluções' },
      { letter: 'E', text: '0 soluções' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 620,
    explanation: {
      summary: 'Resolução de equação trigonométrica com simetria nos 4 quadrantes.',
      stepByStep: [
        '2 · cos²(x) - 1 = 0 ⇒ cos²(x) = 1/2.',
        'cos(x) = ± √(1/2) = ± √2 / 2.',
        'cos(x) = +√2/2: soluções x = π/4 (1º quad) e x = 7π/4 (4º quad).',
        'cos(x) = -√2/2: soluções x = 3π/4 (2º quad) e x = 5π/4 (3º quad).',
        'Total de soluções no ciclo trigonométrico: 4 soluções.'
      ],
      keyTakeaway: 'Lembre-se do sinal ± ao extrair a raiz quadrada, gerando soluções em todos os quatro quadrantes do ciclo.'
    }
  },
  {
    id: 'mic-07',
    number: 7,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Transformação Adiabática',
    stem: 'Durante a compressão adiabática rápida de um gás ideal contido no pistão de um motor a combustão (em que não há tempo para troca de calor com as paredes do cilindro, Q = 0):',
    options: [
      { letter: 'A', text: 'O trabalho realizado sobre o gás é positivo sobre o sistema (W < 0 na convenção de expansão), provocando o aumento de sua energia interna e a consequente elevação de sua temperatura.' },
      { letter: 'B', text: 'A temperatura do gás cai drasticamente e o gás se congela instantaneamente.' },
      { letter: 'C', text: 'A pressão do gás cai para zero enquanto o volume é reduzido.' },
      { letter: 'D', text: 'A energia interna do gás permanece rigorosamente nula durante todo o curso.' },
      { letter: 'E', text: 'A densidade do gás diminui proporcionalmente à raiz da pressão.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 650,
    explanation: {
      summary: 'Comportamento da Primeira Lei em transformações adiabáticas (Q = 0).',
      stepByStep: [
        'Primeira Lei: ΔU = Q - W_gás.',
        'Como Q = 0 (adiabática): ΔU = - W_gás.',
        'Em uma compressão, o meio externo realiza trabalho sobre o gás (W_gás é negativo), logo: ΔU = - (-|W|) = +|W| > 0.',
        'A energia interna aumenta, elevando a temperatura do gás (é assim que o diesel se autoincendeia sem vela nos motores a injeção).'
      ],
      keyTakeaway: 'Compressão adiabática aquece o gás; expansão adiabática resfria o gás.'
    }
  },
  {
    id: 'mic-08',
    number: 8,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Trigonometria - Identidade do Arco Duplo',
    stem: 'Se sen(θ) = 3/5 com θ pertencente ao primeiro quadrante (0 < θ < π/2), o valor de sen(2θ) é igual a:',
    options: [
      { letter: 'A', text: '24 / 25' },
      { letter: 'B', text: '6 / 5' },
      { letter: 'C', text: '12 / 25' },
      { letter: 'D', text: '7 / 25' },
      { letter: 'E', text: '16 / 25' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 640,
    explanation: {
      summary: 'Fórmula do seno do arco duplo: sen(2θ) = 2 · sen(θ) · cos(θ).',
      stepByStep: [
        'Como sen(θ) = 3/5 no 1º quadrante: cos(θ) = √(1 - sen²θ) = √(1 - 9/25) = √(16/25) = 4/5.',
        'sen(2θ) = 2 · (3/5) · (4/5) = 2 · (12/25) = 24 / 25.'
      ],
      keyTakeaway: 'sen(2θ) não é o dobro de sen(θ); deve-se sempre aplicar a identidade 2·sen·cos.'
    }
  },
  {
    id: 'mic-09',
    number: 9,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Equação de Clapeyron e Gás Real',
    stem: 'A equação de estado dos gases perfeitos (p · V = n · R · T) descreve com excelente aproximação o comportamento de um gás real quando este se encontra sob:',
    options: [
      { letter: 'A', text: 'Baixa pressão e alta temperatura (afastado do ponto de liquefação)' },
      { letter: 'B', text: 'Alta pressão e baixíssima temperatura' },
      { letter: 'C', text: 'Pressões extremamente elevadas próximas de condensar o fluido' },
      { letter: 'D', text: 'Temperatura de zero absoluto com volume nulo' },
      { letter: 'E', text: 'Condições críticas de saturação de vapor' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Condições de aproximação de um gás real para o modelo de gás ideal.',
      stepByStep: [
        'Gases reais comportam-se como ideais quando as interações intermoleculares são desprezíveis e o volume próprio das moléculas é desprezível frente ao volume do recipiente.',
        'Isso ocorre precisamente sob baixa pressão (moléculas muito afastadas umas das outras) e alta temperatura (alta energia cinética superando forças atrativas).'
      ],
      keyTakeaway: 'Baixa pressão + alta temperatura = aproximação ideal.'
    }
  },
  {
    id: 'mic-10',
    number: 10,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Funções Trigonométricas - Modelagem de Temperatura Diária',
    stem: 'A temperatura T (em °C) em uma estufa inteligente varia ao longo de 24 horas segundo a função periódica T(t) = 20 - 6 · cos((π · t) / 12), onde t é a hora do dia (0 ≤ t ≤ 24). A temperatura mínima registrada na estufa e a hora do dia em que essa mínima ocorre são:',
    options: [
      { letter: 'A', text: '14 °C, à meia-noite (t = 0 h)' },
      { letter: 'B', text: '20 °C, às 06:00 h' },
      { letter: 'C', text: '26 °C, ao meio-dia (t = 12 h)' },
      { letter: 'D', text: '14 °C, às 12:00 h' },
      { letter: 'E', text: '8 °C, à meia-noite' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 660,
    explanation: {
      summary: 'Análise de extremos em modelagem periódica.',
      stepByStep: [
        'Como a expressão tem o termo "-6 · cos(...)", o valor de T é MÍNIMO quando o cosseno atinge seu valor MÁXIMO (+1), pois subtraímos o maior número possível.',
        'Quando cos(...) = +1: T_mín = 20 - 6 · (1) = 14 °C.',
        'O cosseno vale +1 para argumento 0: (π · t) / 12 = 0 ⇒ t = 0 h (à meia-noite).',
        'Verificação ao meio-dia (t = 12): T(12) = 20 - 6 · cos(π) = 20 - 6 · (-1) = 26 °C (temperatura máxima do dia).'
      ],
      keyTakeaway: 'Atenção ao sinal negativo antes da amplitude, que inverte a correspondência entre os máximos trigonométricos e os máximos da função modelada.'
    }
  },
  {
    id: 'mic-11',
    number: 11,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Transformação Isocórica / Isovolumétrica',
    stem: 'Um botijão metálico rígido e indeformável (volume constante) contém gás a 27 °C sob pressão de 2,0 atm. Se o botijão for aquecido com segurança até a temperatura de 127 °C, a nova pressão interna atingida pelo gás será de aproximadamente:',
    options: [
      { letter: 'A', text: '2,67 atm' },
      { letter: 'B', text: '9,40 atm' },
      { letter: 'C', text: '4,00 atm' },
      { letter: 'D', text: '3,20 atm' },
      { letter: 'E', text: '1,50 atm' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Lei de Charles e Gay-Lussac para transformações isocóricas: p1 / T1 = p2 / T2.',
      stepByStep: [
        'REGRA DE OURO DA TERMODINÂMICA: As temperaturas devem ser OBRIGATORIAMENTE convertidas para Kelvin (K).',
        'T1 = 27 + 273 = 300 K.',
        'T2 = 127 + 273 = 400 K.',
        'p1 / T1 = p2 / T2 ⇒ 2,0 / 300 = p2 / 400.',
        'p2 = (2,0 · 400) / 300 = 800 / 300 = 8/3 ≈ 2,67 atm.'
      ],
      keyTakeaway: 'Erro mais punido pela TRI no ENEM: usar a temperatura em Celsius em vez de converter para Kelvin.'
    }
  },
  {
    id: 'mic-12',
    number: 12,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Lei dos Cossenos e Triângulos Quaisquer',
    stem: 'Em um triângulo qualquer ABC, os lados AB e AC medem respectivamente 5 cm e 8 cm, e o ângulo entre eles Â mede 60°. O comprimento do terceiro lado BC é igual a:',
    options: [
      { letter: 'A', text: '7 cm' },
      { letter: 'B', text: '√89 cm' },
      { letter: 'C', text: '9 cm' },
      { letter: 'D', text: '√49 cm = 7 cm' },
      { letter: 'E', text: '6 cm' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 650,
    explanation: {
      summary: 'Aplicação da Lei dos Cossenos: a² = b² + c² - 2bc · cos(Â).',
      stepByStep: [
        'BC² = 5² + 8² - 2 · 5 · 8 · cos(60°).',
        'cos(60°) = 1/2.',
        'BC² = 25 + 64 - (80 · 1/2) = 89 - 40 = 49.',
        'BC = √49 = 7 cm.'
      ],
      keyTakeaway: 'A Lei dos Cossenos é uma generalização do Teorema de Pitágoras para qualquer ângulo não-reto.'
    }
  },
  {
    id: 'mic-13',
    number: 13,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Ciclo Termodinâmico e Trabalho em Diagrama P-V',
    stem: 'Em um diagrama de pressão por volume (P x V), um gás percorre um ciclo fechado no sentido HORÁRIO delimitando uma área geométrica interna correspondente a 800 Joules. Sobre esse ciclo, é correto afirmar que:',
    options: [
      { letter: 'A', text: 'O trabalho líquido total realizado pelo gás no ciclo é positivo (+800 J), atuando como uma máquina térmica motora.' },
      { letter: 'B', text: 'O trabalho líquido é negativo (-800 J), atuando como um refrigerador frigorífico.' },
      { letter: 'C', text: 'A variação total de energia interna ao longo do ciclo completo é de 800 J.' },
      { letter: 'D', text: 'O rendimento térmico do ciclo é necessariamente 100%.' },
      { letter: 'E', text: 'O calor líquido absorvido no ciclo completo é zero.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 670,
    explanation: {
      summary: 'Ciclos termodinâmicos em gráficos P x V.',
      stepByStep: [
        'Em qualquer ciclo fechado, o estado inicial coincide com o final, logo a variação da energia interna no ciclo completo é NULA: ΔU_ciclo = 0.',
        'A área interna do ciclo representa o módulo do trabalho líquido: |W| = 800 J.',
        'Sentido HORÁRIO: o trabalho de expansão (superior) supera o trabalho de compressão (inferior), logo W_líquido > 0 (+800 J). A máquina opera como motor térmico.',
        'Pela Primeira Lei: Q_líquido = W_líquido = +800 J.'
      ],
      keyTakeaway: 'Sentido horário no gráfico P-V = Motor térmico (trabalho positivo); sentido anti-horário = Refrigerador (trabalho negativo recebido).'
    }
  },
  {
    id: 'mic-14',
    number: 14,
    examId: 'micro-ajuste-tri',
    discipline: 'Matemática',
    topic: 'Trigonometria - Tangente e Assíntotas Verticais',
    stem: 'A função real f(x) = tg(x) NÃO é definida para valores de x tais que:',
    options: [
      { letter: 'A', text: 'x = π/2 + kπ, com k pertencente ao conjunto dos números inteiros (onde cos(x) = 0)' },
      { letter: 'B', text: 'x = kπ, com k pertencente aos inteiros' },
      { letter: 'C', text: 'x = π/4 + kπ' },
      { letter: 'D', text: 'x = 2kπ exclusivamente' },
      { letter: 'E', text: 'A função tangente é definida para todo x real sem qualquer restrição' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Domínio da função tangente: tg(x) = sen(x) / cos(x).',
      stepByStep: [
        'A fração só existe se o denominador for diferente de zero: cos(x) ≠ 0.',
        'No ciclo trigonométrico, o cosseno se anula nos pontos superior e inferior: π/2 e 3π/2.',
        'Generalizando para arcos côngruos: x ≠ π/2 + kπ, k ∈ Z.'
      ],
      keyTakeaway: 'Nesses pontos de indefinição ocorrem as assíntotas verticais do gráfico da tangente.'
    }
  },
  {
    id: 'mic-15',
    number: 15,
    examId: 'micro-ajuste-tri',
    discipline: 'Física / Termodinâmica',
    topic: 'Capacidade Térmica e Calor Específico Molar',
    stem: 'Para um gás ideal monoatômico, a relação de Mayer entre as capacidades térmicas molares a pressão constante (Cp) e a volume constante (Cv) é expressa por:',
    options: [
      { letter: 'A', text: 'Cp - Cv = R' },
      { letter: 'B', text: 'Cp + Cv = R' },
      { letter: 'C', text: 'Cp · Cv = R' },
      { letter: 'D', text: 'Cp / Cv = 1' },
      { letter: 'E', text: 'Cp - Cv = 0' }
    ],
    correctOption: 'A',
    triDifficulty: 'Difícil',
    triScoreWeight: 720,
    explanation: {
      summary: 'Relação de Mayer para gases ideais.',
      stepByStep: [
        'A pressão constante, o calor fornecido ao gás precisa tanto elevar a temperatura interna (Cv) quanto realizar trabalho de expansão contra a pressão externa (P·ΔV = R·ΔT para 1 mol).',
        'Portanto: Cp = Cv + R ⇒ Cp - Cv = R, onde R é a constante universal dos gases (≈ 8,31 J/(mol·K)).'
      ],
      keyTakeaway: 'O coeficiente adiabático γ = Cp / Cv vale 5/3 para gás monoatômico e 7/5 para gás diatômico.'
    }
  }
];
