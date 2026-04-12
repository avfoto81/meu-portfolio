"use client";
import React from "react";

export default function Navbar() {
  // Função para scroll suave manual (garante que funcione em todos os browsers)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Espaço para não cobrir o topo da seção com a navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200/50 h-16 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-6">
        
        {/* Logo / Nome - Clicar aqui volta ao topo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-[#1d1d1f] text-xl cursor-pointer"
        >
          André Luiz
        </button>

        {/* Links de Navegação */}
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <button 
            onClick={() => scrollToSection('projetos')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Projetos
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Sobre
          </button>
        </div>

      </div>
    </nav>
  );
}