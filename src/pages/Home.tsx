import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Creators from '@/components/Creators';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Creators />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;