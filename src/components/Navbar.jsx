// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// You can use a library like 'react-icons' for the menu and close icons
const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Events', href: '#events' },
    { title: 'Projects', href: '#projects' },
    { title: 'Team', href: '#team' },
    { title: 'Sponsors', href: '#sponsors' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            SAE <span className="text-cyan-400">IITR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-xs bg-gray-900 z-50 p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;