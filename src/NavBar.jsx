// src/Navbar.jsx (MODIFICADO - Logo centrado en móvil)

import React, { useState, useEffect } from 'react';

function Navbar() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sincronizar active con hash de la URL (si existe) al montar
    if (typeof window !== 'undefined' && window.location.hash) {
      // Buscar el navItem que tenga ese href (por ejemplo '#esencia')
      const hash = window.location.hash;
      const found = navItems.find(n => n.href === hash);
      if (found) setActive(found.id);
    } else {
      // Si no hay hash, marcar 'home' como activo al iniciar en la parte superior
      setActive('home');
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'music', label: 'Música', href: '#music' },
    { id: 'yo', label: 'Yo', href: '#esencia' },
    { id: 'roadmap', label: 'Historia', href: '#bio' },
    { id: 'trend', label: 'Trend', href: '#trend' },
    { id: 'feed', label: 'Instagram', href: '#feed' },
    { id: 'contact', label: 'Contacto', href: '#contact' },
    // Videos al final
    { id: 'videos', label: 'Videos', href: '#videos' },
  ];

  // Helper: smooth-scroll to section and set active state
  function handleNavClick(e, item) {
    // allow middle-click / new-tab behavior when needed
    if (e && (e.metaKey || e.ctrlKey || e.button === 1)) return;
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    try {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update the URL hash without jumping
        window.history.replaceState(null, '', item.href);
        setActive(item.id);
        // close mobile menu if open
        setOpen(false);
        return;
      }
    } catch (err) {
      // ignore
    }
    // Fallback: set hash (will jump)
    if (typeof window !== 'undefined') window.location.hash = item.href;
  }

  useEffect(() => {
    // Scroll-based spy: elige la sección cuyo top esté más cerca del top del viewport
    if (typeof window === 'undefined') return;

    const sectionEls = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
    if (sectionEls.length === 0) return;

    let ticking = false;
    const header = document.querySelector('nav');
    const headerHeight = header ? header.offsetHeight : 64;

    function updateActive() {
      let closest = null;
      let minDist = Infinity;
      sectionEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        // distance from header line to section top
        const dist = Math.abs(rect.top - headerHeight);
        if (dist < minDist) {
          minDist = dist;
          closest = el;
        }
      });
      if (closest) {
        const id = closest.getAttribute('id');
        const navItem = navItems.find(n => n.href === `#${id}`);
        if (navItem) setActive(navItem.id);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    }

    // run once to set initial active based on scroll position
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [/* no dependencias: navItems está definido local */]);
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
        <button onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" className="text-red-500 md:hidden transition-transform duration-300 hover:scale-110"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* --- Links de Navegación (Desktop) --- */}
        {/* (Este se mantiene oculto en móvil) */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleNavClick(e, item); }}
              className={`nav-link relative group font-medium transition-all duration-300 ${active === item.id ? 'text-white' : 'text-gray-300 auto-pulse'}`}
              style={ active === item.id ? {} : { animationDelay: `${idx * 0.35}s` } }
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
              <span className="underline-bar absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Mobile menu (simple dropdown) */}
      <div id="mobile-menu" className={`md:hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 border-t border-zinc-800`}> 
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => { handleNavClick(e, item); }}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${active === item.id ? 'text-white' : 'text-gray-300 auto-pulse'}`}
              style={ active === item.id ? {} : { animationDelay: `${idx * 0.35}s` } }
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;