import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../assets/hero.png';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image scale animation
            gsap.fromTo(
                imageRef.current,
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: 2.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            // Text reveal animation
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.fromTo(
                '.hero-text-line',
                { y: 100, opacity: 0, rotateX: -20 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    delay: 0.5,
                }
            ).fromTo(
                '.hero-subtext',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                '-=0.5'
            );

            // Scroll indicator animation
            gsap.to('.scroll-indicator', {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut'
            })

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img
                    ref={imageRef}
                    src={heroImage}
                    alt="Luxury Living Room"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8 perspective-text">
                    <div className="overflow-hidden">
                        <div className="hero-text-line">Refining</div>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text-line block font-medium italic text-luxury-beige">Luxury Living</span>
                    </div>
                </h1>
                <p className="hero-subtext text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto">
                    Creating timeless interiors that blend elegance with everyday functionality.
                </p>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white scroll-indicator cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <ArrowDown size={32} strokeWidth={1} />
            </div>
        </section>
    );
};

export default Hero;
