import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      {/* We keep the layout rendered but maybe hidden or underneath? 
          Actually, the preloader sits on top (z-100). 
          We just need to make sure Animations in Hero don't play until visible. 
          But ScrollTrigger usually handles visibility. 
          However, for the initial Hero entry animation, we might want to delay it.
      */}
      <div>
        <Layout showNavbar={!isLoading}>
          <Hero />
          <About />
          <Projects />
          <Services />
        </Layout>
      </div>
    </>
  );
}

export default App;
