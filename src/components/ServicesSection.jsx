import { useState } from 'react';
import { Wrench, Droplets, Bath, Hammer, Pipette, Flame, Thermometer, ClipboardCheck } from 'lucide-react';
import { services } from '../data/services';
import ServiceModal from './ServiceModal';

const iconMap = { Wrench, Droplets, Bath, Hammer, Pipette, Flame, Thermometer, ClipboardCheck, Construction: Hammer };

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="sherbimet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-4">
              Instalime Hidraulike në Tiranë<br className="hidden md:block" />
              <span className="text-[#00AEEF] text-2xl md:text-3xl font-bold">dhe në Jug të Shqipërisë</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Nga riparimi urgjent deri te instalimet e plota — punë profesionale, materiale cilësore, garanci.
              <span className="block mt-1 text-sm text-[#0B3A66] font-medium">Kliko një shërbim për të parë foto dhe video →</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Wrench;
              return (
                <button
                  key={s.slug}
                  onClick={() => setSelected(s)}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden text-left w-full"
                >
                  <div className="h-40 overflow-hidden bg-[#EAF3FB] relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {s.videos?.length > 0 && (
                      <span className="absolute top-2 right-2 bg-[#D71920] text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        ▶ Video
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF3FB] flex items-center justify-center mb-3">
                      <Icon size={20} className="text-[#0B3A66]" />
                    </div>
                    <h3 className="font-bold text-[#0B3A66] text-base mb-2 leading-snug">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                    <span className="inline-block mt-4 text-[#0B3A66] font-semibold text-sm group-hover:text-[#D71920] transition-colors">
                      Shiko foto & video →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
