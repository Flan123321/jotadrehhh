// src/Roadmap.jsx (MODIFICADO con fondo fondoroad.jpg)

import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaMicrophone, FaUsers, FaPlayCircle, FaBroadcastTower, FaCompactDisc 
} from 'react-icons/fa';

// --- DATOS (sin cambios) ---
const milestones = [
  { year: '2021', title: 'Primer Single', description: '"Noche Sin Fin" llega a las plataformas digitales.', icon: <FaMicrophone /> },
  { year: '2022', title: 'Primera Colaboración', description: 'Colabora con Artista Invitado en "Fuego Cruzado".', icon: <FaUsers /> },
  { year: '2023', title: 'Primeras 100K Vistas', description: 'El videoclip de "Subiendo" rompe la barrera.', icon: <FaPlayCircle /> },
  { year: '2024', title: 'Primer Show en Vivo', description: 'Sold out en el Club "La Sombra".', icon: <FaBroadcastTower /> },
  { year: '2025', title: 'EP Debut', description: '"RENACER", el primer EP, consolida su sonido.', icon: <FaCompactDisc /> },
];

// --- Sub-componente (sin cambios) ---
function RoadmapItem({ milestone, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const isOdd = index % 2 !== 0;
  const animationBase = 'opacity-0';
  const mobileAnimation = 'translate-x-full';
  const desktopAnimation = isOdd ? 'md:translate-x-full' : 'md:-translate-x-full';
  const animationActive = 'opacity-100 translate-x-0';

  return (
    <div ref={ref} className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block order-1 w-5/12"></div>
      <div className={`z-20 flex items-center order-1 bg-zinc-800 shadow-xl w-12 h-12 rounded-full absolute left-4 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 transition-all duration-1000 ease-in-out ${inView ? 'scale-110 opacity-100 shadow-lg shadow-red-500/50' : 'scale-0 opacity-0'}`}>
        <h3 className="mx-auto font-semibold text-lg text-red-500">{milestone.year}</h3>
      </div>
      <div className={`order-1 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 transition-all duration-1000 ease-in-out ${inView ? `${animationActive} border-red-600/50 shadow-red-900/30` : `${animationBase} ${mobileAnimation} ${desktopAnimation}`}`}>
        <div className="text-red-500 text-3xl mb-3">{milestone.icon}</div>
        <h4 className="font-bold text-lg text-white mb-1">{milestone.title}</h4>
        <p className="text-sm text-gray-400">{milestone.description}</p>
      </div>
    </div>
  );
}

// --- Componente Principal (con fondo fondoroad.jpg) ---
function Roadmap() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"], 
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    // Sección con IMAGEN DE FONDO
    <section 
      id="bio" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        // Asumimos que la imagen está en 'public/images/fondoroad.jpg'
        backgroundImage: 'url("/images/fondoroad.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Efecto parallax
      }}
    >
      
      {/* Capa oscura (Overlay) para legibilidad */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 z-0"
      ></div>

      {/* Contenedor principal del contenido (debe tener 'relative' y 'z-10') */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-center text-4xl font-extrabold uppercase text-white mb-16">
          La <span className="text-red-500">Historia</span>
        </h2>
        
        <div ref={scrollRef} className="relative wrap overflow-hidden p-10 h-full">
          {/* Línea 1: El fondo gris */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 bg-zinc-700 h-full w-1"></div>

          {/* Línea 2: La línea ROJA animada */}
          <motion.div 
            className="
              absolute left-4 md:left-1/2 -translate-x-1/2 
              bg-red-600 h-full
              w-1.5
              shadow-lg shadow-red-500/50
              origin-top 
            "
            style={{ scaleY }} 
          ></motion.div>

          {milestones.map((milestone, index) => (
            <RoadmapItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;