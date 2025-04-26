import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Maps from '@/pages/Maps';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <div className="relative">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10 opacity-20"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;