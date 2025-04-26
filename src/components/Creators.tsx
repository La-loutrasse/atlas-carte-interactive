import React from 'react';
import CreatorCard from './CreatorCard';

const Creators: React.FC = () => {
  const creators = [
    {
      name: 'Alexis',
      image: '/src/assets/imgs/alex.jpg',
      description: 'Maître artisan et graphiste talentueux, Alexis façonne des univers où chaque détail raconte une histoire.'
    },
    {
      name: 'Pauline',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Artiste visionnaire passionnée des mondes féeriques, Pauline donne vie aux créatures qui peuplent nos rêves.'
    },
    {
      name: 'Océane',
      image: '/src/assets/imgs/oce.jpg',
      description: 'Narratrice exceptionnelle, Océane tisse des légendes captivantes qui transportent le lecteur vers des contrées lointaines.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-amber-50/90">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Créateurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorCard 
              key={creator.name}
              name={creator.name}
              image={creator.image}
              description={creator.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creators;