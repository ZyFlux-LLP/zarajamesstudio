'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mounted) {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Studio', path: '/studio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = pathname === '/';
  const headerClass = isScrolled || !isHome
    ? "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-4 shadow-sm"
    : "bg-transparent py-8";

  const textColorClass = (isHome && !isScrolled)
    ? "text-white mix-blend-difference"
    : "text-primary dark:text-white";

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 ${headerClass}`}>
        <div className={`flex justify-between items-center max-w-[1920px] mx-auto ${textColorClass}`}>
          <Link href="/" className="font-display text-2xl tracking-widest uppercase font-normal z-50 flex items-center">
            Zara James <span className="ml-1">St<span className="underline decoration-1 underline-offset-4">u</span>dio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-xs uppercase tracking-[0.2em] font-medium hover-underline-animation opacity-90 hover:opacity-100"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200/20 transition-colors"
              aria-label="Toggle Dark Mode"
              suppressHydrationWarning
            >
              <span className="material-icons-outlined text-sm">{mounted && isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-icons-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-primary dark:text-white hover:italic transition-all"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
              className="mt-8 text-xs uppercase tracking-widest text-primary dark:text-white border border-current px-6 py-2"
            >
              Switch to {mounted && isDark ? 'Light' : 'Dark'} Mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white dark:bg-[#050505] dark:text-neutral-400 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800 dark:border-neutral-900">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <h3 className="font-display text-3xl mb-6">ZARA JAMES <br/> ST<span className="underline decoration-1 underline-offset-4">U</span>DIO</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Architectural Clarity. Enduring Design.</p>
            <p className="text-sm font-light text-neutral-400 max-w-sm leading-relaxed">
              A Mumbai-based residential design studio specialising in high-value, specification-led interiors across India and select international locations.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-semibold opacity-60">Studio</h4>
            <ul className="space-y-4 font-light text-sm text-neutral-400">
              <li><Link href="/studio" className="hover:text-white transition-colors hover-underline-animation">Studio</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors hover-underline-animation">Projects</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors hover-underline-animation">Approach</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors hover-underline-animation">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-semibold opacity-60">Connect</h4>
            <ul className="space-y-4 font-light text-sm text-neutral-400">
              <li><a href="https://www.instagram.com/zarajames_studio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-underline-animation">Instagram</a></li>
              <li><a href="https://in.pinterest.com/studiozarajames/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-underline-animation">Pinterest</a></li>
              <li><a href="https://www.linkedin.com/in/zara-james-studio-4972743aa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover-underline-animation">LinkedIn</a></li>
              <li><a href="mailto:hello@zarajamesstudio.com" className="hover:text-white transition-colors hover-underline-animation">hello@zarajamesstudio.com</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto flex justify-end pt-8 border-t border-neutral-800 dark:border-neutral-900 text-xs text-neutral-500">
          <p>© 2026 Zara James Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
