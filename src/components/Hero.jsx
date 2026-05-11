import React from 'react';
import { Download } from 'lucide-react';
export default function Hero() {
  return (
    <header id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Imagem de Fundo em Tela Cheia */}
      <img 
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&auto=format&fit=crop&q=80" 
        alt="Ambiente de desenvolvimento com código" 
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
      />

      {/* Camada de sobreposição (Overlay) com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/40 to-slate-900/80 bg-[length:200%_200%] animate-gradient-bg"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Olá, sou Edson Carvalho <br className="hidden md:block" />
          <span className="text-blue-400">Desenvolvedor Fullstack / QA</span>
        </h2>
        <p className="text-lg text-slate-200 max-w-4xl mx-auto mb-8 drop-shadow-md leading-relaxed">
          Sou um profissional em transição de carreira, migrando da área administrativa, onde atuei como Analista de Backoffice, para o universo da tecnologia. Atualmente, foco meu desenvolvimento em Front-end, enquanto aprofundo conhecimentos em Python para automatizações e me especializo em QA. Busco unir a visão analítica da minha bagagem anterior com a lógica de programação para entregar softwares de alta qualidade e interfaces intuitivas.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer inline-flex items-center justify-center">
            Ver Projetos
          </a>
          <a href="/Curriculo_Edson_Carvalho.pdf.pdf" download="Curriculo_Edson_Carvalho.pdf" className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2">
            Baixar CV <Download size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}