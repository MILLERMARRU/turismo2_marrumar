"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonials/Testimonials";
import { getTestimonialsByDestination } from "@/components/testimonials/testimonialsData";

export default function ColcaPage() {
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
          src="/assets/destinos/colca/colca-1.webp"
          alt="Cañón del Colca"
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
            Cascada de Colca
          </motion.h1>
        </div>
      </section>

      {/* DESCRIPCIÓN + VIDEO */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4"
        >
          Sobre la Cascada de Colca
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          La cascada del Colca es una impresionante caída de agua ubicada en el
          corazón del Alto Mayo. Rodeada de exuberante vegetación y formaciones
          rocosas, esta cascada ofrece un espectáculo natural que cautiva a los
          visitantes.
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
          <source src="/assets/videos/cola.webm" type="video/webm" />
          Tu navegador no soporta este video.
        </motion.video>

        {/* GALERÍA */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-4"
        >
          Galería
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "colca/colca-2.webp",
            "colca/colca-3.webp",
            "colca/colca-4.webp",
            "colca/colca-5.webp",
          ].map((img, i) => (
            <motion.div
              key={i}
              className="relative w-full h-64 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={`/assets/destinos/${img}`}
                alt={`Galería Colca ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials
        testimonials={getTestimonialsByDestination("colca")}
        title="Testimonios"
        subtitle="Visitantes del Colca"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.873282960964!2d-77.38916837052888!3d-5.8986098178792785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6e9b251542963%3A0xf3b3c639475d7455!2sCascada%20La%20Colca!5e1!3m2!1ses-419!2spe!4v1758774595316!5m2!1ses-419!2spe"
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
