import { useEffect } from 'react';
import { X } from 'lucide-react';
import Process from './Process';
import FAQ from './FAQ';
import Gallery from './Gallery';

export default function Modal({ which, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl my-10 mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-gray-100 flex items-center justify-center shadow transition-colors"
          aria-label="Mbyll"
        >
          <X size={22} />
        </button>

        {which === 'gallery' && <Gallery />}
        {which === 'process' && <Process />}
        {which === 'faq' && <FAQ />}
      </div>
    </div>
  );
}
