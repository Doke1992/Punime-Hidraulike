import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { gallery } from '../data/gallery';

const categories = ['Të gjitha', ...new Set(gallery.map((g) => g.category))];

export default function Gallery() {
  const [active, setActive] = useState('Të gjitha');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'Të gjitha' ? gallery : gallery.filter((g) => g.category === active);

  return (
    <section id="galeria" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-4">
            Galeria e Projekteve
          </h2>
          <p className="text-gray-500">Foto reale nga punimet tona hidraulike në Tiranë.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? 'bg-[#0B3A66] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-[#EAF3FB] border border-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden bg-gray-200 aspect-square cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B3A66]/0 group-hover:bg-[#0B3A66]/50 transition-all flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/70 text-sm">{lightbox.alt}</p>
        </div>
      )}
    </section>
  );
}
