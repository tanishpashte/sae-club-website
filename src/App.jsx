// src/App.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-900">
      {/* Navbar will go here */}
      <Navbar />
      <main>
        <Outlet /> {/* This is where our page components will be rendered */}
      </main>
      {/* Footer will go here */}
    </div>
  );
}

export default App;