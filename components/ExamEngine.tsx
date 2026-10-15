'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Clock,
  Pause,
  Play,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  HelpCircle,
  Flag,
} from 'lucide-react';
import { Exam, OptionLetter } from '@/types/simulator';

interface ExamEngineProps {
  exam: Exam;
  onFinishExam: (answers: Record<string, OptionLetter>, flagged: Record<string, boolean>, timeSpentSeconds: number) => void;
  onExitExam: () => void;
  initialQuestionIndex?: number;
}

export function ExamEngine({
  exam,
  onFinishExam,
  onExitExam,
  initialQuestionIndex = 0,
}: ExamEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(initialQuestionIndex);
  const [answers, setAnswers] = useState<Record<string, OptionLetter>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isZenMode, setIsZenMode] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);

  const questions = exam.questions;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Format seconds into HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const hrs = Math.floor(mins / 60);
    const displayMins = mins % 60;

    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${displayMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${displayMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation & selection
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        setAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: key as OptionLetter,
        }));
      } else if (['1', '2', '3', '4', '5'].includes(key)) {
        const optionMap: Record<string, OptionLetter> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
        setAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: optionMap[key],
        }));
      } else if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (key === 'M') {
        setFlagged((prev) => ({
          ...prev,
          [currentQuestion.id]: !prev[currentQuestion.id],
        }));
      }
    },
    [currentQuestion, currentIndex, totalQuestions]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleSelectOption = (letter: OptionLetter) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  };

  const handleToggleFlag = () => {
    setFlagged((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col">
      {/* Top Bar / Exam Proctor Bar */}
      <div className="sticky top-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-[#1e293b] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Back & Title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onExitExam}
              className="p-1.5 rounded-lg bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              title="Voltar ao Catálogo"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
                {exam.badge} • SIMULADO ATIVO
              </span>
              <h2 className="text-xs sm:text-sm font-semibold text-white truncate max-w-xs sm:max-w-md lg:max-w-xl">
                {exam.title}
              </h2>
            </div>
          </div>

          {/* Right Controls: Timer, Zen Mode, Finalizar */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Timer Capsule */}
            <div className="flex items-center gap-2 bg-[#121316] border border-[#27272a] px-3 py-1.5 rounded-lg">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-[#38bdf8] hover:text-white transition-colors"
                title={isTimerRunning ? 'Pausar Cronômetro' : 'Continuar Cronômetro'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <div className="flex items-center gap-1.5 font-mono text-xs md:text-sm font-bold text-white tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{formatTime(secondsElapsed)}</span>
              </div>
            </div>

            {/* Zen Mode Button */}
            <button
              onClick={() => setIsZenMode(!isZenMode)}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isZenMode
                  ? 'bg-[#38bdf8] text-[#0a0a0a] border-[#38bdf8]'
                  : 'bg-[#18191e] text-[#94a3b8] border-[#27272a] hover:text-white'
              }`}
              title="Modo Foco Sem Distrações"
            >
              {isZenMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">Zen Focus</span>
            </button>

            {/* Finalizar Button */}
            <button
              onClick={() => setShowConfirmFinish(true)}
              className="px-4 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs md:text-sm shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all cursor-pointer"
            >
              Finalizar Simulado
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-[#18191e] h-1 mt-2.5 rounded-full overflow-hidden">
          <div
            className="bg-[#38bdf8] h-1 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Simulation Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left/Center Column: Question Stem and Answer Options (8 or 12 Cols depending on Zen Mode) */}
        <div className={`${isZenMode ? 'lg:col-span-12 max-w-4xl mx-auto' : 'lg:col-span-8'} flex flex-col gap-5`}>
          {/* Question Header Card */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#121316] border border-[#1e293b]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm md:text-base font-bold text-[#38bdf8] bg-[#1e40af]/20 px-3 py-1 rounded-lg border border-[#38bdf8]/30">
                QUESTÃO {currentQuestion.number} DE {totalQuestions}
              </span>
              <span className="text-xs text-[#94a3b8] font-medium hidden sm:inline">
                {currentQuestion.discipline} • {currentQuestion.topic}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleFlag}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  flagged[currentQuestion.id]
                    ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f59e0b]'
                    : 'bg-[#18191e] border-[#27272a] text-[#94a3b8] hover:text-white'
                }`}
                title="Atalho: tecla M"
              >
                <Bookmark className={`w-3.5 h-3.5 ${flagged[currentQuestion.id] ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">
                  {flagged[currentQuestion.id] ? 'Marcada para Revisão' : 'Marcar para Revisão'}
                </span>
              </button>
            </div>
          </div>

          {/* Question Text / Context Document */}
          <div className="p-6 md:p-8 rounded-xl bg-[#121316] border border-[#1e293b] shadow-sm flex flex-col gap-5">
            {currentQuestion.contextDocument && (
              <div className="p-4 rounded-lg bg-[#0e0e0e] border-l-4 border-[#38bdf8] text-xs md:text-sm text-[#cbd5e1] italic leading-relaxed">
                {currentQuestion.contextDocument}
              </div>
            )}

            <div className="text-sm md:text-base text-[#f8fafc] leading-relaxed font-normal">
              {currentQuestion.stem}
            </div>

            {/* Multiple Choice Options A, B, C, D, E */}
            <div className="flex flex-col gap-3 pt-2">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.letter;
                return (
                  <button
                    key={option.letter}
                    onClick={() => handleSelectOption(option.letter)}
                    className={`flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f172a] border-2 border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                        : 'bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/40 hover:bg-[#1e2028]'
                    }`}
                  >
                    {/* Option Letter Circle */}
                    <div
                      className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                        isSelected
                          ? 'bg-[#38bdf8] text-[#0a0a0a]'
                          : 'bg-[#121316] text-[#94a3b8] border border-[#334155]'
                      }`}
                    >
                      {option.letter}
                    </div>

                    {/* Option Text */}
                    <div className="flex-1 pt-1 text-xs md:text-sm text-[#e2e8f0] leading-relaxed">
                      {option.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#18191e] border border-[#27272a] text-white hover:border-[#38bdf8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs md:text-sm font-semibold cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="text-xs text-[#64748b] hidden sm:block">
              Use as teclas <kbd className="px-1 py-0.5 rounded bg-[#18191e] border border-[#27272a] text-[#94a3b8]">A-E</kbd> para responder e <kbd className="px-1 py-0.5 rounded bg-[#18191e] border border-[#27272a] text-[#94a3b8]">← →</kbd> para navegar
            </div>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#18191e] hover:bg-[#20222a] border border-[#27272a] hover:border-[#38bdf8] text-[#38bdf8] transition-colors text-xs md:text-sm font-semibold cursor-pointer"
              >
                <span>Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmFinish(true)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] transition-all text-xs md:text-sm font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Finalizar Simulado</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Rail: 20-Question Matrix Navigator & Status (4 Cols) */}
        {!isZenMode && (
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-xl bg-[#121316] border border-[#1e293b] shadow-md flex flex-col gap-4 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-[#1e293b]">
                <h3 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
                  Matriz de Questões ({totalQuestions})
                </h3>
                <span className="text-[11px] font-mono text-[#38bdf8] font-bold">
                  {answeredCount}/{totalQuestions} Respondidas
                </span>
              </div>

              {/* Status legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#94a3b8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#38bdf8] inline-block"></span>
                  <span>Atual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#1e40af]/60 border border-[#38bdf8]/60 inline-block"></span>
                  <span>Respondida</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#f59e0b]/30 border border-[#f59e0b] inline-block"></span>
                  <span>Marcada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#18191e] border border-[#27272a] inline-block"></span>
                  <span>Em Branco</span>
                </div>
              </div>

              {/* The Matrix Grid of 20+ Questions */}
              <div className="grid grid-cols-5 gap-2 pt-1">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = !!answers[q.id];
                  const isFlagged = !!flagged[q.id];

                  let btnClasses = 'bg-[#18191e] border border-[#27272a] text-[#64748b] hover:border-[#38bdf8]/50';

                  if (isCurrent) {
                    btnClasses = 'bg-[#38bdf8] text-[#0a0a0a] font-bold border-2 border-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.5)] ring-2 ring-[#38bdf8]/30';
                  } else if (isFlagged) {
                    btnClasses = 'bg-[#f59e0b]/20 border-2 border-[#f59e0b] text-[#f59e0b] font-bold';
                  } else if (isAnswered) {
                    btnClasses = 'bg-[#0f172a] border border-[#38bdf8]/60 text-white font-semibold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs transition-all relative cursor-pointer ${btnClasses}`}
                      title={`Questão ${q.number}: ${q.topic}`}
                    >
                      <span>{q.number}</span>
                      {isAnswered && !isCurrent && (
                        <span className="text-[9px] text-[#38bdf8] -mt-0.5 font-bold">
                          {answers[q.id]}
                        </span>
                      )}
                      {isFlagged && !isCurrent && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Summary Pill */}
              <div className="pt-2 border-t border-[#1e293b] flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                  <span>Respondidas:</span>
                  <span className="font-mono text-white font-semibold">{answeredCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                  <span>Em Branco:</span>
                  <span className="font-mono text-[#f43f5e] font-semibold">{unansweredCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                  <span>Para Revisão:</span>
                  <span className="font-mono text-[#f59e0b] font-semibold">{flaggedCount}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal to Finish Exam */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Deseja finalizar o simulado?
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  Seu gabarito será corrigido e a análise TRI será gerada.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col gap-2 text-xs">
              <div className="flex justify-between text-[#94a3b8]">
                <span>Total de Questões:</span>
                <span className="font-mono text-white font-bold">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-[#94a3b8]">
                <span>Questões Respondidas:</span>
                <span className="font-mono text-[#38bdf8] font-bold">{answeredCount}</span>
              </div>
              {unansweredCount > 0 && (
                <div className="flex justify-between text-[#f43f5e]">
                  <span>Questões Não Respondidas:</span>
                  <span className="font-mono font-bold">{unansweredCount} em branco</span>
                </div>
              )}
              {flaggedCount > 0 && (
                <div className="flex justify-between text-[#f59e0b]">
                  <span>Marcadas para Revisão:</span>
                  <span className="font-mono font-bold">{flaggedCount}</span>
                </div>
              )}
              <div className="flex justify-between text-[#94a3b8] pt-1 border-t border-[#27272a]">
                <span>Tempo de Prova:</span>
                <span className="font-mono text-white font-bold">{formatTime(secondsElapsed)}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="px-4 py-2 rounded-lg bg-[#18191e] hover:bg-[#27272a] text-[#94a3b8] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Continuar Respondendo
              </button>
              <button
                onClick={() => {
                  setShowConfirmFinish(false);
                  onFinishExam(answers, flagged, secondsElapsed);
                }}
                className="px-5 py-2 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] text-xs font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
              >
                Confirmar e Ver Gabarito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
