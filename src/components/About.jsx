// src/components/About.jsx
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['#about-title', '#about-p'], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="bg-gray-950 text-white py-20 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold mb-4">
            Pioneering the Future of Mobility
          </h2>
          <p id="about-p" className="text-gray-400 md:text-lg mb-12">
            SAE IIT Roorkee is more than just a club; it's a hub of innovation where passionate students come together to design, manufacture, and race cutting-edge automotive vehicles. We bridge the gap between academic theory and real-world engineering, pushing the boundaries of performance and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="mb-2">
              {/* The '+' is now handled by the component itself */}
              <AnimatedCounter target={10} />
            </h3>
            <p className="text-gray-400">Years of Legacy</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="mb-2">
              <AnimatedCounter target={50} />
            </h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="mb-2">
              <AnimatedCounter target={60} />
            </h3>
            <p className="text-gray-400">Active Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;