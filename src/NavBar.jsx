// src/Navbar.jsx (MODIFICADO - Logo centrado en móvil)

import React from 'react';

function Navbar() {
  return (
    <nav className="
      bg-gradient-to-r from-zinc-900 via-black to-zinc-900
      p-4                     
      fixed top-0 left-0 right-0 z-50 
      border-b-2              
      border-red-600          
      shadow-lg               
      shadow-red-900/50       
    ">
      {/* CAMBIO 1: 
        - 'relative' para el posicionamiento absoluto del logo.
        - 'justify-end' en móvil (para el ícono de menú).
        - 'md:justify-between' para desktop.
      */}
      <div className="
        container mx-auto flex items-center 
        relative 
        justify-end md:justify-between
      ">
        
        {/* CAMBIO 2: 
          - 'absolute' para centrarlo en móvil.
          - 'left-1/2 -translate-x-1/2' es el truco para centrarlo.
          - 'md:relative md:left-0 md:translate-x-0' lo devuelve a 
            la normalidad en desktop.
        */}
        <img 
          src="/images/jotadreh-logo-header.png" // Tu logo recortado
          alt="JotaDreh Logo"
          className="
            h-12 w-auto filter brightness-150
            absolute left-1/2 -translate-x-1/2
            md:relative md:left-0 md:translate-x-0
            md:h-14 
          " 
        />
        
        {/* --- Ícono de Menú (Móvil) --- */}
        {/* (Este queda a la derecha gracias a 'justify-end') */}
        <button className="text-red-500 md:hidden transition-transform duration-300 hover:scale-110"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* --- Links de Navegación (Desktop) --- */}
        {/* (Este se mantiene oculto en móvil) */}
        <div className="hidden md:flex space-x-6 text-lg">
          
          <a 
            href="#music" 
            className="
              text-gray-300          
              hover:text-red-500     
              transition-all duration-300
              font-medium
              relative group
            "
          >
            Música
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a 
            href="#videos" 
            className="
              text-gray-300 
              hover:text-red-500 
              transition-all duration-300 
              font-medium 
              relative group
            "
          >
            Videos
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a 
            href="#bio" 
            className="
              text-gray-300 
              hover:text-red-500 
              transition-all duration-300 
              font-medium 
              relative group
            "
          >
            Bio
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;