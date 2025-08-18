'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im'; // Spinner icon

interface Props {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  rating: number;
}

export default function DestinationCard({
  id,
  title,
  subtitle,
  description,
  image,
  rating,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    router.push(`/destinos/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative w-[260px] h-[400px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg cursor-pointer"
    >
      {/* Imagen */}
      <Image
        src={image}
        alt={`${title} ${subtitle}`}
        fill
        sizes="(max-width: 768px) 80vw, 260px"
        quality={90}
        className="object-cover transition-transform duration-500 ease-out will-change-transform transform-gpu group-hover:scale-110"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />

      {/* Spinner al hacer clic */}
      {loading && (
        <div className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center">
          <ImSpinner2 className="animate-spin text-white text-3xl" />
        </div>
      )}

      {/* Contenido */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end text-white">
        <p className="text-sm opacity-90">{title}</p>
        <h3 className="text-lg font-bold">{subtitle}</h3>

        <div className="flex gap-1 mt-1">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>

        <p className="mt-3 text-xs opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
