// src/Hero.jsx (CORREGIDO - Ajuste de posición de fondo para móvil)

import React from 'react';

function Hero() {
  return (
    <section 
      id="home"
      className="
        min-h-[700px] h-[80vh] // <-- Usamos min-h para forzar un tamaño mínimo visible
        md:h-[90vh]            
        flex items-center justify-center text-center p-4 relative
          bg-cover bg-center 
      "
      style={{ 
        // Dejamos solo las propiedades de URL y attachment
        backgroundImage: 'url("/images/jotadreh-background.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Capa oscura (Overlay) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      {/* Contenido del Hero */}
      <div className="z-20 relative text-white">
        
        {/* Logo PNG Grande con animación y contorno LED */}
        <div className="logo-wrap mx-auto mb-4">
          <img
            src="/images/jotadreh-logo.png"
            alt="JotaDreh Logo"
            className="logo-img w-3/4 max-w-xs md:max-w-md mx-auto"
          />
        </div>

        <p className="
          text-lg md:text-xl text-gray-300 mb-6 
          font-light
        ">
          "Si llegamos" - Ya Disponible
        </p>
        <a 
          target='_blank'
          href="https://youtu.be/i8ehgzq2ZjY?si=-OrtuKH6BqMVyTwi" 
          className="
            bg-red-600              
            text-white              
            font-bold py-3 px-8 rounded-full
            uppercase text-sm tracking-wider
            hover:bg-red-700        
            transition duration-300
            shadow-md shadow-red-900/50 
          "
        >
          Escuchar Ahora
        </a>
      </div>
    </section>
  );
}

export default Hero;