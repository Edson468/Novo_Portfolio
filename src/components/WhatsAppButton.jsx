import React, { useState, useEffect } from 'react';
import whatsappToggle from '../assets/whatsapptoogle.png';

const WhatsAppButton = () => {
  // Estado que define se o botão flutuante deve aparecer na tela
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Busca a seção de contatos pelo ID
    const contactSection = document.getElementById('contact');
    
    if (!contactSection) return;

    // IntersectionObserver serve para "observar" se um elemento (neste caso, a seção de contato)
    // entrou ou saiu do campo de visão (tela) do usuário.
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Se a seção de contato estiver visível na tela (isIntersecting), 
        // invertemos o valor para FALSE (oculta o botão flutuante).
        // Se não estiver na tela, fica TRUE (mostra o botão).
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null, // Usa a viewport (tela inteira) como área de detecção
        threshold: 0.1, // Dispara a função quando apenas 10% da seção de contatos aparece na tela
      }
    );

    // Manda o observer começar a monitorar a seção de contato
    observer.observe(contactSection);

    // Função de limpeza: para de observar se o botão for removido da tela
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <a
      href="https://wa.me/5585987855611"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 group hover:-translate-y-1 hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Fale comigo no WhatsApp"
    >
      <img 
        src={whatsappToggle} 
        alt="WhatsApp" 
        className="w-16 h-16 drop-shadow-2xl" 
      />
      {/* Bolinha verde indicando "online" */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
