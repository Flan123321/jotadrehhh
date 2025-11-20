// src/Videos.jsx (CORREGIDO: Usando <img> para controlar el zoom/recorte)

import React from 'react';

const videoEmbeds = [
  {
    src: "https://www.youtube.com/embed/i8ehgzq2ZjY?si=9e_Mci0bqupalgqB",
    title: "Si llegamos - JotaDreh (Video Oficial)",
    description: "El primer mambo de Jotadreh, conquistando terreno"
  },
  {
    src: "https://www.youtube.com/embed/xWE6nL-pWUo?si=mAHHEDs9rDI8uhV2",
    title: "Juegas - JotaDreh (Video Oficial)",
    description: "Una canción que inspira al artista JotaDreh a seguir luchando por su sueño."
  },
  {
    src: "https://www.youtube.com/embed/slZojsSjtqw?si=U94O6YxLYN__pKMk",
    title: "Te complicas - JotaDreh (Video Oficial)",
    description: "Un salto de calidad en la carrera de JotaDreh, mostrando su evolución artística."
  }
];

function Videos() {
  return (
    // Sección principal
    <section 
      id="videos" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden" 
      style={{ scrollMarginTop: '5rem' }}
    >
      
      {/* ¡NUEVO! IMAGEN <img> COMO FONDO */}
      <img
          src="/images/roadmap/DSC05211.jpg" // Ruta absoluta que funciona
          alt="Fondo de Videos"
          className="absolute inset-0 w-full h-full object-cover object-center" 
          // Ya que esta sección no tiene backgroundAttachment: fixed, no lo incluimos
      />
      
      {/* Overlay Oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      {/* Contenido de la sección */}
      <div className="relative container mx-auto text-center z-10">
        {/* Título: Gradiente de rojo */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-red-990 bg-clip-text text-transparent">
          Zona Videos
        </h2>
        {/* Subtítulo */}
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
          "Los videos de la joven promesa"
        </p>

        {/* Grid de Videos (sin cambios) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videoEmbeds.map((video, index) => (
            <div 
              key={index} 
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col border border-zinc-700 
                         transition-all duration-300 ease-in-out 
                         shadow-lg shadow-red-500/20  // Difuminado rojo sutil por defecto
                         hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 hover:border-red-600" // Difuminado rojo más intenso al pasar el ratón
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-inner ring-1 ring-zinc-700/50">
                <iframe
                  className="w-full h-full" 
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-left mt-auto">
                <h3 className="font-semibold text-lg text-white">{video.title}</h3>
                <p className="text-zinc-300 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;