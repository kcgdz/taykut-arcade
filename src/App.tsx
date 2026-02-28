import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronUp, Monitor, Palette, Megaphone, Coffee } from 'lucide-react';

// --- Components ---

const PixelButton = ({ children, className = '', onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button className={`pixel-button ${className}`} onClick={onClick}>
    {children}
  </button>
);

const PixelBox = ({ children, title, className = '' }: { children: React.ReactNode, title?: string, className?: string }) => (
  <div className={`bg-bg-secondary border-4 border-white p-6 relative ${className}`}>
    {title && (
      <div className="absolute -top-4 left-4 bg-bg-secondary px-2 text-accent text-xs">
        {title}
      </div>
    )}
    {children}
  </div>
);

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 100 + delay);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, text, delay]);

  return <span className="blink-cursor">{displayedText}</span>;
};

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['START', 'PLAY', 'SCORES', 'STATS', 'CREDITS'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-bg-primary border-b-4 border-white z-40 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tighter">TAYKUT</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-secondary border-b-4 border-white p-6 flex flex-col gap-4 md:hidden"
          >
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="start" className="min-height-[100vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center">
      <div className="w-full max-w-4xl mb-8 flex justify-between text-[10px] md:text-sm text-text-muted">
        <div>SCORE: 000000</div>
        <div className="text-white">HI-SCORE: 999999</div>
      </div>

      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-7xl lg:text-8xl mb-4 text-white drop-shadow-[4px_4px_0_rgba(233,69,96,1)]"
      >
        TAYKUT
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl mb-12 text-accent"
      >
        DIGITAL AGENCY
      </motion.p>

      <div className="mb-12 h-8">
        <TypewriterText text="INSERT COIN TO CONTINUE..." />
      </div>

      <PixelButton className="mb-16">
        PRESS START
      </PixelButton>

      <div className="text-[10px] text-text-muted">
        <p>CONTROLS: [W][A][S][D] TO MOVE | [SPACE] TO INTERACT</p>
      </div>
    </section>
  );
};

const StatsBar = () => {
  return (
    <section id="stats" className="bg-bg-secondary border-y-4 border-white py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <span className="text-green-400">LEVEL:</span>
          <div className="flex-1 h-4 bg-gray-800 border-2 border-white">
            <div className="h-full bg-green-400 w-[85%]"></div>
          </div>
          <span>85</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cyan-400">XP:</span>
          <div className="flex-1 h-4 bg-gray-800 border-2 border-white">
            <div className="h-full bg-cyan-400 w-[60%]"></div>
          </div>
          <span>60%</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-accent">HP:</span>
          <div className="flex-1 h-4 bg-gray-800 border-2 border-white">
            <div className="h-full bg-accent w-[100%]"></div>
          </div>
          <span>MAX</span>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Monitor className="w-8 h-8" />, title: 'WEB DEV', desc: 'PIXEL PERFECT CODE FOR MODERN BROWSERS.' },
    { icon: <Palette className="w-8 h-8" />, title: 'DESIGN', desc: '8-BIT AESTHETICS MEETS MODERN UX.' },
    { icon: <Megaphone className="w-8 h-8" />, title: 'MARKETING', desc: 'LEVEL UP YOUR BRAND VISIBILITY.' },
    { icon: <Coffee className="w-8 h-8" />, title: 'CONSULT', desc: 'STRATEGIC GUIDANCE FOR YOUR QUEST.' },
  ];

  return (
    <section id="play" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl mb-16 text-center">SELECT SERVICE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <PixelBox className="h-full group-hover:border-accent transition-colors">
              <div className="mb-6 text-accent">{s.icon}</div>
              <h3 className="text-sm mb-4">{s.title}</h3>
              <p className="text-[10px] leading-relaxed text-text-muted">{s.desc}</p>
            </PixelBox>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="credits" className="bg-bg-primary border-t-4 border-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-lg mb-6">TAYKUT</h3>
          <p className="text-[10px] text-text-muted">EST. 198X. BUILDING THE FUTURE OF DIGITAL ARCADE.</p>
        </div>
        <div>
          <h3 className="text-lg mb-6">SOCIAL</h3>
          <div className="flex flex-col gap-4 text-[10px]">
            <a href="#" className="hover:text-accent">TWITTER</a>
            <a href="#" className="hover:text-accent">GITHUB</a>
            <a href="#" className="hover:text-accent">DISCORD</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg mb-6">GAME OVER</h3>
          <p className="text-[10px] text-text-muted">READY TO START YOUR PROJECT? SEND US A MESSAGE.</p>
          <PixelButton className="mt-6 !px-4 !py-2 !text-[10px]">
            CONTACT US
          </PixelButton>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t-2 border-white/20">
        <p className="text-[8px] text-text-muted">© 2026 TAYKUT ARCADE. ALL RIGHTS RESERVED.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-[10px] hover:text-accent"
        >
          BACK TO TOP <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="crt-overlay" />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        
        {/* Additional sections can be added here like HIGH SCORES (Portfolio) */}
        <section id="scores" className="py-24 px-6 bg-bg-secondary border-y-4 border-white">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl mb-12 text-center">HIGH SCORES</h2>
              <div className="space-y-4">
                {[
                  { name: 'PROJECT_ALPHA', score: '999,999' },
                  { name: 'BETA_SYSTEMS', score: '850,000' },
                  { name: 'GAMMA_WEB', score: '720,000' },
                  { name: 'DELTA_APP', score: '640,000' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b-2 border-white/10 pb-2 text-xs md:text-sm">
                    <span>{i + 1}. {item.name}</span>
                    <span className="text-accent">{item.score}</span>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
