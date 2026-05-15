import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PHONE, PHONE_RAW, WHATSAPP_MSG } from '../data/contact';

export default function Hidraulik247() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#0B3A66]">Kryefaqja</Link>
          <span className="mx-2">›</span>
          <span className="text-[#0B3A66]">Hidraulik 24/7 në Tiranë</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-6">
          Hidraulik 24/7 në Tiranë
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Për raste urgjente hidraulike si rrjedhje uji, bllokime serioze, problem
          me rubineta, lavamana, banjo ose kuzhina, mund të kontaktoni Hidrauliku Im
          për asistencë të shpejtë në Tiranë dhe zonat përreth.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Jemi të disponueshëm 24 orë në ditë, 7 ditë në javë për emergjenca hidraulike.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[#D71920] mb-4">Emergjenca? Telefononi menjëherë!</h2>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 text-2xl font-extrabold text-[#D71920] hover:text-[#0B3A66] transition-colors"
          >
            <Phone size={28} />
            {PHONE}
          </a>
        </div>

        <div className="bg-[#EAF3FB] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0B3A66] mb-4">Ndërhyrje urgjente 24/7 për</h2>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>Rrjedhje të mëdha uji dhe dëmtime nga uji</li>
            <li>Tubacione të bllokuara plotësisht</li>
            <li>Dëmtime të sistemeve hidraulike</li>
            <li>Problem me bojler dhe ngrohje urgjente</li>
            <li>Bllokime serioze wc dhe kanalizimesh</li>
            <li>Çdo emergjencë hidraulike natën apo fundjavë</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-[#D71920] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0B3A66] transition-colors"
          >
            <Phone size={18} />
            Telefononi tani — 24/7
          </a>
          <a
            href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
          >
            WhatsApp Urgjent
          </a>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/hidraulik-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Hidraulik në Tiranë</Link>
          <Link to="/riparime-hidraulike-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Riparime hidraulike</Link>
          <Link to="/instalime-hidraulike-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Instalime hidraulike</Link>
          <Link to="/zhbllokim-tubacionesh-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Zhbllokim tubacionesh</Link>
        </div>
      </div>
    </div>
  );
}
