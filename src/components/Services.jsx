import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: '01',
        title: 'Residential Design',
        description: 'Full-service interior design for new builds and extensive renovations. We handle everything from concept to completion.',
    },
    {
        id: '02',
        title: 'Commercial Spaces',
        description: 'Crafting brand-aligned environments for hospitality, retail, and office spaces that leave a lasting impression.',
    },
    {
        id: '03',
        title: 'Styling & Decor',
        description: 'The finishing touches. We curate furniture, art, and accessories to elevate your existing space.',
    },
    {
        id: '04',
        title: 'Consultation',
        description: 'Expert advice on layout, color palettes, and material selection for those who need professional guidance.',
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-row', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-luxury-black text-luxury-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-medium block mb-2">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-light">Our Services</h2>
                </div>

                <div className="border-t border-white/10">
                    {services.map((service) => (
                        <div key={service.id} className="service-row group border-b border-white/10 py-12 flex flex-col md:flex-row md:items-baseline hover:bg-white/5 transition-colors duration-300">
                            <span className="text-gray-500 font-mono text-lg mr-8 md:w-24 mb-4 md:mb-0">/{service.id}</span>
                            <h3 className="text-3xl font-light md:w-1/3 mb-4 md:mb-0 group-hover:text-luxury-beige transition-colors">{service.title}</h3>
                            <p className="text-gray-400 font-light md:w-1/3 leading-relaxed">{service.description}</p>
                            <div className="md:w-auto ml-auto mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2">
                                <ArrowUpRight className="text-luxury-gold" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
