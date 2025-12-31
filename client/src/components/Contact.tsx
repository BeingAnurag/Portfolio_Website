import { motion } from 'framer-motion';
import { Instagram, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    // FIX: Changed to 'min-h-[110vh]' to create extra vertical space beyond the viewport
    <footer className="relative min-h-[110vh] flex flex-col items-center justify-center pt-32 pb-8 px-8 md:px-16 text-center border-t border-white/5 bg-cinema-black z-20">
      
      {/* Main Content Wrapper - Added 'pb-40' to push content UP and away from the footer */}
      <div className="flex-grow flex flex-col items-center justify-center w-full pb-5">
        
        {/* Call to Action Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 rounded-full border border-cinema-accent/30 bg-cinema-accent/5 font-mono text-cinema-accent text-[10px] uppercase tracking-widest mb-8"
        >
          Available for Freelance
        </motion.div>

        <h2 className="font-serif text-5xl md:text-7xl mb-4 text-white">
          Let's create something
        </h2>
        <h2 className="font-serif text-5xl md:text-7xl mb-16 text-gray-600 italic">
          worth watching.
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-24">
          {/* Start Project */}
          <button className="bg-white text-black px-10 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-cinema-accent transition-all duration-300 min-w-[180px]">
            Start a Project
          </button>
          
          {/* Resume */}
          <button className="bg-transparent border border-white/20 text-white px-10 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:border-cinema-accent hover:text-cinema-accent transition-all duration-300 min-w-[180px]">
            Download Resume
          </button>
        </div>
      </div>

      {/* --- FOOTER BAR --- */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center py-8 border-t border-white/10 mt-auto">
        
        {/* Social Links (Left) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-0">
          <FooterLink icon={<Instagram size={14} />} label="Instagram" />
          <FooterLink icon={<Globe size={14} />} label="Behance" />
          <FooterLink icon={<Linkedin size={14} />} label="LinkedIn" />
        </div>
        
        {/* Copyright (Right) */}
        <div className="font-mono text-[10px] text-gray-600 tracking-wider uppercase flex items-center gap-2">
          <span>© 2025 Anurag Kumar. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for consistent Footer Links
const FooterLink = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <a 
    href="#" 
    className="group flex items-center gap-2 font-mono text-[10px] text-gray-500 uppercase tracking-widest hover:text-cinema-accent transition-colors duration-300"
  >
    <span className="opacity-70 group-hover:opacity-100 transition-opacity">{icon}</span>
    <span>{label}</span>
    <ArrowUpRight size={10} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
  </a>
);

export default Contact;