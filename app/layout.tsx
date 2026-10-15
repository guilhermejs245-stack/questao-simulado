import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'I.A Simulators - Simulados Inteligentes para Provas do Brasil',
  description: 'Simulados interativos e 100% gratuitos para ENEM, FUVEST, Concursos Públicos, SARESP, OBMEP e Ensino Básico com análise TRI e Inteligência Artificial.',
  openGraph: {
    title: 'I.A Simulators - Simulados Inteligentes para Provas do Brasil',
    description: 'Simulações adaptativas calibradas com TRI e Inteligência Artificial preditiva para ENEM, Fuvest, Concursos e Ensino Básico.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I.A Simulators - Simulados Inteligentes',
    description: 'Acesso livre e gratuito a simulados completos com no mínimo 20 questões e gabarito comentado.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="bg-[#0a0a0a] text-[#e5e2e1] antialiased selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
