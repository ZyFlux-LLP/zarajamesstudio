import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import heroImage from '../assets/hero.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'Serene Sanctuary',
        category: 'Residential',
        image: project1,
        size: 'col-span-1 md:col-span-2 row-span-2', // Large Item
    },
    {
        id: 2,
        title: 'Marble & Matte',
        category: 'Kitchen',
        image: project2,
        size: 'col-span-1 row-span-1',
    },
    {
        id: 3,
        title: 'Organic Modern',
        category: 'Living Space',
        image: project3,
        size: 'col-span-1 row-span-1',
    },
    {
        id: 4,
        title: 'Skyline Penthouse',
        category: 'Luxury Apartment',
        image: heroImage,
        size: 'col-span-1 md:col-span-2 row-span-1', // Wide item
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.project-item');

            items.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: index * 0.1,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-medium block mb-2">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-light text-luxury-black">Selected Works</h2>
                    </div>
                    <a href="#" className="hidden md:inline-block border-b border-gray-300 pb-1 text-sm uppercase tracking-widest hover:border-luxury-black hover:text-luxury-black transition-all">View All Projects</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[400px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden bg-gray-100 cursor-pointer project-item ${project.size}`}
                        >
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 box-border"></div>

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <span className="text-luxury-beige text-xs uppercase tracking-widest block mb-1">{project.category}</span>
                                <h3 className="text-white text-2xl font-light">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-block border-b border-gray-300 pb-1 text-sm uppercase tracking-widest hover:border-luxury-black transition-all">View All Projects</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
