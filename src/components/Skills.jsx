import React, { useState } from 'react';
import { Code2, Sparkles, Cpu, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Dados' },
    { id: 'tools', label: 'QA & Ferramentas' },
  ];

  const skillsData = [
    // Frontend
    { name: 'React', category: 'frontend', icon: 'devicon-react-original colored', description: 'SPAs, Hooks, Context, Componentes Reutilizáveis' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'devicon-javascript-plain colored', description: 'Manipulação DOM, Async/Await, APIs Modernas' },
    { name: 'TypeScript', category: 'frontend', icon: 'devicon-typescript-plain colored', description: 'Tipagem estática, interfaces e escalabilidade' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'devicon-tailwindcss-original colored', description: 'Design responsivo, utility-first, modern UI' },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: 'devicon-html5-plain colored', description: 'Acessibilidade semântica, animações e layouts fluidos' },
    { name: 'Vite', category: 'frontend', icon: 'devicon-vitejs-plain colored', description: 'Bundling ultrarrápido, HMR e otimização de build' },

    // Backend
    { name: 'Python', category: 'backend', icon: 'devicon-python-plain colored', description: 'Scripts operacionais, lógica backend e automação' },
    { name: 'Django', category: 'backend', icon: 'devicon-django-plain colored', description: 'Painéis administrativos, ORM e rotas seguras' },
    { name: 'Node.js', category: 'backend', icon: 'devicon-nodejs-plain colored', description: 'Serviços backend e integração de APIs REST' },
    { name: 'PostgreSQL / SQL', category: 'backend', icon: 'devicon-postgresql-plain colored', description: 'Modelagem relacional e consultas eficientes' },

    // Ferramentas & QA
    { name: 'Cypress', category: 'tools', icon: 'devicon-cypressio-plain text-[#04C38C]', description: 'Automação de testes E2E, fluxos de ponta a ponta e integração' },
    { name: 'QA & Testes', category: 'tools', icon: 'devicon-jest-plain colored', description: 'Garantia de qualidade, validação de bugs e testes manuais' },
    { name: 'Git & GitHub', category: 'tools', icon: 'devicon-git-plain colored', description: 'Controle de versão, branch workflow e deploys' },
    { name: 'Postman', category: 'tools', icon: 'devicon-postman-plain colored', description: 'Testes de integração e validação de endpoints HTTP' },
    { name: 'Figma', category: 'tools', icon: 'devicon-figma-plain colored', description: 'Prototipagem, design systems e UI/UX colaborativo' },
    { name: 'VS Code', category: 'tools', icon: 'devicon-vscode-plain colored', description: 'Ambiente de desenvolvimento produtivo e extensões' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden bg-[#0b0f19]">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Cpu size={13} />
            Stack & Ferramentas
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tecnologias que impulsionam minhas entregas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Ferramentas modernas selecionadas para unir velocidade de desenvolvimento, performance e estabilidade.
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                  : 'border border-white/5 bg-slate-900/60 text-slate-400 hover:border-white/10 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Cards de Habilidades */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-slate-900/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950 text-2xl transition-transform group-hover:scale-110">
                  <i className={skill.icon}></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {skill.category === 'frontend' ? 'Frontend' : skill.category === 'backend' ? 'Backend' : 'Ferramentas & QA'}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destaque Metodologias & Boas Práticas */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-indigo-900/20 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Boas Práticas e Mentalidade de Produto</h4>
                <p className="text-xs text-slate-400">Clean Code, Design Responsivo, Versionamento Semântico e Foco no Usuário Final.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Clean Architecture</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Mobile First</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Testes de Usabilidade</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
