// src/Bio.jsx (MODIFICADO - Fondo actualizado a .png)

import React from 'react';

function Bio() {
  return (
    // Sección con imagen de fondo y overlay
    <section 
      id="esencia" 
      className="py-24 px-4 relative overflow-hidden"
      style={{
        // --- ¡AQUÍ ESTÁ EL CAMBIO! ---
        // Ahora busca 'fondobio.png'
        backgroundImage: 'url("/images/fondobio.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        scrollMarginTop: '5rem',
      }}
    >
      {/* Capa oscura (Overlay) para legibilidad */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 z-0" 
      ></div>

      {/* Contenedor principal del contenido (con 'relative' y 'z-10') */}
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        
        <h2 className="
          text-4xl md:text-5xl font-extrabold uppercase 
          text-white mb-8
        ">
          La <span className="text-red-500">Esencia</span>
        </h2>

        {/* Párrafos de la Bio */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Jaime Antitur, nacido en 2003 en la ciudad de Temuco, es el artista detrás de <span className="font-bold text-white">Jotadreh</span>, un proyecto que nace en 2023 con la intención de llevar su historia y su energía a través de la música urbana.
          </p>
          <p>
            Su primer lanzamiento, <span className="font-bold text-white">“Las Ganas”</span>, marcó el inicio de su camino, logrando una excelente recepción del público y superando las mil reproducciones en muy poco tiempo. Desde ese momento, Jotadreh comenzó a construir una identidad propia dentro de la escena local, combinando <span className="text-red-400">emociones reales</span> con un estilo <span className="text-red-400">auténtico y callejero</span>.
          </p>
          <p>
            Con cada nuevo tema, Jotadreh busca dejar una huella y representar el proceso de quienes persiguen sus <span className="font-bold text-white">sueños</span> sin rendirse.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Bio;