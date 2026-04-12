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
      // Removemos o initial/whileInView para o carrossel ter controle total do movimento
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      // No carrossel, em vez de subir (Y), vamos usar um leve Scale para dar profundidade
      whileHover={{ scale: 1.02 }} 
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}

      className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 group cursor-pointer overflow-hidden relative w-full h-full"
    >
      {/* Container do Visual */}
      <div className="relative w-full h-64 bg-gray-200 rounded-[2rem] overflow-hidden mb-8 border border-gray-100">
        <img
          src={thumbnail}
          alt={title}
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

      {/* Textos */}
      <div className="relative z-20">
        <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{title}</h3>
        <p className="text-[#86868b] mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}