'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Hook para detectar si es móvil
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export default function AboutParallax() {
  const [startTransition, setStartTransition] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTransition(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="nosotros" className="relative min-h-[120vh] w-full overflow-hidden">
      {/* Fondo con efecto de zoom-out */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/about.webp"
          alt="Fondo sección Nosotros"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 w-full max-w-6xl items-center justify-center">
          
          {/* TEXTO PRINCIPAL ANIMADO */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={
              startTransition
                ? isMobile
                  ? { y: -40 }
                  : { x: "-5%" }
                : { x: 0, y: 0 }
            }
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="text-center md:text-left px-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Conectamos a personas con experiencias auténticas, fusionando naturaleza,
              cultura y aventura en cada destino.
            </p>
          </motion.div>

          {/* IMAGEN DECORATIVA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={startTransition ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 1.6,
              ease: 'easeInOut',
              delay: startTransition ? 0.2 : 0,
            }}
            className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-xl mx-auto"
          >
            <Image
              src="/assets/meme.webp"
              alt="Detalle visual"
              width={800}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
              <p className="text-white text-xl font-semibold text-center">
                Nuestra historia comienza donde inicia tu viaje.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
