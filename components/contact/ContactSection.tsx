"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-950 text-white py-12 px-6">
      {/* TÍTULO CENTRAL */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
        <p className="text-gray-400 text-lg">
          Estamos aquí para ayudarte a planear tu próxima aventura.
        </p>
      </motion.div>

      {/* Imagen y datos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[500px]">
        {/* Imagen con animación */}
        <motion.div
          className="relative w-full h-80 md:h-full rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/contact.webp"
            alt="DeBí… Hacer más Viajes"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Información</h3>

          <div className="mb-4">
            <p className="text-sm text-gray-400">Dirección</p>
            <p className="text-lg mt-1">
              Jr. Huallaga Esq. con Jr. Bolognesi N° 103
            </p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-400">Teléfono</p>
            <p className="text-lg mt-1">042-556397</p>
            <p className="text-lg">042-556411</p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-400">Síguenos</p>
            <div className="flex gap-6 text-xl mt-2">
              <a
                href="https://www.facebook.com/nuevacajamarca/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@NvaCajamarca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mapa + Formulario */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Mapa */}
        <motion.div
          className="rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.6591073572627!2d-77.31095455402945!3d-5.940232394731811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6ddeacd72fa4f%3A0xcba6369704d45753!2sMunicipalidad%20De%20Nueva%20Cajamarca!5e1!3m2!1ses-419!2spe!4v1755389732795!5m2!1ses-419!2spe"
            className="w-full h-[350px] rounded-xl border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Contáctanos</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-neutral-800 text-white p-3 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-neutral-800 text-white p-3 rounded-lg outline-none"
            />
            <select className="bg-neutral-800 text-white p-3 rounded-lg outline-none">
              <option value="">¿Qué servicio buscas?</option>
              <option value="aventura">Viajes de Aventura</option>
              <option value="gastronomia">Turismo Gastronómico</option>
              <option value="cultural">Turismo Cultural</option>
            </select>
            <textarea
              rows={4}
              placeholder="Escribe tu mensaje..."
              className="bg-neutral-800 text-white p-3 rounded-lg outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full"
            >
              Send message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
