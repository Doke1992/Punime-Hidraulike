import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Phone, num: '01', title: 'Na kontaktoni', desc: 'Telefononi ose shkruani në WhatsApp. Përgjigjem shpejt dhe dëgjohem me kujdes problemin tuaj.' },
  { icon: Search, num: '02', title: 'Diagnostikim', desc: 'Vij në vendngjarje, inspektoj situatën dhe jap një vlerësim të qartë dhe transparent të çmimit.' },
  { icon: Wrench, num: '03', title: 'Riparim / Instalim', desc: 'Kryej punën me materiale cilësore, punë të pastër dhe me respekt ndaj ambientit tuaj.' },
  { icon: CheckCircle, num: '04', title: 'Testim & Dorëzim', desc: 'Testoj çdo gjë para largimit dhe sigurohem që çdo gjë funksionon perfekt. Garanci e punës.' },
];

export default function Process() {
  return (
    <section id="procesi" className="py-20 bg-[#0B3A66]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Si Punojmë
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Procesi ynë është i thjeshtë, transparent dhe i orientuar nga satisfaksioni juaj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <div key={i} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-[#00AEEF]/20 border-2 border-[#00AEEF] flex items-center justify-center mx-auto mb-4 relative z-10">
                <Icon size={32} className="text-[#00AEEF]" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#D71920] text-white text-xs font-bold flex items-center justify-center">
                  {num}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
