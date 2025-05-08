import React from 'react';
import CustomMap from '../components/CustomMap';

const Maps: React.FC = () => {
  return (
    <div className="p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Carte Interactive</h1>
      <CustomMap />
    </div>
  );
};

export default Maps;
