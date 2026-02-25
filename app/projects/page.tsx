'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, RevealImage } from '../../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../../components/Lightbox';

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  size: 'large' | 'tall' | 'wide' | 'square';
};

const getImages = (folderName: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/projects/${folderName}/${i + 1}.webp`);
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Kensington',
    category: 'Interior Design',
    location: 'Kensington',
    year: '2023',
    images: getImages('Kensington', 16),
    size: 'wide'
  },
  {
    id: 2,
    title: 'Chesilton',
    category: 'Interior Design',
    location: 'London',
    year: '2023',
    images: getImages('Chesilton', 7),
    size: 'large'
  },
  {
    id: 3,
    title: 'The Board House',
    category: 'Interior Design',
    location: 'Mumbai',
    year: '2023',
    images: getImages('The Board House', 28),
    size: 'tall'
  },
  {
    id: 4,
    title: 'The Lake Apartment',
    category: 'Interior Design',
    location: 'Mumbai',
    year: '2023',
    images: getImages('The Lake Apartment', 13),
    size: 'large'
  },
  {
    id: 5,
    title: 'London',
    category: 'Interior Design',
    location: 'London',
    year: '2023',
    images: getImages('London', 29),
    size: 'tall'
  },
  {
    id: 6,
    title: 'Fulham',
    category: 'Interior Design',
    location: 'Fulham',
    year: '2022',
    images: getImages('Fulham', 4),
    size: 'tall'
  },
  {
    id: 7,
    title: 'Goregaon',
    category: 'Interior Design',
    location: 'Mumbai',
    year: '2022',
    images: getImages('Goregaon', 8),
    size: 'large'
  },
  {
    id: 8,
    title: 'Waterford',
    category: 'Interior Design',
    location: 'Hertfordshire',
    year: '2020',
    images: getImages('Waterford', 8),
    size: 'square'
  },
  {
    id: 9,
    title: 'Lonavala Architecture Design',
    category: 'Architecture',
    location: 'Lonavala',
    year: '2022',
    images: getImages('Lonavala Architecture Design', 3),
    size: 'square'
  },
  {
    id: 10,
    title: 'Jio World Convention Centre',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2022',
    images: getImages('Jio World Convention Centre Commercial', 1),
    size: 'square'
  },
  {
    id: 11,
    title: 'Symcon Goregaon',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2021',
    images: getImages('Symcon Goregaon Commercial', 3),
    size: 'wide'
  },
];

const Slideshow = ({ images, delay = 0, priority = false }: { images: string[], delay?: number, priority?: boolean }) => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  // Preload next image
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new window.Image();
      img.src = images[nextIndex];
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, nextIndex]));
      };
    }
  }, [index, images, loadedImages]);

  // Preload first 3 images on mount
  useEffect(() => {
    const preloadCount = Math.min(3, images.length);
    for (let i = 0; i < preloadCount; i++) {
      if (!loadedImages.has(i)) {
        const img = new window.Image();
        img.src = images[i];
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, i]));
        };
      }
    }
  }, [images, loadedImages]);

  useEffect(() => {
    const intervalTime = 4000;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <RevealImage delay={delay} className="relative w-full h-[30vh] md:h-[80vh] mb-3 flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
              opacity: { duration: 1.2 },
              scale: { duration: 1.2 }
            }}
            className="absolute inset-0"
            style={{
              willChange: 'opacity, transform',
              zIndex: 1
            }}
          >
            <Image
              src={images[index]}
              alt="Project slide"
              fill
              priority={priority && index < 2}
              sizes="(max-width: 768px) 100vw, 90vw"
              quality={95}
              className="object-contain"
              unoptimized={false}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-50 pointer-events-none"></div>
      </RevealImage>
    </div>
  );
};

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
    <div className="pt-32 pb-20 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto min-h-screen">
      {/* Header */}
      <section className="mb-20 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <Reveal>
          <div>
            <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 ml-1">Selected Works</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary dark:text-white leading-[1.2] pb-2">
              Spatial <br/><span className="font-serif italic font-light ml-8 md:ml-16">Poetry</span>
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.2} width="fit-content">
          <div className="max-w-md mb-2">
            <p className="font-serif text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              A curated collection of residential, commercial, and architectural projects that embody our commitment to timeless design and refined aesthetics.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Filters */}
      <Reveal delay={0.3}>
        <div className="flex flex-wrap gap-8 mb-16 border-b border-gray-200 dark:border-gray-800 pb-4">
          {['All', 'Interior Design', 'Architecture', 'Commercial'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-sans uppercase tracking-widest transition-colors ${filter === cat ? 'text-black dark:text-white font-medium' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid - One project per row */}
      <div className="flex flex-col gap-4 md:gap-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              key={project.id}
              className="group cursor-pointer w-full"
              onClick={() => openLightbox(project.images)}
            >
              <Slideshow images={project.images} delay={index * 0.1} priority={index < 2} />

              <Reveal delay={0.2}>
                <div className="flex justify-between items-baseline border-t border-gray-200 dark:border-gray-800 pt-4 pr-2">
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-4xl text-primary dark:text-white mb-1">{project.title}</h3>
                    <p className="text-[10px] md:text-lg uppercase md:normal-case tracking-widest md:tracking-normal text-gray-500 dark:text-gray-400 md:font-serif md:italic">{project.category} — {project.location}</p>
                  </div>
                  <span className="material-icons-outlined text-sm md:text-2xl text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 ml-2 md:ml-4">arrow_forward</span>
                </div>
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
