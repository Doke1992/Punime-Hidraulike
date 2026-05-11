import { Clock, Shield, MessageSquare, MapPin, Waves } from 'lucide-react';

const signals = [
  { icon: Clock, label: 'Urgjencë 24/7', desc: 'Disponibël çdo ditë, çdo orë' },
  { icon: Shield, label: 'Punë e garantuar', desc: 'Garanci për çdo shërbim' },
  { icon: MessageSquare, label: 'Komunikim transparent', desc: 'Çmim i qartë para fillimit' },
  { icon: MapPin, label: 'Tiranë & Rrethinat', desc: 'Mbulojmë të gjithë Tiranën' },
  { icon: Waves, label: 'Jugu i Shqipërisë', desc: 'Hoteleri & Turizëm' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#EAF3FB] border-y border-blue-100" id="besimi">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {signals.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0B3A66] flex items-center justify-center">
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0B3A66] text-sm md:text-base">{label}</p>
                <p className="text-gray-500 text-xs md:text-sm mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
