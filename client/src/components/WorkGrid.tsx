import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// ==========================================
// 👇 REPLACE THIS DATA WITH YOUR OWN WORK 👇
// ==========================================
const PROJECTS = [
  {
    id: 1,
    title: "The Silent City",
    category: "VIDEO EDITING",
    tools: ["PREMIERE PRO", "SOUND DESIGN"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop",
    description: "Cinematic short film edit focusing on pacing, rhythm, and urban atmosphere."
  },
  {
    id: 2,
    title: "Golden Hour Memoirs",
    category: "COLOR GRADING",
    tools: ["DAVINCI RESOLVE", "COLOR SPACE"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop",
    description: "Commercial grade transformation for a travel documentary series."
  },
  {
    id: 3,
    title: "Vogue Noir",
    category: "PHOTO RETOUCHING",
    tools: ["PHOTOSHOP", "FREQUENCY SEPARATION"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
    description: "High-end editorial skin retouching and composite work for fashion print."
  },
  {
    id: 4,
    title: "Neon Systems",
    category: "GRAPHIC DESIGN",
    tools: ["ILLUSTRATOR", "3D TYPOGRAPHY"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    description: "Brand identity and poster series for an underground electronic music event."
  }
];

const WorkGrid = () => {
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <span className="font-mono text-cinema-accent text-[10px] tracking-widest uppercase mb-4 block">
            Selected Works
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            Recent Projects
          </h2>
        </div>
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
          2023 — 2025
        </span>
      </div>

      {/* --- PROJECTS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

// --- INDIVIDUAL CARD COMPONENT ---
const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. IMAGE AREA */}
      <div className="relative overflow-hidden w-full aspect-[16/9] bg-gray-900 border border-white/5">
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
        
        {/* The Image */}
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        />

        {/* Floating "View Case" Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="bg-black/60 backdrop-blur-md border border-white/20 px-6 py-3 flex items-center gap-3">
             <span className="font-mono text-[10px] text-white uppercase tracking-widest">View Project</span>
             <ArrowUpRight size={12} className="text-cinema-accent" />
          </div>
        </motion.div>

        {/* Category Label */}
        <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur px-3 py-1 border border-white/10">
            <span className="font-mono text-[9px] uppercase tracking-wider text-cinema-accent">
                {project.category}
            </span>
        </div>
      </div>

      {/* 2. TEXT INFO */}
      <div className="flex flex-col gap-4">
        
        {/* Title & Desc Container - Added 'relative' here */}
        <div className="relative flex justify-between items-start border-b border-white/10 pb-4">
          <div>
            <h3 className="text-3xl font-serif text-white mb-2 transition-colors duration-300 group-hover:text-cinema-accent">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 font-mono leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
          </div>
          
          {/* FIX: ANIMATED LINE MOVED HERE. It overlays the existing gray border-b. */}
          <div className="absolute bottom-0 left-0 h-[1px] bg-cinema-accent w-0 group-hover:w-full transition-all duration-700 ease-out z-10" />
        </div>

        {/* Tools List - Now outside the animated section */}
        <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 border border-white/10 bg-white/5 text-[9px] font-mono text-gray-400 uppercase tracking-widest group-hover:border-white/20 group-hover:text-white transition-colors delay-75"
                >
                    {tool}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkGrid;