import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const percentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: onComplete
            });

            // Percentage counter
            let progress = { value: 0 };
            tl.to(progress, {
                value: 100,
                duration: 2,
                ease: 'power2.inOut',
                onUpdate: () => {
                    if (percentRef.current) {
                        percentRef.current.textContent = Math.round(progress.value) + '%';
                    }
                }
            });

            // Text reveal
            tl.fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '<' // Start with previous
            );

            // Slide out
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 1.5,
                ease: 'power4.inOut',
                delay: 0.5
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[100] bg-luxury-white text-luxury-black flex flex-col justify-center items-center">
            <div className="overflow-hidden">
                <h1 ref={textRef} className="text-4xl md:text-6xl font-light tracking-widest uppercase">
                    Zara James Studio
                </h1>
            </div>
            <div className="mt-4 overflow-hidden">
                <p ref={percentRef} className="text-sm font-mono text-gray-400">0%</p>
            </div>
        </div>
    );
};

export default Preloader;
