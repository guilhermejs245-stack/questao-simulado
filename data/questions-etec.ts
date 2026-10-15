import { Question } from '@/types/simulator';

export const etecQuestions: Question[] = [
  {
    id: 'etc-01',
    number: 1,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Fontes Renováveis de Energia e Sustentabilidade',
    stem: 'As usinas termossolares e fotovoltaicas utilizam a radiação emitida pelo Sol para produzir eletricidade de baixo impacto de carbono. Uma vantagem ambiental direta da energia solar fotovoltaica em relação às termelétricas convencionais a carvão mineral é:',
    options: [
      { letter: 'A', text: 'Não emitir dióxido de carbono (CO2) e fuligem particulada durante a geração elétrica.' },
      { letter: 'B', text: 'Operar com máxima eficiência mesmo durante tempestades noturnas sem sol.' },
      { letter: 'C', text: 'Dispensar o uso de redes de transmissão de alta tensão.' },
      { letter: 'D', text: 'Depender do represamento de grandes bacias fluviais com alagamento de florestas.' },
      { letter: 'E', text: 'Gerar rejeitos nucleares de alta atividade radioativa residual.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Vantagens ecológicas da transição energética solar.',
      stepByStep: [
        'A geração fotovoltaica converte diretamente a luz solar em corrente elétrica por efeito fotoelétrico em semicondutores de silício.',
        'Ao contrário da queima de combustíveis fósseis em termelétricas, não lança gases de efeito estufa na atmosfera durante sua operação.'
      ],
      keyTakeaway: 'A matriz energética limpa e renovável é tema onipresente nos vestibulinhos de ETECs e IFs.'
    }
  },
  {
    id: 'etc-02',
    number: 2,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Geometria e Escalas Cartográficas',
    stem: 'Em um mapa topográfico com escala numérica de 1 : 50.000, a distância em linha reta entre duas escolas técnicas de uma cidade é representada por um segmento de 6 cm. A distância real em linha reta entre essas duas escolas no terreno é de:',
    options: [
      { letter: 'A', text: '3 km' },
      { letter: 'B', text: '30 km' },
      { letter: 'C', text: '0,3 km' },
      { letter: 'D', text: '300 metros' },
      { letter: 'E', text: '12 km' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Conversão de medidas através de escala cartográfica: D_real = d_mapa · Escala.',
      stepByStep: [
        'Escala 1 : 50.000 significa que 1 cm no mapa equivale a 50.000 cm na realidade.',
        'Distância real = 6 cm · 50.000 = 300.000 cm.',
        'Convertendo centímetros para metros (divisão por 100): 300.000 / 100 = 3.000 metros.',
        'Convertendo metros para quilômetros (divisão por 1.000): 3.000 / 1.000 = 3 km.'
      ],
      keyTakeaway: 'Lembre-se sempre da escada de conversão: 1 km = 1.000 m = 100.000 cm.'
    }
  },
  {
    id: 'etc-03',
    number: 3,
    examId: 'etec-vestibulinho',
    discipline: 'Língua Portuguesa',
    topic: 'Interpretação de Infográficos e Linguagem Mista',
    stem: 'Em campanhas institucionais contra a proliferação do mosquito Aedes aegypti, a combinação de imagens ilustrativas de focos de água parada com textos instrucionais diretos no imperativo ("Tampe a caixa-d\'água", "Limpe as calhas") tem como objetivo comunicativo:',
    options: [
      { letter: 'A', text: 'Persuadir a comunidade a adotar comportamentos práticos e imediatos de prevenção sanitária.' },
      { letter: 'B', text: 'Narrar um conto épico sobre a história biológica dos insetos vetores.' },
      { letter: 'C', text: 'Comprovar a eficácia farmacológica de repelentes sintéticos comerciais.' },
      { letter: 'D', text: 'Expor uma teoria estética sobre as cores primárias em peças publicitárias.' },
      { letter: 'E', text: 'Condenar as pesquisas genéticas de erradicação biológica.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Função conativa (ou apelativa) da linguagem em campanhas comunitárias.',
      stepByStep: [
        'O uso do modo imperativo associado a ilustrações atua para orientar, orientar condutas e conscientizar o público-alvo.',
        'Trata-se de texto injuntivo/prescritivo de utilidade pública.'
      ],
      keyTakeaway: 'Textos de campanhas públicas visam engajar o cidadão em práticas preventivas.'
    }
  },
  {
    id: 'etc-04',
    number: 4,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Física - Velocidade Média e Movimento Uniforme',
    stem: 'Um trem da CPTM percorre um trajeto retilíneo de 45 km entre duas estações da Grande São Paulo em um intervalo de tempo de 45 minutos (incluindo as paradas breves). A velocidade escalar média desenvolvida pela composição nesse trajeto é de:',
    options: [
      { letter: 'A', text: '60 km/h' },
      { letter: 'B', text: '45 km/h' },
      { letter: 'C', text: '90 km/h' },
      { letter: 'D', text: '1 km/h' },
      { letter: 'E', text: '30 km/h' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Cálculo de velocidade escalar média: Vm = ΔS / Δt.',
      stepByStep: [
        'Distância percorrida: ΔS = 45 km.',
        'Tempo em horas: 45 minutos = 45 / 60 h = 3/4 h = 0,75 h.',
        'Velocidade média: Vm = 45 / 0,75 = 60 km/h (ou simplesmente: se faz 45 km em 45 min, faz 1 km por minuto; em 60 minutos fará 60 km).'
      ],
      keyTakeaway: 'Em velocidade média, converta minutos para fração de hora antes de dividir.'
    }
  },
  {
    id: 'etc-05',
    number: 5,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Cálculo Financeiro - Juros Simples',
    stem: 'Um jovem aplicou R$ 800,00 em um fundo que rende juros simples à taxa mensal fixa de 2% ao mês. Ao final de 5 meses de aplicação, o montante total resgatado foi de:',
    options: [
      { letter: 'A', text: 'R$ 880,00' },
      { letter: 'B', text: 'R$ 840,00' },
      { letter: 'C', text: 'R$ 960,00' },
      { letter: 'D', text: 'R$ 920,00' },
      { letter: 'E', text: 'R$ 1.000,00' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Fórmula de juros simples: J = C · i · t e Montante M = C + J.',
      stepByStep: [
        'C = R$ 800,00; i = 2% ao mês = 0,02; t = 5 meses.',
        'J = 800 · 0,02 · 5 = 800 · 0,10 = R$ 80,00 de juros acumulados.',
        'Montante final M = 800 + 80 = R$ 880,00.'
      ],
      keyTakeaway: 'Em juros simples, os juros de cada mês incidem unicamente sobre o capital principal investido inicialmente.'
    }
  },
  {
    id: 'etc-06',
    number: 6,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Química - Separação de Misturas Heterogêneas',
    stem: 'No tratamento de água e esgoto em estações municipais (ETAs), a etapa em que partículas sólidas suspensas agregadas por sulfato de alumínio se depositam no fundo do tanque pela ação da gravidade é chamada de:',
    options: [
      { letter: 'A', text: 'Decantação' },
      { letter: 'B', text: 'Destilação fracionada' },
      { letter: 'C', text: 'Levigação centrífuga' },
      { letter: 'D', text: 'Evaporação forçada' },
      { letter: 'E', text: 'Cromatografia líquida' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Etapas do tratamento convencional de água.',
      stepByStep: [
        'Coagulação/Floculação: agregação de impurezas em flocos densos.',
        'Decantação: repouso onde os flocos mais pesados assentam no fundo por gravidade.',
        'Filtração: passagem por areia, carvão e cascalho para reter impurezas finas.',
        'Cloração/Fluoretação: desinfecção bacteriana e prevenção de cáries.'
      ],
      keyTakeaway: 'A decantação fundamenta-se na diferença de densidade entre os sólidos suspensos e o líquido.'
    }
  },
  {
    id: 'etc-07',
    number: 7,
    examId: 'etec-vestibulinho',
    discipline: 'História e Cidadania',
    topic: 'Cultura Afro-Brasileira e Resistência dos Quilombos',
    stem: 'O Quilombo dos Palmares, liderado por Zumbi e Dandara na Serra da Barriga (atual estado de Alagoas) durante o século XVII, destacou-se historicamente como:',
    options: [
      { letter: 'A', text: 'O maior polo de resistência negra à escravidão no Brasil colonial, com organização comunitária e agricultura diversificada autônoma.' },
      { letter: 'B', text: 'Uma feitoria comercial autorizada pela Companhia das Índias Ocidentais para exportar açúcar mascavo.' },
      { letter: 'C', text: 'Um destacamento militar holandês que combatia os bandeirantes portugueses.' },
      { letter: 'D', text: 'Um convento jesuítico voltado à catequização dos povos indígenas Cariris.' },
      { letter: 'E', text: 'Uma capitania hereditária doada pela Coroa espanhola durante a União Ibérica.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Palmares reuniu dezenas de milhares de escravizados fugidos, indígenas e brancos marginalizados.',
      stepByStep: [
        'Sobreviveu por quase um século resistindo a inúmeras expedições punitivas.',
        'Constituiu uma sociedade autossuficiente e símbolo máximo de liberdade e dignidade contra o escravismo.'
      ],
      keyTakeaway: 'A memória de Palmares é o alicerce do Dia da Consciência Negra celebrado em 20 de novembro.'
    }
  },
  {
    id: 'etc-08',
    number: 8,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Geometria Plana - Circunferência e Perímetro',
    stem: 'Uma pista de atletismo circular tem raio r = 50 metros. Um corredor completou 4 voltas completas nessa pista. Adotando π = 3,14, a distância total percorrida pelo atleta foi de:',
    options: [
      { letter: 'A', text: '1.256 metros' },
      { letter: 'B', text: '314 metros' },
      { letter: 'C', text: '628 metros' },
      { letter: 'D', text: '2.512 metros' },
      { letter: 'E', text: '1.570 metros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Comprimento da circunferência: C = 2 · π · r.',
      stepByStep: [
        'Comprimento de uma volta: C = 2 · 3,14 · 50 = 100 · 3,14 = 314 metros.',
        'Distância em 4 voltas: 4 · 314 = 1.256 metros.'
      ],
      keyTakeaway: 'Multiplicar 2 pelo raio de 50 fornece 100, simplificando o cálculo com o valor de π.'
    }
  },
  {
    id: 'etc-09',
    number: 9,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Ecologia - Cadeias Alimentares e Produtores',
    stem: 'Nas florestas tropicais úmidas como a Mata Atlântica e a Amazônia, os organismos autótrofos que sustentam energeticamente a teia alimentar convertendo energia solar em matéria orgânica são:',
    options: [
      { letter: 'A', text: 'As plantas verdes e árvores clorofiladas (produtores primários)' },
      { letter: 'B', text: 'Os fungos decompositores e cogumelos saprófitos' },
      { letter: 'C', text: 'As serpentes peçonhentas e gaviões carnívoros' },
      { letter: 'D', text: 'Os insetos hematófagos e vermes nematódeos' },
      { letter: 'E', text: 'Os mamíferos herbívoros roedores' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 410,
    explanation: {
      summary: 'Conceito de autotrofia e fluxo energético nos ecossistemas.',
      stepByStep: [
        'Organismos autótrofos produzem seu próprio alimento através da fotossíntese (usando luz, água e CO2).',
        'Representam a base primordial de entrada de energia química para todos os heterótrofos da teia trófica.'
      ],
      keyTakeaway: 'Sem os produtores fotossintetizantes, a vida animal terrestre seria termodinamicamente impossível.'
    }
  },
  {
    id: 'etc-10',
    number: 10,
    examId: 'etec-vestibulinho',
    discipline: 'Língua Portuguesa',
    topic: 'Vozes Verbais - Ativa e Passiva',
    stem: 'Ao converter a frase na voz ativa "O robô da equipe brasileira venceu a competição internacional de mecatrônica" para a voz passiva analítica, obtém-se:',
    options: [
      { letter: 'A', text: 'A competição internacional de mecatrônica foi vencida pelo robô da equipe brasileira.' },
      { letter: 'B', text: 'A competição internacional de mecatrônica venceu o robô da equipe brasileira.' },
      { letter: 'C', text: 'O robô vencerá a competição internacional de mecatrônica no futuro.' },
      { letter: 'D', text: 'Venceu-se uma competição de mecatrônica ontem à tarde.' },
      { letter: 'E', text: 'Tinha vencido a competição o robô nacional.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Conversão da voz ativa para a passiva analítica (ser + particípio).',
      stepByStep: [
        'O objeto direto da ativa ("a competição internacional") torna-se sujeito paciente da passiva.',
        'O verbo transitivo "venceu" (pretérito perfeito) transforma-se na locução verbal "foi vencida".',
        'O sujeito agente da ativa ("o robô") torna-se agente da passiva ("pelo robô").'
      ],
      keyTakeaway: 'O tempo verbal do verbo auxiliar "ser" na voz passiva deve sempre reproduzir exatamente o tempo do verbo principal da voz ativa.'
    }
  },
  {
    id: 'etc-11',
    number: 11,
    examId: 'etec-vestibulinho',
    discipline: 'Geografia',
    topic: 'Biomas Brasileiros - Cerrado e Caatinga',
    stem: 'O bioma brasileiro caracterizado por clima tropical sazonal (com verão chuvoso e inverno seco), vegetação com cascas grossas e troncos retorcidos, raízes profundas adaptadas a solos ácidos e apelidado de "o berço das águas do Brasil" por abrigar nascentes de bacias hidrográficas cruciais é o:',
    options: [
      { letter: 'A', text: 'Cerrado' },
      { letter: 'B', text: 'Pampa' },
      { letter: 'C', text: 'Pantanal Mato-Grossense' },
      { letter: 'D', text: 'Floresta de Araucárias' },
      { letter: 'E', text: 'Manguezal costeiro' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Características fitogeográficas do Cerrado brasileiro.',
      stepByStep: [
        'O Cerrado é a savana mais biodiversa do planeta.',
        'Troncos retorcidos são adaptação adaptativa ao alumínio no solo e aos incêndios naturais.',
        'Suas raízes funcionam como esponjas que alimentam o Aquífero Guarani e as bacias do São Francisco, Tocantins-Araguaia e Paraná.'
      ],
      keyTakeaway: 'O Cerrado conecta as três maiores bacias hidrográficas da América do Sul.'
    }
  },
  {
    id: 'etc-12',
    number: 12,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Razão e Proporção em Desenhos Técnicos',
    stem: 'Em uma maquete de projeto arquitetônico em escala 1 : 20, a altura de uma porta residencial foi construída medindo 10,5 cm. A altura real dessa porta em metros é de:',
    options: [
      { letter: 'A', text: '2,10 metros' },
      { letter: 'B', text: '2,00 metros' },
      { letter: 'C', text: '1,05 metro' },
      { letter: 'D', text: '2,50 metros' },
      { letter: 'E', text: '3,00 metros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Cálculo de dimensão real a partir da maquete.',
      stepByStep: [
        'Escala 1:20: cada 1 cm na maquete vale 20 cm no mundo real.',
        'Altura real = 10,5 cm · 20 = 210 cm.',
        'Como 1 metro tem 100 cm: 210 cm / 100 = 2,10 metros (padrão de portas residenciais no Brasil).'
      ],
      keyTakeaway: 'Proporções e escalas simulam problemas práticos enfrentados diariamente em cursos de edificações e desenho industrial.'
    }
  },
  {
    id: 'etc-13',
    number: 13,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Física - Pressão Hidrostática e Vasos Comunicantes',
    stem: 'O princípio físico que explica por que a água dos canos residenciais sai com maior pressão nos chuveiros e torneiras localizados no andar térreo do que nos andares mais altos do mesmo sobrado é formulado pelo:',
    options: [
      { letter: 'A', text: 'Teorema de Stevin (pressão hidrostática proporcional à profundidade p = d · g · h)' },
      { letter: 'B', text: 'Efeito Joule de aquecimento condutivo' },
      { letter: 'C', text: 'Princípio da inércia de Galileu' },
      { letter: 'D', text: 'Efeito fotoelétrico de Einstein' },
      { letter: 'E', text: 'Lei da atração gravitacional universal' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 530,
    explanation: {
      summary: 'Teorema fundamental da hidrostática (Lei de Stevin).',
      stepByStep: [
        'A diferença de pressão entre dois pontos em um fluido em repouso é dada por Δp = ρ · g · Δh.',
        'Quanto maior o desnível vertical (altura da coluna líquida desde a caixa-d\'água até a torneira), maior é a pressão hidrostática exercida pela água.'
      ],
      keyTakeaway: 'Quanto mais baixo estiver o ponto de saída em relação ao reservatório superior, maior será a pressão da água.'
    }
  },
  {
    id: 'etc-14',
    number: 14,
    examId: 'etec-vestibulinho',
    discipline: 'Língua Portuguesa',
    topic: 'Semântica e Polissemia das Palavras',
    stem: 'Uma mesma palavra pode assumir diferentes significados dependendo do contexto linguístico em que é empregada. Assinale a alternativa em que a palavra destacada foi empregada no sentido figurado (conotativo):',
    options: [
      { letter: 'A', text: 'O aluno engoliu um SAPO na reunião ao calar-se diante de uma injustiça evidente.' },
      { letter: 'B', text: 'O sapo anfíbio pulou nas margens úmidas da lagoa do parque ecológico.' },
      { letter: 'C', text: 'O carpinteiro serrou a tábua de madeira usando um serrote bem afiado.' },
      { letter: 'D', text: 'O técnico trocou o fusível queimado do quadro de força da oficina.' },
      { letter: 'E', text: 'A enfermeira mediu a pressão arterial do paciente idoso no ambulatório.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 410,
    explanation: {
      summary: 'Diferença entre denotação (sentido literal) e conotação (sentido figurado).',
      stepByStep: [
        '"Engolir sapo" é uma expressão idiomática metafórica que significa suportar desaforos em silêncio.',
        'Todas as outras frases usam as palavras em seu sentido real e dicionarizado estrito.'
      ],
      keyTakeaway: 'Sentido conotativo apoia-se em metáforas e recursos expressivos poéticos e cotidianos.'
    }
  },
  {
    id: 'etc-15',
    number: 15,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Biologia - Vírus e Bactérias',
    stem: 'Os antibióticos (como a penicilina e a amoxicilina) são medicamentos de alta eficácia clínica prescritos especificamente para combater infecções causadas por:',
    options: [
      { letter: 'A', text: 'Bactérias exclusivamente (interferindo em sua parede celular ou síntese proteica procariótica)' },
      { letter: 'B', text: 'Vírus respiratórios como o da gripe influenza e da Covid-19' },
      { letter: 'C', text: 'Infecções fúngicas da pele e unhas exclusivamente' },
      { letter: 'D', text: 'Intoxicações alimentares causadas unicamente por agrotóxicos' },
      { letter: 'E', text: 'Protozoários flagelados que causam a doença de Chagas' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Mecanismo de ação dos antibióticos e riscos do uso indiscriminado.',
      stepByStep: [
        'Antibióticos atacam alvos celulares que existem exclusivamente em bactérias (como peptideoglicano da parede celular e ribossomos bacterianos 70S).',
        'Vírus são parasitas intracelulares obrigatórios acelulares e NÃO possuem parede celular nem ribossomos, sendo totalmente imunes aos antibióticos.',
        'Tomar antibiótico contra gripe não cura a doença e seleciona bactérias super-resistentes.'
      ],
      keyTakeaway: 'Antibiótico mata bactéria, não vírus. Para vírus usam-se vacinas e antivirais.'
    }
  },
  {
    id: 'etc-16',
    number: 16,
    examId: 'etec-vestibulinho',
    discipline: 'História',
    topic: 'Revolução Industrial e o Cotidiano Fabril',
    stem: 'A introdução da máquina a vapor de James Watt na Inglaterra no final do século XVIII transformou radicalmente a produção manufatureira e a vida urbana, gerando:',
    options: [
      { letter: 'A', text: 'A divisão detalhada do trabalho fabril, o surgimento do proletariado assalariado e a aceleração do êxodo rural para cidades industriais.' },
      { letter: 'B', text: 'A volta imediata das populações camponesas à agricultura de subsistência feudal.' },
      { letter: 'C', text: 'A proibição do trabalho noturno e a concessão de férias remuneradas automáticas em 1790.' },
      { letter: 'D', text: 'A substituição total de todas as estradas de ferro por canais fluviais manuais.' },
      { letter: 'E', text: 'O fechamento permanente de todas as minas de carvão vegetal na Europa.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Impactos sociais da Primeira Revolução Industrial.',
      stepByStep: [
        'A maquinofatura substituiu o artesanato doméstico.',
        'O cercamento dos campos (enclosure acts) expulsou camponeses para as cidades fabris.',
        'Surgiram as duas classes sociais antagônicas: a burguesia industrial e a classe operária (proletariado).'
      ],
      keyTakeaway: 'A máquina a vapor inaugurou a era fóssil do capitalismo urbano contemporâneo.'
    }
  },
  {
    id: 'etc-17',
    number: 17,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Sistema de Duas Equações do 1º Grau',
    stem: 'Em um estacionamento há carros e motos, totalizando 30 veículos e 80 rodas encostadas no chão. O número de carros estacionados nesse local é:',
    options: [
      { letter: 'A', text: '10 carros' },
      { letter: 'B', text: '20 carros' },
      { letter: 'C', text: '15 carros' },
      { letter: 'D', text: '8 carros' },
      { letter: 'E', text: '12 carros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Problema clássico de sistema linear de 1º grau.',
      stepByStep: [
        'Sejam C o número de carros (4 rodas) e M o número de motos (2 rodas).',
        'Equação 1: C + M = 30 ⇒ M = 30 - C.',
        'Equação 2: 4C + 2M = 80.',
        'Substituindo M: 4C + 2·(30 - C) = 80 ⇒ 4C + 60 - 2C = 80.',
        '2C = 80 - 60 = 20 ⇒ C = 10 carros.',
        'Conferência: 10 carros (40 rodas) + 20 motos (40 rodas) = 30 veículos e 80 rodas.'
      ],
      keyTakeaway: 'O método da substituição resolve rapidamente qualquer problema de cabeças e patas/veículos e rodas.'
    }
  },
  {
    id: 'etc-18',
    number: 18,
    examId: 'etec-vestibulinho',
    discipline: 'Ciências da Natureza',
    topic: 'Química - Densidade e Misturas Imiscíveis',
    stem: 'Ao adicionar óleo de cozinha (densidade = 0,92 g/cm³) e água líquida (densidade = 1,00 g/cm³) em um béquer graduado, observa-se que os dois líquidos não se misturam e o óleo flutua sobre a água. Essa estratificação ocorre porque o óleo é:',
    options: [
      { letter: 'A', text: 'Menos denso que a água e apolar (imiscível em água polar)' },
      { letter: 'B', text: 'Mais denso que a água e polar' },
      { letter: 'C', text: 'Mais denso que a água e rico em sais minerais pesados' },
      { letter: 'D', text: 'Totalmente solúvel em água quente sob agitação' },
      { letter: 'E', text: 'Um gás condensado à temperatura ambiente' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Regra da solubilidade "semelhante dissolve semelhante" e diferença de densidades.',
      stepByStep: [
        'A água é uma substância fortemente polar (faz ligações de hidrogênio).',
        'Os lipídios e óleos são hidrofóbicos e apolares (interações de dispersão de London fracas).',
        'Por serem imiscíveis e possuir densidade menor (0,92 < 1,00), o óleo sobe e forma a fase superior.'
      ],
      keyTakeaway: 'Flutuação depende de densidade relativa; separação de fases depende da polaridade intermolecular.'
    }
  },
  {
    id: 'etc-19',
    number: 19,
    examId: 'etec-vestibulinho',
    discipline: 'Geografia',
    topic: 'Problemas Ambientais Urbanos - Ilha de Calor',
    stem: 'Nas áreas centrais densamente urbanizadas de metrópoles como São Paulo, onde predomina o asfalto escuro, concreto, poucos parques arborizados e intensa queima de combustíveis veiculares, a temperatura média do ar é significativamente mais quente do que nas áreas rurais e periféricas vizinhas. Esse fenômeno microclimático é denominado:',
    options: [
      { letter: 'A', text: 'Ilha de calor urbana' },
      { letter: 'B', text: 'Chuva ácida estival' },
      { letter: 'C', text: 'Efeito estufa estratosférico' },
      { letter: 'D', text: 'Ciclone extratropical' },
      { letter: 'E', text: 'Tsunami continental' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Conceito e causas das ilhas de calor nas grandes cidades.',
      stepByStep: [
        'Materiais como concreto e asfalto têm baixo albedo e alta capacidade térmica, retendo muito calor durante o dia.',
        'A escassez de árvores reduz a evapotranspiração que resfriaria o ar.',
        'O calor é liberado à noite, mantendo o centro urbano vários graus acima do entorno arborizado.'
      ],
      keyTakeaway: 'O plantio de corredores verdes e telhados ecológicos são medidas práticas para atenuar as ilhas de calor.'
    }
  },
  {
    id: 'etc-20',
    number: 20,
    examId: 'etec-vestibulinho',
    discipline: 'Matemática',
    topic: 'Média Aritmética Ponderada',
    stem: 'Em um curso técnico de informática, a nota final de uma disciplina é obtida pela média ponderada de três avaliações: Trabalho Prático (peso 2), Seminário (peso 3) e Prova Teórica (peso 5). Se uma estudante tirou nota 8,0 no Trabalho, 7,0 no Seminário e 9,0 na Prova Teórica, sua média final foi de:',
    options: [
      { letter: 'A', text: '8,2' },
      { letter: 'B', text: '8,0' },
      { letter: 'C', text: '8,5' },
      { letter: 'D', text: '7,8' },
      { letter: 'E', text: '8,4' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Cálculo de média ponderada: Mp = Σ(nota · peso) / Σ(pesos).',
      stepByStep: [
        'Soma dos pesos = 2 + 3 + 5 = 10.',
        'Numerador = (8,0 · 2) + (7,0 · 3) + (9,0 · 5) = 16,0 + 21,0 + 45,0 = 82,0.',
        'Média final = 82,0 / 10 = 8,2.'
      ],
      keyTakeaway: 'A média ponderada dá mais importância proporcional às notas com pesos maiores.'
    }
  }
];
