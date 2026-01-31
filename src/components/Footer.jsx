import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-luxury-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main CTA */}
                <div className="border-b border-gray-200 pb-24 mb-16">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-luxury-black tracking-tight leading-none mb-12">
                        Let's create <br />
                        <span className="italic font-serif text-gray-500">something beautiful.</span>
                    </h2>

                    <a href="mailto:hello@zarajames.com" className="inline-block text-xl md:text-2xl uppercase tracking-widest border-b border-luxury-black pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300">
                        Get in touch
                    </a>
                </div>

                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div>
                        <h4 className="uppercase tracking-[0.2em] text-sm font-medium mb-6 text-gray-400">Address</h4>
                        <p className="text-luxury-black leading-relaxed font-light">
                            123 Design Avenue,<br />
                            Creative District,<br />
                            Mumbai, India 400001
                        </p>
                    </div>

                    <div>
                        <h4 className="uppercase tracking-[0.2em] text-sm font-medium mb-6 text-gray-400">Contact</h4>
                        <p className="text-luxury-black leading-relaxed font-light mb-2">hello@zarajamesstudio.com</p>
                        <p className="text-luxury-black leading-relaxed font-light">+91 98765 43210</p>
                    </div>

                    <div>
                        <h4 className="uppercase tracking-[0.2em] text-sm font-medium mb-6 text-gray-400">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors"><Instagram size={24} strokeWidth={1.5} /></a>
                            <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors"><Facebook size={24} strokeWidth={1.5} /></a>
                            <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors"><Linkedin size={24} strokeWidth={1.5} /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex justify-between items-center text-sm text-gray-400 pt-8 border-t border-gray-100 font-light">
                    <p>&copy; {new Date().getFullYear()} Zara James Studio. All rights reserved.</p>
                    <p>Designed by Antigravity</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
