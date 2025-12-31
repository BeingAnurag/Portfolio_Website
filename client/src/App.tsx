import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import SkillsAndRecent from './components/SkillsAndRecent';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('section[id]')
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '-35% 0px -35% 0px', // slightly wider band
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const handleScroll = () => {
    const scrollBottom =
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 50;

    if (scrollBottom) {
      setActiveSection('contact');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    sections.forEach((section) => observer.unobserve(section));
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <Layout activeSection={activeSection}>
      <section id="home">
        <Hero />
      </section>
      
      {/* Kept min-h-screen to prevent scroll jumping */}
      <section id="projects" className="min-h-screen">
        <WorkGrid />
      </section>

      {/* --- SEPARATOR LINE --- */}
      {/* FIX: Reduced padding from 'py-16' to 'py-6' to tighten the gap significantly */}
      <div className="w-full py-6 flex justify-center items-center">
        <div className="w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section id="skills">
        <SkillsAndRecent />
      </section>

      {/* --- NEW: Leadership Section --- */}
      
      {/* Separator Line */}
      <div className="w-full py-6 flex justify-center items-center">
        <div className="w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section id="leadership">
        <Leadership />
      </section>
      
      {/* ------------------------------- */}
      
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;