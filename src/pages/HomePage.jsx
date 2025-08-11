// src/pages/HomePage.jsx
import About from '../components/About';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <Hero /> {/* <-- THIS LINE IS DISPLAYING YOUR HERO SECTION */}
      <About />
      {/* We will add other sections like About, Projects, etc. here */}
      <div id="about" className="h-screen bg-gray-950">
        <h2 className="text-white text-4xl text-center pt-20">Project Section</h2>
      </div>
    </div>
  );
};

export default HomePage;