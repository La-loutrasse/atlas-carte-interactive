import React from 'react';
import CustomMap from '../components/CustomMap';
import PublicReviews from '@/components/publicReviews';
import AddReviewForm from '@/components/AddReviewForm';

const Maps: React.FC = () => {
  return (
    <div className="p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Carte Interactive</h1>
      <CustomMap />
      <AddReviewForm />
      <PublicReviews />
    </div>
  );
};

export default Maps;
