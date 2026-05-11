import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Artan M.',
    location: 'Tiranë, Blloku',
    text: 'Shërbim shumë i shpejtë dhe profesional. Pata rrjedhje uji urgjente dhe erdhi brenda 30 minutave. Punë e pastër, çmim i drejtë. Shumë i kënaqur!',
    stars: 5,
  },
  {
    name: 'Mirela D.',
    location: 'Tiranë, Kombinat',
    text: 'Instalova sisteme ngrohje në dysheme në të gjithë apartamentin. Punë shumë cilësore, respektuan ambjentet dhe shpjeguan çdo hap. Rekomandoj me sy mbyllur.',
    stars: 5,
  },
  {
    name: 'Gentian K.',
    location: 'Tiranë, Don Bosko',
    text: 'Kishe problem me zhbllokimin e lavamanit. Erdhi shpejt, zgjidhi problemin brenda pak minutave. Transparent me çmimin. Do ta kontaktoj sërish!',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-4">
            Vlerësimet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#F5F7FA] rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={18} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B3A66] flex items-center justify-center text-white font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#0B3A66] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
