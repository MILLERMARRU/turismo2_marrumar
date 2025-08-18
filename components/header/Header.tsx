'use client';

import HeroCarousel from "./HeroCarousel";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <HeroCarousel />
    </header>
  );
}
