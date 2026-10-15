import { Question } from '@/types/simulator';

export const enemQuestions: Question[] = [
  {
    id: 'enem-01',
    number: 1,
    examId: 'enem-2024',
    discipline: 'Linguagens e Códigos',
    topic: 'Variação Linguística e Identidade Cultural',
    stem: 'O texto reflete sobre o papel das expressões regionais na construção da identidade e na coesão social comunitária. Considerando as relações entre norma-padrão e fala coloquial, depreende-se do excerto que:',
    contextDocument: '“A linguagem que o sertanejo inventa todo dia não é defeito de dicção nem pobreza vocabular; é a própria poética da sobrevivência que resiste à seca, esculpindo no verbo a espessura da caatinga.” (Antônio Candido - Cadernos de Literatura)',
    options: [
      { letter: 'A', text: 'A variedade regional decorre de deficiências formativas superáveis pelo ensino formal rigoroso.' },
      { letter: 'B', text: 'O léxico regionalizado constitui patrimônio expressivo e testemunho histórico-cultural legítimo.' },
      { letter: 'C', text: 'A norma-padrão deve suprimir as marcas dialetais para unificar a comunicação nacional.' },
      { letter: 'D', text: 'As variações diatópicas inviabilizam o diálogo entre falantes de diferentes regiões brasileiras.' },
      { letter: 'E', text: 'O valor estético da linguagem restringe-se às manifestações chanceladas pela academia.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'A questão avalia a competência de valorizar a diversidade linguística como expressão cultural.',
      stepByStep: [
        'Identificar a tese central do texto: a linguagem sertaneja é caracterizada como "poética da sobrevivência".',
        'Reconhecer que o autor nega explicitamente que se trate de "defeito" ou "pobreza".',
        'Concluir que as variantes dialetais têm legitimidade estética e histórica idêntica à de qualquer outra variedade.'
      ],
      distractorAnalysis: {
        A: 'Incorreta porque o preconceito linguístico associa variação a erro formativo.',
        C: 'Incorreta porque a norma culta convive com os falares sem necessidade de aniquilá-los.',
        D: 'Incorreta pois não há bloqueio de inteligibilidade entre as regiões brasileiras.',
        E: 'Incorreta porque a estética popular independe de validação institucional acadêmica.'
      },
      keyTakeaway: 'No ENEM, questões sobre variação linguística invariavelmente defendem a legitimidade social das variedades periféricas e regionais.'
    }
  },
  {
    id: 'enem-02',
    number: 2,
    examId: 'enem-2024',
    discipline: 'Ciências Humanas',
    topic: 'Cidadania e Direitos na Constituição de 1988',
    stem: 'A promulgação da Carta Magna de 1988, apelidada de "Constituição Cidadã", representou um divisor de águas na ordem jurídica brasileira porque:',
    contextDocument: '“A sociedade brasileira emergiu de duas décadas de exceção exigindo garantias individuais invioláveis e a ampliação programática dos direitos de seguridade social.” (Boris Fausto - História do Brasil)',
    options: [
      { letter: 'A', text: 'Restringiu a participação popular aos pleitos eleitorais indiretos municipais.' },
      { letter: 'B', text: 'Consolidou o Estado Democrático de Direito e universalizou o acesso à saúde pública e à educação básica.' },
      { letter: 'C', text: 'Subordinou as decisões do Poder Judiciário aos decretos ministeriais do Executivo federal.' },
      { letter: 'D', text: 'Extinguiu os direitos coletivos trabalhistas conquistados na Consolidação das Leis do Trabalho.' },
      { letter: 'E', text: 'Instituiu o voto censitário condicionado à comprovação de renda e patrimônio imobiliário.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 510,
    explanation: {
      summary: 'A Constituição de 1988 refundou o pacto republicano, criando o SUS e garantindo direitos fundamentais.',
      stepByStep: [
        'Analisar a transição pós-ditadura civil-militar (1964-1985).',
        'Lembrar que o artigo 196 instituiu a saúde como "direito de todos e dever do Estado", originando o SUS.',
        'Constatar que a universalização da cidadania é o pilar estruturante da CF/88.'
      ],
      keyTakeaway: 'O termo "Constituição Cidadã" cunhado por Ulysses Guimarães destaca a centralidade dos direitos humanos e sociais.'
    }
  },
  {
    id: 'enem-03',
    number: 3,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Termodinâmica - Rendimento de Máquinas Térmicas',
    stem: 'Um motor térmico ideal opera segundo o ciclo de Carnot entre uma fonte quente a 500 K e uma fonte fria a 300 K. Se a máquina absorve 1.000 J de calor da fonte quente em cada ciclo, o trabalho mecânico útil realizado e o calor rejeitado à fonte fria são, respectivamente:',
    options: [
      { letter: 'A', text: '400 J e 600 J' },
      { letter: 'B', text: '600 J e 400 J' },
      { letter: 'C', text: '500 J e 500 J' },
      { letter: 'D', text: '200 J e 800 J' },
      { letter: 'E', text: '1.000 J e 0 J' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 620,
    explanation: {
      summary: 'Aplicação da fórmula do rendimento de Carnot η = 1 - (T_fria / T_quente).',
      stepByStep: [
        'Rendimento: η = 1 - (300 / 500) = 1 - 0,60 = 0,40 (40%).',
        'Trabalho útil realizado (W): W = η · Q_quente = 0,40 · 1.000 J = 400 J.',
        'Conservação de energia (1ª Lei): Q_fria = Q_quente - W = 1.000 J - 400 J = 600 J.'
      ],
      distractorAnalysis: {
        B: 'Inverteu o trabalho útil com o calor rejeitado.',
        C: 'Supôs rendimento arbitrário de 50%.',
        D: 'Subtraiu erroneamente as grandezas de temperatura.',
        E: 'Viola a Segunda Lei da Termodinâmica (nenhuma máquina térmica real tem 100% de rendimento).'
      },
      keyTakeaway: 'O ciclo de Carnot estabelece o rendimento teórico máximo para qualquer máquina operando entre dois reservatórios térmicos.'
    }
  },
  {
    id: 'enem-04',
    number: 4,
    examId: 'enem-2024',
    discipline: 'Matemática e Tecnologias',
    topic: 'Funções Trigonométricas e Fenômenos Periódicos',
    stem: 'A altura da maré em um porto (em metros) varia periodicamente ao longo do dia segundo a função h(t) = 4 + 2·sen((π·t)/6), onde t é o tempo decorrido em horas contadas a partir da meia-noite (0 ≤ t ≤ 24). A altura máxima atingida pela maré e o instante do dia em que essa máxima ocorre pela primeira vez são:',
    options: [
      { letter: 'A', text: '6 metros, às 03:00 h' },
      { letter: 'B', text: '4 metros, às 06:00 h' },
      { letter: 'C', text: '6 metros, às 06:00 h' },
      { letter: 'D', text: '2 metros, às 12:00 h' },
      { letter: 'E', text: '8 metros, às 03:00 h' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 670,
    explanation: {
      summary: 'Análise de amplitude e argumento da função trigonométrica periódica.',
      stepByStep: [
        'O valor máximo da função seno é 1. Logo, h_máx = 4 + 2·(1) = 6 metros.',
        'O seno atinge seu primeiro máximo positivo quando seu argumento é π/2: (π·t)/6 = π/2.',
        'Multiplicando ambos os lados por 6/π: t = (π/2) · (6/π) = 3 horas (03:00 da manhã).'
      ],
      keyTakeaway: 'Modelagem trigonométrica no ENEM explora amplitude (máximos e mínimos) e período T = 2π / |B|.'
    }
  },
  {
    id: 'enem-05',
    number: 5,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Ecologia - Magnificação Trófica e Poluentes Persistentes',
    stem: 'Em um ecossistema aquático impactado por despejo de mercúrio metálico e agrotóxicos organoclorados, a concentração dessas substâncias tóxicas por unidade de biomassa atinge seu nível mais elevado no seguinte nível trófico:',
    options: [
      { letter: 'A', text: 'Fitoplâncton (produtores primários)' },
      { letter: 'B', text: 'Zooplâncton (consumidores primários)' },
      { letter: 'C', text: 'Moluscos filtradores bentônicos' },
      { letter: 'D', text: 'Aves piscívoras e peixes carnívoros de topo (consumidores terciários/quartenários)' },
      { letter: 'E', text: 'Bactérias autotróficas quimiossintetizantes' }
    ],
    correctOption: 'D',
    triDifficulty: 'Fácil',
    triScoreWeight: 530,
    explanation: {
      summary: 'Conceito de biomagnificação ou magnificação trófica ao longo das teias alimentares.',
      stepByStep: [
        'Substâncias não biodegradáveis e lipossolúveis não são excretadas facilmente.',
        'A cada nível trófico, os organismos consomem grande biomassa do nível anterior.',
        'Portanto, o topo da cadeia acumula a maior concentração por massa corporal.'
      ],
      keyTakeaway: 'Não confunda fluxo de energia (decrescente ao longo da cadeia) com magnificação trófica (crescente).'
    }
  },
  {
    id: 'enem-06',
    number: 6,
    examId: 'enem-2024',
    discipline: 'Ciências Humanas',
    topic: 'Geografia Urbana - Gentrificação e Segregação Socioespacial',
    stem: 'O processo recente de renovação arquitetônica de antigas áreas industriais portuárias em metrópoles brasileiras, que atrai empreendimentos de alto padrão e eleva o custo de vida local, expulsando os moradores tradicionais de baixa renda para periferias desprovidas de saneamento, é tecnicamente conceituado na geografia urbana como:',
    options: [
      { letter: 'A', text: 'Conurbação horizontal' },
      { letter: 'B', text: 'Gentrificação' },
      { letter: 'C', text: 'Desmetropolização' },
      { letter: 'D', text: 'Hierarquização agrária' },
      { letter: 'E', text: 'Transumância residencial' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 520,
    explanation: {
      summary: 'Gentrificação é a valorização imobiliária que substitui classes populares por estratos de maior poder aquisitivo.',
      stepByStep: [
        'O enunciado descreve: revitalização urbana com alta de preços e expulsão de comunidades originárias.',
        'Esse fenômeno socioespacial internacionalmente chama-se gentrificação (gentrification).'
      ],
      keyTakeaway: 'Gentrificação promove segregação socioespacial sob o discurso estético da modernização urbana.'
    }
  },
  {
    id: 'enem-07',
    number: 7,
    examId: 'enem-2024',
    discipline: 'Matemática e Tecnologias',
    topic: 'Análise Combinatória e Probabilidade Condicional',
    stem: 'Uma urna contém 12 bolas idênticas em peso e textura, sendo 7 azuis e 5 vermelhas. Retiram-se sucessivamente, sem reposição, duas bolas ao acaso. A probabilidade de a primeira bola ser vermelha e a segunda bola ser azul é:',
    options: [
      { letter: 'A', text: '35 / 132' },
      { letter: 'B', text: '35 / 144' },
      { letter: 'C', text: '12 / 66' },
      { letter: 'D', text: '7 / 24' },
      { letter: 'E', text: '5 / 12' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 640,
    explanation: {
      summary: 'Probabilidade de eventos sucessivos sem reposição: P(A ∩ B) = P(A) · P(B|A).',
      stepByStep: [
        'Total inicial de bolas = 7 azuis + 5 vermelhas = 12 bolas.',
        'P(1ª ser vermelha) = 5 / 12.',
        'Após retirar uma vermelha, restam 11 bolas (7 azuis e 4 vermelhas).',
        'P(2ª ser azul dado que a 1ª foi vermelha) = 7 / 11.',
        'P(Vermelha e depois Azul) = (5/12) · (7/11) = 35 / 132.'
      ],
      distractorAnalysis: {
        B: 'Calculou com reposição (12 x 12 = 144 no denominador).',
        C: 'Somou as probabilidades em vez de multiplicá-las.',
        D: 'Simplificação incorreta das frações.'
      },
      keyTakeaway: 'Sempre atente à condição "sem reposição", que reduz o espaço amostral no segundo sorteio.'
    }
  },
  {
    id: 'enem-08',
    number: 8,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Química Orgânica - Isomeria e Funções Oxigenadas',
    stem: 'O acetato de etila é um éster aromático amplamente empregado como solvente industrial em esmaltes e extração de cafeína. Ele é sintetizado pela reação de esterificação de Fischer entre o ácido acético (etanóico) e o etanol em meio ácido. A fórmula molecular do acetato de etila e sua função química são:',
    options: [
      { letter: 'A', text: 'C4H8O2 e Éster' },
      { letter: 'B', text: 'C3H6O2 e Éter' },
      { letter: 'C', text: 'C4H10O e Álcool' },
      { letter: 'D', text: 'C4H8O e Aldeído' },
      { letter: 'E', text: 'C5H10O2 e Cetona' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 540,
    explanation: {
      summary: 'Reação de esterificação: ácido carboxílico + álcool ⇌ éster + água.',
      stepByStep: [
        'Ácido acético: CH3-COOH (2 carbonos).',
        'Etanol: CH3-CH2-OH (2 carbonos).',
        'Acetato de etila: CH3-COO-CH2-CH3 (4 carbonos no total: C4H8O2).',
        'Grupo funcional -COO- caracteriza a função Éster.'
      ],
      keyTakeaway: 'Ésteres possuem o grupo carbonila ligado a um oxigênio heteroátomo conectado a uma cadeia carbônica.'
    }
  },
  {
    id: 'enem-09',
    number: 9,
    examId: 'enem-2024',
    discipline: 'Ciências Humanas',
    topic: 'História do Brasil - O Movimento Abolicionista',
    stem: 'A Lei Áurea de 1888 extinguiu a escravidão formal no Brasil. Contudo, historiadores contemporâneos apontam que a abolição não foi mera generosidade monárquica, mas fruto de:',
    options: [
      { letter: 'A', text: 'Uma imposição exclusiva das frotas navais norte-americanas durante a Guerra de Secessão.' },
      { letter: 'B', text: 'Pressão popular conjugada, rebeldia ativa e fugas organizadas de pessoas escravizadas, somadas à mobilização na imprensa e nos centros urbanos.' },
      { letter: 'C', text: 'Consenso pacífico e unânime entre todos os grandes cafeicultores escravocratas do Vale do Paraíba.' },
      { letter: 'D', text: 'Um plano estatal de distribuição de terras férteis e indenização monetária aos libertos.' },
      { letter: 'E', text: 'Exigência dos sindicatos de imigrantes europeus recém-chegados às lavouras paulistas.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'O processo abolicionista combinou protagonismo negro, quilombos urbanos e campanha política de nomes como Luiz Gama e André Rebouças.',
      stepByStep: [
        'Superar a visão mitificada da Princesa Isabel redentora.',
        'Reconhecer as ações afirmativas de fuga em massa em Santos e no interior de São Paulo.',
        'Notar a omissão proposital do Estado imperial em fornecer terras ou direitos aos recém-libertos.'
      ],
      keyTakeaway: 'O ENEM cobra o protagonismo das populações oprimidas na conquista de sua própria liberdade.'
    }
  },
  {
    id: 'enem-10',
    number: 10,
    examId: 'enem-2024',
    discipline: 'Matemática e Tecnologias',
    topic: 'Geometria Espacial - Volume de Cilindros e Razão de Semelhança',
    stem: 'Um reservatório de água tem a forma de um cilindro circular reto com raio da base r = 3 metros e altura h = 4 metros. Deseja-se construir um novo reservatório com o dobro do raio da base e a metade da altura do original. O volume do novo reservatório em relação ao original será:',
    options: [
      { letter: 'A', text: 'Exatamente igual' },
      { letter: 'B', text: 'O dobro do volume original' },
      { letter: 'C', text: 'O quádruplo do volume original' },
      { letter: 'D', text: 'A metade do volume original' },
      { letter: 'E', text: 'Três vezes o volume original' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Fórmula do volume do cilindro: V = π · r² · h.',
      stepByStep: [
        'Volume original: V1 = π · r² · h.',
        'Novo raio: r2 = 2r; nova altura: h2 = h / 2.',
        'Volume novo: V2 = π · (2r)² · (h / 2) = π · 4r² · (h / 2) = 2 · (π · r² · h) = 2 · V1.',
        'Logo, o volume dobra.'
      ],
      keyTakeaway: 'Como o raio entra ao quadrado na fórmula do volume, dobrar o raio quadruplica a área da base; multiplicando pela metade da altura, o resultado final é 4 · (1/2) = 2 vezes.'
    }
  },
  {
    id: 'enem-11',
    number: 11,
    examId: 'enem-2024',
    discipline: 'Linguagens e Códigos',
    topic: 'Figuras de Linguagem e Ironia Crítica',
    stem: 'No soneto machadiano ou na prosa de Memórias Póstumas de Brás Cubas, o narrador adota com frequência uma postura de condescendência irônica. Esse recurso estilístico atua principalmente para:',
    contextDocument: '“Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.” (Machado de Assis)',
    options: [
      { letter: 'A', text: 'Exaltar a nobreza e o altruísmo incondicional da elite patriarcal fluminense.' },
      { letter: 'B', text: 'Desmascarar as hipocrisias morais e o egoísmo de classe sob a aparente polidez aristocrática.' },
      { letter: 'C', text: 'Defender a necessidade do casamento de conveniência para perpetuação de fortunas.' },
      { letter: 'D', text: 'Expressar arrependimento fervoroso diante da perda de tempo mundano.' },
      { letter: 'E', text: 'Comemorar o progresso científico positivista com fé cega na evolução da espécie.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 590,
    explanation: {
      summary: 'A ironia machadiana e o pessimismo filosófico de Brás Cubas como crítica social.',
      stepByStep: [
        'Brás Cubas é o defunto-autor que, liberto das convenções dos vivos, confessa suas mesquinharias.',
        'O "legado da nossa miséria" explicita o desencanto com a condição humana e a farsa da elite do século XIX.',
        'Portanto, o recurso expõe a futilidade e as máscaras sociais.'
      ],
      keyTakeaway: 'Em Machado de Assis, a ironia nunca é mero gracejo; é uma navalha que desseca as contradições da elite oitocentista.'
    }
  },
  {
    id: 'enem-12',
    number: 12,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Física - Circuitos Elétricos e Efeito Joule',
    stem: 'Um chuveiro elétrico residencial opera sob tensão de 220 V e dissipa potência de 4.400 W na posição "Inverno". Para economizar energia na posição "Verão", o usuário altera a chave seletora, reduzindo a potência para 2.200 W. Para atingir essa nova potência sem alterar a tensão de 220 V, a resistência elétrica do chuveiro deve:',
    options: [
      { letter: 'A', text: 'Ser reduzida à metade de seu valor anterior' },
      { letter: 'B', text: 'Permanecer rigorosamente inalterada' },
      { letter: 'C', text: 'Ser duplicada em relação ao seu valor anterior' },
      { letter: 'D', text: 'Ser quadruplicada' },
      { letter: 'E', text: 'Ser reduzida a zero' }
    ],
    correctOption: 'C',
    triDifficulty: 'Médio',
    triScoreWeight: 650,
    explanation: {
      summary: 'Relação entre potência elétrica, tensão constante e resistência: P = U² / R.',
      stepByStep: [
        'Como a tensão U = 220 V é constante (rede domiciliar), P é inversamente proporcional a R.',
        'Se queremos que a potência caia pela metade (de 4.400 W para 2.200 W), a resistência R deve dobrar.',
        'Verificação numérica: R_inverno = (220)² / 4400 = 48400 / 4400 = 11 Ω. R_verão = (220)² / 2200 = 22 Ω.'
      ],
      keyTakeaway: 'Pegadinha clássica do ENEM: na posição "Verão" (água menos quente), a resistência é MAIOR, o que gera menor corrente e menor dissipação de calor por efeito Joule.'
    }
  },
  {
    id: 'enem-13',
    number: 13,
    examId: 'enem-2024',
    discipline: 'Ciências Humanas',
    topic: 'Filosofia Política - Contratualismo e Estado de Natureza',
    stem: 'Para Thomas Hobbes em "O Leviatã", a passagem do estado de natureza para a sociedade civil torna-se imperativa porque o homem sem um poder soberano comum vive em constante estado de guerra de todos contra todos. Nesse modelo, a legitimidade do soberano fundamenta-se na:',
    options: [
      { letter: 'A', text: 'Garantia inegociável da preservação da vida e da ordem e paz coletivas.' },
      { letter: 'B', text: 'Origem divina sagrada do poder real outorgada pelo Sumo Pontífice.' },
      { letter: 'C', text: 'Consulta periódica à vontade geral expressa por sufrágio universal.' },
      { letter: 'D', text: 'Defesa irrestrita do direito de rebelião armada dos súditos contra qualquer imposto.' },
      { letter: 'E', text: 'Preservação da liberdade natural ilimitada dos indivíduos.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 610,
    explanation: {
      summary: 'O contratualismo hobbesiano tem como propósito vital escapar da morte violenta do estado de natureza.',
      stepByStep: [
        'Hobbes argumenta que "o homem é o lobo do homem" na ausência de lei.',
        'Os indivíduos renunciam à sua liberdade irrestrita em favor de um soberano (Leviatã) para assegurar a própria vida.',
        'A preservação da sobrevivência biológica é a cláusula pétrea do pacto.'
      ],
      keyTakeaway: 'Diferença de contratualistas: Hobbes prioriza a segurança/vida; Locke prioriza a propriedade privada e liberdade; Rousseau foca na vontade geral.'
    }
  },
  {
    id: 'enem-14',
    number: 14,
    examId: 'enem-2024',
    discipline: 'Matemática e Tecnologias',
    topic: 'Estatística - Média, Mediana e Desvio Padrão',
    stem: 'Cinco candidatos a uma vaga de monitoria obtiveram as seguintes notas na prova classificatória: 6,0; 7,0; 8,0; 8,0 e 10,0. A média aritmética e a mediana desse conjunto de notas são, respectivamente:',
    options: [
      { letter: 'A', text: '7,8 e 8,0' },
      { letter: 'B', text: '7,8 e 7,5' },
      { letter: 'C', text: '8,0 e 8,0' },
      { letter: 'D', text: '7,5 e 8,0' },
      { letter: 'E', text: '8,2 e 8,0' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Cálculo direto de medidas de tendência central.',
      stepByStep: [
        'Soma das notas = 6,0 + 7,0 + 8,0 + 8,0 + 10,0 = 39,0.',
        'Média aritmética = 39,0 / 5 = 7,8.',
        'Ordenação das notas (já em rol): 6,0 | 7,0 | [8,0] | 8,0 | 10,0.',
        'O elemento central (3ª posição de 5 elementos ímpares) é a mediana: 8,0.'
      ],
      keyTakeaway: 'A mediana divide a amostra exatamente em duas metades com 50% dos dados abaixo e 50% acima dela.'
    }
  },
  {
    id: 'enem-15',
    number: 15,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Biologia Celular - Fotossíntese e Respiração Celular',
    stem: 'As mitocôndrias e os cloroplastos compartilham evidências notáveis da teoria endossimbiótica formulada por Lynn Margulis. Uma evidência bioquímica e estrutural direta que comprova essa origem evolutiva é o fato de ambas as organelas possuírem:',
    options: [
      { letter: 'A', text: 'Parede celular rígida formada por celulose e quitina.' },
      { letter: 'B', text: 'DNA próprio circular de fita dupla e ribossomos similares aos de procariotos bacterianos.' },
      { letter: 'C', text: 'Capacidade de síntese exclusiva de lipídios sem envolver ATP.' },
      { letter: 'D', text: 'Ausência total de membranas lipoproteicas internas.' },
      { letter: 'E', text: 'Cromossomos lineares associados a histonas no interior de um núcleo organizado.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 600,
    explanation: {
      summary: 'Teoria da endossimbiose: mitocôndrias derivam de proteobactérias e cloroplastos de cianobactérias primitivas.',
      stepByStep: [
        'Mitocôndrias e plastos contêm DNA circular não associado a histonas.',
        'Possuem ribossomos 70S (como as bactérias) e dupla membrana (a externa da vesícula endocítica do hospedeiro).',
        'Capacidade de autoduplicação independente do núcleo celular.'
      ],
      keyTakeaway: 'A teoria endossimbiótica é um dos tópicos mais recorrentes em citologia evolutiva no ENEM.'
    }
  },
  {
    id: 'enem-16',
    number: 16,
    examId: 'enem-2024',
    discipline: 'Linguagens e Códigos',
    topic: 'Intertextualidade e Conjunções Coordenativas',
    stem: 'No trecho: "O cientista dedicou anos à pesquisa laboratorial, CONTUDO os dados preliminares refutaram a hipótese inicial", o conectivo em destaque estabelece entre as orações uma relação semântica de:',
    options: [
      { letter: 'A', text: 'Conclusão' },
      { letter: 'B', text: 'Oposição / Adversidade' },
      { letter: 'C', text: 'Causalidade' },
      { letter: 'D', text: 'Condição' },
      { letter: 'E', text: 'Proporcionalidade' }
    ],
    correctOption: 'B',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Conjunções adversativas introduzem quebra de expectativa ou contraste.',
      stepByStep: [
        'Conjunções adversativas típicas: mas, porém, contudo, todavia, entretanto, no entanto.',
        'A dedicação esperaria sucesso na hipótese, mas houve refutação dos dados.',
        'Relação de oposição / adversidade.'
      ],
      keyTakeaway: 'O domínio dos operadores argumentativos é chave tanto na prova de Linguagens quanto na Redação Nota 1000.'
    }
  },
  {
    id: 'enem-17',
    number: 17,
    examId: 'enem-2024',
    discipline: 'Ciências Humanas',
    topic: 'Sociologia - Indústria Cultural e Meios de Comunicação',
    stem: 'Theodor Adorno e Max Horkheimer, pensadores da Escola de Frankfurt, cunharam o conceito de "Indústria Cultural" para denunciar como a produção cultural na sociedade capitalista avançada passou a ser regida:',
    options: [
      { letter: 'A', text: 'Pela busca autêntica de conscientização crítica das massas trabalhadoras.' },
      { letter: 'B', text: 'Pela lógica de mercado e padronização mercadológica que transforma a arte em produto de consumo alienante.' },
      { letter: 'C', text: 'Pelo resgate das tradições folclóricas medievais sem visar ao lucro financeiro.' },
      { letter: 'D', text: 'Pela descentralização democrática das redes de rádio e cinema comunitário.' },
      { letter: 'E', text: 'Pela valorização irrestrita da autonomia criativa dos artistas de vanguarda.' }
    ],
    correctOption: 'B',
    triDifficulty: 'Médio',
    triScoreWeight: 640,
    explanation: {
      summary: 'Conceito de Indústria Cultural da Escola de Frankfurt.',
      stepByStep: [
        'A obra de arte perde sua "aura" e singularidade, tornando-se mercadoria seriada.',
        'A padronização das músicas, filmes e entretenimento gera conformismo e passividade política nos consumidores.',
        'A arte passa a servir à reprodução ideológica do capital.'
      ],
      keyTakeaway: 'Na indústria cultural, o consumidor não é o sujeito, mas o objeto manipulado pelas fórmulas industriais de entretenimento.'
    }
  },
  {
    id: 'enem-18',
    number: 18,
    examId: 'enem-2024',
    discipline: 'Matemática e Tecnologias',
    topic: 'Função Afim e Interpretação Gráfica',
    stem: 'O custo total C (em reais) para produção de x camisetas personalizadas é dado pela expressão C(x) = 250 + 15x, onde 250 representa os custos fixos da estamparia e 15 é o custo variável por unidade produzida. Se cada camiseta for vendida a R$ 40,00, a quantidade mínima de camisetas que deve ser vendida para que a empresa comece a ter lucro real (ponto de equilíbrio financeiro) é:',
    options: [
      { letter: 'A', text: '7 camisetas' },
      { letter: 'B', text: '10 camisetas' },
      { letter: 'C', text: '11 camisetas' },
      { letter: 'D', text: '15 camisetas' },
      { letter: 'E', text: '25 camisetas' }
    ],
    correctOption: 'C',
    triDifficulty: 'Médio',
    triScoreWeight: 580,
    explanation: {
      summary: 'Cálculo do Ponto de Equilíbrio (Break-even Point) onde Receita > Custo.',
      stepByStep: [
        'Receita R(x) = 40x.',
        'Custo C(x) = 250 + 15x.',
        'Lucro L(x) = R(x) - C(x) = 40x - (250 + 15x) = 25x - 250.',
        'Para ter lucro real (L > 0): 25x - 250 > 0 ⇒ 25x > 250 ⇒ x > 10.',
        'Como a quantidade de camisetas é um número inteiro, o menor inteiro estritamente maior que 10 é 11 camisetas.'
      ],
      distractorAnalysis: {
        B: 'Com 10 camisetas, o lucro é zero (L = 25·10 - 250 = 0), apenas cobrindo os custos.',
        C: 'Correto: a partir da 11ª camiseta há lucro positivo (+R$ 25,00).'
      },
      keyTakeaway: 'Atenção aos termos: "começar a ter lucro" exige superar o ponto de equilíbrio, não apenas empatá-lo.'
    }
  },
  {
    id: 'enem-19',
    number: 19,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Ondulatória - Efeito Doppler e Ondas Sonoras',
    stem: 'Uma ambulância com a sirene ligada aproximando-se de um pedestre parado na calçada emite um som com frequência própria f0. O pedestre percebe um som com frequência aparente f diferente de f0. De acordo com o Efeito Doppler, quando a ambulância se aproxima e depois se afasta do pedestre, a frequência aparente percebida é, respectivamente:',
    options: [
      { letter: 'A', text: 'Mais alta (mais aguda) na aproximação e mais baixa (mais grave) no afastamento' },
      { letter: 'B', text: 'Mais baixa (mais grave) na aproximação e mais alta (mais aguda) no afastamento' },
      { letter: 'C', text: 'Idêntica em ambas as etapas, pois a velocidade do som no ar é invariável' },
      { letter: 'D', text: 'Sempre decrescente de forma linear contínua' },
      { letter: 'E', text: 'Inaudível na aproximação devido à barreira do som' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 500,
    explanation: {
      summary: 'Efeito Doppler é a alteração aparente da frequência de uma onda decorrente do movimento relativo entre fonte e observador.',
      stepByStep: [
        'Na aproximação, as frentes de onda são comprimidas, reduzindo o comprimento de onda aparente.',
        'Comprimento de onda menor corresponde a frequência maior percebida (som mais agudo).',
        'No afastamento, as frentes de onda se espaçam, diminuindo a frequência percebida (som mais grave).'
      ],
      keyTakeaway: 'A velocidade da onda no meio depende das características do ar e não muda; o que muda é o espaçamento entre as frentes de onda percebidas.'
    }
  },
  {
    id: 'enem-20',
    number: 20,
    examId: 'enem-2024',
    discipline: 'Ciências da Natureza',
    topic: 'Genética Clássica - Primeira Lei de Mendel e Heredogramas',
    stem: 'Em uma espécie vegetal, a cor amarela das sementes é determinada por um alelo dominante (A) e a cor verde por um alelo recessivo (a). Ao cruzar duas plantas heterozigotas (Aa x Aa), a probabilidade de se obter na descendência uma planta com sementes verdes OU uma planta heterozigota com sementes amarelas é de:',
    options: [
      { letter: 'A', text: '1 / 4 (25%)' },
      { letter: 'B', text: '1 / 2 (50%)' },
      { letter: 'C', text: '3 / 4 (75%)' },
      { letter: 'D', text: '2 / 3 (66,6%)' },
      { letter: 'E', text: '1 (100%)' }
    ],
    correctOption: 'C',
    triDifficulty: 'Médio',
    triScoreWeight: 615,
    explanation: {
      summary: 'Cruzamento mendeliano monohíbrido padrão.',
      stepByStep: [
        'Quadro de Punnett para Aa x Aa: 1 AA (amarela homozigota), 2 Aa (amarelas heterozigotas), 1 aa (verde recessiva).',
        'Casos favoráveis solicitados: "planta verde (aa)" OU "planta heterozigota (Aa)".',
        'Probabilidade de aa = 1/4.',
        'Probabilidade de Aa = 2/4.',
        'Como os eventos são mutuamente exclusivos: P = 1/4 + 2/4 = 3/4 (75%).'
      ],
      keyTakeaway: 'Regra do OU em probabilidade genética: somam-se as probabilidades de eventos mutuamente exclusivos.'
    }
  }
];
