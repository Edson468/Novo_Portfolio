import React, { useState, useEffect } from 'react';
import whatsappToggle from '../assets/whatsapptoogle.png';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(contactSection);

    // Oculta tooltip inicial após 8 segundos automaticamente se o usuário não interagir
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tooltip Convidativo */}
      {showTooltip && (
        <div className="hidden sm:flex items-center rounded-2xl border border-white/10 bg-slate-900/95 px-3.5 py-2 text-xs font-semibold text-slate-100 shadow-2xl backdrop-blur-xl animate-float-slow">
          <span>Olá! Vamos conversar? 👋</span>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
        </div>
      )}

      {/* Botão com a imagem original mantida */}
      <a
        href="https://wa.me/5585987855611"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Fale comigo no WhatsApp"
      >
        <img
          src={whatsappToggle}
          alt="WhatsApp Edson Carvalho"
          className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:rotate-6"
        />

        {/* Indicador de Status Online */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
        </span>
      </a>
    </div>
  );
}
