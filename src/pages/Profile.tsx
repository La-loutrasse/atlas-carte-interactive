import UserJournal from '@/components/UserJournal';
import { useAuth } from '@/contexts/AuthContext';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) return <div>Non connecté</div>;

  return (
    <div className="flex flex-col items-center mt-10 pt-10">
      <h1 className="text-2xl mb-4">Bienvenue {user.username}</h1>
      <p>Email : {user.email}</p>
      <button onClick={logout} className="mt-4 bg-red-600 text-white p-2 rounded">
        Déconnexion
      </button>
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4 text-amber-800">Mon Journal</h2>
        <UserJournal />
      </div>
    </div>
  );
}
