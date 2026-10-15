'use client';

import React from 'react';
import { X, TrendingUp, Award, Target, Zap, Clock, PieChart, CheckCircle2 } from 'lucide-react';

interface DesempenhoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenExamPicker: () => void;
}

export function DesempenhoModal({ isOpen, onClose, onOpenExamPicker }: DesempenhoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121316] border border-[#27272a] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 my-auto">
        <div className="p-6 border-b border-[#1e293b] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
              RELATÓRIO GERAL COGNITIVO
            </span>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white">
              Painel de Desempenho & Calibração TRI
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#18191e] border border-[#27272a] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {/* Top Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#18191e] border border-[#27272a] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#94a3b8]">Índice TRI Consolidado</span>
                <span className="text-xl font-mono font-bold text-white">742.5</span>
                <span className="text-[11px] text-[#10b981] font-medium">+38 pts este mês</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#18191e] border border-[#27272a] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#94a3b8]">Precisão Global</span>
                <span className="text-xl font-mono font-bold text-white">78.4%</span>
                <span className="text-[11px] text-[#94a3b8]">240 itens resolvidos</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#18191e] border border-[#27272a] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#94a3b8]">Posição Estimada</span>
                <span className="text-xl font-mono font-bold text-white">Top 4%</span>
                <span className="text-[11px] text-[#38bdf8]">Faixa de Aprovação</span>
              </div>
            </div>
          </div>

          {/* Area Breakdown */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
              Desempenho por Grande Área do Conhecimento
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white font-medium">Ciências da Natureza (Física, Química, Biologia)</span>
                  <span className="font-mono text-[#38bdf8] font-bold">84%</span>
                </div>
                <div className="w-full bg-[#18191e] rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#38bdf8] h-2.5 rounded-full w-[84%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white font-medium">Linguagens, Códigos e Literatura</span>
                  <span className="font-mono text-[#38bdf8] font-bold">82%</span>
                </div>
                <div className="w-full bg-[#18191e] rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#38bdf8] h-2.5 rounded-full w-[82%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white font-medium">Ciências Humanas & Sociais Aplicadas</span>
                  <span className="font-mono text-[#60a5fa] font-bold">76%</span>
                </div>
                <div className="w-full bg-[#18191e] rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#2563eb] h-2.5 rounded-full w-[76%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white font-medium">Matemática, Geometria e Raciocínio Lógico</span>
                  <span className="font-mono text-[#f43f5e] font-bold">72%</span>
                </div>
                <div className="w-full bg-[#18191e] rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#f43f5e] h-2.5 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Pedagogical Recommendations */}
          <div className="p-4 rounded-xl bg-[#0f172a] border border-[#38bdf8]/40 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase">
              RECOMENDAÇÃO PEDAGÓGICA DA I.A
            </span>
            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              Sua consistência em questões de nível fácil e médio é excelente (92% de precisão), o que garante uma base TRI muito sólida. Para ultrapassar os 800 pontos, concentre seus próximos estudos em <strong>Funções Trigonométricas</strong> e <strong>Termodinâmica</strong>, onde foi detectada oscilação de acerto.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenExamPicker();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#0a0a0a] font-bold text-xs md:text-sm shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all cursor-pointer"
            >
              Iniciar Novo Simulado para Elevar Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
