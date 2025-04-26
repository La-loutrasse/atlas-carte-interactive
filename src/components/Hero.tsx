import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[500px] md:min-h-[1024px] flex items-center justify-center text-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url(@/assets/imgs/banner_atlas.png)]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ATLAS
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl text-amber-100 mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          DES MOMENTS INEXISTANTS
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;