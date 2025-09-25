"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonials/Testimonials";
import { getTestimonialsByDestination } from "@/components/testimonials/testimonialsData";

export default function MiradorPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.warn("No se pudo reproducir automáticamente:", err);
        }
      }
    };

    playVideo();

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/assets/destinos/mirador/mirador-1.webp"
          alt="Cerro Mirador"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Cerro Mirador
          </motion.h1>
        </div>
      </section>

      {/* DESCRIPCIÓN + VIDEO */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4"
        >
          Vistas panorámicas espectaculares
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          El Cerro Mirador te ofrece las mejores vistas panorámicas del Alto
          Mayo. Desde su cima podrás contemplar la inmensidad de la selva, los
          ríos serpenteantes y la majestuosidad de los Andes. Un destino
          perfecto para los amantes de la fotografía y las experiencias
          inolvidables.
        </motion.p>

        <motion.video
          ref={videoRef}
          controls
          className="w-full rounded-xl shadow-xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <source src="/assets/videos/mirador.webm" type="video/webm" />
          Tu navegador no soporta este video.
        </motion.video>

        {/* GALERÍA CON DISEÑO ÚNICO */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-6"
        >
          Galería de Vistas
        </motion.h3>

        {/* Grid asimétrico con diferentes tamaños */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px] mb-10">
          {/* Imagen grande principal */}
          <motion.div
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-2.webp"
              alt="Vista principal del Mirador"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Imagen vertical */}
          <motion.div
            className="col-span-1 row-span-2 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-3.webp"
              alt="Vista lateral del Mirador"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Dos imágenes pequeñas superiores */}
          <motion.div
            className="col-span-1 row-span-1 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-4.webp"
              alt="Detalle del paisaje"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            className="col-span-1 row-span-1 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-5.webp"
              alt="Flora del Mirador"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Fila inferior con tres imágenes */}
          <motion.div
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-6.webp"
              alt="Panorámica completa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/mirador/mirador-7.webp"
              alt="Atardecer en el Mirador"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>
      <Testimonials
        testimonials={getTestimonialsByDestination("mirador")}
        title="Testimonios"
        subtitle="Visitantes del Mirador"
      />

      {/* MAPA EMBEBIDO */}
      <section className="max-w-5xl mx-auto px-6 pt-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold mb-4 text-center"
          viewport={{ once: true }}
        >
          Ubicación
        </motion.h2>
        <motion.div
          className="aspect-video w-full rounded-xl overflow-hidden shadow-xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.195612751561!2d-77.32017243541554!3d-5.947538588127634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6ddbb67a6e1b9%3A0x6c9e4d7f07431c60!2sCerro%20Mirador%20De%20Nueva%20Cajamarca!5e1!3m2!1ses-419!2spe!4v1758777334119!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
}
