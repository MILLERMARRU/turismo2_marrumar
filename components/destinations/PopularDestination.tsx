'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { destinations } from './destinationsData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinos" className="relative pt-20 pb-32  px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-sm text-center uppercase text-gray-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Destinos Populares
        </motion.h2>

        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explora Lugares Increíbles
        </motion.h3>

        <motion.p
          className="text-center text-gray-300 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Descubre los destinos más espectaculares del Alto Mayo
        </motion.p>

        {/* Flechas de navegación */}
        <motion.button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FiChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FiChevronRight size={24} />
        </motion.button>

        {/* Carrusel horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              viewport={{ once: true }}
              className="snap-start shrink-0"
            >
              <DestinationCard {...dest} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
