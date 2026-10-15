'use client';

import React, { useState } from 'react';
import { Search, Bell, Sparkles, CheckCircle2, Trophy, Flame } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenExamPicker: () => void;
  onOpenAbout: () => void;
}

export function Header({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenExamPicker,
  onOpenAbout,
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: 'Novo Simulado Disponível', desc: 'Provão Paulista 2024 e ENEM calibrado com TRI adicionados.', time: 'Há 15 min' },
    { id: 2, title: 'Desafio Semanal Aberto', desc: 'Simulado Nacional ao vivo com premiação termina em 18h.', time: 'Há 2h' },
    { id: 3, title: 'Streak de 12 Dias!', desc: 'Parabéns por manter o hábito de estudos diário.', time: 'Ontem' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-[#1e293b]/80 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="h-16 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Navigation */}
        <div className="flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => onSelectTab('simulados')}
            className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
          >
            <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.25)] group-hover:bg-[#38bdf8] group-hover:text-[#0a0a0a] transition-all">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-white flex items-center">
              I.A <span className="text-[#38bdf8] ml-1">Simulators</span>
            </span>
          </button>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onSelectTab('simulados')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                currentTab === 'simulados'
                  ? 'bg-[#38bdf8] text-[#0a0a0a] shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#18191e]'
              }`}
            >
              Simulados
            </button>
            <button
              onClick={() => onSelectTab('desempenho')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                currentTab === 'desempenho'
                  ? 'bg-[#38bdf8] text-[#0a0a0a] shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#18191e]'
              }`}
            >
              Desempenho
            </button>
            <button
              onClick={() => onSelectTab('provas-anteriores')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                currentTab === 'provas-anteriores'
                  ? 'bg-[#38bdf8] text-[#0a0a0a] shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#18191e]'
              }`}
            >
              Provas Anteriores
            </button>
            <button
              onClick={onOpenAbout}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                currentTab === 'sobre'
                  ? 'bg-[#38bdf8] text-[#0a0a0a]'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#18191e]'
              }`}
            >
              Sobre & Como Funciona
            </button>
          </nav>
        </div>

        {/* Right: Search, Free Access Badge, Level / XP */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Free Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Acesso 100% Livre • Sem Cadastro</span>
          </div>

          {/* Quick Search Bar */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 bg-[#121316] border border-[#27272a] hover:border-[#38bdf8]/50 px-3 py-1.5 rounded-lg text-xs md:text-sm text-[#94a3b8] transition-colors group"
          >
            <Search className="w-4 h-4 text-[#64748b] group-hover:text-[#38bdf8]" />
            <span className="hidden md:inline text-xs">Buscar simulado, matéria...</span>
            <kbd className="hidden sm:inline-block bg-[#18191e] border border-[#334155] text-[#94a3b8] px-1.5 py-0.5 rounded text-[10px] font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#18191e] transition-colors"
              title="Notificações"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#121316] border border-[#27272a] rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#1e293b] mb-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Notificações</span>
                  <span className="text-[10px] text-[#38bdf8] font-mono">3 novas</span>
                </div>
                <div className="flex flex-col gap-2">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-2 rounded-lg bg-[#18191e] border border-[#27272a]/60 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">{n.title}</span>
                        <span className="text-[10px] text-[#64748b] font-mono">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-snug">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Level & XP */}
          <div className="flex items-center gap-2.5 pl-1 border-l border-[#27272a]">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-semibold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse"></span>
                Nível 14
              </span>
              <span className="text-[11px] font-mono text-[#38bdf8] font-bold">2.450 XP</span>
            </div>
            {/* User Avatar with Ring */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1e40af] to-[#38bdf8] p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#121316] flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                  <span className="text-[11px] text-[#38bdf8]">LR</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                <Trophy className="w-2.5 h-2.5 text-[#fbbf24]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
