import { motion } from 'framer-motion';
import { Monitor, Cpu, Aperture, Layers } from 'lucide-react';

const SkillsAndRecent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 items-start justify-center">
      
      {/* LEFT COLUMN */}
      <div className="w-full md:w-5/12 sticky top-32">
        <span className="font-mono text-cinema-accent text-[10px] tracking-widest uppercase mb-6 block">
          The Toolbox
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-white mb-2">
          Technical Precision meets
        </h2>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-gray-500 italic mb-8">
          Creative Intuition.
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
          My workflow integrates industry-standard tools with a deep understanding of visual storytelling. Whether it's complex node-based compositing or granular audio mixing, every detail matters.
        </p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            <ToolItem icon={<Monitor size={18} />} title="Editing" desc="PREMIERE PRO, AVID" />
            <ToolItem icon={<Aperture size={18} />} title="Color" desc="DAVINCI RESOLVE" />
            <ToolItem icon={<Layers size={18} />} title="Motion" desc="AFTER EFFECTS" />
            <ToolItem icon={<Cpu size={18} />} title="Design" desc="PHOTOSHOP, ILLUSTRATOR" />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full md:w-5/12 pt-4">
        <div className="w-full max-w-lg relative border border-white/5 bg-white/[0.02] p-8 md:p-10 rounded-sm backdrop-blur-sm overflow-hidden">
          {/* Decorative HUD Corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cinema-accent/30" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cinema-accent/30" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cinema-accent/30" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cinema-accent/30" />
          
          {/* Skill Bars */}
          <div className="space-y-10">
            <SkillBar label="COLOR GRADING" percentage={95} color="bg-orange-500" />
            <SkillBar label="MOTION GRAPHICS" percentage={88} color="bg-cyan-500" />
            <SkillBar label="SOUND DESIGN" percentage={78} color="bg-emerald-500" />
            <SkillBar label="VISUAL EFFECTS" percentage={85} color="bg-purple-500" />
          </div>

          <div className="mt-12 flex justify-between items-end font-mono text-[9px] text-gray-600 uppercase tracking-widest">
            <span>System Status: Online</span>
            <span>Render: GPU Accelerated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components

const ToolItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 items-start group">
    <div className="p-2.5 bg-white/5 border border-white/10 text-gray-500 group-hover:text-cinema-accent group-hover:border-cinema-accent/30 transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-serif text-base text-white mb-1 group-hover:text-cinema-accent transition-colors">{title}</h4>
      <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">{desc}</p>
    </div>
  </div>
);

// FIX: Updated SkillBar with new color logic and background glow layer
const SkillBar = ({ label, percentage, color }: { label: string, percentage: number, color: string }) => (
  <div className="group w-full">
    {/* Labels: White by default, Green on hover */}
    <div className="flex justify-between items-end mb-2 font-mono text-[9px] tracking-[0.2em]">
      <span className="text-white group-hover:text-cinema-accent transition-colors duration-300">{label}</span>
      <span className="text-cinema-accent">{percentage}%</span>
    </div>
    
    <div className="h-[1px] w-full bg-white/10 relative"> {/* Slightly brighter track background */}
      
      {/* LAYER 1: The "Behind" Gradient Glow (Softer, wider, blurred) */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        // Taller height (h-1), centered vertically, lower opacity, and blur create the "gradient behind" effect
        className={`absolute top-1/2 left-0 -translate-y-1/2 h-1 ${color} opacity-40 blur-[3px]`}
      />

      {/* LAYER 2: The Main Sharp Meter Bar (Sits on top) */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute top-0 left-0 h-full ${color} shadow-[0_0_6px_currentColor] z-10`}
      />
    </div>
  </div>
);

export default SkillsAndRecent;