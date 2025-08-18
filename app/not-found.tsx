// app/not-found.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 text-center">
      <Image
        src="/assets/404.webp" // Asegúrate de tener esta imagen en public/
        alt="Dev durmiendo"
        width={320}
        height={320}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Oops... Página no encontrada</h1>
      <p className="text-lg mb-6">
        Esta sección está en pausa porque el programador se quedó sin
        inspiración 💤
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition"
      >
        Volver al inicio
      </button>
    </div>
  );
}
