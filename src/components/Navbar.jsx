import React, { useState, useEffect } from "react";
import { Terminal, Briefcase, User, Mail, Code2 } from "lucide-react";

export default function Navbar() {
  // Estado para controlar se a tela foi rolada para baixo. 
  // Usado para mudar o estilo do menu (deixá-lo menor e com fundo translúcido).
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Função que verifica a posição da barra de rolagem (scrollY)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Se rolou mais de 50 pixels, ativa o estado
      } else {
        setScrolled(false); // Se estiver no topo, desativa
      }
    };

    // Adiciona o 'espião' (listener) que roda a função toda vez que o usuário faz scroll
    window.addEventListener("scroll", handleScroll);
    
    // Limpeza: remove o listener se o componente for desmontado para economizar memória
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'p-4' : 'p-6'}`}>
      <div className={`max-w-6xl mx-auto flex justify-between items-center transition-all duration-300 px-6 py-3 rounded-2xl border ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-lg border-white/20 shadow-xl' 
          : 'bg-white/10 backdrop-blur-md border-white/10'
      }`}>
        <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Terminal className="text-blue-400" size={28} />
          <span>Edson<span className="text-blue-400">Carvalho</span></span>
        </a>
        
        <ul className="flex gap-6 font-medium text-white/90">
          <li>
            <a href="#about" className="hover:text-blue-400 transition flex items-center gap-2">
              <User size={18} /> Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition flex items-center gap-2">
              <Code2 size={18} /> Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition flex items-center gap-2">
              <Briefcase size={18} /> Exp.
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition flex items-center gap-2">
              <Briefcase size={18} /> Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition flex items-center gap-2">
              <Mail size={18} /> Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}