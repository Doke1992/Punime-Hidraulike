import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import LocalSEOSection from './components/LocalSEOSection';
import EmergencyBanner from './components/EmergencyBanner';
import HotelSection from './components/HotelSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Modal from './components/Modal';

import HidraulikTirane from './pages/HidraulikTirane';
import RiparimeHidraulike from './pages/RiparimeHidraulike';
import InstalimeHidraulike from './pages/InslalimeHidraulike';
import ZhbllokimTubacionesh from './pages/ZhbllokimTubacionesh';
import Hidraulik247 from './pages/Hidraulik247';

function HomePage() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <Header onModal={setModal} />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <LocalSEOSection />
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

function ServicePage({ children }) {
  return (
    <>
      <Header onModal={() => {}} />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/hidraulik-tirane"
          element={<ServicePage><HidraulikTirane /></ServicePage>}
        />
        <Route
          path="/riparime-hidraulike-tirane"
          element={<ServicePage><RiparimeHidraulike /></ServicePage>}
        />
        <Route
          path="/instalime-hidraulike-tirane"
          element={<ServicePage><InstalimeHidraulike /></ServicePage>}
        />
        <Route
          path="/zhbllokim-tubacionesh-tirane"
          element={<ServicePage><ZhbllokimTubacionesh /></ServicePage>}
        />
        <Route
          path="/hidraulik-24-7-tirane"
          element={<ServicePage><Hidraulik247 /></ServicePage>}
        />
      </Routes>
    </BrowserRouter>
  );
}
