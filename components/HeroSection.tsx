'use client';

import React from 'react';
import { Bolt, Play, Flame, PieChart, Flag, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartExam: () => void;
  onResumePending: () => void;
  accuracy?: number;
  streakDays?: number;
  weeklyGoal?: number;
  triIndex?: number;
}

export function HeroSection({
  onStartExam,
  onResumePending,
  accuracy = 78.4,
  streakDays = 12,
  weeklyGoal = 85,
  triIndex = 78.4,
}: HeroSectionProps) {
  // SVG circular calculation: radius 42 -> circumference = 2 * PI * 42 ≈ 263.89
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (triIndex / 100) * circumference;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#121316] border border-[#1e293b] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      {/* Ambient Backglow Effects */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1e40af]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-[#38bdf8]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex flex-col max-w-3xl gap-4">
          {/* Pre-headline Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e40af]/25 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
              SISTEMA COGNITIVO ADAPTATIVO v2.4
            </span>
            <span className="text-[#64748b] text-xs font-medium">
              • ENEM • FUVEST • CONCURSOS • DIAGNÓSTICAS
            </span>
          </div>

          {/* Main Headlines */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm md:text-base font-semibold text-[#38bdf8] tracking-tight">
              Olá, Larissa! Pronto para o próximo nível?
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold text-white leading-tight tracking-tight">
              Prepare-se para o futuro com{' '}
              <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                simulados inteligentes
              </span>
            </h1>
          </div>

          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl leading-relaxed">
            Simulações adaptativas calibradas com TRI (Teoria de Resposta ao Item) e Inteligência Artificial preditiva para ENEM, Fuvest, Concursos e Ensino Básico. Acesso 100% gratuito e instantâneo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={onStartExam}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-semibold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Bolt className="w-4 h-4 fill-current" />
              <span>Começar Simulado Agora</span>
            </button>

            <button
              onClick={onResumePending}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#18191e] hover:bg-[#20222a] border border-[#27272a] hover:border-[#38bdf8]/40 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#38bdf8] fill-[#38bdf8]" />
              <span>Continuar Pendente (ENEM 2024 - 42/90)</span>
            </button>
          </div>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18191e] border border-[#27272a] text-xs text-white">
              <PieChart className="w-4 h-4 text-[#38bdf8]" />
              <span>Precisão Geral: <strong className="text-[#38bdf8] font-mono">{accuracy}%</strong></span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18191e] border border-[#27272a] text-xs text-white">
              <Flame className="w-4 h-4 text-[#f43f5e]" />
              <span>Streak: <strong className="text-white font-mono">{streakDays} Dias Seguidos</strong></span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18191e] border border-[#27272a] text-xs text-white">
              <Flag className="w-4 h-4 text-[#60a5fa]" />
              <span>Meta Semanal: <strong className="text-[#38bdf8] font-mono">{weeklyGoal}% Concluída</strong></span>
            </div>
          </div>
        </div>

        {/* Right Shield Telemetry Box */}
        <div className="hidden lg:flex flex-col items-center justify-center min-w-[280px] p-6 rounded-xl bg-[#0e0e0e]/90 border border-[#1e293b] shadow-xl">
          <div className="relative flex items-center justify-center w-36 h-36 mb-3">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                fill="none"
                r={radius}
                stroke="#1f242d"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                fill="none"
                r={radius}
                stroke="#38bdf8"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="font-mono text-2xl font-bold text-white tracking-tight">
                {triIndex}%
              </span>
              <span className="text-[10px] font-mono text-[#64748b] font-semibold tracking-wider uppercase">
                ÍNDICE TRI
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-0.5">
            <span className="text-sm font-semibold text-white">Previsão de Aprovação</span>
            <span className="text-xs text-[#94a3b8]">Top 4% dos concorrentes monitorados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
