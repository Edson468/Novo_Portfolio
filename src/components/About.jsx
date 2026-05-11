import React from 'react';
import { User, Code2, GraduationCap, Target } from 'lucide-react';
import minhaFoto from '../assets/MinhaImagem.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem/Moldura */}
          <div className="relative group cursor-pointer">
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={minhaFoto} 
                alt="Foto de Perfil do Edson Carvalho" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Texto e Detalhes */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <User className="text-blue-600" /> Sobre Mim
            </h3>
            <div className="text-slate-600 space-y-4 mb-8 text-lg leading-relaxed">
              <p>
                Olá, eu sou <strong>Edson Carvalho</strong>! Tenho 39 anos e sou um entusiasta da tecnologia em constante evolução. 
                Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Facint, onde venho consolidando minha 
                base teórica e prática para me tornar um profissional completo na área.
              </p>
              <p>
                Além da faculdade, busco me especializar por meio de cursos e workshops. Participei da Trilha de Desenvolvimento Web da Rocketseat e 
                workshops da EBAC sobre QA. Possuo certificações em Teste de Software Manual e estou me aprofundando em tecnologias modernas e na linguagem <strong>Python</strong>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}