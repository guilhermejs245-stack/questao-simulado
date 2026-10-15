import { Exam } from '@/types/simulator';
import { enemQuestions } from './questions-enem';
import { fuvestQuestions } from './questions-fuvest';
import { sarespQuestions } from './questions-saresp';
import { obmepQuestions } from './questions-obmep';
import { concursosQuestions } from './questions-concursos';
import { etecQuestions } from './questions-etec';
import { provaoQuestions } from './questions-provao';
import { microAjusteQuestions } from './questions-microajuste';

export const allExams: Exam[] = [
  {
    id: 'enem-2024',
    title: 'Simulado Nacional ENEM 2024 - Multidisciplinar',
    subtitle: 'Calibração oficial TRI com itens de Linguagens, Ciências Humanas, Natureza e Matemática',
    category: 'vestibulares',
    categoryLabel: 'Vestibulares & Exames Nacionais',
    badge: 'ENEM 2024',
    description: 'Simulado completo com 20 questões contextualizadas de alta precisão métrica. Cobertura de competências da matriz de referência do ENEM com cálculo de coerência pedagógica.',
    targetAudience: 'Estudantes do Ensino Médio, vestibulandos e candidatos ao SISU, ProUni e FIES.',
    questionCount: enemQuestions.length,
    durationMinutes: 60,
    tags: ['ENEM', 'TRI Oficial', 'Linguagens', 'Humanas', 'Natureza', 'Matemática'],
    isFeatured: true,
    questions: enemQuestions
  },
  {
    id: 'fuvest-2024',
    title: 'FUVEST 2024 - 1ª Fase Geral (USP)',
    subtitle: 'Prova padrão USP com questões interdisciplinares e alto rigor analítico',
    category: 'vestibulares',
    categoryLabel: 'Vestibulares & Exames Nacionais',
    badge: 'FUVEST • USP',
    description: 'Simulado focado no modelo de 1ª fase da Fundação Universitária para o Vestibular (USP). Envolve raciocínio científico aprofundado, literatura obrigatória e ciências exatas.',
    targetAudience: 'Vestibulandos concorrendo às carreiras mais disputadas da USP.',
    questionCount: fuvestQuestions.length,
    durationMinutes: 75,
    tags: ['FUVEST', 'USP', 'Medicina', 'Engenharia', 'Direito', 'Literatura'],
    isFeatured: true,
    questions: fuvestQuestions
  },
  {
    id: 'provao-paulista',
    title: 'Provão Paulista 2024 - 3ª Série do Ensino Médio',
    subtitle: 'Exame seriado com vagas diretas na USP, UNICAMP, UNESP e Fatecs',
    category: 'vestibulares',
    categoryLabel: 'Vestibulares & Exames Nacionais',
    badge: 'PROVÃO PAULISTA',
    description: 'Avaliação alinhada ao Currículo Paulista do Ensino Médio para ingresso direto nas universidades públicas estaduais e faculdades de tecnologia de São Paulo.',
    targetAudience: 'Alunos das escolas públicas da rede estadual e municipal de São Paulo.',
    questionCount: provaoQuestions.length,
    durationMinutes: 60,
    tags: ['Provão Paulista', 'Currículo Paulista', 'Vagas Diretas', 'FATEC', 'UNESP'],
    questions: provaoQuestions
  },
  {
    id: 'saresp-sp',
    title: 'SARESP - Sistema de Avaliação de Rendimento Escolar (SP)',
    subtitle: 'Avaliação diagnóstica de Língua Portuguesa e Matemática para EF e EM',
    category: 'estaduais',
    categoryLabel: 'Avaliações Estaduais & Diagnósticas',
    badge: 'SARESP • SEDUC-SP',
    description: 'Simulado diagnóstico estruturado nas matrizes de habilidades do SARESP. Mede competências de leitura, interpretação de gráficos, geometria e resolução de problemas do cotidiano.',
    targetAudience: 'Estudantes do Ensino Fundamental (Anos Finais) e Ensino Médio.',
    questionCount: sarespQuestions.length,
    durationMinutes: 50,
    tags: ['SARESP', 'Diagnóstica', 'Fundamental', 'Médio', 'Português', 'Matemática'],
    questions: sarespQuestions
  },
  {
    id: 'obmep-olimpiada',
    title: 'OBMEP 2024 - Olimpíada Brasileira de Matemática',
    subtitle: 'Desafios de lógica pura, combinatória, geometria e teoria dos números',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas do Conhecimento',
    badge: 'OBMEP • IMPA',
    description: 'Treinamento olímpico oficial com 20 problemas desafiadores do estilo OBMEP e OBM. Desenvolve raciocínio lateral, estratégias de contagem e intuição matemática.',
    targetAudience: 'Alunos do 6º ano do Ensino Fundamental à 3ª série do Ensino Médio.',
    questionCount: obmepQuestions.length,
    durationMinutes: 60,
    tags: ['OBMEP', 'Olimpíada', 'Raciocínio Lógico', 'IMPA', 'Geometria'],
    questions: obmepQuestions
  },
  {
    id: 'concursos-publicos',
    title: 'Concurso Público - Polícia Federal & Tribunais (Agente / Técnico)',
    subtitle: 'Direito Constitucional, Administrativo, Penal, Informática e Português',
    category: 'concursos',
    categoryLabel: 'Outros Exames & Concursos',
    badge: 'PF • TRIBUNAIS • CEBRASPE',
    description: 'Simulado de elite com 20 questões no padrão Cebraspe, FGV e Vunesp. Abrange doutrina constitucional, Nova Lei de Licitações, segurança da informação e interpretação jurídica.',
    targetAudience: 'Candidatos a carreiras policiais, tribunais e órgãos da administração pública.',
    questionCount: concursosQuestions.length,
    durationMinutes: 60,
    tags: ['Concursos', 'Polícia Federal', 'Direito Constitucional', 'Cebraspe', 'FGV'],
    questions: concursosQuestions
  },
  {
    id: 'etec-vestibulinho',
    title: 'ETEC & Institutos Federais (IFSP / IFs) - Processo Seletivo',
    subtitle: 'Ciências da Natureza, Matemática aplicada, História e Português',
    category: 'concursos',
    categoryLabel: 'Outros Exames & Concursos',
    badge: 'ETEC • IFSP • CPS',
    description: 'Prova orientada para ingresso no Ensino Médio Integrado ao Técnico das ETECs do Centro Paula Souza e Institutos Federais. Ênfase em ciência prática, meio ambiente e lógica.',
    targetAudience: 'Estudantes concluintes do 9º ano que desejam ingressar no ensino técnico de excelência.',
    questionCount: etecQuestions.length,
    durationMinutes: 50,
    tags: ['ETEC', 'Centro Paula Souza', 'Instituto Federal', 'Técnico', 'Vestibulinho'],
    questions: etecQuestions
  },
  {
    id: 'micro-ajuste-tri',
    title: 'Micro-simulado de Ajuste: Termodinâmica & Trigonometria',
    subtitle: 'Foco preditivo de alta alavancagem para ganho imediato de +45 pontos na TRI',
    category: 'vestibulares',
    categoryLabel: 'Treinamento Dirigido por I.A',
    badge: 'DIAGNÓSTICO I.A',
    description: 'Micro-simulado intensivo com 15 itens selecionados especificamente pelo algoritmo para sanar falhas recorrentes em funções periódicas e leis da termodinâmica.',
    targetAudience: 'Estudantes que buscam otimização cirúrgica de pontos no ENEM e Vestibulares.',
    questionCount: microAjusteQuestions.length,
    durationMinutes: 22,
    tags: ['Micro-Simulado', 'Termodinâmica', 'Trigonometria', 'Alavancagem TRI'],
    questions: microAjusteQuestions
  }
];

export function getExamById(id: string): Exam | undefined {
  return allExams.find(e => e.id === id);
}

export function getExamsByCategory(category: string): Exam[] {
  return allExams.filter(e => e.category === category);
}
