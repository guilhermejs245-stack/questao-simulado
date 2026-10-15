'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Send,
  Loader2,
  ArrowRight,
  Bookmark,
  Share2,
  Download,
} from 'lucide-react';
import { Exam, OptionLetter } from '@/types/simulator';

interface ResultScreenProps {
  exam: Exam;
  answers: Record<string, OptionLetter>;
  flagged: Record<string, boolean>;
  timeSpentSeconds: number;
  onRetryExam: () => void;
  onRetryWrongOnly: () => void;
  onChooseAnotherExam: () => void;
}

export function ResultScreen({
  exam,
  answers,
  flagged,
  timeSpentSeconds,
  onRetryExam,
  onRetryWrongOnly,
  onChooseAnotherExam,
}: ResultScreenProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'correct' | 'wrong' | 'flagged'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // AI Tutor Interactive Chat State
  const [tutorChatId, setTutorChatId] = useState<string | null>(null);
  const [userQuery, setUserQuery] = useState('');
  const [tutorResponses, setTutorResponses] = useState<Record<string, { query: string; answer: string }[]>>({});
  const [isTutorLoading, setIsTutorLoading] = useState(false);

  const questions = exam.questions;
  const totalQuestions = questions.length;

  // Calculate score
  let correctCount = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctOption) {
      correctCount++;
    }
  });

  const wrongCount = totalQuestions - correctCount;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // Calculate TRI Estimation (Brazilian item response theory calibration)
  // Higher weight for consistent performance on easier and medium questions
  const triEstimated = Math.round(
    380 +
      questions.reduce((acc, q) => {
        const isCorrect = answers[q.id] === q.correctOption;
        return acc + (isCorrect ? (q.triScoreWeight - 350) / totalQuestions * 1.8 : 0);
      }, 0)
  );

  // Launch confetti on completion
  useEffect(() => {
    if (scorePercent >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#60a5fa', '#1e40af', '#ffffff'],
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  }, [scorePercent]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs.toString().padStart(2, '0')}s`;
  };

  const avgTimePerQuestion = Math.round(timeSpentSeconds / totalQuestions);

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    const isCorrect = answers[q.id] === q.correctOption;
    const isMarked = !!flagged[q.id];

    if (activeFilter === 'correct') return isCorrect;
    if (activeFilter === 'wrong') return !isCorrect;
    if (activeFilter === 'flagged') return isMarked;
    return true;
  });

  // Handle asking AI Tutor
  const handleAskTutor = async (questionId: string) => {
    if (!userQuery.trim() && !tutorChatId) return;

    const q = questions.find((item) => item.id === questionId);
    if (!q) return;

    setIsTutorLoading(true);
    const queryText = userQuery.trim() || 'Poderia me explicar o passo a passo com uma analogia didática?';
    setUserQuery('');

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionStem: q.stem,
          options: q.options,
          selectedOption: answers[q.id] || null,
          correctOption: q.correctOption,
          userQuery: queryText,
          explanation: q.explanation,
        }),
      });

      const data = await res.json();
      setTutorResponses((prev) => ({
        ...prev,
        [questionId]: [
          ...(prev[questionId] || []),
          { query: queryText, answer: data.answer },
        ],
      }));
    } catch (err) {
      console.error(err);
      setTutorResponses((prev) => ({
        ...prev,
        [questionId]: [
          ...(prev[questionId] || []),
          {
            query: queryText,
            answer: `A resposta correta é a letra (${q.correctOption}). Como orienta a pedagogia de exames, revise atentamente a resolução passo a passo do gabarito oficial!`,
          },
        ],
      }));
    } finally {
      setIsTutorLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">
        {/* Top Summary Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121316] border border-[#1e293b] p-6 md:p-8 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center md:text-left gap-2">
              <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                SIMULADO CONCLUÍDO COM SUCESSO
              </span>
              <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                Resultado: {exam.title}
              </h1>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Confira a correção detalhada, estimativa de nota TRI e comentários pedagógicos da I.A.
              </p>
            </div>

            {/* Final Score Circle Badge */}
            <div className="flex items-center gap-4 bg-[#0e0e0e] border border-[#27272a] p-4 rounded-2xl shrink-0">
              <div className="w-16 h-16 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex flex-col items-center justify-center text-[#38bdf8]">
                <span className="font-mono text-xl font-bold leading-none">{scorePercent}%</span>
                <span className="text-[10px] uppercase font-mono font-semibold mt-0.5">ACERTO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  {correctCount} de {totalQuestions} Acertos
                </span>
                <span className="font-mono text-xs text-[#38bdf8] font-bold">
                  {triEstimated} Pontos TRI Estimados
                </span>
                <span className="text-[11px] text-[#64748b]">
                  Tempo Total: {formatTime(timeSpentSeconds)}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-[#1e293b]">
            <div className="p-3 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col">
              <span className="text-[11px] text-[#94a3b8]">Acertos</span>
              <span className="font-mono text-lg font-bold text-[#10b981]">{correctCount}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col">
              <span className="text-[11px] text-[#94a3b8]">Erros</span>
              <span className="font-mono text-lg font-bold text-[#f43f5e]">{wrongCount}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col">
              <span className="text-[11px] text-[#94a3b8]">Tempo Médio / Questão</span>
              <span className="font-mono text-lg font-bold text-white">{avgTimePerQuestion}s</span>
            </div>

            <div className="p-3 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col">
              <span className="text-[11px] text-[#94a3b8]">Precisão Relativa</span>
              <span className="font-mono text-lg font-bold text-[#38bdf8]">{scorePercent}%</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-4">
            <button
              onClick={onRetryExam}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs md:text-sm transition-all shadow-[0_0_12px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Simulado Completo</span>
            </button>

            {wrongCount > 0 && (
              <button
                onClick={onRetryWrongOnly}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#18191e] hover:bg-[#20222a] border border-[#f43f5e]/40 hover:border-[#f43f5e] text-white font-medium text-xs md:text-sm transition-colors cursor-pointer"
              >
                <XCircle className="w-4 h-4 text-[#f43f5e]" />
                <span>Praticar Questões Erradas ({wrongCount})</span>
              </button>
            )}

            <button
              onClick={onChooseAnotherExam}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#18191e] hover:bg-[#20222a] border border-[#27272a] hover:border-[#38bdf8] text-[#94a3b8] hover:text-white font-medium text-xs md:text-sm transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#38bdf8]" />
              <span>Escolher Outra Prova</span>
            </button>
          </div>
        </div>

        {/* Gabarito Comentado Header & Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                GABARITO DETALHADO & FEEDBACK PEDAGÓGICO
              </span>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
                Resolução Questão por Questão
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#121316] border border-[#27272a] text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#38bdf8] text-[#0a0a0a] font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Todas ({totalQuestions})
              </button>
              <button
                onClick={() => setActiveFilter('correct')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeFilter === 'correct'
                    ? 'bg-[#10b981] text-[#0a0a0a] font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Acertos ({correctCount})
              </button>
              <button
                onClick={() => setActiveFilter('wrong')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeFilter === 'wrong'
                    ? 'bg-[#f43f5e] text-white font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Erros ({wrongCount})
              </button>
              <button
                onClick={() => setActiveFilter('flagged')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeFilter === 'flagged'
                    ? 'bg-[#f59e0b] text-[#0a0a0a] font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Marcadas
              </button>
            </div>
          </div>

          {/* List of Questions with Detailed AI Resolutions */}
          <div className="flex flex-col gap-4">
            {filteredQuestions.map((q) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctOption;
              const isExpanded = expandedQuestionId === q.id || filteredQuestions.length <= 3;
              const isChatOpen = tutorChatId === q.id;
              const history = tutorResponses[q.id] || [];

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-[#121316] border-[#10b981]/30 hover:border-[#10b981]/60'
                      : 'bg-[#121316] border-[#f43f5e]/30 hover:border-[#f43f5e]/60'
                  }`}
                >
                  {/* Question Summary Bar */}
                  <div
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isCorrect
                            ? 'bg-[#10b981]/20 text-[#10b981]'
                            : 'bg-[#f43f5e]/20 text-[#f43f5e]'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      </div>

                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs font-bold text-white">
                            QUESTÃO {q.number}
                          </span>
                          <span className="text-[11px] text-[#64748b]">
                            • {q.discipline} ({q.topic})
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18191e] border border-[#27272a] text-[#94a3b8]">
                            Dificuldade TRI: {q.triDifficulty}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs mt-1">
                          <span>
                            Sua resposta:{' '}
                            <strong className={isCorrect ? 'text-[#10b981]' : 'text-[#f43f5e]'}>
                              {userAnswer ? `Alternativa (${userAnswer})` : 'Em Branco'}
                            </strong>
                          </span>
                          {!isCorrect && (
                            <span>
                              Gabarito Oficial:{' '}
                              <strong className="text-[#10b981]">
                                Alternativa ({q.correctOption})
                              </strong>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button className="text-[#94a3b8] hover:text-white p-1">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail View */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-2 border-t border-[#1e293b]/70 flex flex-col gap-4">
                      {/* Context Document if any */}
                      {q.contextDocument && (
                        <div className="p-3.5 rounded-lg bg-[#0e0e0e] border-l-2 border-[#38bdf8] text-xs text-[#94a3b8] italic">
                          {q.contextDocument}
                        </div>
                      )}

                      {/* Stem Text */}
                      <p className="text-xs md:text-sm text-[#f1f5f9] leading-relaxed">
                        {q.stem}
                      </p>

                      {/* Options Grid */}
                      <div className="flex flex-col gap-2">
                        {q.options.map((opt) => {
                          const isOptionCorrect = opt.letter === q.correctOption;
                          const isOptionUser = opt.letter === userAnswer;

                          let badgeClasses = 'bg-[#18191e] border-[#27272a] text-[#94a3b8]';
                          let containerClasses = 'bg-[#18191e]/60 border-[#27272a]';

                          if (isOptionCorrect) {
                            badgeClasses = 'bg-[#10b981] text-[#0a0a0a] font-bold';
                            containerClasses = 'bg-[#064e3b]/30 border-[#10b981] text-[#e2e8f0]';
                          } else if (isOptionUser && !isOptionCorrect) {
                            badgeClasses = 'bg-[#f43f5e] text-white font-bold';
                            containerClasses = 'bg-[#4c0519]/30 border-[#f43f5e] text-[#e2e8f0]';
                          }

                          return (
                            <div
                              key={opt.letter}
                              className={`flex items-start gap-3 p-3 rounded-xl border text-xs md:text-sm ${containerClasses}`}
                            >
                              <div
                                className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-mono font-bold text-xs ${badgeClasses}`}
                              >
                                {opt.letter}
                              </div>
                              <span className="flex-1 pt-0.5 leading-snug">{opt.text}</span>
                              {isOptionCorrect && (
                                <span className="text-[11px] font-mono font-bold text-[#10b981] shrink-0 self-center">
                                  ✓ CORRETA
                                </span>
                              )}
                              {isOptionUser && !isOptionCorrect && (
                                <span className="text-[11px] font-mono font-bold text-[#f43f5e] shrink-0 self-center">
                                  ✗ SUA ESCOLHA
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* AI Pedagogical Resolution Box */}
                      <div className="p-4 rounded-xl bg-[#0f172a]/70 border border-[#38bdf8]/40 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38bdf8]">
                          <Sparkles className="w-4 h-4" />
                          <span>COMENTÁRIO PEDAGÓGICO DO ASSISTENTE DE I.A</span>
                        </div>

                        <p className="text-xs text-[#e2e8f0] leading-relaxed">
                          {q.explanation.summary}
                        </p>

                        {/* Step by step */}
                        <div className="flex flex-col gap-1.5 pl-3 border-l-2 border-[#38bdf8]/40">
                          <span className="text-[11px] font-mono text-[#94a3b8] uppercase font-semibold">
                            Passo a Passo da Resolução:
                          </span>
                          {q.explanation.stepByStep.map((step, sIdx) => (
                            <div key={sIdx} className="text-xs text-[#cbd5e1] leading-relaxed">
                              • {step}
                            </div>
                          ))}
                        </div>

                        {/* Key takeaway */}
                        <div className="p-2.5 rounded-lg bg-[#18191e] border border-[#27272a] text-xs text-[#94a3b8]">
                          <strong className="text-[#38bdf8]">Dica do Tutor:</strong> {q.explanation.keyTakeaway}
                        </div>

                        {/* Interactive Tutor Chat Button */}
                        <div className="pt-1 flex justify-end">
                          <button
                            onClick={() => setTutorChatId(isChatOpen ? null : q.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] hover:text-[#60a5fa] transition-colors cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>
                              {isChatOpen ? 'Fechar Dúvida com I.A' : 'Tirar Dúvida com Tutor I.A'}
                            </span>
                          </button>
                        </div>

                        {/* Interactive AI Chat Panel */}
                        {isChatOpen && (
                          <div className="mt-2 pt-3 border-t border-[#1e293b] flex flex-col gap-3">
                            {/* Chat history */}
                            {history.length > 0 && (
                              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
                                {history.map((h, hIdx) => (
                                  <div key={hIdx} className="flex flex-col gap-1.5 text-xs">
                                    <div className="self-end bg-[#1e40af]/30 border border-[#38bdf8]/30 text-white p-2.5 rounded-xl max-w-sm">
                                      {h.query}
                                    </div>
                                    <div className="self-start bg-[#18191e] border border-[#27272a] text-[#cbd5e1] p-3 rounded-xl max-w-lg leading-relaxed whitespace-pre-wrap">
                                      <strong className="text-[#38bdf8] block mb-1">Tutor I.A:</strong>
                                      {h.answer}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Input Form */}
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={userQuery}
                                onChange={(e) => setUserQuery(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') handleAskTutor(q.id);
                                }}
                                placeholder="Digite sua dúvida sobre esta questão para o Tutor I.A..."
                                className="flex-1 bg-[#18191e] border border-[#27272a] focus:border-[#38bdf8] rounded-lg px-3 py-2 text-xs text-white placeholder:text-[#64748b] outline-none"
                              />
                              <button
                                onClick={() => handleAskTutor(q.id)}
                                disabled={isTutorLoading}
                                className="px-3.5 py-2 rounded-lg bg-[#38bdf8] text-[#0a0a0a] font-bold text-xs flex items-center gap-1.5 hover:bg-[#60a5fa] disabled:opacity-50 transition-colors cursor-pointer"
                              >
                                {isTutorLoading ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Send className="w-3.5 h-3.5" />
                                )}
                                <span>Perguntar</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
