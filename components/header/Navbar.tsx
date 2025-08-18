"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = id;
      }
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/5 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
        </Link>

        {/* Menú escritorio */}
        <div className="hidden md:flex gap-6">
          {["Home", "Destinos", "Nosotros", "Mapas", "Contact"].map(
            (text, i) => {
              const id = text.toLowerCase();
              const action =
                i === 0 ? () => router.push("/") : () => handleNavigation(id);
              return (
                <button
                  key={id}
                  onClick={action}
                  className="cursor-pointer hover:text-teal-400 transition-all duration-300"
                >
                  {text}
                </button>
              );
            }
          )}
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 text-white">
          {["Home", "Destinos", "Nosotros", "Mapas", "Contact"].map(
            (text, i) => {
              const id = text.toLowerCase();
              const action =
                i === 0 ? () => router.push("/") : () => handleNavigation(id);
              return (
                <button
                  key={id}
                  className="block py-2 cursor-pointer hover:text-teal-400 transition-all duration-300"
                  onClick={action}
                >
                  {text}
                </button>
              );
            }
          )}
        </div>
      )}
    </nav>
  );
}
