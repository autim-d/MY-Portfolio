import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';
import avatarImg from '../assets/Headshot.png';

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang].nav;
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: t.about, path: '/about' },
    { name: t.work, path: '/#work' },
    { name: t.leadership, path: '/#leadership' },
    { name: t.solutions, path: '/solutions' },
    { name: t.lab, path: '/#lab' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/90 backdrop-blur-md py-6 border-b border-neutral-900"
      >
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={avatarImg} alt="Avatar" className="w-10 h-10 rounded-full object-cover bg-neutral-800" />
            <Link to="/" className="text-white font-bold text-lg tracking-tight">Ahmed Bawazir</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div 
              className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-secondary)] relative"
              onMouseLeave={() => setHoveredPath(location.pathname)}
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path || location.hash === link.path.replace('/', '');
                return (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className={`relative py-2 px-1 transition-colors ${isActive ? 'text-white' : 'hover:text-white'}`}
                    onMouseEnter={() => setHoveredPath(link.path)}
                  >
                    {link.name}
                    {hoveredPath === link.path && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 right-0 h-[2px] bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-sm font-medium tracking-wide focus:outline-none overflow-hidden relative w-16 h-6 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center gap-1"
                >
                  <span className={lang === 'en' ? 'text-white' : 'text-[#999]'}>EN</span>
                  <span className="text-[#999]">|</span>
                  <span className={lang === 'ar' ? 'text-white' : 'text-[#999]'}>AR</span>
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
