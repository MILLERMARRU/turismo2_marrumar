'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  initials: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ 
  testimonials, 
  title = "Lo que dicen",
  subtitle = "Nuestros Visitantes" 
}: TestimonialsProps) {
  return (
    <section className="py-16 px-6 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm uppercase text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.h2>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-neutral-800 rounded-2xl p-6 shadow-xl border border-neutral-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              {/* Header con avatar y datos */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaStar className="text-yellow-400 text-lg" />
                  </motion.div>
                ))}
              </div>

              {/* Comentario */}
              <motion.blockquote
                className="text-gray-300 leading-relaxed italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
                viewport={{ once: true }}
              >
                "{testimonial.comment}"
              </motion.blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}