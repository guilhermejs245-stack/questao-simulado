export type OptionLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuestionOption {
  letter: OptionLetter;
  text: string;
}

export interface QuestionExplanation {
  summary: string;
  stepByStep: string[];
  distractorAnalysis?: Record<string, string>;
  keyTakeaway: string;
}

export interface Question {
  id: string;
  number: number;
  examId: string;
  discipline: string;
  topic: string;
  stem: string;
  contextDocument?: string;
  options: QuestionOption[];
  correctOption: OptionLetter;
  triDifficulty: 'Fácil' | 'Médio' | 'Difícil';
  triScoreWeight: number; // estimated TRI anchor 400-850
  explanation: QuestionExplanation;
}

export type ExamCategory = 'vestibulares' | 'estaduais' | 'olimpiadas' | 'concursos';

export interface Exam {
  id: string;
  title: string;
  subtitle: string;
  category: ExamCategory;
  categoryLabel: string;
  badge: string;
  description: string;
  targetAudience: string;
  questionCount: number;
  durationMinutes: number;
  tags: string[];
  isFeatured?: boolean;
  questions: Question[];
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  date: string;
  answers: Record<string, OptionLetter>;
  flagged: Record<string, boolean>;
  timeSpentSeconds: number;
  totalQuestions: number;
  correctCount: number;
  scorePercent: number;
  triEstimated: number;
  subjectPerformance: Record<string, { correct: number; total: number; percent: number }>;
  completedAt: string;
}

export interface UserStats {
  generalAccuracy: number;
  streakDays: number;
  weeklyGoalPercent: number;
  triIndex: number;
  level: number;
  xp: number;
  recentHistory: ExamAttempt[];
  wrongQuestionsBank: Question[];
}
