import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Default to light theme. Only enable dark if explicitly stored in localStorage.
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Studio', path: '/studio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine header transparency based on page and scroll
  const isHome = location.pathname === '/';
  const headerClass = isScrolled || !isHome
    ? "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md py-4 shadow-sm"
    : "bg-transparent py-8";

  const textColorClass = (isHome && !isScrolled) 
    ? "text-white mix-blend-difference" 
    : "text-primary dark:text-white";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 ${headerClass}`}>
        <div className={`flex justify-between items-center max-w-[1920px] mx-auto ${textColorClass}`}>
          <Link to="/" className="font-display text-2xl tracking-widest uppercase font-normal z-50 flex items-center">
            Zara James <span className="ml-1">St<span className="underline decoration-1 underline-offset-4">u</span>dio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-xs uppercase tracking-[0.2em] font-medium hover-underline-animation opacity-90 hover:opacity-100"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200/20 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-icons-outlined text-sm">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                to={link.path} 
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
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white dark:bg-[#050505] dark:text-neutral-400 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800 dark:border-neutral-900">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <h3 className="font-display text-3xl mb-6">ZARA JAMES <br/> ST<span className="underline decoration-1 underline-offset-4">U</span>DIO</h3>
            <p className="text-sm font-light text-neutral-400 max-w-sm leading-relaxed">
              A luxury interior design studio creating timeless, emotive spaces for discerning clients worldwide. Based in London, working globally.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-semibold opacity-60">Studio</h4>
            <ul className="space-y-4 font-light text-sm text-neutral-400">
              <li><Link to="/studio" className="hover:text-white transition-colors hover-underline-animation">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors hover-underline-animation">Our Projects</Link></li>
              <li><Link to="/studio" className="hover:text-white transition-colors hover-underline-animation">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors hover-underline-animation">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-8 font-semibold opacity-60">Connect</h4>
            <ul className="space-y-4 font-light text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors hover-underline-animation">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover-underline-animation">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover-underline-animation">LinkedIn</a></li>
              <li><a href="mailto:hello@zarajames.com" className="hover:text-white transition-colors hover-underline-animation">hello@zarajames.com</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 dark:border-neutral-900 text-xs text-neutral-500">
          <p>© 2024 Zara James Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors hover-underline-animation">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors hover-underline-animation">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;