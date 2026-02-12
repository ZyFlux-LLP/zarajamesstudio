'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <span className="material-icons-outlined text-4xl">close</span>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 z-50 text-white text-sm tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-8 z-50 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Previous image"
            >
              <span className="material-icons-outlined text-5xl">chevron_left</span>
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-8 z-50 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Next image"
            >
              <span className="material-icons-outlined text-5xl">chevron_right</span>
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase hidden md:block">
            Use arrow keys to navigate • ESC to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
