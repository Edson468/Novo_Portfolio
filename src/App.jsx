import React, { useEffect } from 'react';
// Importação de todos os componentes (seções) que formam a página única do portfólio
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // O useEffect é executado uma única vez quando o site é carregado.
  // Aqui, ele adiciona a classe 'scroll-smooth' na tag <html> global.
  // Isso faz com que ao clicar em um link do menu, a tela deslize suavemente até a seção,
  // em vez de pular de uma vez.
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    // Container principal: ocupa no mínimo 100% da altura da tela (min-h-screen)
    // e usa 'relative' para que botões flutuantes se posicionem com base nele.
    <div className="min-h-screen relative">
      {/* Menu de navegação fixo no topo */}
      <Navbar />

      {/* Conteúdo Principal (cada componente é uma seção da página) */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Rodapé do site */}
      <Footer />
      
      {/* Botão Flutuante do WhatsApp (possui lógica própria para sumir perto do rodapé) */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
