'use client';

import React from 'react';
import { BookOpen, GraduationCap, Brain, Gavel, ArrowRight } from 'lucide-react';
import { ExamCategory } from '@/types/simulator';

interface TrackCardsProps {
  onSelectCategory: (category: ExamCategory) => void;
}

export function TrackCards({ onSelectCategory }: TrackCardsProps) {
  const tracks = [
    {
      category: 'estaduais' as ExamCategory,
      tag: '6º AO 9º ANO',
      title: 'Ensino Fundamental',
      count: '45 Simulados',
      desc: 'Provas de sondagem diagnóstica, OBMEP Mirim, Saeb e reforço de Português e Matemática com resolução passo a passo.',
      icon: BookOpen,
      progress: 'w-2/5',
      featured: false,
    },
    {
      category: 'estaduais' as ExamCategory,
      tag: '1º AO 3º ANO',
      title: 'Ensino Médio',
      count: '120 Simulados',
      desc: 'Preparação contínua bimestral, itinerários formativos estruturados e simulados orientados pela BNCC.',
      icon: GraduationCap,
      progress: 'w-3/5',
      featured: false,
    },
    {
      category: 'vestibulares' as ExamCategory,
      tag: 'ENEM • FUVEST • UNICAMP',
      title: 'Vestibulares',
      count: '380 Simulados',
      desc: 'Algoritmo TRI oficial com calibração item a item, redação auditada por IA multimodal e simulação com pressão temporal.',
      icon: Brain,
      progress: 'w-4/5',
      featured: true,
      badge: 'ALTA PROCURA',
    },
    {
      category: 'concursos' as ExamCategory,
      tag: 'PF • RECEITA • TRIBUNAIS',
      title: 'Concursos Públicos',
      count: '540 Simulados',
      desc: 'Filtros Cebraspe (Certo/Errado), FGV, FCC e Vunesp com legislação e jurisprudências atualizadas semanalmente.',
      icon: Gavel,
      progress: 'w-3/4',
      featured: false,
    },
  ];

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-wider">
            MÓDULOS DE PREPARAÇÃO
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mt-1">
            Escolha a sua Trilha de Estudos
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
          Todas as trilhas contam com cronometragem em tempo real, correção por inteligência artificial e resolução pormenorizada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((track, idx) => {
          const Icon = track.icon;
          return (
            <div
              key={idx}
              onClick={() => onSelectCategory(track.category)}
              className={`group relative flex flex-col justify-between p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                track.featured
                  ? 'bg-[#15171d] border border-[#38bdf8]/50 shadow-[0_4px_24px_rgba(56,189,248,0.15)] hover:border-[#38bdf8]'
                  : 'bg-[#121316] border border-[#1e293b] hover:bg-[#18191e] hover:border-[#334155]'
              }`}
            >
              {track.featured && track.badge && (
                <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#38bdf8] text-[#0a0a0a] text-[10px] font-mono font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  {track.badge}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                      track.featured
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0a0a0a]'
                        : 'bg-[#18191e] border border-[#27272a] text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0a0a0a]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#18191e] border border-[#27272a] text-[#94a3b8]">
                    {track.count}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold text-[#38bdf8] uppercase tracking-wider font-mono">
                    {track.tag}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                    {track.desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-6 mt-2">
                <div className="w-full bg-[#18191e] rounded-full h-1.5 overflow-hidden">
                  <div className={`bg-[#38bdf8] h-1.5 rounded-full ${track.progress}`}></div>
                </div>
                <div className="inline-flex items-center justify-between text-xs font-semibold text-[#38bdf8] group-hover:translate-x-1 transition-transform">
                  <span>Acessar Simulados</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
