import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Maps from '@/pages/Maps';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';
import ProfilePage from '@/pages/Profile';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth, AuthProvider } from '@/contexts/AuthContext';
import Footer from './components/Footer';

function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl">Chargement...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-amber-50">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10 opacity-20"
          />
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}


export default App;