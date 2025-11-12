import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Course', path: '/course' },
  { name: 'About', path: '/about' },
  { name: 'Notice', path: '/notice' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-primary-light/80 backdrop-blur-sm">
        <div className="bg-brand-primary/10 text-center py-2 px-4">
          <p className="text-xs sm:text-sm font-medium text-brand-text-content">
            Admission is open for the academic year 2025-2026. <a href="/contact" className="font-bold underline hover:text-brand-primary">Apply Now!</a>
          </p>
        </div>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/image/logo/cropped-Dishari-Institute-of-Pharmacy_Logo-1024x747.jpg"
                alt="Dishari Institute of Pharmacy Logo"
                className="h-12 w-12 sm:h-24 sm:w-24 object-contain"
              />
              <span className="text-sm sm:text-xl font-bold text-brand-text-main">Dishari Institute of<br className="sm:hidden"/> Pharmacy</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'font-medium text-brand-text-content hover:text-brand-primary transition-colors duration-300',
                      isActive ? 'text-brand-primary' : ''
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                <Menu className="h-6 w-6 text-brand-text-main" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white p-6 lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-brand-text-main" />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'text-xl font-medium text-brand-text-content hover:text-brand-primary transition-colors duration-300',
                      isActive ? 'text-brand-primary' : ''
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
