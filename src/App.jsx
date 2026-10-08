import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import CarMela from './components/CarMela.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import BuyerSection from './components/BuyerSection.jsx';
import SellerSection from './components/SellerSection.jsx';
import Requirements from './components/Requirements.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introDone && <Intro key="intro" onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero ready={introDone} />
        <About />
        <CarMela />
        <HowItWorks />
        <BuyerSection />
        <SellerSection />
        <Requirements />
      </main>
      <Footer />
    </>
  );
}
