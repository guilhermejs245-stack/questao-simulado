'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { allExams } from '@/data/exams';
import { Exam } from '@/types/simulator';

interface SearchCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExam: (exam: Exam) => void;
}

export function SearchCommandModal({
  isOpen,
  onClose,
  onSelectExam,
}: SearchCommandModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Toggle or open handled by parent
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = allExams.filter(
    (e) =>
      query === '' ||
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.description.toLowerCase().includes(query.toLowerCase()) ||
      e.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      e.questions.some(
        (q) =>
          q.topic.toLowerCase().includes(query.toLowerCase()) ||
          q.discipline.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
      <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-2xl w-full shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#1e293b] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#38bdf8]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por simulado, prova (ENEM, FUVEST), matéria ou tópico..."
            className="flex-1 bg-transparent border-0 outline-none text-white text-sm placeholder:text-[#64748b]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#94a3b8] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-3 max-h-96 overflow-y-auto flex flex-col gap-2">
          <div className="px-3 py-1.5 text-[11px] font-mono font-bold text-[#64748b] uppercase">
            Simulados Disponíveis ({results.length})
          </div>

          {results.map((exam) => (
            <div
              key={exam.id}
              onClick={() => {
                onClose();
                onSelectExam(exam);
              }}
              className="p-3 rounded-xl bg-[#18191e] border border-[#27272a] hover:border-[#38bdf8] hover:bg-[#1e2028] transition-all flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white group-hover:text-[#38bdf8] transition-colors truncate">
                      {exam.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121316] text-[#38bdf8] border border-[#27272a]">
                      {exam.badge}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#94a3b8] truncate">
                    {exam.questionCount} Questões • {exam.categoryLabel}
                  </span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}

          {results.length === 0 && (
            <div className="py-8 text-center text-xs text-[#94a3b8]">
              Nenhum simulado correspondente encontrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
