import React from 'react';
import { motion } from 'framer-motion';

interface CreatorCardProps {
  name: string;
  image: string;
  description: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ name, image, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-amber-900 mb-4">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-right">
        </div>
      </div>
      
      <div className="w-full h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`Creator ${name}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

export default CreatorCard;