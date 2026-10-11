import React from 'react';
import { ArrowRight, Download, MessageCircle, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import minhaFoto from '../assets/MinhaImagem.jpg';

export default function Hero() {
  const stackBadges = [
    { name: 'React', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
    { name: 'Node.js', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
    { name: 'Python & Django', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
    { name: 'TypeScript', color: 'border-blue-500/30 bg-blue-500/10 text-blue-300' },
    { name: 'Tailwind CSS', color: 'border-sky-500/30 bg-sky-500/10 text-sky-300' },
    { name: 'QA & Automação', color: 'border-purple-500/30 bg-purple-500/10 text-purple-300' },
  ];

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex items-center">
      {/* Luzes de Fundo (Aurora Glow) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-48 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Coluna de Texto & Conteúdo */}
          <div className="lg:col-span-7 text-left">
            {/* Badge de Disponibilidade */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md mb-6 animate-pulse-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para novos projetos & contratações</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Desenvolvedor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                Fullstack
              </span>{' '}
              com foco em Produto & Qualidade.
            </h1>

            {/* Descrição */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl font-normal">
              Olá, sou o <strong className="text-white font-semibold">Edson Carvalho</strong>. Uno lógica sólida, interfaces modernas e foco na experiência real do usuário para construir aplicações web rápidas, acessíveis e escaláveis.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/40 hover:from-blue-500 hover:to-cyan-500"
              >
                <span>Explorar Projetos</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/curriculo_QA_Francisco_Edson_de_Souza_Carvalho.pdf"
                download="curriculo_QA_Francisco_Edson_de_Souza_Carvalho.pdf"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white"
              >
                <Download size={17} className="text-blue-400" />
                <span>Baixar Currículo</span>
              </a>
            </div>

            {/* Redes Rápidas */}
            <div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-400">
              <span>Conecte-se:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/Edson468"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Edson Carvalho"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/edson-carvalho-213b051b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Edson Carvalho"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href="https://wa.me/5585987855611"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Edson Carvalho"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            {/* Badges de Stacks */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Stacks & Especialidades
              </p>
              <div className="flex flex-wrap gap-2">
                {stackBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`rounded-lg border px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all hover:scale-105 ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Visual (Foto & Card de Destaque) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Efeito Glow atrás da imagem */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 opacity-20 blur-2xl transform -rotate-3" />

              {/* Moldura Principal */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Header Estilo Janela Tech */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Terminal size={12} className="text-cyan-400" />
                    <span>edson.dev</span>
                  </div>
                </div>

                {/* Imagem do Edson mantida original */}
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-slate-950">
                  <img
                    src={minhaFoto}
                    alt="Edson Carvalho - Desenvolvedor Fullstack"
                    className="h-full w-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />
                  
                  {/* Badge na base da foto */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">Edson Carvalho</p>
                        <p className="text-[11px] text-cyan-400">Fullstack • Python • QA</p>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                        <CheckCircle2 size={13} />
                        Disponível
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Experiência */}
              <div className="absolute -top-3 -left-3 sm:-left-6 rounded-2xl border border-white/10 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-xl animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Atuação Digital</p>
                    <p className="text-base font-bold text-white">2+ Anos</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Projetos */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 rounded-2xl border border-white/10 bg-slate-900/90 p-3.5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Projetos Concluídos</p>
                    <p className="text-base font-bold text-white">10+ Entregas</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}