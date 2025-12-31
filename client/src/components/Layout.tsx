import React, { useState, useEffect } from 'react';
import { Film, Layers, Image as ImageIcon, Mail, Instagram, Globe } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
}

const Layout = ({ children, activeSection }: LayoutProps) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cinema-black text-white selection:bg-cinema-accent selection:text-black relative overflow-x-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#000000]" />
      <div className="grain-overlay" />

      {/* Corner Markers */}
      <div className="fixed top-8 left-8 w-4 h-4 border-l border-t border-gray-600 opacity-50 z-40 pointer-events-none" />
      <div className="fixed bottom-8 right-8 w-4 h-4 border-r border-b border-gray-600 opacity-50 z-40 pointer-events-none" />

      {/* REC Indicator */}
      <div className="fixed top-8 right-12 z-50 font-mono text-xs tracking-widest flex items-center gap-2 text-gray-400">
        <div className="w-2 h-2 rounded-full bg-cinema-red animate-pulse" />
        <span>REC</span>
        <span>{time}</span>
      </div>

      {/* Sidebar Navigation */}
      {/* Slimmer width (w-16), transparent, no borders */}
      <nav className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center py-12 z-50 bg-transparent pointer-events-none">
        <div className="flex flex-col gap-10 mt-20 pointer-events-auto">
          <NavItem 
            icon={<Film size={18} />} 
            active={activeSection === 'home'} 
            onClick={() => scrollToSection('home')}
          />
          <NavItem 
            icon={<Layers size={18} />} 
            active={activeSection === 'projects'} 
            onClick={() => scrollToSection('projects')}
          />
          <NavItem 
            icon={<ImageIcon size={18} />} 
            active={activeSection === 'skills'} 
            onClick={() => scrollToSection('skills')}
          />
          <NavItem 
            icon={<Mail size={18} />} 
            active={activeSection === 'contact'} 
            onClick={() => scrollToSection('contact')}
          />
        </div>
        
        {/* Visual Anchor Line - Adjusted height for slimmer look */}
        <div className="w-[1px] h-16 bg-gray-800 my-auto opacity-30" />

        <div className="flex flex-col gap-6 mb-8 pointer-events-auto">
          <Instagram size={16} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <Globe size={16} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
        </div>
      </nav>

      {/* Main Content - Reduced padding to match new sidebar width */}
      <main className="pl-0 md:pl-16 relative z-10">
        {children}
      </main>
    </div>
  );
};

// NavItem Component
const NavItem = ({ icon, active, onClick }: { icon: React.ReactNode, active?: boolean, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-300 relative group flex items-center justify-center
      ${active 
        ? 'text-cinema-accent scale-110 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]' 
        : 'text-gray-600 hover:text-cinema-accent hover:drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]'
      }
    `}
  >
    {icon}
  </div>
);

export default Layout;