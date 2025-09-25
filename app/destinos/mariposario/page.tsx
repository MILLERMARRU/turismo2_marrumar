"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonials/Testimonials";
import { getTestimonialsByDestination } from "@/components/testimonials/testimonialsData";

export default function MariposarioPage() {
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
          src="/assets/destinos/mariposario/mariposario-1.webp"
          alt="Mariposario Morpho Azul"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Mariposario Morpho Azul
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
          Un santuario de colores en movimiento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          El Mariposario Morpho Azul es un oasis tropical donde habitan más de
          50 especies de mariposas exóticas. Sumérgete en un mundo de colores
          vibrantes y delicada belleza, donde podrás observar de cerca el ciclo
          de vida de estos increíbles insectos y caminar entre jardines llenos
          de flores tropicales que atraen a estas majestuosas criaturas.
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
          <source src="/assets/videos/mariposario.webm" type="video/webm" />
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
            "mariposario/mariposario-2.webp",
            "mariposario/mariposario-3.webp",
            "mariposario/mariposario-4.webp",
            "mariposario/mariposario-5.webp",
            "mariposario/mariposario-6.webp",
            "mariposario/mariposario-7.webp",
            "mariposario/mariposario-8.webp",
            "mariposario/mariposario-9.webp",
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
                alt={`Galería Mariposario ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Testimonials
        testimonials={getTestimonialsByDestination("mariposario")}
        title="Testimonios"
        subtitle="Visitantes del Mariposario"
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3798.0876025857433!2d-77.3449312!3d-5.9097068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6e79012d51795%3A0x6ea74f2bcd6691e!2sMariposario%20De%20palestina!5e1!3m2!1ses-419!2spe!4v1758779945358!5m2!1ses-419!2spe"
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
