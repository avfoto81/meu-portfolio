"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  thumbnail: string;
  videoSrc: string;
}

export default function ProjectCard({ title, description, thumbnail, videoSrc }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }} // Scale bem sutil
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      // AJUSTE: Removemos p-8 e adicionamos pb-10. Fundo branco puro para imersão.
      className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 group cursor-pointer overflow-hidden relative w-full h-full flex flex-col"
    >
      {/* Container do Visual (Full-Width) */}
      {/* AJUSTE: h-80 para ficar mais alto, rounded-t para arredondar só em cima, mb-0 */}
      <div className="relative w-full h-80 bg-gray-100 overflow-hidden mb-0 rounded-t-[2.5rem] border-b border-gray-100">
        <img
          src={thumbnail}
          alt={title}
          // AJUSTE: object-cover garante que preencha sem distorcer
          className="w-full h-full object-cover"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.video
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-30"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Textos (Com Padding) */}
      {/* AJUSTE: flex-grow para empurrar o texto, px-8 para afastar das bordas */}
      <div className="relative z-20 p-8 flex-grow">
        <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{title}</h3>
        <p className="text-[#86868b] mt-3 leading-relaxed text-base">{description}</p>
      </div>
    </motion.div>
  );
}