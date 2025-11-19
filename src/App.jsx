import React from 'react';

import Navbar from './NavBar';

import Hero from './Hero';

import Music from './Music';

import Bio from './Bio';             // <-- 1. Importa el nuevo componente

import Roadmap from './RoadMap';

import TrendCTA from './TrendCTA';

import Videos from './Videos';

import InstagramFeed from './InstagramFeed';

import Socials from './Socials';



function App() {

  return (

    <div className="bg-zinc-900 text-white min-h-screen font-sans">

      <Navbar />

     

      <main className="pt-16">

        <Hero />

        <Music />

        <Bio />             {/* <-- 2. Añádelo aquí */}

        <Roadmap />

  <TrendCTA />

  <Videos />

  <InstagramFeed />

      </main>

     

      <Socials />

    </div>

  );

}



export default App;