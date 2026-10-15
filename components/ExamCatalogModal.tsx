'use client';

import React, { useState } from 'react';
import {
  X,
  Search,
  BookOpen,
  Brain,
  Shield,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { allExams } from '@/data/exams';
import { Exam, ExamCategory } from '@/types/simulator';

interface ExamCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExam: (exam: Exam) => void;
  initialCategory?: ExamCategory | null;
}

export function ExamCatalogModal({
  isOpen,
  onClose,
  onSelectExam,
  initialCategory = null,
}: ExamCatalogModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Todos os Simulados' },
    { id: 'vestibulares', label: '1. Vestibulares & Exames Nacionais' },
    { id: 'estaduais', label: '2. Avaliações Estaduais & Diagnósticas' },
    { id: 'olimpiadas', label: '3. Olimpíadas do Conhecimento' },
    { id: 'concursos', label: '4. Concursos Públicos & Técnicos' },
  ];

  const filteredExams = allExams.filter((exam) => {
    const matchesCategory =
      selectedCategory === 'all' || exam.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 my-auto">
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-[#1e293b] flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                CATÁLOGO OFICIAL • ACESSO LIVRE E GRATUITO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white mt-0.5">
              Escolha seu Simulado Interativo
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#18191e] border border-[#27272a] text-[#94a3b8] hover:text-white hover:border-[#38bdf8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="p-4 md:px-6 bg-[#0e0e0e] border-b border-[#1e293b] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#38bdf8] text-[#0a0a0a] shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                    : 'bg-[#18191e] text-[#94a3b8] border border-[#27272a] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por prova, ENEM, FUVEST..."
              className="w-full bg-[#18191e] border border-[#27272a] focus:border-[#38bdf8] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-[#64748b] outline-none"
            />
          </div>
        </div>

        {/* Exams Grid */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="group p-5 rounded-xl bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8]/60 hover:bg-[#1e2028] transition-all flex flex-col justify-between gap-4 shadow-sm"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1e40af]/30 border border-[#38bdf8]/30 text-[#38bdf8] uppercase">
                    {exam.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{exam.durationMinutes} min</span>
                    <span>•</span>
                    <span className="font-bold text-white">{exam.questionCount} Questões</span>
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                  {exam.title}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                  {exam.description}
                </p>

                {/* Target Audience */}
                <div className="text-[11px] text-[#64748b] flex items-center gap-1">
                  <span className="text-[#38bdf8]">Público-alvo:</span> {exam.targetAudience}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {exam.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-[#94a3b8] border border-[#27272a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onSelectExam(exam);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(56,189,248,0.2)] cursor-pointer"
              >
                <span>Iniciar Simulado Agora ({exam.questionCount} Qs)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}

          {filteredExams.length === 0 && (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-center gap-2">
              <BookOpen className="w-10 h-10 text-[#64748b]" />
              <span className="text-sm font-semibold text-white">Nenhum simulado encontrado</span>
              <p className="text-xs text-[#94a3b8]">
                Tente ajustar os filtros ou os termos de pesquisa acima.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
