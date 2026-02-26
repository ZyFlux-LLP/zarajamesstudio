'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Reveal, RevealImage } from '../../components/Reveal';
import Lightbox from '../../components/Lightbox';

export default function Studio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      {/* Studio Header */}
      <header className="pt-48 pb-12 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-primary dark:text-white leading-tight mb-12">
              Our Approach
            </h1>
          </Reveal>
          <div className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700 mb-12"></div>
          <Reveal delay={0.2}>
            <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 leading-loose mb-7">
              Designing a residence is a significant commitment. It requires clarity, discipline, and decisions that must endure.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 leading-loose mb-7">
              At Zara James Studio, every project begins with architectural intent. We study proportion, circulation, structural opportunity, and long-term functionality before aesthetic layers are introduced. Planning is not an afterthought — it is the foundation.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 leading-loose mb-7">
              Luxury, for us, is found in resolution. In the precision of detailing. In the integrity of materials. In the coherence between architecture, systems, and interior elements.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 leading-loose mb-7">
              Through structured design development, comprehensive documentation, and carefully considered specification, we create interiors that are calm, composed, and built to remain relevant long after completion.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-300 leading-loose">
              Our work is deliberate. Measured. Enduring.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Visual Break */}
      <section className="w-full px-4 md:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto">
          <RevealImage className="h-[40vh] md:h-[90vh] cursor-pointer overflow-hidden flex items-center justify-center relative" onClick={() => openLightbox(['/projects/The Lake Apartment/10.webp'])}>
            <Image
              src="/projects/The Lake Apartment/10.webp"
              alt="Materiality - The Lake Apartment detail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 text-white text-sm tracking-widest uppercase bg-black/50 px-3 py-1 backdrop-blur-sm">Materiality</div>
          </RevealImage>
          <RevealImage className="h-[40vh] md:h-[90vh] mt-4 md:mt-24 cursor-pointer overflow-hidden flex items-center justify-center relative" delay={0.3} onClick={() => openLightbox(['/projects/The Board House/22.webp'])}>
            <Image
              src="/projects/The Board House/22.webp"
              alt="Atmosphere - The Board House project"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 text-white text-sm tracking-widest uppercase bg-black/50 px-3 py-1 backdrop-blur-sm">Atmosphere</div>
          </RevealImage>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="order-2 lg:order-1 relative">
              <RevealImage className="aspect-[3/4] cursor-pointer group overflow-hidden flex items-center justify-center relative" onClick={() => openLightbox(['/bakuli.webp'])}>
                <Image
                  src="/bakuli.webp"
                  alt="Bakuli Sangamneheri, Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-1000"
                />
              </RevealImage>
              <div className="absolute -top-6 -left-6 w-full h-full border border-neutral-200 dark:border-neutral-800 z-0 hidden md:block"></div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="font-elegant text-[15px] uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-500 mb-5">Founder & Principal</p>
                <h2 className="font-elegant text-[38px] md:text-[44px] font-medium leading-[1.15] text-neutral-800 dark:text-neutral-100 mb-10 tracking-normal">Bakuli Sangamneheri</h2>
                <p className="font-sans text-[17px] text-neutral-700 dark:text-neutral-300 leading-[1.6] mb-6">
                  Bakuli Sangamneheri is an architectural interior designer and product designer with an international professional foundation shaped by European design discipline and Indian cultural depth.
                </p>
                <p className="font-sans text-[17px] text-neutral-700 dark:text-neutral-300 leading-[1.6] mb-6">
                  Her work is grounded in architectural clarity, proportion, and the disciplined resolution of space. With professional experience across the United Kingdom and India, she approaches residential design through structure, material integrity, and technical precision — ensuring that every project is resolved with long-term functionality in mind.
                </p>
                <p className="font-sans text-[17px] text-neutral-700 dark:text-neutral-300 leading-[1.6] mb-6">
                  Her background in product design informs her sensitivity to detailing and specification, while her architectural heritage shapes her understanding of proportion, circulation, and spatial coherence.
                </p>
                <p className="font-sans text-[17px] text-neutral-700 dark:text-neutral-300 leading-[1.6]">
                  Through Zara James Studio, Bakuli leads a focused residential practice dedicated to composed, enduring interiors defined by restraint and clarity.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


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
