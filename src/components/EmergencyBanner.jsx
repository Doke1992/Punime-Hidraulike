import { Phone, AlertTriangle } from 'lucide-react';
import { PHONE } from '../data/contact';

export default function EmergencyBanner() {
  return (
    <section className="bg-[#D71920] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div>
            <p className="text-white font-extrabold text-xl md:text-2xl">Keni një emergjencë hidraulike?</p>
            <p className="text-white/85 text-sm md:text-base mt-0.5">
              Rrjedhje uji, bllokime serioze, defekte urgjente — na kontaktoni menjëherë!
            </p>
          </div>
        </div>
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-3 bg-white text-[#D71920] px-8 py-3 rounded-xl font-extrabold text-lg hover:bg-gray-100 transition-colors shadow-lg shrink-0"
        >
          <Phone size={22} />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
