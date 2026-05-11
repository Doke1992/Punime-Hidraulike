import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import EmergencyBanner from './components/EmergencyBanner';
import HotelSection from './components/HotelSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Modal from './components/Modal';

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <Header onModal={setModal} />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <EmergencyBanner />
        <HotelSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {modal && <Modal which={modal} onClose={() => setModal(null)} />}
    </>
  );
}
