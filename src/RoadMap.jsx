// src/RoadMap.jsx (VERSIÓN CORREGIDA PARA VITE Y GH-PAGES)

import React, { useState, useEffect } from 'react';

// --- CONFIGURACIÓN DE RUTA BASE ---
// Usamos el nombre del repositorio ('jotadreh') como prefijo para que las imágenes 
// carguen correctamente en el subdirectorio de GitHub Pages (https://.../jotadreh/).
const BASE_PATH = '/jotadreh'; 
// Si fuera un dominio raíz (ej: Vercel en dominio propio), usarías const BASE_PATH = '';

// --- DEFINICIÓN DE IMÁGENES (Usamos 'const' con la RUTA BASE) ---
// NOTA: Los archivos estáticos en la carpeta 'public' se acceden como URL, no como módulos JS.
const imgLasGanas = `${BASE_PATH}/images/roadmap/lasganas.png`;
const imgSola = `${BASE_PATH}/images/roadmap/solaydisfrutando.png`;
const imgDebut = `${BASE_PATH}/images/roadmap/1.png`;

// NOTA: Ajusté la ruta de imgSofo asumiendo que está en /public/images/
const imgSofo = `${BASE_PATH}/images/jotadreh-background.jpg`; 
const bgImage = `${BASE_PATH}/images/roadmap/DSC05211.jpg`; 

const arrowRightIcon = `${BASE_PATH}/images/icons/arrow-jotadreh-red-right.png`; 
const arrowLeftIcon = `${BASE_PATH}/images/icons/arrow-jotadreh-red-left.png`; 

// --- Tus Hitos (Sin cambios) ---
const milestones = [
  {
    year: '2023',
    title: '"Las Ganas" / +1K Vistas',
    description: 'El primer tema marca el inicio del camino, superando las mil reproducciones rápidamente.',
    image: imgLasGanas 
  },
  {
    year: '2024',
    title: 'EP "Sola y Disfrutando" ft. Flowrs',
    description: 'Tras cuatro sencillos, lanza su primer EP colaborativo, lleno de sentimiento y experiencias.',
    image: imgSola 
  },
  {
    year: '2024',
    title: 'Debut en Vivo',
    description: 'Primera presentación en un bar pequeño, con una energía inolvidable ante ~20 personas.',
    image: imgDebut 
  },
  {
    year: '2025',
    title: 'Conexión Masiva - Parque Sofo',
    description: 'Show significativo el 18 de septiembre en Temuco, conectando por primera vez con un público más grande.',
    image: imgSofo 
  },
];

// --- Custom Hook para detectar móvil (Sin cambios) ---
const useIsMobile = (breakpoint = 768) => {
  const checkIsMobile = () => typeof window !== 'undefined' && window.innerWidth < breakpoint;
  
  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

/**
 * Componente Principal (Sin cambios estructurales)
 */
function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const isMobile = useIsMobile();

  // --- Constantes dinámicas adaptadas a móvil (Sin cambios) ---
  const TOTAL_SLIDES = milestones.length;
  const SLIDE_VIEWPORT_WIDTH = isMobile ? 90 : 70; 
  const SLIDE_WIDTH_PERCENT = isMobile ? 85 : 45; 
  const SLIDE_HEIGHT_FACTOR = 0.5625; 
  const PERSPECTIVE = 1200; 
  const Z_DISTANCE_INACTIVE = isMobile ? 200 : 350; 
  const ROTATION_ANGLE_INACTIVE = isMobile ? 30 : 25; 
  const TRANSLATE_X_PERCENT = isMobile ? 90 : 75; 
  const MARGIN_TOP = isMobile ? '30px' : '60px'; 

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="bio"
      className="relative w-full h-[90vh] sm:h-[80vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* CAPA DE OSCURIDAD SOBRE EL FONDO */}
      <div className="absolute inset-0 bg-black/80 z-0" />
      
      {/* TÍTULO */}
      <div className="absolute top-8 z-20 px-4 text-center">
        <h2 className="
          text-4xl sm:text-5xl md:text-6xl font-gta-heading uppercase
          drop-shadow-[4px_4px_3px_rgba(0,0,0,0.9)]
        ">
          <span className='text-red-600'>El Road de</span> <span className="text-white">Jotadreh</span>
        </h2>
      </div>
      
      {/* 1. EL CONTENEDOR 3D (El "Escenario") */}
      <div 
        className="relative flex items-center justify-center z-10"
        style={{ 
          perspective: `${PERSPECTIVE}px`,
          width: `${SLIDE_VIEWPORT_WIDTH}vw`, 
          height: `${SLIDE_VIEWPORT_WIDTH * SLIDE_HEIGHT_FACTOR}vw`, 
          maxHeight: '70%', 
          marginTop: MARGIN_TOP,
        }}
      >
        {/* 2. EL CAROUSEL (El grupo de slides que rota) */}
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${Z_DISTANCE_INACTIVE}px)`,
            transition: 'transform 0.8s ease-in-out',
          }}
        >
          {/* 3. LOS SLIDES */}
          {milestones.map((milestone, index) => {
            const diff = index - activeIndex;
            
            const style = {
              transform: `
                translateX(${diff * TRANSLATE_X_PERCENT}%) 
                translateZ(${diff === 0 ? 0 : -Z_DISTANCE_INACTIVE}px) 
                rotateY(${diff === 0 ? 0 : (diff > 0 ? -ROTATION_ANGLE_INACTIVE : ROTATION_ANGLE_INACTIVE)}deg)
              `,
              opacity: diff === 0 ? 1 : 0.6, 
              filter: 'none', 
              position: 'absolute',
              width: `${SLIDE_WIDTH_PERCENT}%`, 
              height: '100%', 
              transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out, filter 0.8s ease-in-out',
              zIndex: diff === 0 ? 10 : (diff < 0 ? 8 + diff : 8 - diff), 
              pointerEvents: diff === 0 ? 'auto' : 'none', 
              left: `${(100 - SLIDE_WIDTH_PERCENT) / 2}%`, 
            };

            return (
              <div 
                key={index} 
                style={style} 
                className={`
                  bg-black/80 rounded-lg overflow-hidden shadow-2xl shadow-black/50 
                  relative 
                  border-2 border-ferrari-red 
                  ${diff === 0 
                      ? 'shadow-[0_0_30px_rgba(230,0,35,0.9)]' 
                      : 'opacity-70' 
                  }
                `}
              >
                {/* Imagen del Slide */}
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-full object-cover"
                />
                {/* Info sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-2 sm:p-6">
                  <span className="text-ferrari-red font-gta-heading text-2xl sm:text-4xl leading-none">{milestone.year}</span>
                  <h3 className="text-xl sm:text-3xl font-bold mt-1 sm:mt-2 font-gta-heading uppercase">{milestone.title}</h3>
                  <p className="hidden sm:block text-gray-300 text-xs sm:text-sm mt-2 max-w-sm">{milestone.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CONTROLES (Botones HTML) */}
      <div className="absolute w-full flex justify-between px-2 sm:px-8 z-20 top-1/2 -translate-y-1/2">
        <button 
          onClick={goToPrevious}
          className="
            bg-black/50 border-2 border-ferrari-red p-2 rounded-full 
            backdrop-blur-sm transition-all duration-300 
            hover:bg-ferrari-red hover:shadow-lg hover:shadow-ferrari-red/60
            w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer relative
          "
        >
          <img src={arrowLeftIcon} alt="Previous" className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
        <button 
          onClick={goToNext}
          className="
            bg-black/50 border-2 border-ferrari-red p-2 rounded-full 
            backdrop-blur-sm transition-all duration-300 
            hover:bg-ferrari-red hover:shadow-lg hover:shadow-ferrari-red/60
            w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer relative
          "
        >
          <img src={arrowRightIcon} alt="Next" className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
}

export default Roadmap;