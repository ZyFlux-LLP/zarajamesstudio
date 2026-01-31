import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/about.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom bottom',
                },
                x: -50,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
            });

            gsap.from(textRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-luxury-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                            <img
                                ref={imageRef}
                                src={aboutImage}
                                alt="Zara James Studio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-beige/30 -z-10 rounded-full blur-xl"></div>
                    </div>

                    {/* Text Side */}
                    <div ref={textRef} className="w-full md:w-1/2 space-y-8">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-medium">The Studio</span>

                        <h2 className="text-4xl md:text-5xl font-light leading-tight text-luxury-black">
                            DESIGNING FOR THE <br /> <span className="font-serif italic text-gray-500">art of living.</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                            <p>
                                Zara James Studio is a boutique interior design firm based in the heart of the city. We specialize in creating spaces that are not just visually stunning but deeply personal.
                            </p>
                            <p>
                                Our philosophy is rooted in the belief that your home should be a reflection of your journey. We blend modern minimalism with warmth and texture, curating environments that inspire and comfort.
                            </p>
                        </div>

                        <button className="group mt-4 inline-flex items-center gap-2 border-b border-luxury-black pb-1 uppercase tracking-widest text-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300">
                            Read our story
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
