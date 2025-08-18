'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (id: string) => {
    const currentPath = window.location.pathname;

    if (currentPath !== '/') {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = id;
      }
    }
  };

  return (
    <footer className="bg-[#0c1d17] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Aventura */}
        <div>
          <h3 className="text-base font-semibold mb-4">Aventura</h3>
          <p className="mb-6 text-gray-300">
            Ir de aventura no se trata solo de divertirse, sino de conocerte a ti mismo y entretenerte.
            Descubre las mejores actividades de aventura dentro de ti y comienza a vivir el momento.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/nuevacajamarca/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@NvaCajamarca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 cursor-pointer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 cursor-pointer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-base font-semibold mb-4">Enlaces Útiles</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <button
                onClick={() => router.push('/')}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('destinos')}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                Destinos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('nosotros')}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('mapas')}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                Mapas
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('contact')}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Enlaces de soporte */}
        <div>
          <h3 className="text-base font-semibold mb-4">Enlaces de soporte</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Preguntas Frecuentes</Link></li>
            <li><Link href="#">Política de Privacidad</Link></li>
            <li><Link href="#">Términos y Condiciones</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-base font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>Jr. Huallaga Esq. con Jr. Bolognesi N° 103</span>
            </li>
            <li className="flex items-start gap-2">
              <FiMail className="mt-1" />
              <span>muni@nuevacajamarca.gob.pe</span>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="mt-1" />
              <span>
                042-556397<br />
                042-556411
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
