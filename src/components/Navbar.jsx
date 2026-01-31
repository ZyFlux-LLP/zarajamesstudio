import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = ({ show }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        if (show) {
            gsap.to(navRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });
        } else {
            // Initially hidden state set via GSAP set or CSS, doing it here for safety
            gsap.set(navRef.current, { y: -100, opacity: 0 });
        }
    }, [show]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { name: 'Projects', href: '#projects' },
        { name: 'Studio', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav ref={navRef} className="opacity-0 -translate-y-full fixed top-0 left-0 w-full z-50 bg-luxury-white/90 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-light tracking-widest uppercase text-luxury-black">
                    Zara James <span className="font-semibold">Studio</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-gray-600 hover:text-luxury-black transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-luxury-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-luxury-black focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-luxury-white border-b border-gray-100 py-6 px-6 shadow-lg">
                    <div className="flex flex-col space-y-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
