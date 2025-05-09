import React, { useEffect, useState } from 'react';

interface Review {
  id: number;
  content: string;
  created_at: string;
  username: string;
  place_title: string;
}

const PublicReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews/public');
        if (!response.ok) {
          throw new Error('Erreur de réponse du serveur');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error('Erreur lors du chargement des avis :', err);
        setError("Impossible de charger les avis.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Chargement des avis...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-amber-800">Derniers avis des utilisateurs</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">Aucun avis</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">{review.username}</span> à propos de <span className="font-semibold">{review.place_title}</span>
              </p>
              <p className="text-gray-800 italic mb-1">"{review.content}"</p>
              <p className="text-xs text-gray-400">{new Date(review.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PublicReviews;
