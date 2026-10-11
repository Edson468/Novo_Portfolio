import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code2, Briefcase, Mail, FolderGit2, Sparkles, Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Atualiza estado de scroll
      setScrolled(window.scrollY > 20);

      // Progresso de rolagem para barra superior
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Detecção de seção ativa
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { name: 'Projetos', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Experiência', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Contato', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Barra de progresso de rolagem no topo */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60]">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            aria-label="Navegação Principal"
            className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 md:px-6 ${
              scrolled
                ? 'border-white/10 bg-[#0f172a]/85 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl'
                : 'border-white/5 bg-[#0b0f19]/60 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-white transition-transform hover:scale-[1.02]"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 font-mono text-xs font-bold text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
                EC
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </span>
              <span className="text-slate-100 font-semibold tracking-tight">
                Edson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Carvalho</span>
              </span>
            </a>

            {/* Links Desktop */}
            <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/10 font-semibold shadow-inner'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                      }`}
                    >
                      <Icon size={15} className={isActive ? 'text-blue-400' : 'text-slate-500'} />
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Ações Desktop */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-xs font-semibold text-blue-300 transition-all duration-200 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Sparkles size={14} className="text-blue-400" />
                <span>Vamos Conversar</span>
              </a>
            </div>

            {/* Botão Mobile Hamburger */}
            <button
              className="flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Menu Mobile Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/95 p-4 shadow-2xl backdrop-blur-2xl">
              <ul className="flex flex-col gap-1.5 text-sm font-medium">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                          isActive
                            ? 'bg-blue-600/15 text-blue-300 font-semibold border border-blue-500/20'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon size={17} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  <Send size={15} />
                  Falar Comigo
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}