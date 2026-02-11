import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Animate text reveal
    const words = textContainerRef.current.children;
    
    tl.fromTo(words, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power4.out" 
      }
    )
    .to(words, {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power4.in"
    })
    .to(containerRef.current, {
      height: 0,
      duration: 1.2,
      ease: "expo.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#111] flex items-center justify-center overflow-hidden">
       <div ref={textContainerRef} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 overflow-hidden">
          <span className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase inline-block">Zara</span>
          <span className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase inline-block">James</span>
          <span className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase inline-block">
            St<span className="underline decoration-2 underline-offset-8">u</span>dio
          </span>
       </div>
    </div>
  );
};

export default Loader;