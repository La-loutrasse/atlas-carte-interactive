import { useState } from 'react';
import { login, register } from '@/api/auth';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  isRegister: boolean;
}

export default function AuthForm({ isRegister }: AuthFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(username, email, password);
        navigate('/login');
      } else {
        const data = await login(email, password);
        loginContext(data.user, data.token);
        navigate('/profile');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion/inscription', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-3">
        {isRegister && (
          <input
            type="text"
            placeholder="Username"
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center w-full">
          {isRegister ? "S'inscrire" : "Se connecter"}
        </button>
      </div>
    </form>
  );
}
