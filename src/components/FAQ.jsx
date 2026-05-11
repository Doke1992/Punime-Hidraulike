import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-[#EAF3FB]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A66] mb-4">FAQ</h2>
          <p className="text-gray-500">Gjithçka që doni të dini para se të na kontaktoni.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-blue-100 overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0B3A66] text-base pr-4">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#0B3A66] shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
