import React from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group cursor-pointer">
      <div className="h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">Sem imagem</div>
        )}
      </div>
      <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-slate-600 mt-2 flex-grow leading-relaxed">{description}</p>
      <a 
        href={link || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 flex items-center justify-center gap-2 bg-slate-50 text-slate-700 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all border border-slate-100 hover:border-blue-600"
      >
        Ver Projeto <ExternalLink size={18} />
      </a>
    </div>
  );
}