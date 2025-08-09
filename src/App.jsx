// src/App.jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navbar will go here */}
      <main>
        <Outlet /> {/* This is where our page components will be rendered */}
      </main>
      {/* Footer will go here */}
    </div>
  );
}

export default App;