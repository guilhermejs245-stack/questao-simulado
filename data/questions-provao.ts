import { Question } from '@/types/simulator';

export const provaoQuestions: Question[] = [
  {
    id: 'prv-01',
    number: 1,
    examId: 'provao-paulista',
    discipline: 'Língua Portuguesa e Literatura',
    topic: 'Romantismo vs Realismo na Literatura Brasileira',
    stem: 'O Provão Paulista avalia a transição estética da ficção romântica idealizada de José de Alencar para a análise psicológica cética do Realismo machadiano. Essa ruptura estética manifesta-se principalmente na:',
    options: [
      { letter: 'A', text: 'Substituição dos heróis nobres e virtuosos por personagens falíveis, movidos por interesses egoístas e vaidades sociais.' },
      { letter: 'B', text: 'Exaltação da natureza tropical idílica e das tribos indígenas não corrompidas.' },
      { letter: 'C', text: 'Adoção exclusiva do verso decassílabo com rimas ricas heróicas.' },
      { letter: 'D', text: 'Defesa incontestável da fé católica e da monarquia absolutista bragantina.' },
      { letter: 'E', text: 'Rejeição de qualquer crítica aos costumes da burguesia imperial da corte.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Ruptura entre o Romantismo heroico e o Realismo dessacralizador.',
      stepByStep: [
        'O Romantismo de Alencar criava símbolos de redenção moral e nobreza da terra (Peri, Iracema).',
        'O Realismo de Machado de Assis e Aluísio Azevedo desseca a hipocrisia, a mediocridade e as fraquezas humanas sob a verniz social da corte.'
      ],
      keyTakeaway: 'O Realismo abandona as ilusões idealistas para investigar as engrenagens psicológicas e sociais da conduta humana.'
    }
  },
  {
    id: 'prv-02',
    number: 2,
    examId: 'provao-paulista',
    discipline: 'Matemática',
    topic: 'Progressão Geométrica (PG) e População Bacteriana',
    stem: 'Em um experimento de biologia celular na USP, uma cultura bacteriana dobra sua população a cada 20 minutos. Se a cultura iniciava às 08:00 h com exatamente 500 bactérias, a população estimada às 10:00 h da mesma manhã é de:',
    options: [
      { letter: 'A', text: '32.000 bactérias' },
      { letter: 'B', text: '16.000 bactérias' },
      { letter: 'C', text: '64.000 bactérias' },
      { letter: 'D', text: '3.000 bactérias' },
      { letter: 'E', text: '12.000 bactérias' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 570,
    explanation: {
      summary: 'Termo geral da PG: an = a1 · q^(n - 1) ou modelagem exponencial.',
      stepByStep: [
        'Intervalo de tempo de 08:00 às 10:00 = 2 horas = 120 minutos.',
        'Como a população dobra a cada 20 minutos, ocorreram: 120 / 20 = 6 duplicações sucessivas.',
        'População final = 500 · 2⁶.',
        '2⁶ = 64.',
        'População final = 500 · 64 = 32.000 bactérias.'
      ],
      keyTakeaway: 'Problemas de duplicação em intervalos regulares são modelados diretamente por potências de 2 multiplicadas pelo valor inicial.'
    }
  },
  {
    id: 'prv-03',
    number: 3,
    examId: 'provao-paulista',
    discipline: 'Física',
    topic: 'Dinâmica - Leis de Newton e Força de Atrito',
    stem: 'Um caixote de massa m = 20 kg repousa sobre um piso horizontal rugoso cujo coeficiente de atrito estático é μe = 0,40 (adote g = 10 m/s²). Um trabalhador empurra o caixote horizontalmente com uma força constante de 60 N. O módulo da força de atrito que o chão exerce sobre o caixote nessa situação é de:',
    options: [
      { letter: 'A', text: '60 N' },
      { letter: 'B', text: '80 N' },
      { letter: 'C', text: '200 N' },
      { letter: 'D', text: '20 N' },
      { letter: 'E', text: '0 N' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 630,
    explanation: {
      summary: 'Força de atrito estático atuante vs força de atrito estático máxima.',
      stepByStep: [
        'Força normal: N = m · g = 20 · 10 = 200 N.',
        'Força de atrito estático MÁXIMA (destaque): Fat_máx = μe · N = 0,40 · 200 = 80 N.',
        'Como a força aplicada pelo trabalhador é F = 60 N (menor que 80 N), o caixote NÃO entra em movimento (permanece em repouso estático).',
        'Pela Primeira Lei de Newton (equilíbrio), a força de atrito estático que atua no corpo equilibra exatamente a força aplicada: Fat = F = 60 N.'
      ],
      keyTakeaway: 'Pegadinha muito frequente: Fat estático não vale sempre μe·N; isso é apenas o limite máximo. Se o corpo não se move, o atrito se iguala à força solicitante.'
    }
  },
  {
    id: 'prv-04',
    number: 4,
    examId: 'provao-paulista',
    discipline: 'Química',
    topic: 'Tabela Periódica - Eletronegatividade e Ligações',
    stem: 'Dentre os elementos químicos oxigênio (O), flúor (F), sódio (Na) e cloro (Cl), o elemento químico mais eletronegativo e aquele com maior caráter metálico (eletropositivo) são, respectivamente:',
    options: [
      { letter: 'A', text: 'Flúor (F) e Sódio (Na)' },
      { letter: 'B', text: 'Oxigênio (O) e Cloro (Cl)' },
      { letter: 'C', text: 'Cloro (Cl) e Flúor (F)' },
      { letter: 'D', text: 'Sódio (Na) e Flúor (F)' },
      { letter: 'E', text: 'Flúor (F) e Oxigênio (O)' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Propriedades periódicas fundamentais na tabela periódica.',
      stepByStep: [
        'A eletronegatividade cresce de baixo para cima e da esquerda para a direita na tabela periódica (excluindo os gases nobres).',
        'O elemento mais eletronegativo de toda a tabela periódica é o Flúor (F = 4,0 na escala de Pauling).',
        'O caráter metálico (eletropositividade) cresce no sentido oposto: de cima para baixo e da direita para a esquerda. Entre os dados, o Sódio (Na) é o metal alcalino do 3º período.'
      ],
      keyTakeaway: 'Mnemônica de eletronegatividade: F > O > N > Cl > Br > I > S > C > P > H.'
    }
  },
  {
    id: 'prv-05',
    number: 5,
    examId: 'provao-paulista',
    discipline: 'Biologia',
    topic: 'Fisiologia Humana - Sistema Circulatório e Hematose',
    stem: 'No sistema cardiovascular humano, o sangue venoso desoxigenado vindo dos tecidos corporais chega ao coração pela veia cava superior e inferior, desembocando inicialmente no:',
    options: [
      { letter: 'A', text: 'Átrio direito' },
      { letter: 'B', text: 'Ventrículo esquerdo' },
      { letter: 'C', text: 'Átrio esquerdo' },
      { letter: 'D', text: 'Ventrículo direito' },
      { letter: 'E', text: 'Tronco pulmonar' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Trajeto da circulação dupla e completa dos mamíferos.',
      stepByStep: [
        'Sangue venoso (rico em CO2) entra pelo Átrio Direito.',
        'Passa pela válvula tricúspide para o Ventrículo Direito, de onde é bombeado pelas artérias pulmonares aos pulmões (pequena circulação).',
        'Após oxigenação nos alvéolos (hematose), o sangue arterial retorna pelas veias pulmonares ao Átrio Esquerdo e depois Ventrículo Esquerdo, saindo pela Aorta (grande circulação).'
      ],
      keyTakeaway: 'Lado direito do coração manipula sangue desoxigenado (venoso); lado esquerdo manipula sangue oxigenado (arterial).'
    }
  },
  {
    id: 'prv-06',
    number: 6,
    examId: 'provao-paulista',
    discipline: 'História do Brasil',
    topic: 'Ditadura Civil-Militar (1964-1985) e o AI-5',
    stem: 'O Ato Institucional nº 5 (AI-5), baixado em dezembro de 1968 durante o governo do general Costa e Silva, inaugurou o período mais repressivo da ditadura militar brasileira ("anos de chumbo") porque formalizou:',
    options: [
      { letter: 'A', text: 'A suspensão da garantia de habeas corpus para crimes políticos, o fechamento do Congresso Nacional e a censura prévia irrestrita aos meios de comunicação e às artes.' },
      { letter: 'B', text: 'A convocação imediata de eleições diretas com voto facultativo a todos os cidadãos.' },
      { letter: 'C', text: 'A legalização de todos os partidos de esquerda e a anistia ampla irrestrita de presos políticos.' },
      { letter: 'D', text: 'A subordinação das Forças Armadas ao Ministério da Educação.' },
      { letter: 'E', text: 'A revogação de todas as leis de segurança nacional instituídas desde 1964.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'O endurecimento autoritário promovido pelo AI-5.',
      stepByStep: [
        'O AI-5 concedeu poderes extraordinários ao presidente da República para cassar mandatos eletivos, intervir em estados e municípios e suspender direitos políticos.',
        'A suspensão do habeas corpus facilitou perseguições, prisões arbitrárias e torturas sistemáticas.',
        'A censura prévia vetou músicas, peças de teatro, jornais e novelas.'
      ],
      keyTakeaway: 'O AI-5 vigorou por uma década, sendo revogado apenas no final de 1978 durante a abertura lenta e gradual do governo Geisel.'
    }
  },
  {
    id: 'prv-07',
    number: 7,
    examId: 'provao-paulista',
    discipline: 'Geografia',
    topic: 'Industrialização Brasileira e Desconcentração Espacial',
    stem: 'A partir da década de 1990, observou-se uma tendência de desconcentração industrial no Brasil, em que indústrias automobilísticas e farmacêuticas migraram da Região Metropolitana de São Paulo (Grande ABC) em direção a cidades médias do interior paulista, Sul e Nordeste. Entre as razões para esse deslocamento econômico, destaca-se:',
    options: [
      { letter: 'A', text: 'A busca por menores custos operacionais, incentivos fiscais das prefeituras (guerra fiscal) e mão de obra mais barata com menor presença sindical combativa.' },
      { letter: 'B', text: 'O esgotamento definitivo de todas as reservas de eletricidade no estado de São Paulo.' },
      { letter: 'C', text: 'A obrigatoriedade de transporte fluvial exclusivo para peças de veículos.' },
      { letter: 'D', text: 'A proibição constitucional de instalação de indústrias em capitais estaduais.' },
      { letter: 'E', text: 'O fechamento dos mercados consumidores no Sudeste brasileiro.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 550,
    explanation: {
      summary: 'Fatores locacionais contemporâneos e deseconomia de aglomeração.',
      stepByStep: [
        'A Grande SP passou a apresentar deseconomias de aglomeração: trânsito saturado, terrenos caríssimos, impostos altos e sindicatos fortes.',
        'Cidades médias do interior (como Campinas, Sorocaba, São José dos Campos) e outros estados ofereceram isenções de impostos e melhor qualidade de vida com infraestrutura moderna.'
      ],
      keyTakeaway: 'Desconcentração industrial não significa desindustrialização de SP, mas expansão e descentralização para novos polos regionais.'
    }
  },
  {
    id: 'prv-08',
    number: 8,
    examId: 'provao-paulista',
    discipline: 'Matemática',
    topic: 'Trigonometria no Triângulo Retângulo',
    stem: 'A sombra de um poste vertical de iluminação pública projetada no chão horizontal mede exatamente 12 metros no instante em que os raios solares incidem formando um ângulo de elevação de 30° com o solo. Adotando tg 30° ≈ 0,58, a altura aproximada desse poste é de:',
    options: [
      { letter: 'A', text: '6,96 metros' },
      { letter: 'B', text: '12,00 metros' },
      { letter: 'C', text: '8,40 metros' },
      { letter: 'D', text: '20,68 metros' },
      { letter: 'E', text: '6,00 metros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Aplicação da tangente em triângulos retângulos: tg θ = cateto oposto / cateto adjacente.',
      stepByStep: [
        'Cateto oposto = altura do poste (H).',
        'Cateto adjacente = comprimento da sombra no solo (12 m).',
        'tg 30° = H / 12 ⇒ H = 12 · tg 30°.',
        'H ≈ 12 · 0,58 = 6,96 metros.'
      ],
      keyTakeaway: 'A tangente relaciona os dois catetos do triângulo retângulo, ideal para problemas de sombras e alturas inacessíveis.'
    }
  },
  {
    id: 'prv-09',
    number: 9,
    examId: 'provao-paulista',
    discipline: 'Física',
    topic: 'Termologia - Calorimetria e Trocas de Calor',
    stem: 'Para preparar um banho morno, misturam-se 20 litros de água a 80 °C com 60 litros de água fria a 20 °C em um recipiente termicamente isolado. Desprezando perdas para o ambiente e considerando o calor específico da água constante, a temperatura final de equilíbrio térmico da mistura é de:',
    options: [
      { letter: 'A', text: '35 °C' },
      { letter: 'B', text: '50 °C' },
      { letter: 'C', text: '40 °C' },
      { letter: 'D', text: '30 °C' },
      { letter: 'E', text: '45 °C' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 590,
    explanation: {
      summary: 'Princípio da conservação de energia em trocas térmicas: Σ Q = 0.',
      stepByStep: [
        'm1 · c · (Te - 80) + m2 · c · (Te - 20) = 0.',
        'Como as substâncias são iguais, podemos simplificar o calor específico c e usar o volume proporcional: 20·(Te - 80) + 60·(Te - 20) = 0.',
        '20Te - 1600 + 60Te - 1200 = 0.',
        '80Te = 2800 ⇒ Te = 2800 / 80 = 35 °C.'
      ],
      keyTakeaway: 'A temperatura de equilíbrio é uma média ponderada das temperaturas iniciais pelas massas de cada porção.'
    }
  },
  {
    id: 'prv-10',
    number: 10,
    examId: 'provao-paulista',
    discipline: 'Química',
    topic: 'Soluções - Concentração Comum e Molaridade',
    stem: 'Dissolvem-se 58,5 g de cloreto de sódio (NaCl) em água destilada suficiente para preparar exatamente 500 mL (0,5 L) de solução aquosa. Sabendo que a massa molar do NaCl é 58,5 g/mol, a concentração em quantidade de matéria (molaridade) dessa solução é:',
    options: [
      { letter: 'A', text: '2,0 mol/L' },
      { letter: 'B', text: '1,0 mol/L' },
      { letter: 'C', text: '0,5 mol/L' },
      { letter: 'D', text: '0,1 mol/L' },
      { letter: 'E', text: '4,0 mol/L' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Cálculo de concentração molar: M = n / V.',
      stepByStep: [
        'Número de mols de soluto: n = massa / massa molar = 58,5 g / 58,5 g/mol = 1,0 mol de NaCl.',
        'Volume da solução em litros: V = 500 mL = 0,5 L.',
        'Concentração molar: M = 1,0 mol / 0,5 L = 2,0 mol/L.'
      ],
      keyTakeaway: 'Lembre-se sempre de converter o volume de mililitros (mL) para litros (L) na fórmula da molaridade.'
    }
  },
  {
    id: 'prv-11',
    number: 11,
    examId: 'provao-paulista',
    discipline: 'Língua Portuguesa',
    topic: 'Concordância Nominal com Expressões Especiais',
    stem: 'De acordo com as normas da gramática padrão da língua portuguesa, a frase redigida de forma plenamente CORRETA é:',
    options: [
      { letter: 'A', text: 'A entrada é proibida para pessoas não autorizadas nesta área do laboratório.' },
      { letter: 'B', text: 'É proibido a entrada para pessoas não autorizadas nesta área do laboratório.' },
      { letter: 'C', text: 'Seguem anexo as tabelas estatísticas do relatório trimestral.' },
      { letter: 'D', text: 'As estudantes estavam meias desconfiadas do resultado do simulado.' },
      { letter: 'E', text: 'Havia bastantes pessoas meia cansadas na sala de conferências.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 580,
    explanation: {
      summary: 'Concordância com expressões "é proibido/proibida", "anexo" e "meio".',
      stepByStep: [
        'Com artigo anteposto ao sujeito ("A entrada"), o predicativo concorda no feminino: "A entrada é proibida". (Correto em A).',
        'Frase B erra: com artigo "a", deveria ser proibida.',
        'Frase C erra: a palavra "anexo" adjetiva concorda com "as tabelas": "Seguem anexas as tabelas".',
        'Frase D erra: "meio" na função de advérbio (= um pouco) é invariável: "estavam meio desconfiadas".'
      ],
      keyTakeaway: 'Sem artigo: "É proibido entrada". Com artigo: "A entrada é proibida". "Meio" como advérbio nunca vai para o feminino.'
    }
  },
  {
    id: 'prv-12',
    number: 12,
    examId: 'provao-paulista',
    discipline: 'Biologia',
    topic: 'Evolução Biológica - Darwinismo vs Lamarckismo',
    stem: 'A explicação científica moderna baseada na seleção natural darwinista para a emergência de linhagens de bactérias resistentes aos antibióticos postula que:',
    options: [
      { letter: 'A', text: 'As mutações genéticas aleatórias preexistentes conferem resistência a algumas bactérias, e o antibiótico atua como agente seletor, eliminando as sensíveis e preservando as resistentes.' },
      { letter: 'B', text: 'O antibiótico induz diretamente as bactérias a sofrerem mutações intencionais benéficas de adaptação à droga.' },
      { letter: 'C', text: 'As bactérias transmitem características adquiridas pelo uso contínuo de membranas celulares mais espessas.' },
      { letter: 'D', text: 'Todas as bactérias tornam-se resistentes simultaneamente devido à imunidade adquirida coletiva.' },
      { letter: 'E', text: 'O antibiótico nutre energeticamente a parede celular das colônias microbianas.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Diferença crucial entre a visão darwinista (seleção a posteriori) e a visão lamarckista (adaptação provocada pelo meio).',
      stepByStep: [
        'A variabilidade genética surge por mutação e recombinação ANTES do contato com o antibiótico.',
        'O fármaco não "ensina" nem "provoca" a mutação; ele atua selecionando os indivíduos que já portavam a mutação protetora.',
        'Os sobreviventes reproduzem-se, aumentando a frequência do alelo de resistência na população.'
      ],
      keyTakeaway: 'O meio ambiente seleciona as variações mais aptas; ele não cria as mutações dirigidas.'
    }
  },
  {
    id: 'prv-13',
    number: 13,
    examId: 'provao-paulista',
    discipline: 'Matemática',
    topic: 'Geometria Espacial - Prisma Reto e Volume',
    stem: 'Uma barra metálica maciça tem o formato de um prisma reto de base triangular regular equilátera. O lado do triângulo equilátero da base mede 4 cm e o comprimento (altura) do prisma mede 30 cm. Sabendo que a área de um triângulo equilátero de lado l é (l²√3)/4 e adotando √3 ≈ 1,73, o volume aproximado dessa barra é de:',
    options: [
      { letter: 'A', text: '207,6 cm³' },
      { letter: 'B', text: '120,0 cm³' },
      { letter: 'C', text: '415,2 cm³' },
      { letter: 'D', text: '69,2 cm³' },
      { letter: 'E', text: '346,0 cm³' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 610,
    explanation: {
      summary: 'Fórmula do volume do prisma: V = Área da Base · Altura.',
      stepByStep: [
        'Área da base (triângulo equilátero): Ab = (4² · √3) / 4 = (16 · √3) / 4 = 4√3 cm².',
        'Ab ≈ 4 · 1,73 = 6,92 cm².',
        'Volume = Ab · h = 6,92 cm² · 30 cm = 207,6 cm³.'
      ],
      keyTakeaway: 'O volume de qualquer prisma reto é dado pela área de sua seção transversal poligonal multiplicada pelo seu comprimento.'
    }
  },
  {
    id: 'prv-14',
    number: 14,
    examId: 'provao-paulista',
    discipline: 'Filosofia e Ética',
    topic: 'Ética Aristotélica - A Virtude como Justa Medida',
    stem: 'Na obra "Ética a Nicômaco", Aristóteles formula o conceito de virtude moral (areté) como a mediania ou "justa medida" entre dois extremos viciosos: a falta e o excesso. Sob essa perspectiva clássica, a virtude da coragem situa-se entre:',
    options: [
      { letter: 'A', text: 'A covardia (deficiência por medo excessivo) e a temeridade (excesso irresponsável de audácia).' },
      { letter: 'B', text: 'A avareza egoísta e a prodigalidade descontrolada.' },
      { letter: 'C', text: 'O orgulho arrogante e a modéstia servil humilhante.' },
      { letter: 'D', text: 'A preguiça contemplativa e a agressividade cega.' },
      { letter: 'E', text: 'A impaciência fanática e a apatia indiferente.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Teoria da mediania aristotélica (o justo meio / mesótes).',
      stepByStep: [
        'Para Aristóteles, agir virtuosamente requer equilíbrio guiado pela razão prática (phronesis).',
        'A coragem é a justa medida: não é covardia (fugir de tudo) nem temeridade (jogar-se em perigos inúteis sem cautela).'
      ],
      keyTakeaway: 'In medio virtus (a virtude está no meio) resume a ética das virtudes aristotélica amplamente cobrada no Provão Paulista.'
    }
  },
  {
    id: 'prv-15',
    number: 15,
    examId: 'provao-paulista',
    discipline: 'Física',
    topic: 'Eletrostática - Lei de Coulomb e Força Elétrica',
    stem: 'Duas cargas elétricas puntiformes fixas no vácuo, de valores q1 = +2 μC e q2 = +8 μC, repelem-se com uma força eletrostática de intensidade F quando separadas por uma distância d. Se a distância entre as duas cargas for duplicada (2d), a nova força eletrostática de repulsão entre elas passará a ser:',
    options: [
      { letter: 'A', text: 'F / 4' },
      { letter: 'B', text: 'F / 2' },
      { letter: 'C', text: '2 F' },
      { letter: 'D', text: '4 F' },
      { letter: 'E', text: 'F (inalterada)' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Lei do inverso do quadrado da distância na Lei de Coulomb: F = k0 · |q1 · q2| / d².',
      stepByStep: [
        'A força eletrostática é inversamente proporcional ao quadrado da distância entre as cargas.',
        'Se a distância dobra (d\' = 2d), o denominador torna-se (2d)² = 4d².',
        'Portanto, a nova intensidade da força fica dividida por 4: F\' = F / 4.'
      ],
      keyTakeaway: 'Tanto a força elétrica de Coulomb quanto a gravitacional de Newton decaem com o inverso do quadrado da distância.'
    }
  },
  {
    id: 'prv-16',
    number: 16,
    examId: 'provao-paulista',
    discipline: 'Química',
    topic: 'Radioatividade - Emissões Alfa, Beta e Gama',
    stem: 'Ao emitir uma partícula alfa (α), composta por 2 prótons e 2 nêutrons (núcleo de hélio, ⁴₂α), um núcleo atômico radioativo sofre a seguinte transformação em seu número de massa (A) e número atômico (Z):',
    options: [
      { letter: 'A', text: 'O número de massa (A) diminui em 4 unidades e o número atômico (Z) diminui em 2 unidades (Primeira Lei da Radioatividade ou Lei de Soddy).' },
      { letter: 'B', text: 'O número de massa permanece idêntico e o número atômico aumenta em 1 unidade.' },
      { letter: 'C', text: 'O número de massa aumenta em 2 unidades e o número atômico não se altera.' },
      { letter: 'D', text: 'O núcleo transforma-se em um isóbaro de massa superior.' },
      { letter: 'E', text: 'O átomo transmuta-se em um elétron livre de alta energia cinética.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: '1ª Lei da Radioatividade (decaimento alfa).',
      stepByStep: [
        'A partícula alfa tem 4 unidades de massa e carga +2: ⁴₂He.',
        'Por conservação de massa e de carga na reação nuclear: ^A_Z X → ^(A-4)_(Z-2) Y + ⁴₂α.',
        'O número atômico diminui em 2 e a massa atômica diminui em 4.'
      ],
      keyTakeaway: 'Emissão alfa reduz a massa em 4 e Z em 2; emissão beta mantém a massa e aumenta Z em 1.'
    }
  },
  {
    id: 'prv-17',
    number: 17,
    examId: 'provao-paulista',
    discipline: 'Língua Portuguesa',
    topic: 'Orações Subordinadas Substantivas',
    stem: 'No período: "O coordenador pedagógico solicitou QUE TODOS OS ALUNOS CHEGASSEM COM ANTECEDÊNCIA AO SIMULADO", a oração destacada em maiúsculas classifica-se sintaticamente como:',
    options: [
      { letter: 'A', text: 'Oração subordinada substantiva objetiva direta' },
      { letter: 'B', text: 'Oração subordinada substantiva subjetiva' },
      { letter: 'C', text: 'Oração subordinada adjetiva restritiva' },
      { letter: 'D', text: 'Oração subordinada adverbial causal' },
      { letter: 'E', text: 'Oração coordenada sindética explicativa' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 560,
    explanation: {
      summary: 'Identificação de oração subordinada substantiva objetiva direta.',
      stepByStep: [
        'O verbo da oração principal é "solicitou" (transitivo direto: quem solicita, solicita algo).',
        'Podemos substituir a oração inteira pela palavra "isso": "O coordenador solicitou ISSO".',
        'Como funciona como objeto direto do verbo solicitou, é substantiva objetiva direta.'
      ],
      keyTakeaway: 'O teste do "ISSO" comprova a natureza substantiva da oração introduzida pela conjunção integrante "que".'
    }
  },
  {
    id: 'prv-18',
    number: 18,
    examId: 'provao-paulista',
    discipline: 'Matemática',
    topic: 'Matrizes e Determinantes de Ordem 2',
    stem: 'O determinante da matriz quadrada M de ordem 2x2 com elementos M = [ [cos θ, -sen θ], [sen θ, cos θ] ] é igual a:',
    options: [
      { letter: 'A', text: '1 (invariante para qualquer ângulo θ)' },
      { letter: 'B', text: '0' },
      { letter: 'C', text: 'cos(2θ)' },
      { letter: 'D', text: 'sen(2θ)' },
      { letter: 'E', text: '-1' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 570,
    explanation: {
      summary: 'Cálculo de determinante de matriz de rotação com a Relação Fundamental da Trigonometria.',
      stepByStep: [
        'Determinante de matriz 2x2: det(M) = a11·a22 - a12·a21.',
        'det(M) = (cos θ · cos θ) - (-sen θ · sen θ) = cos² θ - (-sen² θ).',
        'det(M) = cos² θ + sen² θ.',
        'Pela Relação Fundamental da Trigonometria, cos² θ + sen² θ = 1 para todo θ real.'
      ],
      keyTakeaway: 'A matriz de rotação plana 2D é ortogonal e preserva comprimentos e áreas porque seu determinante é sempre igual a 1.'
    }
  },
  {
    id: 'prv-19',
    number: 19,
    examId: 'provao-paulista',
    discipline: 'Sociologia',
    topic: 'Teoria da Ação Social em Max Weber',
    stem: 'Para o sociólogo alemão Max Weber, a ação social é aquela cuja orientação subjetiva é dotada de sentido pelo agente em relação à conduta de outros indivíduos. A ação motivada pelo cálculo racional de meios para atingir fins deliberados e calculáveis é classificada como:',
    options: [
      { letter: 'A', text: 'Ação social racional com relação a fins' },
      { letter: 'B', text: 'Ação social tradicional' },
      { letter: 'C', text: 'Ação social afetiva' },
      { letter: 'D', text: 'Ação social anômica' },
      { letter: 'E', text: 'Ação social instintiva biológica' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Tipologia weberiana dos quatro tipos ideais de ação social.',
      stepByStep: [
        'Ação tradicional: guiada por hábitos e costumes arraigados.',
        'Ação afetiva: movida por sentimentos e paixões imediatas.',
        'Ação racional com relação a valores: fidelidade a princípios éticos, religiosos ou honra, independente do resultado.',
        'Ação racional com relação a fins: cálculo instrumental de custos, meios e metas (típica do capitalismo moderno).'
      ],
      keyTakeaway: 'Weber destaca a racionalização com relação a fins como o traço dominante da modernidade ocidental burocrática.'
    }
  },
  {
    id: 'prv-20',
    number: 20,
    examId: 'provao-paulista',
    discipline: 'Ciências da Natureza',
    topic: 'Fisiologia Vegetal - Hormônios e Fototropismo',
    stem: 'O crescimento curvado do caule de uma planta jovem em direção a uma fonte lateral unidirecional de luz solar (fototropismo positivo) é mediado pela migração do fitormônio:',
    options: [
      { letter: 'A', text: 'Auxina (AIA), que se concentra no lado escurecido e estimula o alongamento das células desse lado.' },
      { letter: 'B', text: 'Gás etileno, que induz a queda precoce das folhas jovens.' },
      { letter: 'C', text: 'Ácido abscísico (ABA), que fecha imediatamente os estômatos à luz.' },
      { letter: 'D', text: 'Giberelina, que impede a germinação de sementes sombreadas.' },
      { letter: 'E', text: 'Citocinina, que degrada o floema em contato com fótons luminosos.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Mecanismo clássico do fototropismo caulinar comprovado pelas experiências de Darwin e Went.',
      stepByStep: [
        'A auxina (ácido indolacético - AIA) é fotossensível e migra para o lado oposto à luz (lado sombreado).',
        'No caule, concentrações mais altas de auxina promovem o alongamento celular acelerado.',
        'Como as células do lado escuro crescem mais rapidamente que as do lado iluminado, o caule encurva-se em direção à luz solar.'
      ],
      keyTakeaway: 'Caule apresenta fototropismo positivo (curva para a luz) e gravitropismo negativo (cresce contra a gravidade).'
    }
  }
];
