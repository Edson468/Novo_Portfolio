import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Jetro Tecnologia",
    role: "Suporte Técnico Pleno",
    period: "2024 - 2024",
    description: "Diagnóstico e resolução de falhas em redes e aplicações fiscais, com foco na verificação de erros em sistemas ERP para garantir a estabilidade das operações."
  },
  {
    id: 2,
    company: "Almaviva Experience",
    role: "Analista de Backoffice",
    period: "2020 - 2024",
    description: "Análise estratégica de dados e desenvolvimento de dashboards e planilhas automatizadas para projeção de metas e acompanhamento de indicadores de performance."
  },
  {
    id: 3,
    company: "Contax Mobitel",
    role: "Suporte Técnico (Operador Ativo)",
    period: "2014 - 2016",
    description: "Suporte especializado em conectividade e verificação de integridade de linhas de internet, focado na resolução técnica de problemas de acesso."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">Experiência Profissional</h3>
        
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-10">
              {/* Marcador na linha */}
              <div className="absolute -left-[21px] top-0 bg-white p-1">
                <div className="bg-blue-600 rounded-full p-2 text-white shadow-lg">
                  <Briefcase size={20} />
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{exp.period}</span>
                <h4 className="text-xl font-bold text-slate-900 mt-4">{exp.role}</h4>
                <p className="text-lg font-medium text-slate-500 mb-2">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}