import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    bgImage: 'bg-hero-1',
    title: 'Shaping the Future of Pharmacy',
    subtitle: 'Excellence in pharmaceutical education, research, and practice.',
    buttonText: 'Explore Our Courses',
    buttonLink: '/course',
  },
  {
    bgImage: 'bg-hero-2',
    title: 'A Vibrant Campus Life Awaits',
    subtitle: 'Discover a world of opportunities beyond the classroom.',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`absolute h-full w-full ${slides[page].bgImage} bg-cover bg-center`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl"
            >
              {slides[page].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl"
            >
              {slides[page].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8"
            >
              <Link to={slides[page].buttonLink}>
                <button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                  {slides[page].buttonText}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-colors ${page === i ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
       <div className="absolute inset-y-0 left-4 flex items-center">
        <button onClick={() => paginate(-1)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors" aria-label="Previous slide">
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button onClick={() => paginate(1)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors" aria-label="Next slide">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
