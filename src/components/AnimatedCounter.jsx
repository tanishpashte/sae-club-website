// src/components/AnimatedCounter.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    // We create a generic object to tween its 'val' property.
    const tweenTarget = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(tweenTarget, {
        val: target,
        duration: duration,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        // --- THIS IS THE CORRECTED PART ---
        // Use a traditional function to get the correct 'this' context from GSAP.
        onUpdate: function () {
          // this.targets() returns an array of the object(s) being tweened.
          // In our case, it's the single 'tweenTarget' object.
          setCount(Math.ceil(this.targets()[0].val));
        },
      });
    }, element);

    return () => ctx.revert();
  }, [target, duration]);

  return (
    // We add the 'plus' sign inside the span for better alignment
    <span ref={counterRef} className="text-cyan-400 text-4xl md:text-5xl font-bold">
      {count}+
    </span>
  );
};

export default AnimatedCounter;