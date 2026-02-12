'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, RevealImage } from '../components/Reveal';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const heroImages = Array.from({ length: 16 }, (_, i) => `/projects/Kensington/${i + 1}.webp`);

  const openLightbox = (images: string[], index: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={() => openLightbox(heroImages, 1)}
        >
          <Image
            src="/projects/Kensington/2.webp"
            alt="Modern luxury kitchen with natural light"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center opacity-85 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          <Reveal delay={0.1}>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 opacity-90">Est. 2024 • London</p>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-medium leading-[1.1] mb-8 drop-shadow-sm">
              <span className="block">Crafting Timeless</span>
              <span className="block italic font-normal font-serif">Elegance</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-8">
              <Link href="/projects" className="inline-block border border-white/30 text-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 ease-out backdrop-blur-sm">
                Explore Work
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealImage
            className="order-2 md:order-1 relative aspect-[3/4] flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => openLightbox(heroImages, 0)}
          >
            <Image
              src="/projects/Kensington/1.webp"
              alt="Interior detail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 bg-background-light dark:bg-background-dark p-4 hidden md:block">
              <div className="w-full h-full border border-black/10 dark:border-white/10 flex items-center justify-center">
                <span className="font-display text-4xl italic text-primary dark:text-white">ZJ</span>
              </div>
            </div>
          </RevealImage>

          <div className="order-1 md:order-2 space-y-8 md:pl-12">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Design that speaks <br/>
                <span className="italic font-serif text-gray-500 dark:text-gray-400">in whispers.</span>
              </h2>
            </Reveal>
            <div className="w-16 h-[1px] bg-accent-gold/50 my-6"></div>
            <Reveal delay={0.2}>
              <p className="font-light text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At Zara James Studio, we believe that luxury is not about abundance, but about curation. Our approach merges architectural precision with emotive textures, creating spaces that feel as good as they look.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-light text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Rooted in modern minimalism yet deeply atmospheric, our work transcends trends to establish a lasting sense of calm and sophistication.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="pt-4">
                <Link href="/studio" className="text-xs tracking-widest uppercase hover-underline-animation hover:text-accent-gold transition-colors">
                  Read Our Philosophy
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Selected Works Preview */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <Reveal>
              <span className="block text-xs tracking-widest uppercase text-gray-400 mb-2">Portfolio</span>
              <h3 className="font-display text-3xl md:text-4xl">Selected Works</h3>
            </Reveal>
            <Link href="/projects" className="hidden md:block text-xs tracking-widest uppercase hover:text-accent-gold transition-colors hover-underline-animation">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer" onClick={() => openLightbox(heroImages, 1)}>
              <RevealImage className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden relative">
                <Image
                  src="/projects/Kensington/2.webp"
                  alt="Kensington residential project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              </RevealImage>
              <Reveal delay={0.2}>
                <div className="flex justify-between items-baseline border-t border-black/10 dark:border-white/10 pt-4 pr-2">
                  <div className="flex-1">
                    <h4 className="font-display text-xl mb-1 group-hover:italic transition-all">Kensington</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Residential • Kensington</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-12" onClick={() => openLightbox(Array.from({ length: 7 }, (_, i) => `/projects/Chesilton/${i + 1}.webp`), 0)}>
              <RevealImage className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden relative" delay={0.2}>
                <Image
                  src="/projects/Chesilton/1.webp"
                  alt="Chesilton interior design project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              </RevealImage>
              <Reveal delay={0.4}>
                <div className="flex justify-between items-baseline border-t border-black/10 dark:border-white/10 pt-4 pr-2">
                  <div className="flex-1">
                    <h4 className="font-display text-xl mb-1 group-hover:italic transition-all">Chesilton</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Interior Design • London</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer" onClick={() => openLightbox(['/projects/Jio World Convention Centre Commercial/1.webp'], 0)}>
              <RevealImage className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden relative" delay={0.4}>
                <Image
                  src="/projects/Jio World Convention Centre Commercial/1.webp"
                  alt="Jio World Convention Centre commercial project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              </RevealImage>
              <Reveal delay={0.6}>
                <div className="flex justify-between items-baseline border-t border-black/10 dark:border-white/10 pt-4 pr-2">
                  <div className="flex-1">
                    <h4 className="font-display text-xl mb-1 group-hover:italic transition-all">Jio World Centre</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Commercial • Mumbai</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="text-xs tracking-widest uppercase hover-underline-animation">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <h3 className="font-display text-3xl mb-6">Our Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                  We provide a full-service experience, managing every detail from concept to completion, ensuring the process is as refined as the result.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: '01', title: 'Interior Architecture', desc: 'Spatial planning and structural modification to optimize flow and light.'},
                { id: '02', title: 'Design & Styling', desc: 'Selection of finishes, furniture, and art curation tailored to your lifestyle.'},
                { id: '03', title: 'Bespoke Furniture', desc: 'Custom-designed pieces crafted by expert artisans to fit your space perfectly.'},
                { id: '04', title: 'Project Management', desc: 'Rigorous oversight of contractors and timelines to ensure flawless execution.'},
              ].map((item, i) => (
                <Reveal key={item.id} delay={i * 0.1}>
                  <div className="p-8 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-500 bg-white/50 dark:bg-white/5 backdrop-blur-sm h-full group">
                    <span className="text-accent-gold text-xl font-sans italic mb-4 block">{item.id}</span>
                    <h4 className="text-lg uppercase tracking-widest mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with Parallax Image */}
      <section className="relative py-32 md:py-48 flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/projects/London/5.webp"
            alt="Luxury interior texture"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <Reveal>
            <span className="material-icons-outlined text-4xl mb-8 opacity-70">format_quote</span>
            <p className="font-display text-3xl md:text-5xl leading-tight mb-10 font-light">
              "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment."
            </p>
            <cite className="not-italic text-sm tracking-widest uppercase opacity-70 border-t border-white/20 pt-4 inline-block px-8">— Albert Hadley</cite>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
