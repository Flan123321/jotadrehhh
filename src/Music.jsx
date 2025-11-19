// src/Music.jsx (MODIFICADO con fondo mallas.jpg)

import React from 'react';

function Music() {
  return (
    // Sección con 'relative', 'overflow-hidden' y ahora con IMAGEN DE FONDO
    <section 
      id="music" 
      className="py-24 px-4 relative overflow-hidden"
      style={{
        
        backgroundImage: 'url("/images/mallas.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Efecto parallax
        scrollMarginTop: '5rem',
      }}
    >
      
      {/* Capa oscura (Overlay) 
          Es MUY IMPORTANTE añadir esto para que el texto y el embed 
          sean legibles sobre la imagen de fondo (la malla).
      */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 z-0"
      ></div>
      
      {/* Contenedor principal 
          Debe tener 'relative' y 'z-10' para estar SOBRE la capa oscura.
      */}
      <div className="container mx-auto text-center relative z-10">
        <h3 className="
          text-4xl font-extrabold mb-12 uppercase 
          text-white
        ">
          Escúchalo <span className="text-red-500">Ahora</span>
        </h3>
        
        {/* Contenedor para el Iframe y su 'glow' */}
        <div className="max-w-md mx-auto relative">
          
          {/* El 'glow' (brillo) detrás del iframe */}
          {/* Sigue siendo 'relative' pero 'z-20' (encima de la capa oscura) */}
          <div 
            className="
              absolute -inset-2 
              bg-gradient-to-r from-red-600 to-zinc-800 
              rounded-xl 
              blur-lg 
              opacity-50
              animate-pulse
              z-10
            "
            style={{ animationDuration: '4s' }}
          ></div>

          {/* El Iframe (el que me pasaste) */}
          {/* Le añadimos 'position: relative' y 'z-20' para que esté sobre el glow */}
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: '12px', position: 'relative', zIndex: 20 }} 
            src="https://open.spotify.com/embed/artist/01yxQT3ungJdzjCPWUtywK?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>

        </div>
      </div>
    </section>
  );
}

export default Music;