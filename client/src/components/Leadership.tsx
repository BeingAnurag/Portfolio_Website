import { motion } from 'framer-motion';
import { Video, TrendingUp, ArrowUpRight } from 'lucide-react';

// --- DATA: Reduced to 2 Key Roles ---
const ROLES = [
  {
    id: 1,
    role: "Media Lead",
    org: "Media & Film Society",
    desc: "Spearheaded video production for major fests. Led a 15-person team to create cinematic event trailers and aftermovies.",
    impact: "40% Growth",
    impactDesc: "Increase in social media engagement.",
    icon: <Video size={28} />,
    progress: 85
  },
  {
    id: 2,
    role: "Social Strategist",
    org: "Design Hub",
    desc: "Developed cohesive digital identity and content strategies. Curated visual campaigns that resonated with the audience.",
    impact: "100k+ Reach",
    impactDesc: "Organic impressions on promotional assets.",
    icon: <TrendingUp size={28} />,
    progress: 95
  }
];

const Leadership = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-12 items-start relative">
      
      {/* --- Decorative Background Element --- */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cinema-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* --- LEFT COLUMN: Intro Section --- */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
        <span className="font-mono text-cinema-accent text-[10px] tracking-widest uppercase mb-4 block">
          Leadership & Social Impact
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
          Driving Growth Beyond the Frame.
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Combining creative vision with strategic leadership to build communities, amplify brand voices, and deliver measurable impact across digital platforms.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-2 font-mono text-[10px] text-cinema-accent uppercase tracking-widest border-b border-cinema-accent/30 pb-1 hover:text-white hover:border-white transition-colors">
          <span>Let's Collaborate</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* --- RIGHT COLUMN: 2 Cards Grid --- */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ROLES.map((role, index) => (
          <RoleCard key={role.id} role={role} index={index} />
        ))}
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: Role Card ---
const RoleCard = ({ role, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-cinema-accent/50 transition-colors duration-500 h-full flex flex-col justify-between"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div>
        {/* Header: Icon & Role */}
        <div className="flex items-start gap-5 mb-6">
            <div className="p-3 rounded-lg bg-cinema-accent/10 text-cinema-accent shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)] group-hover:shadow-[0_0_20px_-3px_rgba(45,212,191,0.5)] transition-shadow duration-500">
                {role.icon}
            </div>
            <div>
                <h3 className="font-serif text-xl text-white group-hover:text-cinema-accent transition-colors">{role.role}</h3>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{role.org}</span>
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {role.desc}
        </p>
      </div>

      {/* Impact Section */}
      <div className="bg-white/5 p-4 rounded-lg border border-white/5 group-hover:border-cinema-accent/20 transition-colors mt-auto">
        <div className="flex justify-between items-end mb-2">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Key Impact</span>
            <span className="font-serif text-lg text-white">{role.impact}</span>
        </div>
        
        {/* Visual Progress Bar */}
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${role.progress}%` }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                className="h-full bg-cinema-accent shadow-[0_0_10px_currentColor]"
            />
        </div>
        
        <p className="font-mono text-[9px] text-gray-500 leading-relaxed text-right">
            {role.impactDesc}
        </p>
      </div>
    </motion.div>
  );
}

export default Leadership;