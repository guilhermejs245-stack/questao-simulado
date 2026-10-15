'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrackCards } from '@/components/TrackCards';
import { AnalyticsAndAIPanel } from '@/components/AnalyticsAndAIPanel';
import { ExamEngine } from '@/components/ExamEngine';
import { ResultScreen } from '@/components/ResultScreen';
import { ExamCatalogModal } from '@/components/ExamCatalogModal';
import { SearchCommandModal } from '@/components/SearchCommandModal';
import { DesempenhoModal } from '@/components/DesempenhoModal';
import { ProvasAnterioresModal } from '@/components/ProvasAnterioresModal';
import { AboutModal } from '@/components/AboutModal';
import { Footer } from '@/components/Footer';
import { allExams, getExamById } from '@/data/exams';
import { Exam, ExamCategory, OptionLetter } from '@/types/simulator';

export default function HomePage() {
  // Navigation & View State
  const [activeView, setActiveView] = useState<'dashboard' | 'exam' | 'result'>('dashboard');
  const [activeTab, setActiveTab] = useState<string>('simulados');

  // Active Simulation State
  const [currentExam, setCurrentExam] = useState<Exam>(allExams[0]); // Default ENEM
  const [examAnswers, setExamAnswers] = useState<Record<string, OptionLetter>>({});
  const [examFlagged, setExamFlagged] = useState<Record<string, boolean>>({});
  const [examTimeSpent, setExamTimeSpent] = useState<number>(0);
  const [initialQuestionIndex, setInitialQuestionIndex] = useState<number>(0);

  // Modals State
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDesempenhoOpen, setIsDesempenhoOpen] = useState(false);
  const [isProvasAnterioresOpen, setIsProvasAnterioresOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ExamCategory | null>(null);

  // Launch an exam directly
  const handleStartExam = (exam: Exam, startAtIndex = 0) => {
    setCurrentExam(exam);
    setExamAnswers({});
    setExamFlagged({});
    setExamTimeSpent(0);
    setInitialQuestionIndex(startAtIndex);
    setActiveView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume the pending exam referenced in the hero banner
  const handleResumePending = () => {
    const enemExam = getExamById('enem-2024') || allExams[0];
    // Preset some answered questions to simulate continuation
    const simulatedAnswers: Record<string, OptionLetter> = {
      'enem-01': 'B',
      'enem-02': 'B',
      'enem-03': 'A',
      'enem-04': 'A',
      'enem-05': 'D',
    };
    setCurrentExam(enemExam);
    setExamAnswers(simulatedAnswers);
    setInitialQuestionIndex(5);
    setActiveView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch targeted micro-simulado from AI recommendation
  const handleStartMicroAjuste = () => {
    const microExam = getExamById('micro-ajuste-tri') || allExams[allExams.length - 1];
    handleStartExam(microExam);
  };

  // Launch Caderno de Erros practice session
  const handleStartCadernoErros = () => {
    // Collect interesting wrong questions across subjects
    const microExam = getExamById('micro-ajuste-tri') || allExams[0];
    handleStartExam(microExam);
  };

  // Finish exam and go to results
  const handleFinishExam = (
    answers: Record<string, OptionLetter>,
    flagged: Record<string, boolean>,
    timeSpentSeconds: number
  ) => {
    setExamAnswers(answers);
    setExamFlagged(flagged);
    setExamTimeSpent(timeSpentSeconds);
    setActiveView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Review a past completed exam (loads preset good answers to view the full commented gabarito)
  const handleReviewExam = (examId: string) => {
    const exam = getExamById(examId) || allExams[0];
    const simulatedAnswers: Record<string, OptionLetter> = {};
    exam.questions.forEach((q, idx) => {
      // simulate 80% correct
      if (idx % 5 === 0) {
        simulatedAnswers[q.id] = q.correctOption === 'A' ? 'B' : 'A'; // purposeful mistake
      } else {
        simulatedAnswers[q.id] = q.correctOption;
      }
    });

    setCurrentExam(exam);
    setExamAnswers(simulatedAnswers);
    setExamTimeSpent(2400); // 40 minutes
    setActiveView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry currently finished exam
  const handleRetryExam = () => {
    handleStartExam(currentExam);
  };

  // Practice only wrong questions
  const handleRetryWrongOnly = () => {
    // Filter questions that were answered incorrectly
    const wrongQuestions = currentExam.questions.filter(
      (q) => examAnswers[q.id] !== q.correctOption
    );
    if (wrongQuestions.length > 0) {
      const customExam: Exam = {
        ...currentExam,
        id: `${currentExam.id}-revisao-erros`,
        title: `Caderno de Erros: ${currentExam.title}`,
        subtitle: 'Prática direcionada exclusivamente nas questões erradas',
        questions: wrongQuestions,
        questionCount: wrongQuestions.length,
        durationMinutes: Math.max(10, Math.round(wrongQuestions.length * 2.5)),
      };
      handleStartExam(customExam);
    } else {
      handleRetryExam();
    }
  };

  // Tab selector handler
  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'simulados') {
      setActiveView('dashboard');
    } else if (tab === 'desempenho') {
      setIsDesempenhoOpen(true);
    } else if (tab === 'provas-anteriores') {
      setIsProvasAnterioresOpen(true);
    } else if (tab === 'sobre') {
      setIsAboutOpen(true);
    }
  };

  // Select study track category from the 4 cards
  const handleSelectTrackCategory = (category: ExamCategory) => {
    setSelectedCategoryFilter(category);
    setIsCatalogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      {/* Global Header */}
      <Header
        currentTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenExamPicker={() => {
          setSelectedCategoryFilter(null);
          setIsCatalogOpen(true);
        }}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Conditional Views */}
      {activeView === 'exam' ? (
        <ExamEngine
          exam={currentExam}
          initialQuestionIndex={initialQuestionIndex}
          onFinishExam={handleFinishExam}
          onExitExam={() => setActiveView('dashboard')}
        />
      ) : activeView === 'result' ? (
        <main className="flex-1 pt-16">
          <ResultScreen
            exam={currentExam}
            answers={examAnswers}
            flagged={examFlagged}
            timeSpentSeconds={examTimeSpent}
            onRetryExam={handleRetryExam}
            onRetryWrongOnly={handleRetryWrongOnly}
            onChooseAnotherExam={() => {
              setActiveView('dashboard');
              setSelectedCategoryFilter(null);
              setIsCatalogOpen(true);
            }}
          />
        </main>
      ) : (
        /* Dashboard Home View matching Image 1.png */
        <main className="flex-1 pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
            {/* Hero Quick Start & Live TRI Gauge */}
            <HeroSection
              onStartExam={() => {
                setSelectedCategoryFilter(null);
                setIsCatalogOpen(true);
              }}
              onResumePending={handleResumePending}
              accuracy={78.4}
              streakDays={12}
              weeklyGoal={85}
              triIndex={78.4}
            />

            {/* 4 Pillars Study Track Cards */}
            <TrackCards onSelectCategory={handleSelectTrackCategory} />

            {/* Split Analytics & AI Recommendations */}
            <AnalyticsAndAIPanel
              onStartMicroAjuste={handleStartMicroAjuste}
              onStartCadernoErros={handleStartCadernoErros}
              onStartDesafioSemanal={() => {
                const enem = getExamById('enem-2024') || allExams[0];
                handleStartExam(enem);
              }}
              onReviewExam={handleReviewExam}
              onOpenReport={() => setIsDesempenhoOpen(true)}
            />
          </div>
        </main>
      )}

      {/* Global Footer (shown on dashboard & results) */}
      {activeView !== 'exam' && (
        <Footer
          onOpenAbout={() => setIsAboutOpen(true)}
          onOpenCatalog={() => {
            setSelectedCategoryFilter(null);
            setIsCatalogOpen(true);
          }}
        />
      )}

      {/* Modals & Dialogs */}
      <ExamCatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        initialCategory={selectedCategoryFilter}
        onSelectExam={(exam) => handleStartExam(exam)}
      />

      <SearchCommandModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectExam={(exam) => handleStartExam(exam)}
      />

      <DesempenhoModal
        isOpen={isDesempenhoOpen}
        onClose={() => setIsDesempenhoOpen(false)}
        onOpenExamPicker={() => {
          setSelectedCategoryFilter(null);
          setIsCatalogOpen(true);
        }}
      />

      <ProvasAnterioresModal
        isOpen={isProvasAnterioresOpen}
        onClose={() => setIsProvasAnterioresOpen(false)}
        onSelectExam={(exam) => handleStartExam(exam)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onStartExam={() => {
          setSelectedCategoryFilter(null);
          setIsCatalogOpen(true);
        }}
      />
    </div>
  );
}
