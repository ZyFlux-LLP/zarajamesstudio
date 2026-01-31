import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, showNavbar }) => {
    return (
        <div className="min-h-screen flex flex-col bg-luxury-white text-luxury-black font-outfit selection:bg-luxury-beige selection:text-luxury-black">
            <Navbar show={showNavbar} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
