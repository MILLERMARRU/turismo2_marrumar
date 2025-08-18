'use client';

import AboutParallax from "@/components/about/AboutParallax";
import ContactSection from "@/components/contact/ContactSection";
import PopularDestinations from "@/components/destinations/PopularDestination";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import MapasTuristicos from "@/components/mapas/MapasTuristicos";
import Services from "@/components/servicios/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <PopularDestinations />
        <AboutParallax />
        <MapasTuristicos />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
