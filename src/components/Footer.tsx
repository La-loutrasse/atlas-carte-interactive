import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Atlas des Royaumes. All rights reserved.</p>
        <p className="mt-2">Crafted with passion in the magical realms.</p>
      </div>
    </footer>
  );
};

export default Footer;