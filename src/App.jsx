import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import HowToBuy from './components/sections/HowToBuy';
import BlakLab from './components/sections/BlakLab';
import InnerCircle from './components/sections/InnerCircle';
import ChristmasTheme from './components/theme/ChristmasTheme';
import Generator from './components/meme-lab/Generator'; // Import the Generator component

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-red-900 to-green-900">
      <ChristmasTheme />
      <Layout>
        <Hero />
        <About />
        <HowToBuy />
        <BlakLab />
        <InnerCircle />

        {/* Add the Generator component here */}
        <div className="mt-10">
          <Generator />
        </div>
      </Layout>
    </div>
  );
}
