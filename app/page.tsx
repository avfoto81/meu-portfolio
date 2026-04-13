"use client";

import { AiFillLinkedin, AiFillGithub, AiOutlineFileText, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
// Mudamos o @/ para ../ para o Next.js encontrar os arquivos com certeza
import Navbar from "../components/ui/Navbar";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectCarousel from "../components/ui/ProjectCarousel";

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }} // Começa invisível e 30px abaixo
    whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela, sobe e aparece
    viewport={{ once: true, margin: "-100px" }} // "once: true" faz animar só uma vez
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0.21, 0.47, 0.32, 0.98] // Essa curva "Beziér" é idêntica à da Apple
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navbar />

      <div className="w-full pt-32 pb-20 px-6">
        <header className="mb-20 px-6 md:px-20 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f]">
              André Luiz <br />
              <span className="text-gray-400">Software Developer</span>
            </h1>
          </motion.div>
        </header>

        {/* Seção de Stacks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl mx-auto px-6"
        >
          {["Python", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js"].map((stack) => {
            // Mapeamento sutil de cores estilo Apple
            const colors: { [key: string]: string } = {
              "Python": "bg-blue-50 text-blue-600 border-blue-100",
              "React": "bg-cyan-50 text-cyan-600 border-cyan-100",
              "TypeScript": "bg-indigo-50 text-indigo-600 border-indigo-100",
              "JavaScript": "bg-yellow-50 text-yellow-700 border-yellow-100",
              "Tailwind CSS": "bg-sky-50 text-sky-600 border-sky-100",
              "Next.js": "bg-gray-50 text-gray-800 border-gray-200",
            };

            return (
              <span
                key={stack}
                className={`px-5 py-1.5 border rounded-full text-xs font-semibold shadow-sm transition-all hover:scale-105 cursor-default ${colors[stack] || "bg-gray-50 text-gray-600 border-gray-100"}`}
              >
                {stack}
              </span>
            );
          })}
        </motion.div>

        {/* SEÇÃO SOBRE MIM - FAIXA FULL-WIDTH ESTILO APPLE */}
        <section id="sobre" className="w-full bg-white border-y border-gray-100 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Lado da Foto - Anima primeiro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex justify-center relative order-2 md:order-1"
              >
                <div className="relative">
                  <img
                    src="/Andre_web_2.png"
                    alt="André Luiz"
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute -z-10 inset-0 bg-blue-100/30 rounded-full blur-3xl" />
                </div>
              </motion.div>

              {/* Lado do Texto - Anima com um pequeno atraso (delay) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="order-1 md:order-2"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-8 tracking-tight">
                  Sobre mim
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-[#86868b] leading-relaxed">
                  <p>
                    Sou Desenvolvedor Front-end com foco na construção de aplicações web modernas, performáticas e escaláveis. Atuo com React, TypeScript, JavaScript, Vite e Tailwind CSS, desenvolvendo interfaces responsivas e organizadas com base em boas práticas, componentização e Clean Code.
                  </p>
                  <p>
                    Atualmente, sigo na criação de aplicações web e trazendo soluções práticas, como o meu projeto **Resume Score**, que utiliza APIs inteligentes para análise estratégica de currículos.
                  </p>
                </div>

                {/* BOTÕES */}
                <div className="mt-12 flex flex-wrap gap-5">
                  <a
                    href="/Resume_andre_dev.pdf"
                    download="Resume_Andre_desenvolvedor.pdf"
                    className="px-10 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-95"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andreluizas/"
                    target="_blank"
                    className="px-10 py-4 border border-gray-200 text-[#1d1d1f] rounded-full font-semibold hover:bg-gray-50 transition-all active:scale-95"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE PROJETOS COM EFEITO DEGRADÊ NAS LATERAIS */}
        <section id="projetos" className="w-full mb-32 relative">

          {/* Título */}
          <FadeIn>
            <div className="px-6 md:px-20 max-w-[1440px] mx-auto mb-12">
              <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">Projetos</h2>
            </div>
          </FadeIn>

          {/* Container Principal com as Máscaras de Gradiente */}
          <div className="relative w-full overflow-hidden">

            {/* Degradê da ESQUERDA (Esconde o card surgindo) */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#f5f5f7] to-transparent pointer-events-none" />

            {/* O CARROSSEL */}
            <ProjectCarousel />

            {/* Degradê da DIREITA (Esconde o card sumindo) */}
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#f5f5f7] to-transparent pointer-events-none" />

          </div>
        </section>
        {/* SEÇÃO DE PROJETOS - TERMINA AQUI */}

        {/* RODAPÉ */}
        <footer className="border-t border-gray-200 pt-16 pb-12 bg-white/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

              {/* Lado Esquerdo: Info */}
              <div>
                <h3 className="text-xl font-bold text-[#1d1d1f]">André Luiz</h3>
                <p className="text-[#86868b] mt-2">Desenvolvedor Full-stack</p>
              </div>

              {/* Lado Direito: Links Sociais com Ícones */}
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/andreluizas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868b] hover:text-[#0077b5] transition-all duration-300 hover:scale-110"
                >
                  <AiFillLinkedin size={26} />
                </a>

                <a
                  href="https://github.com/avfoto81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868b] hover:text-[#1d1d1f] transition-all duration-300 hover:scale-110"
                >
                  <AiFillGithub size={26} />
                </a>

                <a
                  href="/curriculo.pdf" // O Next.js entende que deve buscar na pasta public
                  download="Curriculo_Andre_Luiz.pdf" // Força o download e define o nome do arquivo salvo
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868b] hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <AiOutlineFileText size={26} />
                </a>

                <a
                  href="https://wa.me/5521991259018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868b] hover:text-[#25D366] transition-all duration-300 hover:scale-110"
                >
                  <AiOutlineWhatsApp size={26} />
                </a>
              </div>

              {/* Linha Final de Copyright */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#86868b]">
                <p>© 2026 André Luiz. Todos os direitos reservados.</p>
                
              </div>
            </div>
          </div>
        </footer>

      </div >
    </main >
  );
}