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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {isRegister && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="bg-amber-700 text-white p-2 rounded">
        {isRegister ? "S'inscrire" : "Se connecter"}
      </button>
    </form>
  );
}
