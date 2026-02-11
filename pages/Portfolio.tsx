import React, { useState, useEffect } from 'react';
import { Reveal, RevealImage } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';

type Project = {
  id: number;
  title: string;
  category: string; // 'Interior Design' | 'Architecture' | 'Commercial'
  location: string;
  year: string;
  images: string[];
  size: 'large' | 'tall' | 'wide' | 'square';
};

// Helper to generate image paths based on folder name and count
const getImages = (folderName: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/projects/${folderName}/${i + 1}.jpg`);
};

// DATA: Real project data mapped to folders
const projects: Project[] = [
  // --- INTERIOR DESIGN PROJECTS (9) ---
  {
    id: 1,
    title: 'Chesilton',
    category: 'Interior Design',
    location: 'London',
    year: '2023',
    images: getImages('Chesilton', 7),
    size: 'large'
  },
  {
    id: 2,
    title: 'International Mckenzie Fulham',
    category: 'Interior Design',
    location: 'Fulham',
    year: '2022',
    images: getImages('International Mckenzie Fulham', 4),
    size: 'tall'
  },
  {
    id: 3,
    title: 'Kensington',
    category: 'Interior Design',
    location: 'Kensington',
    year: '2023',
    images: getImages('Kensington', 16),
    size: 'wide'
  },
  {
    id: 4,
    title: 'Khemka Residence Delhi',
    category: 'Interior Design',
    location: 'New Delhi',
    year: '2022',
    images: getImages('Khemka Residence Delhi', 2),
    size: 'square'
  },
  {
    id: 5,
    title: 'London',
    category: 'Interior Design',
    location: 'London',
    year: '2023',
    images: getImages('London', 30),
    size: 'tall'
  },
  {
    id: 6,
    title: 'Nikhil Agarwal Goregaon',
    category: 'Interior Design',
    location: 'Mumbai',
    year: '2022',
    images: getImages('Nikhil Agarwal Goregaon', 8),
    size: 'large'
  },
  {
    id: 7,
    title: 'RAJ Grandeur Powai',
    category: 'Interior Design',
    location: 'Mumbai',
    year: '2021',
    images: getImages('RAJ Grandeur Powai', 6),
    size: 'wide'
  },
  {
    id: 8,
    title: 'Waterford',
    category: 'Interior Design',
    location: 'Hertfordshire',
    year: '2020',
    images: getImages('waterford', 8),
    size: 'square'
  },
  {
    id: 9,
    title: 'Bathroom Design',
    category: 'Interior Design',
    location: 'Various',
    year: '2023',
    images: getImages('Bathroom Design', 2),
    size: 'square'
  },

  // --- ARCHITECTURE PROJECTS (1) ---
  {
    id: 10,
    title: 'Lonavala Architecture Design',
    category: 'Architecture',
    location: 'Lonavala',
    year: '2022',
    images: getImages('Lonavala Architecture Design', 3),
    size: 'square'
  },

  // --- COMMERCIAL PROJECTS (2) ---
  {
    id: 11,
    title: 'Jio World Convention Centre',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2022',
    images: getImages('Jio World Convention Centre Commercial', 1),
    size: 'square'
  },
  {
    id: 12,
    title: 'Symcon Goregaon',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2021',
    images: getImages('Symcon Goregaon Commercial', 3),
    size: 'wide'
  },
];

const Slideshow = ({ images, delay = 0 }: { images: string[], delay?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Randomize interval slightly to prevent all sliders changing in sync
    const intervalTime = 3000 + Math.random() * 2000;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <RevealImage delay={delay} className="relative w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Project slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-auto max-h-[80vh] object-contain will-change-opacity"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-50 pointer-events-none"></div>
    </RevealImage>
  );
};

const Portfolio: React.FC = () => {
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

  const getGridClass = (size: string) => {
    // All projects take full width, one per row
    return 'col-span-1 w-full';
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto min-h-screen">
      {/* Header */}
      <section className="mb-20 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <Reveal>
            <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 ml-1">Selected Works</span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary dark:text-white leading-none">
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
      <div className="flex flex-col gap-20">
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
                    <div className="relative w-full overflow-hidden">
                        <Slideshow images={project.images} delay={index * 0.1} />
                    </div>

                    <Reveal delay={0.2}>
                        <div className="mt-8 flex justify-between items-start pt-6 border-t border-gray-200 dark:border-gray-800 pr-2">
                            <div className="flex-1">
                                <h3 className="font-display text-3xl md:text-4xl text-primary dark:text-white mb-2">{project.title}</h3>
                                <p className="font-serif text-lg text-gray-500 dark:text-gray-400 italic">{project.category} — {project.location}</p>
                            </div>
                            <span className="material-icons-outlined text-2xl text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 flex-shrink-0 ml-4">arrow_forward</span>
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
};

export default Portfolio;