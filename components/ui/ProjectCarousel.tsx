"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true,
     align: "center",
     containScroll: false, // Adicione isso para ele não tentar "prender" nas pontas
     duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  // Função para atualizar o ponto ativo
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const projects = [
    { title: "Site Igreja", description: "Portal completo com sistema de eventos.", thumbnail: "/site-iaci.jpg", videoSrc: "/Telas_video.mp4" },
    { title: "Institutional Site", description: "Site moderno e responsivo.", thumbnail: "/Telas_site_2.jpg", videoSrc: "/Telas_video.mp4" },
    { title: "Conversor PDF JPG", description: "Conversor de PDF para JPG.", thumbnail: "/Macbook.jpg", videoSrc: "/Tela_conversor.mp4" },
  ];

  return (
    <div className="w-full py-10">
      {/* Removemos qualquer padding lateral aqui para o cálculo ser 100% da tela */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex -ml-4"> {/* O margin-left negativo compensa o px-4 dos cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              // flex-[0_0_80%] deixa 10% de cada lado para os cards vizinhos no mobile
              // md:flex-[0_0_600px] mantém o tamanho fixo no PC
              className="flex-[0_0_80%] md:flex-[0_0_600px] min-w-0 pl-4 snap-center"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* OS PONTOS (INDICADORES ESTILO APPLE) */}
      {/* SEÇÃO DE CONTROLES (PONTOS + BOTÃO) */}
      <div className="flex justify-center items-center gap-4 mt-10">

        {/* Container dos Pontos */}
        <div className="flex gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-500 rounded-full h-2 ${index === selectedIndex
                  ? "w-8 bg-gray-800"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* BOTÃO DE CONTROLE (Igual ao da Apple) */}
        <button
          onClick={() => {
            const autoplay = emblaApi?.plugins().autoplay;
            if (!autoplay) return;
            autoplay.isPlaying() ? autoplay.stop() : autoplay.play();
          }}
          className="ml-2 p-2 bg-gray-200/50 hover:bg-gray-200 rounded-full transition-colors group"
          title="Pausar/Reproduzir"
        >
          {/* O ícone muda dependendo se está rodando ou não */}
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

      </div>
    </div>
  );
}