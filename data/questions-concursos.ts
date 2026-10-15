import { Question } from '@/types/simulator';

export const concursosQuestions: Question[] = [
  {
    id: 'cnc-01',
    number: 1,
    examId: 'concursos-publicos',
    discipline: 'Direito Constitucional',
    topic: 'Direitos e Garantias Fundamentais - Artigo 5º da CF/88',
    stem: 'A respeito da inviolabilidade do domicílio consagrada no artigo 5º, inciso XI, da Constituição Federal de 1988 ("a casa é asilo inviolável do indivíduo..."), a entrada forçada em domicílio sem consentimento do morador durante o período NOTURNO é constitucionalmente admitida na seguinte hipótese:',
    options: [
      { letter: 'A', text: 'Em caso de flagrante delito ou desastre, ou para prestar socorro.' },
      { letter: 'B', text: 'Por determinação judicial regular expedida por juiz competente.' },
      { letter: 'C', text: 'Para averiguação preliminar de suspeita de crime tributário.' },
      { letter: 'D', text: 'Para citação pessoal de réu em processo de cobrança de alimentos.' },
      { letter: 'E', text: 'A critério discricionário da autoridade policial em ronda preventiva.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 490,
    explanation: {
      summary: 'Regra constitucional da inviolabilidade domiciliar (Art. 5º, XI, CF/88).',
      stepByStep: [
        'Durante o DIA: consentimento, flagrante delito, desastre, socorro OU determinação judicial.',
        'Durante a NOITE: apenas com consentimento, em flagrante delito, desastre OU para prestar socorro.',
        'Determinação judicial NUNCA pode ser cumprida durante a noite sem consentimento do morador.'
      ],
      keyTakeaway: 'Pegadinha mais clássica de concursos públicos (Cebraspe/FGV/Vunesp): mandado judicial só se cumpre durante o dia.'
    }
  },
  {
    id: 'cnc-02',
    number: 2,
    examId: 'concursos-publicos',
    discipline: 'Direito Administrativo',
    topic: 'Princípios da Administração Pública - LIMPE',
    stem: 'O princípio expressamente previsto no caput do artigo 37 da Constituição Federal que veda a promoção pessoal de autoridades ou servidores públicos sobre suas obras, serviços e campanhas de órgãos públicos é o princípio da:',
    options: [
      { letter: 'A', text: 'Impessoalidade' },
      { letter: 'B', text: 'Moralidade' },
      { letter: 'C', text: 'Legalidade' },
      { letter: 'D', text: 'Eficiência' },
      { letter: 'E', text: 'Publicidade' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Art. 37, § 1º da CF/88: publicidade não pode ter nomes, símbolos ou imagens que caracterizem promoção pessoal.',
      stepByStep: [
        'A atuação estatal pertence ao órgão/Estado e não à pessoa física do governante.',
        'O veto à auto-promoção decorre primariamente do princípio da Impessoalidade (também resvalando na Moralidade, mas tem na impessoalidade seu fundamento técnico direto).'
      ],
      keyTakeaway: 'Mnemônica LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.'
    }
  },
  {
    id: 'cnc-03',
    number: 3,
    examId: 'concursos-publicos',
    discipline: 'Direito Administrativo',
    topic: 'Atos Administrativos - Atributos do Ato',
    stem: 'A presunção de legitimidade e veracidade dos atos administrativos implica que:',
    options: [
      { letter: 'A', text: 'Os atos praticados pela Administração presumem-se conformes à lei e verdadeiros até prova em contrário (presunção juris tantum).' },
      { letter: 'B', text: 'O cidadão jamais pode recorrer ao Judiciário contra decisões do Poder Executivo.' },
      { letter: 'C', text: 'A presunção é absoluta (juris et de jure) e impede qualquer produção probatória pelo administrado.' },
      { letter: 'D', text: 'O ato não necessita de motivação ou publicação para surtir efeitos jurídicos.' },
      { letter: 'E', text: 'A Administração não pode anular seus próprios atos de ofício.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 560,
    explanation: {
      summary: 'Atributo da presunção de legitimidade e veracidade (presunção relativa).',
      stepByStep: [
        'Presume-se que o ato administrativo atendeu às exigências legais e que os fatos relatados ocorreram.',
        'Essa presunção é relativa (juris tantum), o que significa que admite prova em contrário pelo particular, invertendo-se o ônus da prova.'
      ],
      keyTakeaway: 'Atributos dos atos administrativos (PATI): Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.'
    }
  },
  {
    id: 'cnc-04',
    number: 4,
    examId: 'concursos-publicos',
    discipline: 'Informática e Segurança da Informação',
    topic: 'Criptografia Assimétrica e Certificação Digital ICP-Brasil',
    stem: 'No âmbito da criptografia assimétrica (de chaves públicas e privadas) utilizada no padrão ICP-Brasil para assinatura digital de documentos eletrônicos:',
    options: [
      { letter: 'A', text: 'A assinatura digital é gerada utilizando a chave privada do signatário e validada por terceiros com a chave pública dele.' },
      { letter: 'B', text: 'A mesma chave secreta deve ser compartilhada previamente por e-mail entre emissor e receptor.' },
      { letter: 'C', text: 'A chave pública do usuário deve ser mantida em sigilo absoluto em token criptográfico inviolável.' },
      { letter: 'D', text: 'A assinatura digital não garante o não-repúdio (irretratabilidade) das operações.' },
      { letter: 'E', text: 'A chave privada é de conhecimento geral de todas as autoridades certificadoras.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 610,
    explanation: {
      summary: 'Funcionamento das assinaturas digitais assimétricas.',
      stepByStep: [
        'A chave privada pertence exclusivamente ao autor e nunca é revelada.',
        'Para assinar um documento, calcula-se o hash da mensagem e criptografa-se esse resumo com a chave privada.',
        'Qualquer pessoa pode descriptografar com a chave pública do autor, confirmando autenticidade, integridade e não-repúdio.'
      ],
      keyTakeaway: 'Assinatura digital = chave privada assina / chave pública confere. Criptografia confidencial = chave pública cifra / chave privada decifra.'
    }
  },
  {
    id: 'cnc-05',
    number: 5,
    examId: 'concursos-publicos',
    discipline: 'Direito Constitucional',
    topic: 'Remédios Constitucionais - Habeas Data vs Mandado de Segurança',
    stem: 'Para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, a ação constitucional adequada prevista no artigo 5º, inciso LXXII, da CF/88 é o:',
    options: [
      { letter: 'A', text: 'Habeas Data' },
      { letter: 'B', text: 'Habeas Corpus' },
      { letter: 'C', text: 'Mandado de Segurança individual' },
      { letter: 'D', text: 'Ação Popular' },
      { letter: 'E', text: 'Mandado de Injunção' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Remédio constitucional personalíssimo para dados pessoais.',
      stepByStep: [
        'Habeas Corpus protege a liberdade de locomoção.',
        'Habeas Data protege o acesso, retificação ou anotação de dados pessoais do impetrante.',
        'Mandado de Injunção combate a falta de norma regulamentadora que inviabiliza direito.',
        'Ação Popular protege patrimônio público e moralidade administrativa.'
      ],
      keyTakeaway: 'O Habeas Data exige prova da recusa prévia da administração (Súmula 2 do STJ).'
    }
  },
  {
    id: 'cnc-06',
    number: 6,
    examId: 'concursos-publicos',
    discipline: 'Língua Portuguesa',
    topic: 'Sintaxe - Concordância Verbal com a Partícula "Se"',
    stem: 'Segundo a norma culta, a concordância verbal está inteiramente CORRETA na frase:',
    options: [
      { letter: 'A', text: 'Constataram-se irregularidades graves na prestação de contas do contrato.' },
      { letter: 'B', text: 'Constatou-se irregularidades graves na prestação de contas do contrato.' },
      { letter: 'C', text: 'Precisa-se de novos servidores públicos para a delegacia regional.' },
      { letter: 'D', text: 'Tratam-se de questões prioritárias para a segurança pública.' },
      { letter: 'E', text: 'Aluga-se salas comerciais no edifício central.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 580,
    explanation: {
      summary: 'Voz passiva sintética vs Índice de indeterminação do sujeito.',
      stepByStep: [
        'Na frase A: "Constataram-se irregularidades" = "Irregularidades foram constatadas". O verbo constatar é transitivo direto, a partícula "se" é pronome apassivador e o sujeito paciente ("irregularidades graves") está no plural, exigindo verbo no plural.',
        'Frase B: erra ao deixar no singular.',
        'Frase D: o verbo tratar é transitivo indireto (rege "de"), o "se" é índice de indeterminação do sujeito e o verbo DEVE ficar no singular ("Trata-se de...").',
        'Frase E: deveria ser "Alugam-se salas".'
      ],
      keyTakeaway: 'Com VTD + SE (apassivadora), o verbo concorda com o sujeito. Com VTI + SE (indeterminação), o verbo fica sempre na 3ª pessoa do singular.'
    }
  },
  {
    id: 'cnc-07',
    number: 7,
    examId: 'concursos-publicos',
    discipline: 'Raciocínio Lógico Proposicional',
    topic: 'Equivalência Lógica da Condicional (Se P, então Q)',
    stem: 'Dada a proposição condicional "Se o candidato estuda com disciplina, então ele é aprovado no concurso público", uma proposição logicamente EQUIVALENTE a ela é:',
    options: [
      { letter: 'A', text: 'Se o candidato não foi aprovado no concurso público, então ele não estudou com disciplina.' },
      { letter: 'B', text: 'Se o candidato foi aprovado no concurso público, então ele estudou com disciplina.' },
      { letter: 'C', text: 'O candidato estuda com disciplina e não é aprovado no concurso público.' },
      { letter: 'D', text: 'Se o candidato não estuda com disciplina, então ele não é aprovado no concurso público.' },
      { letter: 'E', text: 'Ou o candidato estuda com disciplina ou ele é aprovado no concurso público.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 480,
    explanation: {
      summary: 'Equivalência lógica contrapositiva: (P → Q) ≡ (~Q → ~P).',
      stepByStep: [
        'A contrapositiva inverte e nega ambas as proposições sem alterar o valor-verdade da condicional.',
        'P: "estuda com disciplina", Q: "é aprovado".',
        'Contrapositiva: ~Q → ~P: "Se NÃO foi aprovado, então NÃO estudou com disciplina".'
      ],
      keyTakeaway: 'A contrapositiva (inverte e nega tudo) é a equivalência mais cobrada em bancas Cebraspe, FCC e Vunesp.'
    }
  },
  {
    id: 'cnc-08',
    number: 8,
    examId: 'concursos-publicos',
    discipline: 'Direito Administrativo',
    topic: 'Nova Lei de Licitações (Lei nº 14.133/2021)',
    stem: 'A Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos) extinguiu as modalidades Convite e Tomada de Preços e introduziu uma nova modalidade de licitação voltada para a contratação de obras, serviços e compras em que a Administração realiza diálogos com licitantes previamente qualificados para desenvolver soluções inovadoras. Essa nova modalidade é o:',
    options: [
      { letter: 'A', text: 'Diálogo Competitivo' },
      { letter: 'B', text: 'Pregão Eletrônico Especial' },
      { letter: 'C', text: 'Concurso Tecnológico' },
      { letter: 'D', text: 'Leilão Reverso' },
      { letter: 'E', text: 'Credenciamento Exclusivo' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 620,
    explanation: {
      summary: 'Modalidade Diálogo Competitivo introduzida no Art. 28 da Lei 14.133/2021.',
      stepByStep: [
        'O Diálogo Competitivo é inspirado no modelo europeu para situações de inovação tecnológica e complexidade contratual.',
        'A Administração busca desenhar a melhor solução técnica em diálogo com o mercado antes de abrir a disputa de preços.'
      ],
      keyTakeaway: 'Modalidades vigentes na Lei 14.133/2021: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.'
    }
  },
  {
    id: 'cnc-09',
    number: 9,
    examId: 'concursos-publicos',
    discipline: 'Direito Constitucional',
    topic: 'Organização dos Poderes - Poder Executivo e Crimes de Responsabilidade',
    stem: 'Compete privativamente ao Senado Federal processar e julgar o Presidente e o Vice-Presidente da República nos crimes de responsabilidade, sob a presidência do:',
    options: [
      { letter: 'A', text: 'Presidente do Supremo Tribunal Federal' },
      { letter: 'B', text: 'Presidente da Câmara dos Deputados' },
      { letter: 'C', text: 'Presidente do próprio Senado Federal' },
      { letter: 'D', text: 'Procurador-Geral da República' },
      { letter: 'E', text: 'Ministro da Justiça' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 500,
    explanation: {
      summary: 'Art. 52, parágrafo único, da CF/88.',
      stepByStep: [
        'O julgamento de impeachment ocorre no plenário do Senado Federal.',
        'Contudo, a sessão é presidida pelo Presidente do STF para assegurar a garantia do devido processo legal e imparcialidade formal.',
        'A condenação exige o voto favorável de dois terços dos membros do Senado.'
      ],
      keyTakeaway: 'Senado julga; Presidente do STF preside a sessão solene do julgamento de crime de responsabilidade do Chefe do Executivo.'
    }
  },
  {
    id: 'cnc-10',
    number: 10,
    examId: 'concursos-publicos',
    discipline: 'Informática e Redes de Computadores',
    topic: 'Protocolos de Redes - Modelo TCP/IP',
    stem: 'Na camada de aplicação da arquitetura TCP/IP, o protocolo responsável por atribuir dinamicamente e automaticamente endereços IP, máscara de sub-rede e gateway padrão aos dispositivos conectados à rede local é o:',
    options: [
      { letter: 'A', text: 'DHCP (Dynamic Host Configuration Protocol)' },
      { letter: 'B', text: 'DNS (Domain Name System)' },
      { letter: 'C', text: 'FTP (File Transfer Protocol)' },
      { letter: 'D', text: 'SMTP (Simple Mail Transfer Protocol)' },
      { letter: 'E', text: 'SNMP (Simple Network Management Protocol)' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Função do protocolo DHCP em redes locais.',
      stepByStep: [
        'DHCP aluga e configura IPs automaticamente sem necessidade de ajuste estático manual.',
        'DNS traduz nomes de domínio legíveis em IPs numéricos.',
        'SMTP envia e-mails; FTP transfere arquivos.'
      ],
      keyTakeaway: 'DHCP automatiza a configuração de rede em roteadores e computadores corporativos.'
    }
  },
  {
    id: 'cnc-11',
    number: 11,
    examId: 'concursos-publicos',
    discipline: 'Direito Penal',
    topic: 'Crimes Praticados por Funcionário Público contra a Administração',
    stem: 'O funcionário público que se apropria de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou o desvia em proveito próprio ou alheio, comete o crime de:',
    options: [
      { letter: 'A', text: 'Peculato (Art. 312 do Código Penal)' },
      { letter: 'B', text: 'Corrupção passiva' },
      { letter: 'C', text: 'Concussão' },
      { letter: 'D', text: 'Prevaricação' },
      { letter: 'E', text: 'Advocacia administrativa' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Definição típica de Peculato-apropriação e Peculato-desvio.',
      stepByStep: [
        'Apropriar-se de bem móvel que está sob sua posse em razão da função = Peculato.',
        'Concussão = EXIGIR vantagem indevida.',
        'Corrupção passiva = SOLICITAR ou RECEBER vantagem indevida.',
        'Prevaricação = retardar ou deixar de praticar ato de ofício por interesse pessoal.'
      ],
      keyTakeaway: 'Distinção dos verbos: Peculato (apropriar/desviar); Concussão (exigir); Corrupção passiva (solicitar/receber); Prevaricação (sentimento pessoal).'
    }
  },
  {
    id: 'cnc-12',
    number: 12,
    examId: 'concursos-publicos',
    discipline: 'Raciocínio Lógico e Diagramas de Venn',
    topic: 'Silogismos e Quantificadores Lógicos (Todo, Algum, Nenhum)',
    stem: 'Considere como verdadeiras as premissas: "Todo policial federal é dedicado" e "Alguns atletas são policiais federais". Com base estritamente nessas premissas, é NECESSARIAMENTE verdadeiro que:',
    options: [
      { letter: 'A', text: 'Alguns atletas são dedicados.' },
      { letter: 'B', text: 'Todo atleta é dedicado.' },
      { letter: 'C', text: 'Nenhum atleta é dedicado.' },
      { letter: 'D', text: 'Todo policial federal é atleta.' },
      { letter: 'E', text: 'Nenhum policial federal é atleta.' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 470,
    explanation: {
      summary: 'Intersecção de conjuntos lógicos em diagramas de Venn.',
      stepByStep: [
        'Premissa 1: O conjunto dos Policiais Federais (PF) está inteiramente contido no conjunto dos Dedicados (D).',
        'Premissa 2: Existe uma intersecção não vazia entre o conjunto dos Atletas (A) e o conjunto dos PF.',
        'Conclusão: Os atletas que também são PF necessariamente estão dentro do conjunto dos Dedicados.',
        'Logo, "Alguns atletas são dedicados".'
      ],
      keyTakeaway: 'Se parte de A está em B, e todo B está em C, essa parte de A estará obrigatoriamente dentro de C.'
    }
  },
  {
    id: 'cnc-13',
    number: 13,
    examId: 'concursos-publicos',
    discipline: 'Direito Administrativo',
    topic: 'Poderes Administrativos - Poder de Polícia',
    stem: 'A atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou a abstenção de fato em razão de interesse público concernente à segurança, à higiene, à ordem e aos costumes decorre do:',
    options: [
      { letter: 'A', text: 'Poder de polícia' },
      { letter: 'B', text: 'Poder regulamentar' },
      { letter: 'C', text: 'Poder disciplinar' },
      { letter: 'D', text: 'Poder hierárquico' },
      { letter: 'E', text: 'Poder constituinte derivado' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 440,
    explanation: {
      summary: 'Conceito legal de poder de polícia (Art. 78 do Código Tributário Nacional).',
      stepByStep: [
        'O poder de polícia condiciona e restringe o uso de bens e liberdades individuais pelo particular em benefício do bem-estar da coletividade.',
        'Exemplos: fiscalização da vigilância sanitária, trânsito, alvarás de funcionamento e meio ambiente.'
      ],
      keyTakeaway: 'Poder de polícia atinge particulares sem vínculo especial com o Estado; Poder disciplinar atinge quem possui vínculo funcional (servidores e contratados).'
    }
  },
  {
    id: 'cnc-14',
    number: 14,
    examId: 'concursos-publicos',
    discipline: 'Língua Portuguesa',
    topic: 'Ortografia e Novo Acordo Ortográfico - Acentuação',
    stem: 'Após a vigência do Acordo Ortográfico da Língua Portuguesa, os ditongos abertos "ei" e "oi" nas palavras PAROXÍTONAS perderam o acento gráfico. Assinale a opção que apresenta apenas palavras corretamente grafadas segundo essa regra:',
    options: [
      { letter: 'A', text: 'Ideia, assembleia, jiboia, heroico' },
      { letter: 'B', text: 'Idéia, assembléia, jibóia, heróico' },
      { letter: 'C', text: 'Ideia, assembléia, jibóia, heroico' },
      { letter: 'D', text: 'Herói, chapéu, constrói, troféu (estas perderam o acento)' },
      { letter: 'E', text: 'Coronéis, anéis, jibóia, pasteis' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Queda do acento em ditongos abertos de palavras paroxítonas.',
      stepByStep: [
        'Ditongos abertos "éi" e "ói" em paroxítonas deixaram de ser acentuados: i-dei-a, as-sem-blei-a, ji-boi-a, he-roi-co.',
        'Em oxítonas e monossílabos tônicos, o acento PERMANECE: he-rói, cons-trói, pas-téis, tro-féu.'
      ],
      keyTakeaway: 'Paroxítona não acentua ditongo aberto (ideia); oxítona continua acentuando (herói).'
    }
  },
  {
    id: 'cnc-15',
    number: 15,
    examId: 'concursos-publicos',
    discipline: 'Direito Constitucional',
    topic: 'Segurança Pública - Órgãos Policiais (Artigo 144 da CF/88)',
    stem: 'De acordo com o artigo 144 da Constituição Federal de 1988, a polícia judiciária da União destinada a apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas é a:',
    options: [
      { letter: 'A', text: 'Polícia Federal' },
      { letter: 'B', text: 'Polícia Rodoviária Federal' },
      { letter: 'C', text: 'Polícia Militar dos Estados' },
      { letter: 'D', text: 'Guarda Municipal metropolitana' },
      { letter: 'E', text: 'Força Nacional de Segurança Pública' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 430,
    explanation: {
      summary: 'Atribuições exclusivas da Polícia Federal no Art. 144, § 1º da CF/88.',
      stepByStep: [
        'A PF exerce com exclusividade a função de polícia judiciária da União.',
        'A PRF exerce patrulhamento ostensivo das rodovias federais.',
        'A PM exerce polícia ostensiva e preservação da ordem pública nos estados.'
      ],
      keyTakeaway: 'A Polícia Federal é instituição permanente, organizada e mantida pela União e estruturada em carreira.'
    }
  },
  {
    id: 'cnc-16',
    number: 16,
    examId: 'concursos-publicos',
    discipline: 'Direito Penal',
    topic: 'Teoria do Crime - Causas Excludentes da Ilicitude',
    stem: 'O artigo 23 do Código Penal prevê que não há crime quando o agente pratica o fato em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou no exercício regular de direito. O ato do policial que, em cumprimento estrito de sua obrigação funcional, cumpre mandado de prisão regularmente expedido e cerceia a liberdade de um suspeito atua amparado por:',
    options: [
      { letter: 'A', text: 'Estrito cumprimento de dever legal' },
      { letter: 'B', text: 'Legítima defesa própria' },
      { letter: 'C', text: 'Estado de necessidade exculpante' },
      { letter: 'D', text: 'Inimputabilidade penal temporária' },
      { letter: 'E', text: 'Coação moral irresistível' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 460,
    explanation: {
      summary: 'Excludente de ilicitude do estrito cumprimento de dever legal.',
      stepByStep: [
        'O ordenamento jurídico não pode punir como crime uma conduta que a própria lei impõe como obrigação a um servidor.',
        'O policial no cumprimento do mandado age sob o estrito cumprimento de dever legal.',
        'Exclui a ilicitude da conduta típica.'
      ],
      keyTakeaway: 'Excludentes de ilicitude: Estado de necessidade, Legítima defesa, Estrito cumprimento de dever legal, Exercício regular de direito.'
    }
  },
  {
    id: 'cnc-17',
    number: 17,
    examId: 'concursos-publicos',
    discipline: 'Informática',
    topic: 'Malwares e Ameaças Virtuais - Ransomware',
    stem: 'O tipo de código malicioso (malware) que bloqueia ou criptografa os arquivos do sistema da vítima, exigindo pagamento de resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia, é conhecido como:',
    options: [
      { letter: 'A', text: 'Ransomware' },
      { letter: 'B', text: 'Keylogger' },
      { letter: 'C', text: 'Adware' },
      { letter: 'D', text: 'Spyware passivo' },
      { letter: 'E', text: 'Rootkit de boot' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 420,
    explanation: {
      summary: 'Conceito de Ransomware (sequestro digital de dados).',
      stepByStep: [
        'Ransom = resgate em inglês.',
        'O ataque impede o acesso aos dados corporativos por meio de criptografia de alto nível e exige pagamento financeiro.'
      ],
      keyTakeaway: 'A melhor proteção contra ransomware é uma política rígida de backups isolados (offline).'
    }
  },
  {
    id: 'cnc-18',
    number: 18,
    examId: 'concursos-publicos',
    discipline: 'Direito Administrativo',
    topic: 'Responsabilidade Civil do Estado (Artigo 37, § 6º da CF/88)',
    stem: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa. Essa responsabilidade civil estatal decorre da teoria da:',
    options: [
      { letter: 'A', text: 'Responsabilidade objetiva sob a modalidade do risco administrativo' },
      { letter: 'B', text: 'Responsabilidade subjetiva pura com presunção de dolo' },
      { letter: 'C', text: 'Irresponsabilidade absoluta da Coroa' },
      { letter: 'D', text: 'Culpa concorrente universal incondicionada' },
      { letter: 'E', text: 'Responsabilidade penal subsidiária' }
    ],
    correctOption: 'A',
    triDifficulty: 'Médio',
    triScoreWeight: 570,
    explanation: {
      summary: 'Responsabilidade objetiva do Estado na CF/88.',
      stepByStep: [
        'Para a vítima receber indenização do Estado, ela só precisa comprovar: a conduta administrativa, o dano suportado e o nexo causal entre eles (sem precisar provar dolo ou culpa do servidor).',
        'Isso caracteriza a responsabilidade objetiva (teoria do risco administrativo).',
        'O direito de regresso do Estado contra o servidor, por sua vez, é subjetivo (exige comprovação de dolo ou culpa).'
      ],
      keyTakeaway: 'Estado perante a vítima = Responsabilidade Objetiva. Estado contra o servidor (regresso) = Responsabilidade Subjetiva.'
    }
  },
  {
    id: 'cnc-19',
    number: 19,
    examId: 'concursos-publicos',
    discipline: 'Língua Portuguesa',
    topic: 'Semântica - Parônimos e Homônimos',
    stem: 'Assinale a alternativa em que os termos parônimos em destaque foram empregados corretamente em seus respectivos contextos semânticos:',
    options: [
      { letter: 'A', text: 'O perito agiu com DISSCRIÇÃO para não violar o sigilo da investigação e notou a DISCRIMINAÇÃO sofrida pela vítima.' },
      { letter: 'B', text: 'O auditor teve a DESCRIÇÃO de arquivar a denúncia anônima.' },
      { letter: 'C', text: 'O mandato judicial do policial tem prazo de quatro anos ininterruptos.' },
      { letter: 'D', text: 'O réu foi delatado por ter infligido as regras de trânsito da cidade.' },
      { letter: 'E', text: 'Houve uma sessão solene de cessão de direitos territoriais.' }
    ],
    correctOption: 'E',
    triDifficulty: 'Médio',
    triScoreWeight: 550,
    explanation: {
      summary: 'Diferenciação semântica de parônimos e homófonos.',
      stepByStep: [
        'Na opção E: "Sessão" (com SS) = reunião ou tempo de um espetáculo; "Cessão" (com C) = ato de ceder direitos. Ambas estão corretas.',
        'Na opção C: o juiz expede "mandado" (ordem judicial), e não mandato (procuração ou cargo político).',
        'Na opção D: infringir = desobedecer leis; infligir = aplicar castigo ou pena.'
      ],
      keyTakeaway: 'Sessão (reunião); Seção/Secção (divisão/departamento); Cessão (doar/ceder).'
    }
  },
  {
    id: 'cnc-20',
    number: 20,
    examId: 'concursos-publicos',
    discipline: 'Raciocínio Lógico Matemático',
    topic: 'Princípio da Regressão Temporal e Idades',
    stem: 'Hoje, a idade de um pai é o triplo da idade de seu filho. Daqui a 10 anos, a idade do pai será o dobro da idade do filho. As idades atuais do pai e do filho são, respectivamente:',
    options: [
      { letter: 'A', text: '30 anos e 10 anos' },
      { letter: 'B', text: '36 anos e 12 anos' },
      { letter: 'C', text: '45 anos e 15 anos' },
      { letter: 'D', text: '27 anos e 9 anos' },
      { letter: 'E', text: '33 anos e 11 anos' }
    ],
    correctOption: 'A',
    triDifficulty: 'Fácil',
    triScoreWeight: 450,
    explanation: {
      summary: 'Sistema linear de idades.',
      stepByStep: [
        'Seja P a idade atual do pai e F a idade atual do filho.',
        'Equação 1: P = 3F.',
        'Equação 2 (daqui a 10 anos): (P + 10) = 2 · (F + 10).',
        'Substituindo P = 3F na segunda equação: 3F + 10 = 2F + 20.',
        '3F - 2F = 20 - 10 ⇒ F = 10 anos (idade do filho).',
        'P = 3 · 10 = 30 anos (idade do pai).',
        'Verificação: Daqui a 10 anos, pai terá 40 e filho terá 20 (40 é o dobro de 20).'
      ],
      keyTakeaway: 'Em problemas de idades futuras, lembre-se de somar o tempo transcorrido a todos os indivíduos simultaneamente.'
    }
  }
];
