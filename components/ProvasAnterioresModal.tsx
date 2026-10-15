'use client';

import React from 'react';
import { X, Calendar, Download, Play, CheckCircle2 } from 'lucide-react';
import { Exam } from '@/types/simulator';
import { allExams } from '@/data/exams';

interface ProvasAnterioresModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExam: (exam: Exam) => void;
}

export function ProvasAnterioresModal({
  isOpen,
  onClose,
  onSelectExam,
}: ProvasAnterioresModalProps) {
  if (!isOpen) return null;

  const pastEditions = [
    { year: '2024', examKey: 'enem-2024', title: 'ENEM 2024 - Caderno Azul (1º e 2º Dia Integrados)', items: '20 Questões', tri: 'TRI Oficial' },
    { year: '2024', examKey: 'fuvest-2024', title: 'FUVEST 2024 - Conhecimentos Gerais (1ª Fase)', items: '20 Questões', tri: 'Corte USP' },
    { year: '2024', examKey: 'provao-paulista', title: 'Provão Paulista 2024 - 3ª Série Regular', items: '20 Questões', tri: 'Vagas Diretas' },
    { year: '2024', examKey: 'obmep-olimpiada', title: 'OBMEP 2024 - Fase 1 (Níveis 1, 2 e 3)', items: '20 Questões', tri: 'Lógica Pura' },
    { year: '2024', examKey: 'concursos-publicos', title: 'Concurso Polícia Federal - Prova Objetiva Oficial', items: '20 Questões', tri: 'Cebraspe' },
    { year: '2024', examKey: 'saresp-sp', title: 'SARESP 2024 - Diagnóstica da Rede Estadual SP', items: '20 Questões', tri: 'Seduc-SP' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 my-auto">
        <div className="p-6 border-b border-[#1e293b] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
              ACERVO HISTÓRICO • EDIÇÕES OFICIAIS
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white">
              Provas Anteriores para Treino Real
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#18191e] border border-[#27272a] text-[#94a3b8] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex flex-col gap-3">
          <p className="text-xs text-[#94a3b8]">
            Resolva as provas na íntegra com cronometragem em tempo real, gabarito instantâneo e resolução por inteligência artificial.
          </p>

          <div className="flex flex-col gap-2.5 pt-2">
            {pastEditions.map((ed, idx) => {
              const matchedExam = allExams.find((e) => e.id === ed.examKey) || allExams[0];
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/50 flex items-center justify-between gap-4 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {ed.year}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38bdf8] transition-colors truncate">
                        {ed.title}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-[#94a3b8] font-mono">
                        <span>{ed.items}</span>
                        <span>•</span>
                        <span className="text-[#38bdf8]">{ed.tri}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectExam(matchedExam);
                    }}
                    className="px-4 py-2 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(56,189,248,0.2)] shrink-0 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Iniciar Simulado</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
