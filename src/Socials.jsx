// src/Socials.jsx

import React from 'react';
// Importa los íconos que necesites
import { FaSpotify, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

function Socials() {
  return (
    <footer className="bg-black py-10 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm text-gray-400 mb-4">
          Sigue al artista
        </p>
        <div className="flex space-x-6 text-3xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaTiktok />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaYoutube />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaSpotify />
          </a>
        </div>
        <p className="text-xs text-gray-600 mt-8">
          © {new Date().getFullYear()} Nombre Artista. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Socials;