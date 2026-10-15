'use client';

import React from 'react';
import {
  ExternalLink,
  ChevronRight,
  FileText,
  Shield,
  BookOpen,
  Sparkles,
  Clock,
  RotateCcw,
  Trophy,
  PlayCircle,
  History,
  Flag,
} from 'lucide-react';

interface AnalyticsAndAIPanelProps {
  onStartMicroAjuste: () => void;
  onStartCadernoErros: () => void;
  onStartDesafioSemanal: () => void;
  onReviewExam: (examId: string) => void;
  onOpenReport: () => void;
}

export function AnalyticsAndAIPanel({
  onStartMicroAjuste,
  onStartCadernoErros,
  onStartDesafioSemanal,
  onReviewExam,
  onOpenReport,
}: AnalyticsAndAIPanelProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT COLUMN: DESEMPENHO RECENTE & ESTATÍSTICAS (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-5 p-6 md:p-8 rounded-xl bg-[#121316] border border-[#1e293b] shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-wider">
              Métricas em Tempo Real
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
              Desempenho Recente
            </h2>
          </div>
          <button
            onClick={onOpenReport}
            className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-[#38bdf8] font-medium transition-colors cursor-pointer"
          >
            <span>Ver Relatório Geral</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Subject Breakdown Bars (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {/* Item 1 */}
          <div className="p-4 rounded-lg bg-[#18191e] border border-[#27272a] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-white">Ciências da Natureza</span>
              <span className="font-mono text-xs text-[#38bdf8] font-bold">84%</span>
            </div>
            <div className="w-full bg-[#121316] rounded-full h-2 overflow-hidden">
              <div className="bg-[#38bdf8] h-2 rounded-full w-[84%]"></div>
            </div>
            <span className="text-[11px] text-[#64748b]">Consistência alta • 140 questões</span>
          </div>

          {/* Item 2 */}
          <div className="p-4 rounded-lg bg-[#18191e] border border-[#27272a] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-white">Linguagens e Códigos</span>
              <span className="font-mono text-xs text-[#38bdf8] font-bold">82%</span>
            </div>
            <div className="w-full bg-[#121316] rounded-full h-2 overflow-hidden">
              <div className="bg-[#38bdf8] h-2 rounded-full w-[82%]"></div>
            </div>
            <span className="text-[11px] text-[#64748b]">Velocidade média: 1m45s/q</span>
          </div>

          {/* Item 3 */}
          <div className="p-4 rounded-lg bg-[#18191e] border border-[#27272a] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-white">Direito Constitucional & Adm</span>
              <span className="font-mono text-xs text-[#60a5fa] font-bold">76%</span>
            </div>
            <div className="w-full bg-[#121316] rounded-full h-2 overflow-hidden">
              <div className="bg-[#2563eb] h-2 rounded-full w-[76%]"></div>
            </div>
            <span className="text-[11px] text-[#64748b]">Ponto focal: Licitações</span>
          </div>

          {/* Item 4 */}
          <div className="p-4 rounded-lg bg-[#18191e] border border-[#27272a] flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-white">Matemática e Tecnologias</span>
              <span className="font-mono text-xs text-[#f43f5e] font-bold">72%</span>
            </div>
            <div className="w-full bg-[#121316] rounded-full h-2 overflow-hidden">
              <div className="bg-[#f43f5e] h-2 rounded-full w-[72%]"></div>
            </div>
            <span className="text-[11px] text-[#f43f5e]/80">Gargalo detectado em Trigonometria</span>
          </div>
        </div>

        {/* History Table / Activity List */}
        <div className="flex flex-col gap-2.5 pt-2">
          <span className="text-xs font-bold text-[#e5e2e1] uppercase tracking-wider">
            Histórico de Simulados Concluídos
          </span>
          <div className="flex flex-col gap-2">
            {/* Simulado 1 */}
            <div
              onClick={() => onReviewExam('enem-2024')}
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/40 hover:bg-[#1e2028] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#38bdf8] transition-colors">
                    Simulado Nacional ENEM 2024 - Dia 1
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
                    <span>18/20 Acertos</span>
                    <span>•</span>
                    <span className="text-[#38bdf8] font-bold">742.5 TRI Estimada</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-2">
                <span className="text-[11px] text-[#64748b]">Há 2 dias</span>
                <span className="text-xs text-[#38bdf8] font-mono font-medium flex items-center">
                  Revisar <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>

            {/* Simulado 2 */}
            <div
              onClick={() => onReviewExam('concursos-publicos')}
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/40 hover:bg-[#1e2028] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#60a5fa] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#38bdf8] transition-colors">
                    Concurso Polícia Federal - Agente (Cebraspe)
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
                    <span className="text-[#38bdf8] font-bold">+78 pts Nota Líquida</span>
                    <span>•</span>
                    <span>20 Questões</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-2">
                <span className="text-[11px] text-[#64748b]">Há 4 dias</span>
                <span className="text-xs text-[#38bdf8] font-mono font-medium flex items-center">
                  Revisar <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>

            {/* Simulado 3 */}
            <div
              onClick={() => onReviewExam('fuvest-2024')}
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/40 hover:bg-[#1e2028] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#38bdf8] transition-colors">
                    FUVEST 2024 - 1ª Fase Geral
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
                    <span>17/20 Acertos</span>
                    <span>•</span>
                    <span className="text-[#38bdf8] font-bold">Corte Estimado Superado</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 pl-2">
                <span className="text-[11px] text-[#64748b]">Há 6 dias</span>
                <span className="text-xs text-[#38bdf8] font-mono font-medium flex items-center">
                  Revisar <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: RECOMENDAÇÕES DA I.A & FOCO DE ESTUDO (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {/* Diagnostic Alert Box */}
        <div className="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-[#121316] to-[#0f172a] border border-[#38bdf8]/40 shadow-md">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                  DIAGNÓSTICO PREDITIVO I.A
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse"></span>
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                A I.A detectou oportunidade de ganho rápido em:{' '}
                <strong className="text-[#38bdf8] font-semibold">
                  Termodinâmica e Funções Trigonométricas
                </strong>.
              </p>
              <span className="font-mono text-xs text-[#38bdf8] font-bold mt-1">
                +45 pontos potenciais projetados na sua TRI
              </span>
            </div>
          </div>
        </div>

        {/* Actionable Mini Cards */}
        <div className="flex flex-col gap-3">
          {/* Card 1: Micro-simulado */}
          <div className="p-5 rounded-xl bg-[#121316] border border-[#1e293b] hover:border-[#38bdf8]/50 hover:bg-[#18191e] transition-all flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#38bdf8] bg-[#18191e] border border-[#27272a] px-2.5 py-0.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                22 min estimados
              </span>
              <span className="font-mono text-[11px] text-[#64748b]">15 Questões</span>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-heading font-bold text-white">
                Micro-simulado de Ajuste
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                Questões selecionadas a dedo pelo algoritmo para sanar falhas recorrentes em Funções Trigonométricas.
              </p>
            </div>
            <button
              onClick={onStartMicroAjuste}
              className="mt-1 w-full py-2.5 px-4 rounded-lg bg-[#18191e] hover:bg-[#38bdf8] text-[#38bdf8] hover:text-[#0a0a0a] border border-[#27272a] hover:border-[#38bdf8] font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Iniciar Prática Dirigida</span>
            </button>
          </div>

          {/* Card 2: Caderno de Erros */}
          <div className="p-5 rounded-xl bg-[#121316] border border-[#1e293b] hover:border-[#f43f5e]/50 hover:bg-[#18191e] transition-all flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#f43f5e] bg-[#f43f5e]/15 border border-[#f43f5e]/30 px-2.5 py-0.5 rounded-full">
                <RotateCcw className="w-3.5 h-3.5" />
                Caderno de Erros
              </span>
              <span className="font-mono text-[11px] text-[#64748b]">8 Itens Pendentes</span>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-heading font-bold text-white">
                Revisão de Erros Frequentes
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                8 questões que você errou na última semana estão prontas para reteste espaçado.
              </p>
            </div>
            <button
              onClick={onStartCadernoErros}
              className="mt-1 w-full py-2.5 px-4 rounded-lg bg-[#18191e] hover:bg-[#27272a] border border-[#27272a] text-white font-medium text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <History className="w-4 h-4 text-[#f43f5e]" />
              <span>Refazer Questões Erradas</span>
            </button>
          </div>

          {/* Card 3: Desafio Semanal */}
          <div className="p-5 rounded-xl bg-[#121316] border border-[#1e293b] hover:border-[#38bdf8] hover:bg-[#18191e] transition-all flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#38bdf8] bg-[#1e40af]/30 border border-[#38bdf8]/30 px-2.5 py-0.5 rounded-full font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                Desafio Semanal
              </span>
              <span className="font-mono text-[11px] text-[#38bdf8] font-bold">Termina em 18h</span>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-heading font-bold text-white">
                Simulado Nacional Aberto
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                Classificatório ao vivo com ranking instantâneo nacional e premiação de bolsas para o Top 10.
              </p>
            </div>
            <button
              onClick={onStartDesafioSemanal}
              className="mt-1 w-full py-2.5 px-4 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              <Flag className="w-4 h-4 fill-current" />
              <span>Entrar na Sala do Desafio</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
