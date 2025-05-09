import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const AddReviewForm = () => {
  const { user } = useAuth();
  const [places, setPlaces] = useState<{ id: string; title: string }[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await fetch('http://localhost:5000/api/places');
      const data = await res.json();
      setPlaces(data);
    };
    fetchPlaces();
  }, []);

  const { token } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        placeId: selectedPlaceId,
        content,
      }),
    });

    if (res.ok) {
      alert('Avis ajouté !');
      setContent('');
      setSelectedPlaceId('');
    } else {
      alert('Erreur lors de l’envoi.');
    }
  };

  if (!user) return null;

  return (
    <div className="mt-8 p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Laisser un avis</h2>
      <form onSubmit={handleSubmit}>
        <select
          className="w-full p-2 border mb-3"
          value={selectedPlaceId}
          onChange={(e) => setSelectedPlaceId(e.target.value)}
          required
        >
          <option value="">Choisir un lieu</option>
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.title}
            </option>
          ))}
        </select>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ton avis..."
          className="w-full p-2 border mb-3"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
