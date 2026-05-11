import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE, PHONE_RAW, WHATSAPP_MSG } from '../data/contact';

const slides = [
  { src: '/images/technician.jpg',        alt: 'Hidraulik profesionist' },
  { src: '/images/ngrohje-dysheme.jpg',   alt: 'Ngrohje ne dysheme' },
  { src: '/images/bathroom-install.jpg',  alt: 'Instalim banjo' },
  { src: '/images/wall-piping.jpg',       alt: 'Tubacione hidraulike' },
  { src: '/images/manifold-panel.jpg',    alt: 'Panel hidraulik' },
  { src: '/images/zhbllokime-lavamani.jpg', alt: 'Zhbllokime' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
        setPrev(null);
      }, 800);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative flex items-center overflow-hidden pt-24 md:pt-28" style={{ height: '62vh', minHeight: '440px' }}>

      {/* Slideshow layers */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-800"
          style={{
            opacity: i === current ? 1 : (i === prev && fading ? 0 : 0),
            transitionDuration: '800ms',
          }}
        >
          <img src={s.src} alt={s.alt} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A66]/90 via-[#0B3A66]/70 to-[#0B3A66]/30 z-10" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl">
          <span className="inline-block bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Tiranë & Rrethinat • 24/7
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            Hidrauliku Im <span className="text-[#00AEEF]">Tiranë</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-2 font-medium italic">
            Shërbimi që vjen pranë jush
          </p>

          <p className="text-sm md:text-base text-white/75 mb-6 leading-relaxed">
            Riparime, instalime dhe mirëmbajtje hidraulike për banesa, apartamente dhe biznese —
            në <span className="text-white font-semibold">Tiranë</span>,{' '}
            <span className="text-white font-semibold">Jug të Shqipërisë</span> dhe për{' '}
            <span className="text-white font-semibold">hotele & objekte turistike</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[#D71920] hover:bg-[#b01218] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} /> Telefono tani
            </a>
            <a
              href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Shkruaj ne WhatsApp
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4">
            {['✓ Riparim i shpejt', '✓ Punë e garantuar', '✓ Çmim transparent', '✓ Disponibël 24/7'].map((t) => (
              <span key={t} className="text-white/80 text-xs md:text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
