import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { X } from "lucide-react";

// Importando as imagens dos projetos
import imgBarberApp from "../assets/BarberApp.png";
import imgFanpage from "../assets/Fanpage-One-Piece.png";
import imgFarmacia from "../assets/Farmacia-Manipulacao.png";
import imgGerenciadorBarbearia from "../assets/Gerenciador-Barbearia-Django.png";
import imgLandingBarbearia from "../assets/Landing-page-barbearia.png";
import imgMadeiraPura from "../assets/MadeiraPura.png";
import imgNewToDo from "../assets/New-To-Do-List.png";
import imgPetcare from "../assets/Petcare.png";
import imgToDoList from "../assets/To-DoList.png";
import imgTabuada from "../assets/tabuada-interativa.png";

// mainProjects: Projetos principais que ficam expostos diretamente na tela
const mainProjects = [
  {
    id: 1,
    title: "Madeira Pura",
    description: "Um projeto completo e moderno de e-commerce e catálogo de produtos.",
    link: "https://moveis-planejados-omega.vercel.app/",
    image: imgMadeiraPura
  },
  {
    id: 2,
    title: "Petcare",
    description: "Plataforma focada no cuidado e bem-estar de animais de estimação.",
    link: "https://pet-care-ivory-delta.vercel.app/",
    image: imgPetcare
  },
  {
    id: 3,
    title: "Landing Page Barbearia",
    description: "Página de conversão focada no segmento de barbearias.",
    link: "https://barbershop-six-sigma.vercel.app/",
    image: imgLandingBarbearia
  }
];

// modalProjects: Projetos secundários que ficam escondidos no botão "Ver outros Projetos"
const modalProjects = [
  { id: 4, title: "BarberApp", description: "Aplicativo web moderno para agendamentos em barbearias.", link: "https://github.com/Edson468/BarberApp", image: imgBarberApp },
  { id: 5, title: "Gerenciador Barbearia (Django)", description: "Sistema de gestão completo para barbearias desenvolvido com Python e Django.", link: "https://github.com/Edson468/app_barbearia", image: imgGerenciadorBarbearia },
  { id: 6, title: "Farmácia de Manipulação", description: "Interface intuitiva para sistemas de farmácia.", link: "https://farmacia-de-manipula-o.vercel.app/", image: imgFarmacia },
  { id: 7, title: "Fanpage One Piece", description: "Uma página interativa dedicada aos fãs de One Piece.", link: "https://fanpage-one-piece.vercel.app/", image: imgFanpage },
  { id: 8, title: "New To-Do List", description: "Gerenciador de tarefas atualizado com novas funcionalidades.", link: "https://new-todo-list-ten.vercel.app/", image: imgNewToDo },
  { id: 9, title: "To-Do List Clássico", description: "Versão clássica e funcional de uma lista de tarefas.", link: "https://edson468.github.io/To-do-List/", image: imgToDoList },
  { id: 10, title: "Tabuada Interativa", description: "Aplicativo interativo para auxiliar no aprendizado matemático.", link: "https://edson468.github.io/Tabuada-Interativa/", image: imgTabuada },
];

export default function Projects() {
  // Estado que controla se a janela modal (popup) está aberta (true) ou fechada (false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
      <h3 className="text-3xl font-bold mb-10 text-center">Meus Projetos Recentes</h3>
      
      {/* Grid que exibe os projetos principais dinamicamente usando map */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Botão que altera o estado isModalOpen para true, ativando a janela modal */}
      <div className="mt-16 text-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 cursor-pointer"
        >
          Ver outros Projetos
        </button>
      </div>

      {/* Janela Modal (Popup) */}
      {/* Só é renderizada na tela se isModalOpen for true */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-slate-50 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Arquivo de Projetos</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors cursor-pointer text-slate-500">
                <X size={24} />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modalProjects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}