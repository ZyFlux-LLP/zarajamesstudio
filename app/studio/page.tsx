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
      <header className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/projects/London/8.webp"
            alt="Studio background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover opacity-10 dark:opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-light via-transparent to-background-light dark:from-background-dark dark:to-background-dark opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 font-medium text-gray-500">About The Studio</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal leading-[1.2] text-primary dark:text-white pb-2">
              Curating <br/><i className="font-serif font-light text-gray-500">Timeless</i> Spaces
            </h1>
          </Reveal>
        </div>
      </header>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="col-span-1 md:col-span-4 md:sticky md:top-32">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">Our <br/><span className="italic font-serif font-light text-accent-gold">Philosophy</span></h2>
              <div className="w-12 h-[1px] bg-gray-400 dark:bg-gray-600 mb-6"></div>
            </Reveal>
          </div>
          <div className="col-span-1 md:col-span-8 md:pl-12">
            <Reveal delay={0.2}>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-primary dark:text-gray-200 mb-8">
                We believe that luxury is found in the restraint of design. It is not about abundance, but rather the precise curation of light, texture, and form.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-loose max-w-2xl text-lg">
                Founded in 2018, Zara James Studio approaches every project as a unique narrative. We strip away the unnecessary to reveal the essential beauty of a space, creating environments that feel as good as they look. Our work is grounded in a deep appreciation for natural materials and artisanal craftsmanship.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="w-full px-4 md:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto">
          <RevealImage className="h-[40vh] md:h-[90vh] cursor-pointer overflow-hidden flex items-center justify-center relative" onClick={() => openLightbox(['/projects/The Lake Apartment/8.webp'])}>
            <Image
              src="/projects/The Lake Apartment/8.webp"
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
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Founder & Principal</p>
                <h2 className="font-display text-5xl md:text-6xl mb-8">Bakuli Sangamneheri</h2>
                <blockquote className="text-xl italic font-serif text-neutral-500 dark:text-neutral-400 mb-8 border-l-2 border-accent-gold pl-6">
                  "Design is an act of listening—to the client, to the architecture, and to the silence between the walls."
                </blockquote>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-loose mb-6">
                  With over a decade of experience in high-end residential design, Bakuli brings a refined eye and a disciplined approach to every project. Her background in classical architecture informs her understanding of proportion and scale, while her travels influence her eclectic yet cohesive material palettes.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-loose">
                  She established the studio to bridge the gap between stark minimalism and livable warmth, creating spaces that stand as sanctuaries in a chaotic world.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-32 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="font-display text-4xl md:text-5xl">Design <span className="italic font-serif font-light text-accent-gold">Principles</span></h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
            {[
              { id: '01', title: 'Holistic Approach', desc: 'We consider every element, from the structural bones to the finest textile detail, ensuring a seamless visual language throughout.'},
              { id: '02', title: 'Sustainable Luxury', desc: 'We prioritize materials that age gracefully and are sourced responsibly, believing that true luxury respects the earth.'},
              { id: '03', title: 'Sensory Experience', desc: 'Beyond aesthetics, we design for touch, sound, and comfort, creating homes that elevate the daily rituals of living.'},
            ].map((item, i) => (
              <div key={i} className="bg-background-light dark:bg-background-dark p-10 md:p-12 hover:bg-white dark:hover:bg-[#111] transition-colors duration-500 group">
                <Reveal delay={i * 0.2}>
                  <span className="text-xs font-sans text-neutral-400 mb-4 block">{item.id}</span>
                  <h3 className="font-display text-2xl mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed dark:text-neutral-400">
                    {item.desc}
                  </p>
                </Reveal>
              </div>
            ))}
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
