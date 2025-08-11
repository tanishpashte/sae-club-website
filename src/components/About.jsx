// src/components/About.jsx

const About = () => {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pioneering the Future of Mobility
          </h2>

          {/* Section Description */}
          <p className="text-gray-400 md:text-lg mb-12">
            SAE IIT Roorkee is more than just a club; it's a hub of innovation where passionate students come together to design, manufacture, and race cutting-edge automotive vehicles. We bridge the gap between academic theory and real-world engineering, pushing the boundaries of performance and technology.
          </p>
        </div>

        {/* Dynamic Counters Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Counter 1 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
              10+
            </h3>
            <p className="text-gray-400">Years of Legacy</p>
          </div>
          {/* Counter 2 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
              50+
            </h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          {/* Counter 3 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-2">
              60+
            </h3>
            <p className="text-gray-400">Active Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;