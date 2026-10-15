import { Question } from '@/types/simulator';

export const sarespQuestions: Question[] = [
  {
    id: 'srs-01',
    number: 1,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Identificação de Tese e Argumentação Central',
    stem: 'No editorial de um jornal escolar que discute a redução do consumo de plástico descartável nas cantinas, a tese defendida pelo autor é identificada no seguinte trecho:',
    options: [
      { letter: 'A', text: '“A adoção de recipientes reutilizáveis é um dever pedagógico urgente que transforma a consciência ecológica em hábito diário.”' },
      { letter: 'B', text: '“O plástico foi sintetizado pela primeira vez no início do século XX por químicos europeus.”' },
      { letter: 'C', text: '“Alguns alunos compraram copos térmicos na feira de ciências da cidade vizinha.”' },
      { letter: 'D', text: '“O preço da água mineral varia de acordo com a marca comercializada.”' },
      { letter: 'E', text: '“A campainha toca pontualmente às dez horas para o início do recreio.”' },
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'A tese é o posicionamento opinativo do autor, diferente de fatos ou descrições.',
      stepByStep: [
        'As opções B, C, D e E contêm meros fatos, dados cronológicos ou descrições de rotina.',
        'A opção A apresenta juízo de valor e proposta ("dever pedagógico urgente que transforma a consciência"), constituindo a tese central.'
      ],
      keyTakeaway: 'No SARESP, diferencie sempre fato (dado objetivo comprovável) de opinião/tese (ponto de vista argumentativo).'
    }
  },
  {
    id: 'srs-02',
    number: 2,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Porcentagem e Descontos Sucessivos',
    stem: 'Uma mochila escolar custava R$ 120,00. Na liquidação de volta às aulas, a loja anunciou um desconto de 25% para pagamento à vista. Um cliente que comprou essa mochila à vista pagou a quantia de:',
    options: [
      { letter: 'A', text: 'R$ 90,00' },
      { letter: 'B', text: 'R$ 95,00' },
      { letter: 'C', text: 'R$ 80,00' },
      { letter: 'D', text: 'R$ 100,00' },
      { letter: 'E', text: 'R$ 75,00' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Cálculo de desconto percentual simples.',
      stepByStep: [
        'Desconto de 25% = 1/4 do valor total.',
        '25% de 120 = 0,25 · 120 = R$ 30,00 de abatimento.',
        'Valor pago = 120 - 30 = R$ 90,00 (ou diretamente: 75% de 120 = 0,75 · 120 = R$ 90,00).'
      ],
      keyTakeaway: '25% equivale a um quarto (divisão por 4), um cálculo mental rápido e muito cobrado nas matrizes do SARESP.'
    }
  },
  {
    id: 'srs-03',
    number: 3,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Equação do 1º Grau e Problemas do Cotidiano',
    stem: 'Um motorista de aplicativo cobra uma taxa fixa de bandeirada de R$ 5,50 mais R$ 2,50 por cada quilômetro rodado. Se um passageiro realizou uma corrida e a fatura final foi de R$ 35,50, a distância percorrida nessa corrida foi de:',
    options: [
      { letter: 'A', text: '12 km' },
      { letter: 'B', text: '14 km' },
      { letter: 'C', text: '10 km' },
      { letter: 'D', text: '15 km' },
      { letter: 'E', text: '8 km' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Resolução de equação de primeiro grau modelando tarifa.',
      stepByStep: [
        'Modelo: Valor = 5,50 + 2,50 · x, onde x é a distância em km.',
        '5,50 + 2,50 · x = 35,50',
        '2,50 · x = 35,50 - 5,50 = 30,00',
        'x = 30,00 / 2,50 = 12 km.'
      ],
      keyTakeaway: 'Problemas de função afim f(x) = ax + b conectam o custo fixo (coeficiente linear) ao custo variável unitário (coeficiente angular).'
    }
  },
  {
    id: 'srs-04',
    number: 4,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Efeitos de Sentido de Pontuação e Aspas',
    stem: 'Na frase: "O funcionário alegou que sua \'dedicação exemplar\' à empresa dispensava o cumprimento de horários", o emprego das aspas na expressão \'dedicação exemplar\' produz o efeito de:',
    options: [
      { letter: 'A', text: 'Ironia e distanciamento crítico em relação à veracidade do que foi afirmado.' },
      { letter: 'B', text: 'Citação formal de uma lei trabalhista federal.' },
      { letter: 'C', text: 'Elogio sincero e irrestrito ao compromisso do empregado.' },
      { letter: 'D', text: 'Indicação de erro gramatical ortográfico intencional.' },
      { letter: 'E', text: 'Transcrição de provérbio popular consagrado.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Aspas com valor irônico ou de distanciamento discursivo.',
      stepByStep: [
        'As aspas não estão citando um texto acadêmico, mas relativizando a suposta "dedicação".',
        'O contexto sugere que quem não cumpre horários não tem, na prática, dedicação exemplar.',
        'Configura ironia.'
      ],
      keyTakeaway: 'O uso de aspas pode sinalizar citação textual, estrangeirismo, neologismo ou ironia.'
    }
  },
  {
    id: 'srs-05',
    number: 5,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Teorema de Pitágoras e Triângulos Retângulos',
    stem: 'Uma escada de 5 metros de comprimento está apoiada em uma parede vertical de um edifício. O pé da escada está apoiado no chão horizontal a 3 metros de distância da base da parede. A altura que a escada atinge na parede é de:',
    options: [
      { letter: 'A', text: '4 metros' },
      { letter: 'B', text: '3,5 metros' },
      { letter: 'C', text: '4,5 metros' },
      { letter: 'D', text: '2 metros' },
      { letter: 'E', text: '6 metros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Aplicação direta do Teorema de Pitágoras: a² = b² + c².',
      stepByStep: [
        'A escada é a hipotenusa (a = 5 m).',
        'A distância no solo é um dos catetos (b = 3 m).',
        '5² = 3² + h² ⇒ 25 = 9 + h² ⇒ h² = 25 - 9 = 16 ⇒ h = 4 metros.',
        'Trata-se do clássico terno pitagórico 3 - 4 - 5.'
      ],
      keyTakeaway: 'O triângulo retângulo com lados proporcionais a 3, 4 e 5 é o mais frequente em avaliações diagnósticas.'
    }
  },
  {
    id: 'srs-06',
    number: 6,
    examId: 'saresp-sp',
    discipline: 'Ciências da Natureza',
    topic: 'Ciclo da Água e Mudanças de Estado Físico',
    stem: 'A formação das nuvens de chuva na atmosfera terrestre ocorre quando o vapor de água sobe a altitudes mais frias e passa do estado gasoso para o estado líquido em microgotículas. Essa transformação física da matéria denomina-se:',
    options: [
      { letter: 'A', text: 'Condensação (ou liquefação)' },
      { letter: 'B', text: 'Evaporação' },
      { letter: 'C', text: 'Fusão' },
      { letter: 'D', text: 'Sublimação' },
      { letter: 'E', text: 'Solidificação' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Mudanças de estado físico no ciclo hidrológico.',
      stepByStep: [
        'Gás → Líquido = Condensação.',
        'Líquido → Gás = Vaporização / Evaporação.',
        'Sólido → Líquido = Fusão.',
        'Líquido → Sólido = Solidificação.'
      ],
      keyTakeaway: 'As nuvens não são feitas de vapor de água invisível, mas de bilhões de gotículas líquidas condensadas suspensas.'
    }
  },
  {
    id: 'srs-07',
    number: 7,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Coesão Referencial e Uso de Pronomes',
    stem: 'No trecho: "O município inaugurou uma biblioteca moderna no centro histórico. NELA, os jovens têm acesso gratuito à internet e acervo digital", o pronome destacado retoma:',
    options: [
      { letter: 'A', text: 'A biblioteca moderna' },
      { letter: 'B', text: 'O município' },
      { letter: 'C', text: 'A internet' },
      { letter: 'D', text: 'A população jovem' },
      { letter: 'E', text: 'A história do estado' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Mecanismo anafórico de coesão pronominal.',
      stepByStep: [
        'O pronome "nela" (em + ela) concorda em gênero feminino e número singular com "uma biblioteca moderna".',
        'É dentro da biblioteca que os jovens acessam os serviços.'
      ],
      keyTakeaway: 'A coesão anafórica evita repetições vocabulares desnecessárias e assegura a continuidade temática.'
    }
  },
  {
    id: 'srs-08',
    number: 8,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Área de Figuras Planas - Trapézio',
    stem: 'Um terreno tem a forma de um trapézio com base maior medindo 20 metros, base menor medindo 12 metros e distância perpendicular entre as bases (altura) de 8 metros. A área desse terreno é igual a:',
    options: [
      { letter: 'A', text: '128 m²' },
      { letter: 'B', text: '256 m²' },
      { letter: 'C', text: '160 m²' },
      { letter: 'D', text: '96 m²' },
      { letter: 'E', text: '112 m²' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Fórmula da área do trapézio: A = [(B + b) · h] / 2.',
      stepByStep: [
        'B = 20 m; b = 12 m; h = 8 m.',
        'Soma das bases: 20 + 12 = 32 m.',
        'Área = (32 · 8) / 2 = 256 / 2 = 128 m².'
      ],
      keyTakeaway: 'A área do trapézio é calculada pela média aritmética das bases multiplicada pela altura.'
    }
  },
  {
    id: 'srs-09',
    number: 9,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Regência Verbal - Verbo Assistir',
    stem: 'De acordo com a norma-padrão da língua portuguesa, a frase redigida de forma gramaticalmente correta quanto à regência verbal é:',
    options: [
      { letter: 'A', text: 'Ontem à noite nós assistimos ao filme premiado no festival de cinema.' },
      { letter: 'B', text: 'Ontem à noite nós assistimos o filme premiado no festival de cinema.' },
      { letter: 'C', text: 'Os alunos preferem mais estudar matemática do que descansar no sábado.' },
      { letter: 'D', text: 'O médico assistiu ao paciente ferido durante o atendimento emergencial.' },
      { letter: 'E', text: 'Todos obedeceram o regulamento sem qualquer questionamento formal.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 570,
    explanation: {
      summary: 'Regência do verbo assistir no sentido de ver/presenciar.',
      stepByStep: [
        'No sentido de "ver/presenciar", o verbo assistir é transitivo indireto e exige a preposição "a" (assistir ao filme).',
        'A frase B está errada por omitir a preposição.',
        'A frase C comete o vício de usar "preferir mais... do que" (o padrão é "preferir X a Y").',
        'A frase E comete erro de regência com o verbo obedecer, que rege preposição a ("obedeceram ao regulamento").'
      ],
      keyTakeaway: 'Assistir (ver) = exige preposição A. Assistir (ajudar/dar assistência) = transitivo direto, sem preposição.'
    }
  },
  {
    id: 'srs-10',
    number: 10,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Regra de Três Composta',
    stem: 'Se 6 operários constroem um muro de 30 metros de comprimento em 5 dias de trabalho regular, quantos dias serão necessários para que 10 operários com o mesmo ritmo de produção construam um muro de 60 metros?',
    options: [
      { letter: 'A', text: '6 dias' },
      { letter: 'B', text: '8 dias' },
      { letter: 'C', text: '5 dias' },
      { letter: 'D', text: '10 dias' },
      { letter: 'E', text: '4 dias' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 590,
    explanation: {
      summary: 'Regra de três composta comparando grandezas diretamente e inversamente proporcionais.',
      stepByStep: [
        'Grandezas: Operários (inversa), Comprimento (direta), Dias (incógnita).',
        'Montando a proporção para os dias: 5 / x = (10 / 6) · (30 / 60).',
        'Simplificando: 5 / x = (5 / 3) · (1 / 2) = 5 / 6.',
        '5 / x = 5 / 6 ⇒ x = 6 dias.'
      ],
      keyTakeaway: 'Mais operários exigem menos dias (inversa); muro maior exige mais dias (direta).'
    }
  },
  {
    id: 'srs-11',
    number: 11,
    examId: 'saresp-sp',
    discipline: 'Ciências da Natureza',
    topic: 'Sistema Digestório e Enzimas',
    stem: 'A digestão química inicial dos carboidratos (como o amido contido no pão e na batata) tem início na cavidade bucal por meio da ação catalítica da enzima:',
    options: [
      { letter: 'A', text: 'Ptialina (amilase salivar)' },
      { letter: 'B', text: 'Pepsina gástrica' },
      { letter: 'C', text: 'Lipase pancreática' },
      { letter: 'D', text: 'Bile emulsificante' },
      { letter: 'E', text: 'Tripsina entérica' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Fisiologia digestiva humana.',
      stepByStep: [
        'Na boca, o pH neutro (~7) favorece a amilase salivar (ptialina), que quebra amido em maltose.',
        'No estômago (pH ácido ~2), atua a pepsina digerindo proteínas.',
        'No duodeno, atuam lipases e tripsinas pancreáticas.'
      ],
      keyTakeaway: 'A digestão do amido começa na boca e é interrompida no estômago devido ao ácido clorídrico.'
    }
  },
  {
    id: 'srs-12',
    number: 12,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Crase Obrigatória vs Proibida',
    stem: 'Assinale a alternativa em que o sinal indicativo de crase foi empregado em estrita conformidade com as regras gramaticais:',
    options: [
      { letter: 'A', text: 'O diretor encaminhou o relatório à coordenadora pedagógica.' },
      { letter: 'B', text: 'O atleta começou à correr antes do apito do árbitro.' },
      { letter: 'C', text: 'Nós fomos à pé até a praça da matriz.' },
      { letter: 'D', text: 'Ele comprou o ingresso à prazo no cartão de crédito.' },
      { letter: 'E', text: 'Desejei boa viagem à todas as passageiras do ônibus.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Regras gerais de uso e proibição da crase.',
      stepByStep: [
        'A frase A: encaminhar algo "a" (preposição) + "a" (artigo antes de coordenadora) = à coordenadora. Correto.',
        'B está errada: proibida crase antes de verbo (correr).',
        'C está errada: proibida crase antes de palavra masculina (pé).',
        'D está errada: proibida crase antes de palavra masculina (prazo).',
        'E está errada: proibida crase antes de pronome indefinido (todas).'
      ],
      keyTakeaway: 'Crase nunca ocorre antes de verbo, palavra masculina ou pronomes indefinidos.'
    }
  },
  {
    id: 'srs-13',
    number: 13,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Probabilidade Simples em Lançamento de Dados',
    stem: 'No lançamento simultâneo de dois dados comuns e honestos de 6 faces numeradas de 1 a 6, a probabilidade de a soma dos números obtidos ser igual a 7 é de:',
    options: [
      { letter: 'A', text: '6 / 36 (1 / 6)' },
      { letter: 'B', text: '5 / 36' },
      { letter: 'C', text: '7 / 36' },
      { letter: 'D', text: '1 / 12' },
      { letter: 'E', text: '1 / 36' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 530,
    explanation: {
      summary: 'Cálculo de espaço amostral e eventos favoráveis com dados.',
      stepByStep: [
        'Total de pares possíveis = 6 x 6 = 36 pares ordenados.',
        'Pares que somam 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pares.',
        'Probabilidade = 6 / 36 = 1 / 6 (~16,7%).'
      ],
      keyTakeaway: 'A soma 7 é a mais provável em dois dados de seis faces porque possui o maior número de combinações possíveis.'
    }
  },
  {
    id: 'srs-14',
    number: 14,
    examId: 'saresp-sp',
    discipline: 'História e Geografia de São Paulo',
    topic: 'A Ferrovia e a Cafeicultura Paulista',
    stem: 'A implantação da malha ferroviária no estado de São Paulo na segunda metade do século XIX (como a São Paulo Railway) esteve diretamente associada a:',
    options: [
      { letter: 'A', text: 'Ao escoamento veloz da volumosa safra cafeeira do interior paulista até o Porto de Santos para exportação.' },
      { letter: 'B', text: 'À mineração de diamantes na Serra da Mantiqueira.' },
      { letter: 'C', text: 'Ao transporte exclusivo de soldados durante a Revolução Constitucionalista de 1932.' },
      { letter: 'D', text: 'À interligação das usinas de cana-de-açúcar com o litoral norte fluminense.' },
      { letter: 'E', text: 'À substituição das rodovias asfaltadas que já existiam desde o período colonial.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'O binômio café-ferrovia foi o motor da modernização infraestrutural de São Paulo.',
      stepByStep: [
        'O café expandiu-se pelo Vale do Paraíba e Oeste Paulista.',
        'O transporte por tropas de mulas era lento e oneroso para a escala internacional requerida.',
        'As ferrovias ligaram o interior fértil (terra roxa) ao Porto de Santos, dinamizando a economia paulista.'
      ],
      keyTakeaway: 'A riqueza gerada pela cafeicultura e pela infraestrutura ferroviária pavimentou o caminho da industrialização paulista.'
    }
  },
  {
    id: 'srs-15',
    number: 15,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Equação de 2º Grau - Raízes e Bhaskara',
    stem: 'As raízes reais da equação quadrática x² - 7x + 10 = 0 são os números:',
    options: [
      { letter: 'A', text: '2 e 5' },
      { letter: 'B', text: '-2 e -5' },
      { letter: 'C', text: '1 e 10' },
      { letter: 'D', text: '-1 e -10' },
      { letter: 'E', text: '3 e 4' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Relações de Soma e Produto de raízes (S = -b/a, P = c/a).',
      stepByStep: [
        'Soma das raízes: S = -(-7)/1 = 7.',
        'Produto das raízes: P = 10/1 = 10.',
        'Dois números cuja soma é 7 e cujo produto é 10 são 2 e 5 (2 + 5 = 7 e 2 · 5 = 10).'
      ],
      keyTakeaway: 'Treinar soma e produto acelera a resolução de questões de 2º grau sem necessidade de aplicar Bhaskara completa.'
    }
  },
  {
    id: 'srs-16',
    number: 16,
    examId: 'saresp-sp',
    discipline: 'Ciências da Natureza',
    topic: 'Propagação de Calor - Condução, Convecção e Irradiação',
    stem: 'O funcionamento de uma garrafa térmica (frasco de Dewar) reduz a perda de calor por três processos físicos. O vácuo existente entre as paredes duplas de vidro tem a função primordial de impedir a transferência térmica por:',
    options: [
      { letter: 'A', text: 'Condução e convecção (já que ambas necessitam de um meio material para propagação)' },
      { letter: 'B', text: 'Irradiação eletromagnética exclusivamente' },
      { letter: 'C', text: 'Fusão nuclear espontânea' },
      { letter: 'D', text: 'Refração luminosa infravermelha' },
      { letter: 'E', text: 'Evaporação capilar do vácuo' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 540,
    explanation: {
      summary: 'Mecanismos de transmissão de calor em garrafas térmicas.',
      stepByStep: [
        'A condução térmica exige contato entre partículas materiais; a convecção exige correntes de fluidos materiais.',
        'No vácuo (ausência de matéria), condução e convecção são bloqueadas.',
        'As paredes espelhadas servem para refletir a irradiação infravermelha.'
      ],
      keyTakeaway: 'Apenas a radiação térmica é capaz de se propagar no vácuo; condução e convecção necessitam de meio material.'
    }
  },
  {
    id: 'srs-17',
    number: 17,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Figuras de Sintaxe - Pleonasmo e Anáfora',
    stem: 'Em cantigas e poesias populares, a repetição enfática de uma mesma palavra no início de vários versos sucessivos ("Era uma casa sem portas / Era uma casa sem chão / Era uma casa sem teto") caracteriza a figura de estilo chamada:',
    options: [
      { letter: 'A', text: 'Anáfora' },
      { letter: 'B', text: 'Hipérbole' },
      { letter: 'C', text: 'Eufemismo' },
      { letter: 'D', text: 'Paradoxo' },
      { letter: 'E', text: 'Metonímia' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Identificação de figuras de linguagem estruturais.',
      stepByStep: [
        'Anáfora é a repetição intencional da mesma palavra ou expressão no início de períodos ou versos consecutivos para gerar ritmo e ênfase.',
        'Hipérbole seria exagero intencional; eufemismo seria atenuação de ideia grosseira.'
      ],
      keyTakeaway: 'Anáfora na literatura confere musicalidade e poder de fixação da mensagem lírica.'
    }
  },
  {
    id: 'srs-18',
    number: 18,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Leitura e Interpretação de Gráficos de Setores',
    stem: 'Em uma pesquisa de opinião escolar com 400 estudantes sobre o esporte favorito, o gráfico de setores indicou que a fatia correspondente ao futebol possuía um ângulo central de 90°. A quantidade de alunos que escolheu futebol como esporte favorito foi de:',
    options: [
      { letter: 'A', text: '100 alunos' },
      { letter: 'B', text: '90 alunos' },
      { letter: 'C', text: '150 alunos' },
      { letter: 'D', text: '200 alunos' },
      { letter: 'E', text: '80 alunos' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Interpretação geométrica de gráficos de setores circulares.',
      stepByStep: [
        'A circunferência inteira corresponde a 360° (100% dos dados).',
        'Um ângulo central de 90° representa: 90° / 360° = 1/4 = 25% do total.',
        '25% de 400 alunos = 400 / 4 = 100 alunos.'
      ],
      keyTakeaway: '90° em gráficos de pizza sempre representa um quarto exato (25%) da amostra pesquisada.'
    }
  },
  {
    id: 'srs-19',
    number: 19,
    examId: 'saresp-sp',
    discipline: 'Língua Portuguesa',
    topic: 'Gênero Textual - Carta do Leitor',
    stem: 'O gênero textual "Carta do Leitor" veiculado em jornais e revistas de grande circulação tem como finalidade primordial:',
    options: [
      { letter: 'A', text: 'Permitir que o público leitor expresse elogios, críticas ou reflexões sobre as matérias publicadas pelo veículo de imprensa.' },
      { letter: 'B', text: 'Apresentar dados científicos brutos sem qualquer interferência opinativa.' },
      { letter: 'C', text: 'Vender produtos cosméticos por catálogo promocional.' },
      { letter: 'D', text: 'Publicar editais de convocação eleitoral oficial.' },
      { letter: 'E', text: 'Narrar fábulas infantis com animais falantes.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 410,
    explanation: {
      summary: 'Função social e características do gênero carta do leitor.',
      stepByStep: [
        'A carta do leitor é o canal de interatividade direta entre os assinantes/leitores e a redação jornalística.',
        'Permite feedback, contestação de reportagens, direito de resposta e manifestação da opinião pública.'
      ],
      keyTakeaway: 'A matriz do SARESP valoriza o reconhecimento da função comunicativa dos gêneros textuais que circulam na esfera pública.'
    }
  },
  {
    id: 'srs-20',
    number: 20,
    examId: 'saresp-sp',
    discipline: 'Matemática',
    topic: 'Volume de Paralelepípedo e Conversão de Unidades',
    stem: 'Uma caixa-d’água retangular tem formato de paralelepípedo reto com dimensões internas de 2 metros de comprimento, 1,5 metro de largura e 1 metro de profundidade. A capacidade máxima de armazenamento de água dessa caixa em litros é de:',
    options: [
      { letter: 'A', text: '3.000 litros' },
      { letter: 'B', text: '300 litros' },
      { letter: 'C', text: '4.500 litros' },
      { letter: 'D', text: '1.500 litros' },
      { letter: 'E', text: '30.000 litros' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Cálculo de volume e equivalência métrica 1 m³ = 1.000 litros.',
      stepByStep: [
        'Volume = comprimento · largura · altura = 2 · 1,5 · 1 = 3 m³.',
        'Como cada 1 metro cúbico equivale exatamente a 1.000 litros de água pura:',
        'Capacidade = 3 · 1.000 = 3.000 litros.'
      ],
      keyTakeaway: 'Relação fundamental de conversão volumétrica para qualquer prova diagnóstica: 1 dm³ = 1 L e 1 m³ = 1.000 L.'
    }
  }
];
