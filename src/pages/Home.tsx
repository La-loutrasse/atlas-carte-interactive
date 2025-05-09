import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Creators from '@/components/Creators';
import Contact from '@/components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Creators />
      <Contact />
    </>
  );
};

export default Home;