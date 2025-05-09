import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

interface Place {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

export default function UserJournal() {
  const [places, setPlaces] = useState<Place[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    axios.get('/api/places/mine', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: { data: Place[] }) => setPlaces(res.data))
      .catch((err: unknown) => console.error('Erreur journal:', err));
  }, [token]);

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-4">
        {
          Array.isArray(places) && places.length > 0 ? (
            places.map(place => (
              < div key={place.id} className="bg-white rounded-lg shadow p-4">
                <img src={place.image_url} alt={place.title} className="w-full h-48 object-cover rounded" />
                <h3 className="text-xl mt-2">{place.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{place.description}</p>
                <Link to={`/place/${place.id}`} className="text-amber-700 hover:underline text-sm mt-2 inline-block">
                  Voir les détails
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Aucun lieu visité pour le moment.</p>
          )
        }
    </div>
    </div >
  );
}
