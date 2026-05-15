import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PHONE, PHONE_RAW, WHATSAPP_MSG } from '../data/contact';

export default function ZhbllokimTubacionesh() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#0B3A66]">Kryefaqja</Link>
          <span className="mx-2">›</span>
          <span className="text-[#0B3A66]">Zhbllokim tubacionesh në Tiranë</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-6">
          Zhbllokim tubacionesh në Tiranë
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nëse keni lavaman të bllokuar, tubacione që nuk shkarkojnë, problem me wc,
          dush ose kuzhina, Hidrauliku Im ofron shërbim për zhbllokim tubacionesh
          në Tiranë. Mund të dërgoni foto ose video të problemit në WhatsApp për
          një vlerësim paraprak.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Ndërhyrja është e shpejtë dhe efikase për të gjitha llojet e bllokimeve.
        </p>

        <div className="bg-[#EAF3FB] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0B3A66] mb-4">Zhbllokime që realizojmë</h2>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>Zhbllokim lavamani banjo dhe kuzhine</li>
            <li>Zhbllokim wc dhe kanalizimesh</li>
            <li>Zhbllokim dushi dhe vaskës</li>
            <li>Pastrimi i tubacioneve dhe sifon</li>
            <li>Kontroll dhe pastrimi i grykave</li>
            <li>Ndërhyrje urgjente për bllokime serioze</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-[#0B3A66] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#D71920] transition-colors"
          >
            <Phone size={18} />
            Telefononi tani
          </a>
          <a
            href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
          >
            Dërgoni foto në WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/hidraulik-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Hidraulik në Tiranë</Link>
          <Link to="/riparime-hidraulike-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Riparime hidraulike</Link>
          <Link to="/instalime-hidraulike-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Instalime hidraulike</Link>
          <Link to="/hidraulik-24-7-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Hidraulik 24/7</Link>
        </div>
      </div>
    </div>
  );
}
