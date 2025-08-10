// src/App.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;