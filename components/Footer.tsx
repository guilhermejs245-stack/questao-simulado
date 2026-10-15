'use client';

import React from 'react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenCatalog: () => void;
}

export function Footer({ onOpenAbout, onOpenCatalog }: FooterProps) {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#1e293b] py-8 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Version */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-base tracking-tight text-white">
              I.A <span className="text-[#38bdf8]">Simulators</span>
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#18191e] border border-[#27272a] text-[#38bdf8] font-semibold">
              v2.4 Cognitive
            </span>
          </div>
          <p className="text-xs text-[#64748b]">
            © 2024 I.A Simulators Educação Tecnológica. Todos os direitos reservados.
          </p>
        </div>

        {/* Center: Academic Partners */}
        <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4 text-xs font-medium">
          <span className="text-[#64748b]">Parceiros Acadêmicos:</span>
          <span className="hover:text-[#38bdf8] transition-colors cursor-pointer">
            ITA / IME Labs
          </span>
          <span className="text-[#334155]">•</span>
          <span className="hover:text-[#38bdf8] transition-colors cursor-pointer">
            Rede FUVEST Tech
          </span>
          <span className="text-[#334155]">•</span>
          <span className="hover:text-[#38bdf8] transition-colors cursor-pointer">
            TRI Analytical Core
          </span>
        </div>

        {/* Right: Legal & Help Links */}
        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={onOpenAbout}
            className="hover:text-[#38bdf8] transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span className="text-[#334155]">•</span>
          <button
            onClick={onOpenAbout}
            className="hover:text-[#38bdf8] transition-colors cursor-pointer"
          >
            Privacidade
          </button>
          <span className="text-[#334155]">•</span>
          <button
            onClick={onOpenAbout}
            className="hover:text-[#38bdf8] transition-colors cursor-pointer"
          >
            Suporte & FAQ
          </button>
        </div>
      </div>
    </footer>
  );
}
