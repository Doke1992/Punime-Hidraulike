import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PHONE, PHONE_RAW, WHATSAPP_MSG } from '../data/contact';

export default function RiparimeHidraulike() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#0B3A66]">Kryefaqja</Link>
          <span className="mx-2">›</span>
          <span className="text-[#0B3A66]">Riparime hidraulike në Tiranë</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-6">
          Riparime hidraulike në Tiranë
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Ofrojmë riparime hidraulike në Tiranë për defekte në banjo, kuzhina,
          rubineta, tubacione, lavamana, dushe dhe lidhje hidraulike. Shërbimi është
          i përshtatshëm për banesa, apartamente, lokale dhe biznese që kanë nevojë
          për ndërhyrje të shpejtë dhe punë të pastër.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Kontaktoni Hidrauliku Im për riparime të shpejta dhe profesionale.
        </p>

        <div className="bg-[#EAF3FB] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[#0B3A66] mb-4">Riparime që realizojmë</h2>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>Riparim rrjedhjesh uji në tuba dhe lidhje</li>
            <li>Ndërrim dhe riparim rubinetash</li>
            <li>Riparim wc, lavamani dhe dushi</li>
            <li>Riparim tubacionesh të dëmtuara</li>
            <li>Kontroll dhe riparim bojlerash</li>
            <li>Riparime urgjente banjo dhe kuzhina</li>
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
            WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/hidraulik-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Hidraulik në Tiranë</Link>
          <Link to="/instalime-hidraulike-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Instalime hidraulike</Link>
          <Link to="/zhbllokim-tubacionesh-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Zhbllokim tubacionesh</Link>
          <Link to="/hidraulik-24-7-tirane" className="text-[#0B3A66] underline hover:text-[#D71920]">Hidraulik 24/7</Link>
        </div>
      </div>
    </div>
  );
}
