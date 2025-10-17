// src/TrendCTA.jsx (MODIFICADO con fondo fondotrend.jpg)

import React, { useEffect } from 'react';
import { FaTiktok } from 'react-icons/fa'; 

function TrendCTA() {
  // Hook para cargar el script de TikTok (sin cambios)
  useEffect(() => {
    const scriptId = 'tiktok-embed-script';
    if (document.getElementById(scriptId)) {
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    if (window.tiktok) {
      window.tiktok.load();
    }
  }, []); 

  return (
    // Sección con IMAGEN DE FONDO
    <section 
      className="py-24 px-4 relative overflow-hidden"
      style={{
        // Asumimos que la imagen está en 'public/images/fondotrend.jpg'
        backgroundImage: 'url("/images/fondotrend.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Efecto parallax
      }}
    >
      
      {/* Capa oscura (Overlay) para legibilidad */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 z-0"
      ></div>

      {/* Contenedor principal del contenido (con 'relative' y 'z-10') */}
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        
        <h2 className="
          text-4xl md:text-5xl font-extrabold uppercase 
          text-white mb-12
        ">
          Únete al <span className="text-red-500">Trend</span>
        </h2>

        {/* --- Embed de TikTok (sin cambios, pero ahora sobre z-10) --- */}
        <blockquote 
          className="tiktok-embed mx-auto" 
          cite="https://www.tiktok.com/@nachapiriwim/video/7548248912704884024" 
          data-video-id="7548248912704884024" 
          data-embed-from="embed_page" 
          style={{ maxWidth: '605px', minWidth: '325px' }}
        >
          <section> 
            <a target="_blank" title="@nachapiriwim" href="https://www.tiktok.com/@nachapiriwim?refer=embed">@nachapiriwim</a> 
            <p>
              @Jotadreh_ 
              <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> 
              <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> 
              <a title="chile" target="_blank" href="https://www.tiktok.com/tag/chile?refer=embed">#chile</a> 
              <a title="paratii" target="_blank" href="https://www.tiktok.com/tag/paratii?refer=embed">#paratii</a> 
              <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            </p> 
            <a target="_blank" title="♬ sonido original - Jotadreh_" href="https://www.tiktok.com/music/sonido-original-7545005022053649158?refer=embed">♬ sonido original - Jotadreh_</a> 
          </section> 
        </blockquote>

        {/* --- Botón CTA (sin cambios, pero ahora sobre z-10) --- */}
        <a 
          href="#" // <-- ¡IMPORTANTE! Link al sonido de TikTok
          target="_blank" 
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            bg-red-600 text-white 
            font-bold py-4 px-10 rounded-full
            uppercase text-lg tracking-wider
            hover:bg-red-700
            transition-all duration-300
            shadow-lg shadow-red-900/50
            transform hover:scale-105
            mt-12
          "
        >
          <FaTiktok className="text-xl" />
          Usar Sonido Oficial
        </a>

      </div>
    </section>
  );
}

export default TrendCTA;