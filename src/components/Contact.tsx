import React, { useState } from 'react';
import { Send, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${formData.email}`);

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-white">
        <div>
          {/* Left side */}
          <div className="p-8 bg-amber-50">
            <h2 className="text-2xl text-center font-bold text-amber-800 mb-4">Contact</h2>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="space-y-3">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center w-full"
              >
                <span>Envoyer</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-2 text-sm">Nos réseaux</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-amber-800 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-800 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-800 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-800 transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;