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

  const kensingtonImages = Array.from({ length: 16 }, (_, i) => `/projects/Kensington/${i + 1}.webp`);
  const boardHouseImages = Array.from({ length: 28 }, (_, i) => `/projects/The Board House/${i + 1}.webp`);
  const lakeApartmentImages = Array.from({ length: 13 }, (_, i) => `/projects/The Lake Apartment/${i + 1}.webp`);

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
          onClick={() => openLightbox(kensingtonImages, 1)}
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
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-2 opacity-90">Established in 2010 · London</p>
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase mb-6 opacity-60 font-light">Bespoke Architectural Interiors</p>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-medium leading-[1.1] mb-8 drop-shadow-sm">
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
            onClick={() => openLightbox(kensingtonImages, 0)}
          >
            <Image
              src="/projects/The Board House/23.webp"
              alt="Interior detail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 bg-background-light dark:bg-background-dark p-4 hidden md:block">
              <div className="w-full h-full border border-black/10 dark:border-white/10 flex items-center justify-center">
                <span className="font-display text-4xl italic text-primary dark:text-white">ZJS</span>
              </div>
            </div>
          </RevealImage>

          <div className="order-1 md:order-2 space-y-8 md:pl-12">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Design that endures.
              </h2>
            </Reveal>
            <div className="w-16 h-[1px] bg-accent-gold/50 my-6"></div>
            <Reveal delay={0.2}>
              <p className="font-light text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At Zara James Studio, we believe true luxury is not excess — it is precision. Our work is rooted in architectural clarity, disciplined proportion, and material intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-light text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                We approach every home as a long-term environment rather than a decorative exercise. Through thoughtful planning, technical rigour, and curated global sourcing, we create spaces that feel composed, grounded, and deeply personal.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="font-light text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Guided by restraint and longevity, our interiors are designed to outlast trends — refined in detail, resolved in structure, and timeless in presence.
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
            <Link href="/projects" className="hidden md:block text-xs tracking-widest uppercase hover:text-accent-gold transition-colors hover-underline-animation whitespace-nowrap">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer" onClick={() => openLightbox(kensingtonImages, 1)}>
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
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Residential · London</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-12" onClick={() => openLightbox(boardHouseImages, 0)}>
              <RevealImage className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden relative" delay={0.2}>
                <Image
                  src="/projects/The Board House/9.webp"
                  alt="The Board House residential project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              </RevealImage>
              <Reveal delay={0.4}>
                <div className="flex justify-between items-baseline border-t border-black/10 dark:border-white/10 pt-4 pr-2">
                  <div className="flex-1">
                    <h4 className="font-display text-xl mb-1 group-hover:italic transition-all">The Board House</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Residential · Mumbai</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer" onClick={() => openLightbox(lakeApartmentImages, 0)}>
              <RevealImage className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden relative" delay={0.4}>
                <Image
                  src="/projects/The Lake Apartment/2.webp"
                  alt="The Lake Apartment residential project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
              </RevealImage>
              <Reveal delay={0.6}>
                <div className="flex justify-between items-baseline border-t border-black/10 dark:border-white/10 pt-4 pr-2">
                  <div className="flex-1">
                    <h4 className="font-display text-xl mb-1 group-hover:italic transition-all">The Lake Apartment</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Residential · Mumbai</p>
                  </div>
                  <span className="material-icons-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45 flex-shrink-0 ml-2">arrow_forward</span>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="text-xs tracking-widest uppercase hover-underline-animation whitespace-nowrap">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <h3 className="font-display text-3xl mb-4">Our Expertise</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl mb-14">
              We design residences through a structured, integrated process — from spatial planning to final specification — ensuring clarity, coherence, and longevity at every stage.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Spatial & Interior Architecture', desc: 'Strategic layout planning and structural reconfiguration to establish proportion, flow, and long-term functionality.' },
              { id: '02', title: 'Systems & Technical Coordination', desc: 'Integrated design thinking across lighting, joinery, and building services to ensure that performance aligns with architectural intent.' },
              { id: '03', title: 'Material & Specification Strategy', desc: 'Curated global sourcing and detailed specification focused on durability, tactility, and enduring value.' },
              { id: '04', title: 'Bespoke Furniture & Joinery', desc: 'Custom-designed pieces developed with specialist craftsmen to ensure precision, scale harmony, and material integrity.' },
              { id: '05', title: 'Design Development & Detailing', desc: 'Comprehensive drawing sets and detailing to translate design intent into build-ready clarity.' },
              { id: '06', title: 'Site Review & Design Alignment', desc: 'Periodic site reviews to ensure that implementation reflects the approved design documentation.' },
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
      </section>

      {/* Quote Section with Parallax Image */}
      <section className="relative py-32 md:py-48 flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/projects/The Board House/10.webp"
            alt="Luxury interior detail"
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
              “Luxury is not excess. It is precision — in planning, in proportion, and in the quiet confidence of spaces designed to endure.”
            </p>
            <cite className="not-italic text-sm tracking-widest uppercase opacity-70 border-t border-white/20 pt-4 inline-block px-8">—  Valletta</cite>
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
