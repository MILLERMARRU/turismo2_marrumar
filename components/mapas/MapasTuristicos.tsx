'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MapasTuristicos() {
  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="mapas" className="bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-2">Mapas Turísticos</h2>
          <p className="text-lg text-gray-300">Explora los mapas oficiales del destino Alto Mayo y Nueva Cajamarca. Haz clic para descargar.</p>
        </motion.div>

        {/* Mapa Alto Mayo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl font-semibold text-center text-white">Mapa Turístico - Destino Alto Mayo</h3>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-lg group cursor-pointer"
            onClick={() =>
              handleDownload('/assets/mapas/Mapa Alto Mayo.jpg', 'Mapa_Alto_Mayo.jpg')
            }
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="shadow-lg rounded-lg"
            >
              <Image
                src="/assets/mapas/Mapa Alto Mayo.webp"
                alt="Mapa turístico Alto Mayo"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          <p className="text-sm text-gray-400">Haz clic en la imagen para descargar</p>
        </motion.div>

        {/* Plano Urbano Nueva Cajamarca */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl font-semibold text-center text-white">Plano Urbano - Nueva Cajamarca</h3>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-lg group cursor-pointer"
            onClick={() =>
              handleDownload('/assets/mapas/Plano urbano.jpg', 'Plano_Urbano_Nueva_Cajamarca.jpg')
            }
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="shadow-lg rounded-lg"
            >
              <Image
                src="/assets/mapas/Plano urbano.webp"
                alt="Plano urbano Nueva Cajamarca"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </div>
          <p className="text-sm text-gray-400">Haz clic en la imagen para descargar</p>
        </motion.div>
      </div>
    </section>
  );
}
