import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/01_Hero';
import Problem from './sections/02_Problem';
import Solution from './sections/03_Solution';
import Integration from './sections/04_Integration';
import Validation from './sections/05_Validation';
import Process from './sections/06_Process';
import Outcomes from './sections/07_Outcomes';
import Pricing from './sections/08_Pricing';
import FAQ from './sections/09_FAQ';
import FinalCTA from './sections/10_FinalCTA';

import Starfield from './components/Starfield';

function App() {
  return (
    <div className="bg-galaxy-100 min-h-screen text-white font-sans selection:bg-brand-primary selection:text-galaxy-100 relative">
      <Starfield count={800} speed={1} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Integration />
          <Validation />
          <Process />
          <Outcomes />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
