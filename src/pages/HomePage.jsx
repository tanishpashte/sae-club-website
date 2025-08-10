// src/pages/HomePage.jsx
const HomePage = () => {
    return (
      // We add a tall container to enable scrolling
      <div className="h-[200vh] bg-gray-900 font-neuelogo">
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    SAE Club Website
                </h1>
                <p className="text-cyan-400 mt-2 text-lg">
                    Scroll down to see the Navbar effect.
                </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;