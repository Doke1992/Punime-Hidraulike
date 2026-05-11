import { useState } from 'react';
import { Building2, Star, Waves, Phone, MessageCircle, Play, X, ZoomIn } from 'lucide-react';
import { PHONE, PHONE_RAW } from '../data/contact';

const categories = [
  {
    icon: Building2,
    title: 'Instalime të plota hoteli',
    desc: 'Sistemim i plotë hidraulik për hotele dhe rezorte — tubacione nën presion, shpërndarje uji të ngrohtë/ftohtë dhe kanalizime industriale.',
    images: [
      '/images/hotel/hotel-pipe-1.jpg',
      '/images/hotel/hotel-pipe-2.jpg',
      '/images/hotel/hotel-pipe-3.jpg',
      '/images/hotel/hotel-cistern.jpg',
    ],
    videos: ['/videos/hotel-video-1.mp4', '/videos/hotel-video-2.mp4'],
  },
  {
    icon: Star,
    title: 'Banjo luksoze & premium',
    desc: 'Instalim i aksesorëve sanitarë të klasit të lartë — wc dhe bidet të zeza/gri, mermer, rubineta ari/bronzi për ambiente 5 yjësh.',
    images: [
      '/images/hotel/hotel-luxury-bath-1.jpg',
      '/images/hotel/hotel-luxury-bath-2.jpg',
      '/images/hotel/hotel-luxury-bath-3.jpg',
      '/images/hotel/hotel-luxury-sink.jpg',
      '/images/hotel/hotel-sanitaryware.jpg',
    ],
    videos: ['/videos/hotel-video-3.mp4'],
  },
  {
    icon: Waves,
    title: 'Turizëm & Jugu i Shqipërisë',
    desc: 'Punojmë gjatë gjithë vitit në Jug të Shqipërisë — Sarandë, Himarë, Vlorë dhe Rivierë. Specializuar për hotele, vila dhe komplekse turistike.',
    images: [
      '/images/hotel/hotel-pipe-1.jpg',
      '/images/hotel/hotel-luxury-bath-1.jpg',
      '/images/hotel/hotel-luxury-bath-2.jpg',
      '/images/hotel/hotel-pipe-2.jpg',
    ],
    videos: ['/videos/hotel-video-1.mp4', '/videos/hotel-video-3.mp4'],
  },
];

function CategoryModal({ cat, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center overflow-y-auto py-6 px-4" onClick={onClose}>
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <div className="bg-[#0B3A66] px-6 py-5 flex items-center justify-between">
            <h2 className="text-white font-extrabold text-xl">{cat.title}</h2>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <X size={20} className="text-white" />
            </button>
          </div>
          <div className="p-6 space-y-7">
            <p className="text-gray-600 leading-relaxed">{cat.desc}</p>

            <div>
              <h3 className="font-bold text-[#0B3A66] text-lg mb-4">Foto nga projektet</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cat.images.map((src, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer group" onClick={() => setLightbox(src)}>
                    <img src={src} alt={`${cat.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={28} className="text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {cat.videos?.length > 0 && (
              <div>
                <h3 className="font-bold text-[#0B3A66] text-lg mb-4 flex items-center gap-2">
                  <Play size={18} className="text-[#D71920]" /> Video nga projektet
                </h3>
                <div className={`grid gap-4 ${cat.videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {cat.videos.map((src, i) => (
                    <video key={i} src={src} controls playsInline preload="metadata"
                      className="w-full rounded-xl shadow-md bg-black" style={{ maxHeight: '300px' }} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 bg-[#0B3A66] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#082d50] transition-colors">
                <Phone size={18} /> Telefono tani
              </a>
              <a href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(`Pershendetje, kam nevoje per: ${cat.title}`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1ebe5d] transition-colors">
                <MessageCircle size={18} /> Shkruaj në WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2" onClick={() => setLightbox(null)}>
            <X size={26} />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export default function HotelSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="hoteleria" className="py-20 bg-[#0B3A66] relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#00AEEF] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Hoteleri & Turizëm • Jugu i Shqipërisë
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Instalime Hidraulike për Hotele<br className="hidden md:block" />
              <span className="text-[#00AEEF]"> dhe Rezorte Turistike</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
              Specializuar në punime hidraulike të shkallës së lartë për hotele, vila dhe komplekse turistike —
              nga Tirana deri në Rivierën Shqiptare. Punë cilësore, afate të respektuara, garanci totale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(cat)}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-2xl overflow-hidden text-left transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Preview image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={cat.images[0]}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0B3A66]/40" />
                    <div className="absolute top-3 right-3 bg-[#D71920] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Play size={11} /> Video
                    </div>
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-white text-lg mb-2 leading-snug">{cat.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mb-4">{cat.desc.substring(0, 110)}...</p>
                    <span className="text-[#00AEEF] font-semibold text-sm group-hover:text-white transition-colors">
                      Shiko projektet →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/15 pt-10">
            {[
              { num: '50+', label: 'Hotele & Rezorte' },
              { num: '5★', label: 'Standarti i punës' },
              { num: '100%', label: 'Garanci e plotë' },
              { num: '24/7', label: 'Mbështetje teknike' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-[#00AEEF]">{s.num}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && <CategoryModal cat={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
