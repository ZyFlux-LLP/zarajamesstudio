import React from 'react';
import { Reveal, RevealImage } from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <section className="max-w-7xl mx-auto px-6 w-full mb-16 md:mb-24">
            <Reveal>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
                    Let's create <br/><span className="italic font-serif font-light opacity-60">something timeless.</span>
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="max-w-xl text-lg md:text-xl font-light opacity-60 leading-relaxed">
                    We are currently accepting new projects for late 2024. Reach out to discuss your vision for residential or commercial interior design.
                </p>
            </Reveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 space-y-16">
                <Reveal delay={0.3}>
                    <div className="space-y-10">
                        <div>
                            <h3 className="font-display text-2xl mb-4 italic">The Studio</h3>
                            <address className="not-italic opacity-80 font-light leading-loose text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
                                142 Mercer Street, Floor 4<br/>
                                SoHo, New York, NY 10012<br/>
                                United States
                            </address>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl mb-4 italic">Enquiries</h3>
                            <div className="flex flex-col space-y-2 opacity-80 font-light text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
                                <a href="mailto:hello@zarajamesstudio.com" className="hover:opacity-50 transition-opacity hover-underline-animation">hello@zarajamesstudio.com</a>
                                <a href="tel:+12125550199" className="hover:opacity-50 transition-opacity hover-underline-animation">+1 (212) 555 0199</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl mb-4 italic">Social</h3>
                            <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
                                <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest hover-underline-animation">Instagram</a>
                                <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest hover-underline-animation">Pinterest</a>
                                <a href="#" className="opacity-60 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest hover-underline-animation">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <RevealImage delay={0.4} className="w-full h-64 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div className="w-full h-full grayscale invert dark:invert-0 brightness-95 dark:brightness-75 contrast-125">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.238423438906!2d-74.00166288459436!3d40.72372797933066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f1f58204f%3A0xc643905e3f563d41!2sMercer%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1698263564758!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border border-black/5 dark:border-white/10"></div>
                    </div>
                </RevealImage>
            </div>

            <div className="lg:col-span-7 pt-4 lg:pt-0">
                <Reveal delay={0.4}>
                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest opacity-50 mb-2 group-focus-within:opacity-100 transition-opacity">Name</label>
                                <input type="text" id="name" name="name" placeholder="Jane Doe" className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:ring-0 px-0 py-3 transition-colors placeholder-transparent focus:placeholder-gray-400 text-lg" />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest opacity-50 mb-2 group-focus-within:opacity-100 transition-opacity">Email</label>
                                <input type="email" id="email" name="email" placeholder="jane@example.com" className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:ring-0 px-0 py-3 transition-colors placeholder-transparent focus:placeholder-gray-400 text-lg" />
                            </div>
                        </div>
                        <div className="group">
                            <label htmlFor="interest" className="block text-xs uppercase tracking-widest opacity-50 mb-2 group-focus-within:opacity-100 transition-opacity">Project Type</label>
                            <select id="interest" name="interest" className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:ring-0 px-0 py-3 transition-colors text-lg cursor-pointer appearance-none text-gray-500 focus:text-black dark:focus:text-white">
                                <option>Residential Interior</option>
                                <option>Commercial Space</option>
                                <option>Architectural Consultation</option>
                                <option>Furniture Sourcing</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="group">
                            <label htmlFor="message" className="block text-xs uppercase tracking-widest opacity-50 mb-2 group-focus-within:opacity-100 transition-opacity">Message</label>
                            <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:ring-0 px-0 py-3 transition-colors placeholder-transparent focus:placeholder-gray-400 text-lg resize-none"></textarea>
                        </div>
                        <div className="pt-8 flex items-center justify-between">
                             <div className="flex items-center space-x-3">
                                <input id="newsletter" type="checkbox" className="w-4 h-4 border-gray-300 dark:border-gray-600 text-black dark:text-white focus:ring-offset-0 focus:ring-0 bg-transparent rounded-sm" />
                                <label htmlFor="newsletter" className="text-xs uppercase tracking-wider opacity-60">Subscribe to our journal</label>
                            </div>
                            <button type="submit" className="group relative inline-flex items-center justify-center overflow-hidden px-10 py-4 font-medium tracking-tighter text-white bg-primary dark:bg-white dark:text-black transition duration-300 ease-out hover:w-48 w-40">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative uppercase tracking-widest text-xs flex items-center">
                                    Send
                                    <span className="material-icons-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    </div>
  );
};

export default Contact;