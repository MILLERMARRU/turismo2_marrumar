'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroSlides } from './heroData';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Cinta de slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: `${heroSlides.length * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className="w-screen h-screen relative flex-shrink-0"
          >
            {/* Imagen de fondo */}
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Capa oscura encima */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Contenido del slide */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
              <h2 className="text-lg md:text-xl mb-1">Descubre los</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-md md:text-lg max-w-2xl mb-6">{slide.subtitle}</p>
              <Link
                href={slide.link}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
