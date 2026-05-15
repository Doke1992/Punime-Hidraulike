import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE, EMAIL, ADDRESS } from '../data/contact';

export default function Footer() {
  return (
    <footer className="bg-[#0B3A66] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-2xl px-4 py-2 mb-4">
              <img src="/logo.png" alt="Hidrauliku Im Tiranë" className="h-14 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Shërbime hidraulike profesionale në Tiranë dhe rrethinat. Riparime urgjente, instalime, ngrohje dhe mirëmbajtje.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Shërbimet</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/hidraulik-tirane" className="hover:text-white transition-colors">Hidraulik në Tiranë</Link></li>
              <li><Link to="/riparime-hidraulike-tirane" className="hover:text-white transition-colors">Riparime hidraulike</Link></li>
              <li><Link to="/instalime-hidraulike-tirane" className="hover:text-white transition-colors">Instalime hidraulike</Link></li>
              <li><Link to="/zhbllokim-tubacionesh-tirane" className="hover:text-white transition-colors">Zhbllokim tubacionesh</Link></li>
              <li><Link to="/hidraulik-24-7-tirane" className="hover:text-white transition-colors">Hidraulik 24/7</Link></li>
              <li><a href="/#sherbimet" className="hover:text-white transition-colors">Të gjitha shërbimet</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Kontakti</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={16} />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors break-all">
                  <Mail size={16} className="shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Hidrauliku Im Tiranë. Të gjitha të drejtat rezervuara.
          </p>
          <p className="text-white/50 text-xs">Tiranë, Shqipëri</p>
        </div>
      </div>
    </footer>
  );
}
