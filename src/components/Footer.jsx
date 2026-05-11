import React from 'react';
import { Heart, ArrowUp, Link2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Marca e Descrição */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Edson<span className="text-blue-400"> Carvalho</span></h2>
            <p className="text-slate-400 mt-2">Transformando ideias em experiências digitais modernas.</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a href="https://wa.me/5585987855611" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-green-500/20 transition-all duration-300 shadow-lg hover:-translate-y-1">
              <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/edson-carvalho-213b051b1/" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:-translate-y-1">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/Edson468" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg hover:-translate-y-1">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6 object-contain bg-white rounded-full" />
            </a>
            {/* Gmail */}
            <a href="mailto:edson4518@gmail.com" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-red-500/20 transition-all duration-300 shadow-lg hover:-translate-y-1">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail" className="w-6 h-6 object-contain" />
            </a>
          </div>

          {/* Botão Voltar ao Topo */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all cursor-pointer group border border-white/10"
            title="Voltar ao topo"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="h-px bg-white/10 w-full mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p>Desenvolvido por Edson Carvalho</p>
        </div>
      </div>
    </footer>
  );
}