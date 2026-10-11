import React from 'react';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: 'https://wa.me/5585987855611', label: 'WhatsApp', icon: MessageCircle },
    { href: 'https://www.linkedin.com/in/edson-carvalho-213b051b1/', label: 'LinkedIn', icon: LinkedinIcon },
    { href: 'https://github.com/Edson468', label: 'GitHub', icon: GithubIcon },
    { href: 'mailto:edson4518@gmail.com', label: 'E-mail', icon: Mail },
  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre Mim', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#070b14] text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 font-mono text-xs font-bold text-white shadow-md">
                EC
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Edson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Carvalho</span>
              </h2>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Desenvolvedor Fullstack com foco em criar aplicações que unem visual elegante, alta usabilidade e código resiliente.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Aberto para oportunidades e novos desafios</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação Rápida
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes & Voltar ao topo */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <div className="space-y-2 text-left md:text-right">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Redes & Contato
              </h3>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-blue-400 hover:bg-slate-800 hover:text-white"
              aria-label="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={14} className="text-blue-400" />
            </button>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="mt-10 h-px bg-white/5" />

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Edson Carvalho. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Construído com React, Tailwind CSS & foco em cada detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}