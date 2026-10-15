'use client';

import React from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartExam: () => void;
}

export function AboutModal({ isOpen, onClose, onStartExam }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 my-auto">
        <div className="p-6 border-b border-[#1e293b] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-heading font-extrabold text-white">
              Sobre o I.A Simulators
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#18191e] border border-[#27272a] text-[#94a3b8] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex flex-col gap-5 text-xs md:text-sm text-[#cbd5e1] leading-relaxed">
          <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-start gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#10b981] block mb-1">
                Acesso 100% Gratuito e Livre de Restrições
              </strong>
              O I.A Simulators foi concebido com uma premissa inegociável: democratizar o acesso à preparação de alto nível para todos os estudantes do Brasil. <strong>Não exigimos login, cadastro, senha nem cartão de crédito.</strong> Você clica e começa a responder na hora.
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white font-heading mb-1.5">
              Nossa Missão Educacional
            </h3>
            <p>
              Disponibilizar simulados interativos completos (mínimo de 20 questões por prova) para o <strong>Ensino Fundamental, Ensino Médio, Vestibulares Nacionais (ENEM, FUVEST, SISU, Provão Paulista)</strong>, Olimpíadas do Conhecimento (OBMEP, OBA) e Concursos Públicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-xs">
                <Zap className="w-4 h-4" />
                <span>Calibração TRI Oficial</span>
              </div>
              <p className="text-[11px] text-[#94a3b8]">
                Estimativas coerentes com o algoritmo da Teoria de Resposta ao Item usado pelo Inep no ENEM.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#18191e] border border-[#27272a] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Feedback com I.A Pedagógica</span>
              </div>
              <p className="text-[11px] text-[#94a3b8]">
                Comentários passo a passo, análise de distratores e a possibilidade de tirar dúvidas ao vivo.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#18191e] hover:bg-[#27272a] text-[#94a3b8] hover:text-white font-medium text-xs cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onClose();
                onStartExam();
              }}
              className="px-5 py-2 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs transition-all shadow-[0_0_12px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              Escolher um Simulado Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
