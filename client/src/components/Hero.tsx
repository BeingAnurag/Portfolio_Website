import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax Animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-cinema-black">
      
      {/* 1. BACKGROUND LAYERS */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black via-transparent to-transparent z-10" />
        {/* Solid bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#050505] via-[#050505] via-40% to-transparent z-20" />
        
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale contrast-125 relative z-0"
          alt="Atmosphere"
        />
        
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-teal-500/20 blur-[100px] transform -translate-y-1/2 z-0" />
      </motion.div>

      {/* 2. FOREGROUND CONTENT */}
      <motion.div 
        style={{ y: textY, opacity }}
        // FIX: Added pt-24 to push the Name/Title lower down the screen
        className="z-30 flex flex-col items-center justify-center space-y-10 px-4 pb-24 pt-24"
      >
        {/* Name Tag */}
        <div className="flex items-center justify-center gap-4">
           <div className="h-[1px] w-12 bg-cinema-accent/50" />
           <span className="font-mono text-cinema-accent text-xs tracking-[0.3em] uppercase">
             Anurag Kumar
           </span>
           <div className="h-[1px] w-12 bg-cinema-accent/50" />
        </div>
        
        {/* Main Title */}
        <h1 className="text-center font-serif text-6xl md:text-8xl lg:text-9xl leading-none text-white mix-blend-overlay">
          I Cut Stories, <br />
          <span className="italic font-light opacity-90">Shape Emotions</span>
        </h1>

        {/* Roles */}
        <div className="flex gap-6 justify-center font-mono text-xs text-gray-400 uppercase tracking-[0.2em]">
             <span>Video Editor</span>
             <span className="text-cinema-accent">•</span>
             <span>Colorist</span>
             <span className="text-cinema-accent">•</span>
             <span>Visual Designer</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
            
            {/* View Projects */}
            <button className="border border-white/10 bg-white/5 text-white px-8 py-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-cinema-accent hover:border-cinema-accent hover:text-black min-w-[160px]">
                View Projects
            </button>
            
            {/* Show Reel */}
            <button className="flex items-center gap-4 text-gray-400 hover:text-cinema-accent transition-colors group px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Show Reel</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cinema-accent group-hover:bg-cinema-accent/10 transition-all duration-300">
                    <Play size={10} fill="currentColor" className="ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                </div>
            </button>
        </div>
      </motion.div>

      {/* 3. SCROLL INDICATOR - Removed Line */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 flex flex-col items-center justify-end z-30 mix-blend-difference pointer-events-none gap-3"
      >
        {/* Text */}
        <span className="text-[9px] font-mono tracking-[0.2em] text-gray-500 uppercase">
          Scroll
        </span>
        
        {/* Moving Arrow (Line removed) */}
        <ArrowDown size={14} className="text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;