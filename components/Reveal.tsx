'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = '100%', delay = 0.25 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Custom easing "luxury" feel
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealImage: React.FC<RevealProps & { className?: string; onClick?: () => void }> = ({ children, width = '100%', delay = 0, className, onClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <div ref={ref} className={className} style={{ position: 'relative', width, overflow: 'hidden' }} onClick={onClick}>
        <motion.div
           variants={{
            hidden: { opacity: 0, scale: 1.05 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
        <motion.div
             variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeIn", delay: delay }}
              style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#f9f8f4", // Should match background or accent
                  zIndex: 20
              }}
              className="bg-background-light dark:bg-background-dark"
        />
      </div>
    );
  };