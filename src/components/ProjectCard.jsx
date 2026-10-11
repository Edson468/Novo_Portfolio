import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({
  title,
  description,
  link,
  githubLink,
  image,
  tag,
  techs = [],
  featured = false,
  onOpenDetails,
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? 'border-blue-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-xl shadow-blue-500/5 hover:border-blue-400/60 hover:shadow-blue-500/20'
          : 'border-white/10 bg-slate-900/60 shadow-lg backdrop-blur-md hover:border-white/25 hover:bg-slate-900/90 hover:shadow-2xl'
      }`}
    >
      {/* Container da Imagem com Aspect Ratio Preservado */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        {image ? (
          <img
            src={image}
            alt={`Demonstração do projeto ${title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-mono text-slate-500">
            Preview Indisponível
          </div>
        )}

        {/* Gradiente sutil sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Tag de Destaque / Categoria no Topo */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {tag && (
            <span className="rounded-full border border-blue-400/30 bg-blue-600/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-md">
              {tag}
            </span>
          )}

          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/20 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
              <Sparkles size={11} />
              Destaque
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-400">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-300">
          {description}
        </p>

        {/* Tags de Tecnologias */}
        {techs && techs.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techs.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/5 bg-slate-950/70 px-2 py-0.5 text-[10px] font-mono text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Ações / Links */}
        <div className="mt-5 flex items-center gap-2 pt-3 border-t border-white/10">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/50"
            >
              <span>Ver Projeto</span>
              <ExternalLink size={14} />
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Código fonte de ${title} no GitHub`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-800/80 px-3 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/30 hover:bg-slate-700 hover:text-white"
            >
              <GithubIcon size={15} />
            </a>
          )}

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Detalhes
            </button>
          )}
        </div>
      </div>
    </article>
  );
}