import { useEffect, useState } from 'react';
import { X, Phone, MessageCircle, Play } from 'lucide-react';
import { PHONE, PHONE_RAW } from '../data/contact';

export default function ServiceModal({ service, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && (lightbox ? setLightbox(null) : onClose());
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, lightbox]);

  const waMsg = encodeURIComponent(`Pershendetje, kam nevoje per: ${service.title}`);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center overflow-y-auto py-6 px-4" onClick={onClose}>
        <div
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#0B3A66] px-6 py-5 flex items-center justify-between">
            <h2 className="text-white font-extrabold text-xl md:text-2xl">{service.title}</h2>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors" aria-label="Mbyll">
              <X size={20} className="text-white" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>

            {/* Images grid */}
            {service.gallery?.length > 0 && (
              <div>
                <h3 className="font-bold text-[#0B3A66] text-lg mb-4">Foto nga puna jonë</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => setLightbox(src)}
                    >
                      <img
                        src={src}
                        alt={`${service.title} - foto ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {service.videos?.length > 0 && (
              <div>
                <h3 className="font-bold text-[#0B3A66] text-lg mb-4 flex items-center gap-2">
                  <Play size={18} className="text-[#D71920]" />
                  Video nga puna jonë
                </h3>
                <div className={`grid gap-4 ${service.videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {service.videos.map((src, i) => (
                    <video
                      key={i}
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full rounded-xl shadow-md bg-black"
                      style={{ maxHeight: '320px' }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 bg-[#0B3A66] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#082d50] transition-colors"
              >
                <Phone size={18} />
                Telefono tani
              </a>
              <a
                href={`https://wa.me/${PHONE_RAW}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle size={18} />
                Shkruaj në WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2" onClick={() => setLightbox(null)}>
            <X size={26} />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
