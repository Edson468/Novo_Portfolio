import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Jetro Tecnologia',
    role: 'Suporte Técnico Pleno',
    period: '2024',
    location: 'Fortaleza - CE',
    description: 'Diagnóstico avançado e resolução ágil de falhas em infraestrutura de redes, bancos de dados e sistemas fiscais. Foco contínuo em estabilidade operacional e suporte técnico de alta complexidade.',
    skills: ['Sistemas Fiscais', 'Redes & Conectividade', 'Diagnóstico de Incidentes', 'Atendimento N2', 'SLA'],
  },
  {
    id: 2,
    company: 'Almaviva Experience',
    role: 'Analista de Backoffice',
    period: '2020 - 2024',
    location: 'Fortaleza - CE',
    description: 'Análise aprofundada de indicadores operacionais (KPIs), estruturação de relatórios executivos e identificação de melhorias de fluxo. Criação de rotinas automatizadas e dashboards para tomadas de decisão rápidas.',
    skills: ['Automação de Rotinas', 'Análise de Indicadores', 'Dashboards', 'Otimização de Processos', 'Gestão Operacional'],
  },
  {
    id: 3,
    company: 'Contax Mobitel',
    role: 'Suporte Técnico',
    period: '2014 - 2016',
    location: 'Fortaleza - CE',
    description: 'Atendimento técnico especializado em conectividade de telecom, troubleshooting de sistemas e garantia de padrão de qualidade e satisfação do cliente.',
    skills: ['Troubleshooting', 'Telecomunicações', 'Qualidade de Atendimento', 'Comunicação Clara'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden bg-[#0b0f19]">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Briefcase size={13} />
            Trajetória Profissional
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Experiência sólida em processos, tecnologia e resolução de problemas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Uma bagagem que soma visão de negócios, atendimento humanizado e rigor analítico ao desenvolvimento de software.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="relative mt-16 space-y-8 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-slate-800 md:before:left-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 md:pl-20">
              
              {/* Marcador Luminoso da Timeline */}
              <div className="absolute left-1.5 md:left-4 top-3 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border-2 border-blue-400 bg-slate-900 text-blue-400 shadow-lg shadow-blue-500/30 ring-4 ring-slate-950">
                <Briefcase size={15} />
              </div>

              {/* Card da Experiência */}
              <div className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/90">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {exp.company} <span className="text-slate-500 font-normal">• {exp.location}</span>
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {exp.description}
                </p>

                {/* Skills desenvolvidas */}
                <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                    >
                      <CheckCircle2 size={11} className="text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Card de Diferencial */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Por que essa experiência faz a diferença no código?</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Profissionais com vivência em suporte e análise desenvolvem sistemas mais estáveis, sabem como prevenir erros antes de chegarem à produção e compreendem com profundidade as reais necessidades do usuário final.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}