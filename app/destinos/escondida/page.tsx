"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "@/components/testimonials/Testimonials";
import { getTestimonialsByDestination } from "@/components/testimonials/testimonialsData";

export default function EscondidaPage() {
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
          src="/assets/destinos/escondida/escondida-1.webp"
          alt="Cueva Cascada Escondida"
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
            Cueva Cascada Escondida
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
          Un refugio secreto en el corazón de la selva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-6 leading-relaxed"
        >
          La Cueva Cascada Escondida es un tesoro oculto en la profundidad de la 
          selva del Alto Mayo. Este rincón mágico combina la frescura de una cascada 
          cristalina con el misterio de una cueva natural, creando un refugio perfecto 
          para quienes buscan conectar con la naturaleza en su estado más puro. El sonido 
          del agua cayendo y la brisa fresca hacen de este lugar un oasis de tranquilidad.
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
          <source src="/assets/videos/escondida.webm" type="video/webm" />
          Tu navegador no soporta este video.
        </motion.video>

        {/* GALERÍA CON DISEÑO EN CASCADA */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-6"
        >
          Galería
        </motion.h3>

        {/* Diseño especial en cascada */}
        <div className="space-y-6 mb-10">
          {/* Primera fila - 2 imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="relative h-72 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/destinos/escondida/escondida-2.webp"
                alt="Entrada a la Cueva Escondida"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div
              className="relative h-72 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/destinos/escondida/escondida-3.webp"
                alt="Cascada cristalina"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Segunda fila - 1 imagen centrada grande */}
          <motion.div
            className="relative h-80 max-w-4xl mx-auto rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/escondida/escondida-4.webp"
              alt="Interior de la cueva con cascada"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Tercera fila - 1 imagen final */}
          <motion.div
            className="relative h-64 max-w-2xl mx-auto rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/destinos/escondida/escondida-5.webp"
              alt="Pozas naturales"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <Testimonials 
        testimonials={getTestimonialsByDestination('escondida')}
        title="Experiencias"
        subtitle="Lo que dicen nuestros visitantes"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7767.563242742784!2d-77.34843880597438!3d-5.964379261788604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6dd71325f17d5%3A0x986c98247d7d0029!2sCueva%20Cascada%20Escondida!5e1!3m2!1ses-419!2spe!4v1758782745207!5m2!1ses-419!2spe" 
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