import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 Esto hace que Next genere HTML estático
  output: "export",

  // 👇 Esto evita que Next use el optimizador de imágenes en servidor
  images: {
    unoptimized: true,
  },

  // 👇 Hace que las rutas terminen en / (ej. /about/ en lugar de /about)
  // y genera carpetas con index.html adentro → mejor compatibilidad en hosting compartidos
  trailingSlash: true,
};

export default nextConfig;
