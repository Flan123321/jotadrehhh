// src/Hero.jsx (CORRECCIÓN FINAL COMPLETA: Usando <img> para controlar el zoom/recorte)

import React from 'react';

function Hero() {
  return (
    <section 
      id="home"
      className="
        h-[80vh]               
        md:h-[90vh]            
        flex items-center justify-center text-center p-4 relative
      "
      // ELIMINAMOS TODOS LOS ESTILOS CSS BACKGROUND: backgroundImage, backgroundAttachment, etc.
    >
      
      {/* ¡NUEVO! IMAGEN <img> COMO FONDO, USANDO object-cover */}
      {/* Esto nos da un control preciso con object-position */}
      <img
          src="/images/jotadreh-background.jpg" // Ruta absoluta que ya funciona
          alt="Fondo del Hero"
          className="absolute inset-0 w-full h-full object-cover object-center" 
          style={{ backgroundAttachment: 'fixed' }} // Mantenemos el efecto parallax
      />

      {/* Capa oscura (Overlay) - Ahora con z-10 para quedar EN MEDIO de la imagen y el contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      {/* Contenido del Hero - Ahora con z-20 para quedar POR ENCIMA de la imagen y el overlay */}
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