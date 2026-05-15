import { Link } from 'react-router-dom';

export default function LocalSEOSection() {
  return (
    <section id="hidraulik-tirane" className="py-16 bg-[#EAF3FB]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A66] mb-6">
          Hidraulik në Tiranë për riparime, instalime dhe emergjenca 24/7
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hidrauliku Im ofron shërbime hidraulike në Tiranë dhe zonat përreth.
          Ne realizojmë riparime hidraulike, zhbllokim tubacionesh, zhbllokim lavamani,
          instalime hidraulike për banjo dhe kuzhina, ndërrim rubinetash, kontroll rrjedhjesh
          dhe ndërhyrje urgjente 24/7 për banesa, apartamente dhe biznese.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Nëse kërkoni hidraulik në Tiranë, ekip profesional për riparime të shpejta
          ose instalime të sigurta hidraulike, mund të na kontaktoni direkt në telefon
          ose WhatsApp për vlerësim dhe asistencë.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/hidraulik-tirane"
            className="bg-[#0B3A66] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D71920] transition-colors"
          >
            Hidraulik në Tiranë
          </Link>
          <Link
            to="/riparime-hidraulike-tirane"
            className="bg-[#0B3A66] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D71920] transition-colors"
          >
            Riparime hidraulike
          </Link>
          <Link
            to="/instalime-hidraulike-tirane"
            className="bg-[#0B3A66] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D71920] transition-colors"
          >
            Instalime hidraulike
          </Link>
          <Link
            to="/zhbllokim-tubacionesh-tirane"
            className="bg-[#0B3A66] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#D71920] transition-colors"
          >
            Zhbllokim tubacionesh
          </Link>
          <Link
            to="/hidraulik-24-7-tirane"
            className="bg-[#D71920] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0B3A66] transition-colors"
          >
            Hidraulik 24/7
          </Link>
        </div>
      </div>
    </section>
  );
}
