import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { PHONE, PHONE_RAW, EMAIL, ADDRESS, HOURS, WHATSAPP_MSG } from '../data/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Pershendetje! Emri: ${form.name}\nTelefon: ${form.phone}\nMesazhi: ${form.message}`
    );
    window.open(`https://wa.me/${PHONE_RAW}?text=${msg}`, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="kontakti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-4">
            Kontakti
          </h2>
          <p className="text-gray-500">Jemi këtu për ju — na shkruani ose telefononi direkt.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-8">
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#EAF3FB] flex items-center justify-center shrink-0 group-hover:bg-[#0B3A66] transition-colors">
                  <Phone size={22} className="text-[#0B3A66] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Telefon / Urgjencë</p>
                  <p className="font-bold text-[#0B3A66] text-lg group-hover:text-[#D71920] transition-colors">{PHONE}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF3FB] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle size={22} className="text-[#0B3A66] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <p className="font-bold text-[#0B3A66] text-lg group-hover:text-[#25D366] transition-colors">Shkruaj tani</p>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#EAF3FB] flex items-center justify-center shrink-0 group-hover:bg-[#0B3A66] transition-colors">
                  <Mail size={22} className="text-[#0B3A66] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Email</p>
                  <p className="font-bold text-[#0B3A66] text-base group-hover:text-[#D71920] transition-colors break-all">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF3FB] flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[#0B3A66]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Adresa</p>
                  <p className="font-bold text-[#0B3A66]">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF3FB] flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-[#0B3A66]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Orari i punës</p>
                  <p className="font-bold text-[#0B3A66]">{HOURS}</p>
                  <p className="text-[#D71920] text-sm font-medium mt-0.5">Urgjencë 24/7</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-56 border border-gray-200 shadow-sm">
              <iframe
                title="Lokacioni"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95892.05!2d19.7317!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503102be4b35cf%3A0x4eff7b82b5f0e35d!2sTiran%C3%AB%2C%20Albania!5e0!3m2!1ssq!2sal!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F5F7FA] rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-[#0B3A66] mb-6">Dërgoni një kërkesë</h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-[#25D366]" />
                </div>
                <p className="text-[#0B3A66] font-bold text-lg">Faleminderit!</p>
                <p className="text-gray-500 mt-2">Jeni ridrejtuar te WhatsApp. Do t'ju kontaktojmë shpejt.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-[#0B3A66] underline text-sm">
                  Dërgoni kërkesë tjetër
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Emri juaj *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="p.sh. Artan Kola"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0B3A66]/30 focus:border-[#0B3A66] bg-white text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Numri i telefonit *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+355 6X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0B3A66]/30 focus:border-[#0B3A66] bg-white text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mesazhi / Problemi *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Përshkruani shkurtimisht problemin tuaj..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0B3A66]/30 focus:border-[#0B3A66] bg-white text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#0B3A66] hover:bg-[#082d50] text-white px-6 py-4 rounded-xl font-bold text-base transition-colors shadow-md"
                >
                  <Send size={18} />
                  Dërgo kërkesën (WhatsApp)
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Formulari hap WhatsApp me mesazhin tuaj të parapërgatitur.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
