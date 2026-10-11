import React, { useState } from 'react';
import { FolderGit2, X, ExternalLink, Filter, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectCard from './ProjectCard';

// Imagens originais do projeto mantidas integralmente
import imgBarberApp from '../assets/BarberApp.png';
import imgFanpage from '../assets/Fanpage-One-Piece.png';
import imgFarmacia from '../assets/Farmacia-Manipulacao.png';
import imgGerenciadorBarbearia from '../assets/Gerenciador-Barbearia-Django.png';
import imgLandingBarbearia from '../assets/Landing-page-barbearia.png';
import imgMadeiraPura from '../assets/MadeiraPura.png';
import imgNewToDo from '../assets/New-To-Do-List.png';
import imgPetcare from '../assets/Petcare.png';
import imgToDoList from '../assets/To-DoList.png';
import imgTabuada from '../assets/tabuada-interativa.png';

const allProjects = [
  {
    id: 1,
    title: 'Madeira Pura',
    category: 'apps',
    tag: 'E-commerce',
    featured: true,
    description: 'E-commerce completo de móveis planejados com catálogo visual elegante, foco em conversão e usabilidade mobile.',
    fullDescription: 'Plataforma para demonstração e venda de móveis sob medida. Possui layout responsivo refinado, apresentação clara de produtos, botões de ação integrados para contato comercial e ótima performance de carregamento.',
    link: 'https://moveis-planejados-omega.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgMadeiraPura,
    techs: ['React', 'Tailwind CSS', 'Vercel', 'UI/UX'],
  },
  {
    id: 2,
    title: 'Petcare',
    category: 'apps',
    tag: 'Web App',
    featured: true,
    description: 'Plataforma digital voltada para cuidado, agendamento e saúde animal, pensada na experiência dos tutores.',
    fullDescription: 'Solução completa para serviços e saúde de pets. Conta com design acolhedor, componentes reutilizáveis, navegação fluida e fluxos pensados para facilitar a rotina dos donos de animais.',
    link: 'https://pet-care-ivory-delta.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgPetcare,
    techs: ['React', 'JavaScript', 'CSS3', 'Mobile First'],
  },
  {
    id: 3,
    title: 'Landing Page Barbearia',
    category: 'landing',
    tag: 'Marketing & UI',
    featured: true,
    description: 'Página comercial de alto impacto para captação de clientes, apresentação de serviços e links de agendamento.',
    fullDescription: 'Landing page focada em branding moderno para o setor de barbearia. Utiliza paleta de cores sofisticada, tipografia marcante, seção de depoimentos e chamadas diretas para conversão via WhatsApp.',
    link: 'https://barbershop-six-sigma.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgLandingBarbearia,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
  },
  {
    id: 4,
    title: 'Gerenciador Barbearia (Django)',
    category: 'backend',
    tag: 'Python & Django',
    featured: true,
    description: 'Painel administrativo robusto para controle de agendamentos, lista de clientes e rotina operacional.',
    fullDescription: 'Aplicação web completa construída com Django no backend. Implementa autenticação, banco de dados relacional, controle de serviços, status de agendamentos e rotinas para gestão do dia a dia.',
    link: 'https://github.com/Edson468/app_barbearia',
    githubLink: 'https://github.com/Edson468/app_barbearia',
    image: imgGerenciadorBarbearia,
    techs: ['Python', 'Django', 'SQLite', 'Admin Panel'],
  },
  {
    id: 5,
    title: 'BarberApp',
    category: 'apps',
    tag: 'App de Gestão',
    featured: false,
    description: 'Sistema interativo para reservas e gerenciamento de horários em barbearias de forma simples.',
    fullDescription: 'Aplicação desenvolvida para modernizar o processo de agendamento, permitindo que clientes escolham profissionais e horários disponíveis de maneira autônoma e rápida.',
    link: 'https://github.com/Edson468/BarberApp',
    githubLink: 'https://github.com/Edson468/BarberApp',
    image: imgBarberApp,
    techs: ['React', 'JavaScript', 'State Management'],
  },
  {
    id: 6,
    title: 'Farmácia de Manipulação',
    category: 'landing',
    tag: 'Catálogo & UI',
    featured: false,
    description: 'Interface limpa e intuitiva voltada para apresentação de fórmulas manipuladas, bem-estar e produtos.',
    fullDescription: 'Website institucional com apresentação de fórmulas personalizadas, layout harmonioso focado em saúde e clareza de informações com navegação direta para atendimento.',
    link: 'https://farmacia-de-manipula-o.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgFarmacia,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
  },
  {
    id: 7,
    title: 'Fanpage One Piece',
    category: 'landing',
    tag: 'Cultura Pop',
    featured: false,
    description: 'Projeto criativo e temático com efeitos visuais e apresentação imersiva do universo dos animes.',
    fullDescription: 'Interface personalizada e dinâmica para a comunidade de fãs de One Piece. Traz cards temáticos de personagens, trilha visual customizada e responsividade para dispositivos móveis.',
    link: 'https://fanpage-one-piece.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgFanpage,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Design Temático'],
  },
  {
    id: 8,
    title: 'New To-Do List',
    category: 'apps',
    tag: 'Produtividade',
    featured: false,
    description: 'Gerenciador moderno de tarefas diárias com persistência local e interface minimalista sem distrações.',
    fullDescription: 'Aplicação focada em produtividade pessoal. Permite criação, filtragem por status (pendentes/concluídas), remoção e armazenamento automático no LocalStorage do navegador.',
    link: 'https://new-todo-list-ten.vercel.app/',
    githubLink: 'https://github.com/Edson468',
    image: imgNewToDo,
    techs: ['React', 'Tailwind CSS', 'LocalStorage'],
  },
  {
    id: 9,
    title: 'To-Do List Clássico',
    category: 'apps',
    tag: 'Utilitário',
    featured: false,
    description: 'Lista de tarefas clássica construída com foco em manipulação pura do DOM e lógica JavaScript.',
    fullDescription: 'Projeto essencial para domínio dos fundamentos de JavaScript: escuta de eventos, mutação do DOM, validação de campos vazios e persistência rápida de dados.',
    link: 'https://edson468.github.io/To-do-List/',
    githubLink: 'https://github.com/Edson468/To-do-List',
    image: imgToDoList,
    techs: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
  },
  {
    id: 10,
    title: 'Tabuada Interativa',
    category: 'apps',
    tag: 'Educação & Lógica',
    featured: false,
    description: 'Aplicação didática para cálculo dinâmico da tabuada matemática com feedback em tempo real.',
    fullDescription: 'Ferramenta interativa de aprendizado matemático onde o usuário escolhe qualquer número e recebe instantaneamente a progressão matemática explicada de forma visual.',
    link: 'https://edson468.github.io/Tabuada-Interativa/',
    githubLink: 'https://github.com/Edson468/Tabuada-Interativa',
    image: imgTabuada,
    techs: ['JavaScript', 'HTML5', 'CSS3', 'Gamificação'],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterButtons = [
    { id: 'all', label: 'Todos (10)' },
    { id: 'featured', label: 'Destaques' },
    { id: 'apps', label: 'Web Apps & E-commerce' },
    { id: 'backend', label: 'Python & Backend' },
    { id: 'landing', label: 'Landing Pages & UI' },
  ];

  const filteredProjects = allProjects.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return item.featured;
    return item.category === filter;
  });

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden bg-slate-900/30 border-y border-white/5">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <FolderGit2 size={13} />
              Portfólio em Ação
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Projetos Desenvolvidos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Aplicações reais, funcionais e projetadas com foco em design moderno, código limpo e valor para o usuário.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>10 projetos ativos & documentados</span>
          </div>
        </div>

        {/* Filtros em Abas */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                  : 'border border-white/5 bg-slate-900/60 text-slate-400 hover:border-white/10 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Footer da Seção com Convite */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400">
            Quer ver mais códigos ou colaborar em um projeto open-source?
          </p>
          <a
            href="https://github.com/Edson468"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-5 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white"
          >
            <GithubIcon size={16} />
            Visitar meu GitHub (@Edson468)
          </a>
        </div>

      </div>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-slate-900 p-6 shadow-2xl md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Fechar detalhes"
              >
                <X size={20} />
              </button>
            </div>

            {/* Imagem Ampliada do Projeto */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover object-top max-h-[380px]"
              />
            </div>

            <div className="mt-5 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedProject.fullDescription || selectedProject.description}</p>
            </div>

            {/* Tecnologias */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tecnologias Utilizadas
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.techs?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-mono text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ações */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  <span>Acessar Projeto</span>
                  <ExternalLink size={15} />
                </a>
              )}

              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-white/30 hover:bg-slate-700 hover:text-white"
                >
                  <GithubIcon size={15} />
                  <span>Ver Código no GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}