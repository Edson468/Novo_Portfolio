import React, { useState, useEffect } from "react";
import { Terminal, Briefcase, User, Mail, Code2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Novo estado para o menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links para evitar repetição de código
  const navLinks = [
    { name: "Sobre", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { name: "Exp.", href: "#experience", icon: <Briefcase size={18} /> },
    { name: "Projetos", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contato", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'p-2 md:p-4' : 'p-4 md:p-6'}`}>
      <div className={`max-w-6xl mx-auto px-6 py-3 rounded-2xl border transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-white/20 shadow-xl' 
          : 'bg-white/10 backdrop-blur-md border-white/10'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Terminal className="text-blue-400" size={28} />
            <span>Edson<span className="text-blue-400">Carvalho</span></span>
          </a>

          {/* Botão Hambúrguer (Apenas Mobile) */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6 font-medium text-white/90">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-400 transition flex items-center gap-2">
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile (Dropdown) */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-4 pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                  className="text-white/90 hover:text-blue-400 transition flex items-center gap-3 py-2"
                >
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}