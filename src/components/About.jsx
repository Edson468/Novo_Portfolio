import React from 'react';
import { User, Rocket, Sparkles, Code2, Server, CheckSquare, Layers, Award, Target } from 'lucide-react';
import minhaFoto from '../assets/MinhaImagem.jpg';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      title: 'Frontend Moderno',
      desc: 'Interfaces responsivas, limpas e interativas com React, JavaScript moderno e Tailwind CSS.',
    },
    {
      icon: Server,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      title: 'Backend & Automação',
      desc: 'APIs funcionais, integração de sistemas e scripts de automação operacional em Python e Node.js.',
    },
    {
      icon: CheckSquare,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      title: 'Qualidade & QA',
      desc: 'Atenção minuciosa aos detalhes, testes de usabilidade, prevenção de falhas e foco na experiência real.',
    },
  ];

  const metrics = [
    { value: '2+', label: 'Anos no setor de tecnologia & operações' },
    { value: '10+', label: 'Projetos e aplicações concluídas' },
    { value: 'QA & Ops', label: 'Visão orientada a estabilidade e negócio' },
    { value: '100%', label: 'Comprometimento com entrega e qualidade' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-slate-900/40 border-y border-white/5">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <User size={13} />
            Sobre Mim
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Lógica analítica, atenção aos detalhes e paixão por tecnologia.
          </h2>
        </div>

        {/* Grid Principal */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          
          {/* Lado Esquerdo: Card Visual com Foto */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-25 blur-lg" />
              
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="relative h-[420px] overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src={minhaFoto}
                    alt="Edson Carvalho perfil profissional"
                    className="h-full w-full object-cover object-top filter brightness-[1.03] transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Edson Carvalho</p>
                    <p className="text-xs text-slate-300">Desenvolvedor Web Fullstack • Fortaleza - CE</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Award size={14} />
                    Foco em Solução
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Target size={14} />
                    Orientado a Resultados
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto Editorial + Pilares */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                Minha história na tecnologia é marcada por uma transição consistente: venho de uma bagagem sólida em <strong className="text-white">suporte técnico e análise de backoffice</strong>, onde aprendi a diagnosticar falhas complexas com agilidade, mapear gargalos e lidar com a realidade de clientes e operações de alto volume.
              </p>
              <p>
                Hoje atuo no desenvolvimento de software unindo o melhor dos dois mundos: <strong className="text-white">precisão técnica na programação</strong> e <strong className="text-white">sensibilidade para a experiência humana</strong>. Desenvolvo interfaces dinâmicas em React, sistemas com Python e Django, além de zelar pela qualidade de ponta a ponta (QA).
              </p>
            </div>

            {/* Pilares de Especialidade */}
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/5 bg-slate-900/60 p-4 transition-all duration-300 hover:border-white/20 hover:bg-slate-800/60"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${item.color} mb-3 transition-transform group-hover:scale-110`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                  <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-tight text-slate-400">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Tags de Valores */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                <Rocket size={13} />
                Aprendizado Rápido
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <Sparkles size={13} />
                Obsessão por Experiência
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                <Layers size={13} />
                Código Modular & Limpo
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}