# Hidrauliku Im Tiranë — Website

Website zyrtar për shërbimet hidraulike **Hidrauliku Im Tiranë**, ndërtuar me React + Vite + Tailwind CSS.

## 🔧 Rreth projektit

Faqe web moderne, e fokusuar në konvertim, për kompani shërbimesh hidraulike që operon në:
- **Tiranë dhe rrethinat** — riparime urgjente, instalime, mirëmbajtje
- **Jug të Shqipërisë** — Sarandë, Himarë, Vlorë, Rivierë
- **Hotele & Objekte turistike** — instalime të plota, banjo luksoze, sisteme ngrohje

### Seksionet e faqes
| Seksioni | Përshkrimi |
|----------|------------|
| Hero | Slideshow me 6 imazhe, 2 butona CTA (Tel + WhatsApp) |
| Trust Bar | 4 sinjale besimi (24/7, garanci, transparencë, Tiranë) |
| Shërbimet | 8 karta shërbimesh — foto + video modal për secilin |
| Hoteleria | Seksion dedikuar hoteleve & turizmit në Jug |
| Testimoniale | Vlerësime klientësh |
| Kontakti | Formular WhatsApp, hartë, orari, të dhënat |
| Galeria | Foto reale pune — hapet nga menu si modal |
| Si Punojmë | Procesi 4-hapat — hapet nga menu si modal |
| FAQ | 6 pyetje të shpeshta — hapet nga menu si modal |

### Stack teknik
- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **lucide-react** për ikona
- Frontend-only — nuk kërkon backend

---

## 🚀 Si ta ekzekutosh lokalisht

### Kërkesat
- [Node.js](https://nodejs.org/) v18 ose më i ri
- npm v9+

### Hapat

```bash
# 1. Klon repo-n
git clone https://github.com/Doke1992/Punime-Hidraulike.git
cd Punime-Hidraulike

# 2. Instalo dependencies
npm install

# 3. Nis dev server
npm run dev
```

Hap shfletuesin te: **http://localhost:5173**

---

## 📦 Build për prodhim

```bash
# Krijo build të optimizuar
npm run build

# Shiko build-in lokalisht para deployment
npm run preview
```

Skedaret e prodhimit dalin në dosjen `/dist`.

---

## 🌐 Deployment (Vercel)

1. Shko te [vercel.com](https://vercel.com) dhe lidh këtë repo
2. Vercel e njeh automatikisht si Vite project
3. Kliko **Deploy** — nuk kërkohen konfigurime shtesë

---

## 📁 Struktura e projektit

```
src/
  components/
    Header.jsx          # Sticky header me logo, menu, Tel + WhatsApp
    Hero.jsx            # Slideshow hero me CTA
    TrustBar.jsx        # 4 sinjale besimi
    ServicesSection.jsx # 8 shërbime me modal foto/video
    EmergencyBanner.jsx # Banderolë urgjence e kuqe
    HotelSection.jsx    # Seksioni hoteleri & turizëm
    Testimonials.jsx    # Vlerësime klientësh
    Contact.jsx         # Formular + hartë + të dhëna
    Gallery.jsx         # Galeri me filtër (hapet si modal)
    Process.jsx         # Si punojmë — 4 hapa (modal)
    FAQ.jsx             # Accordion pyetje (modal)
    Footer.jsx          # Footer me logo, links, kontakt
    FloatingWhatsApp.jsx# Buton WhatsApp i fiksuar
    Modal.jsx           # Container modal (Gallery/Process/FAQ)
    ServiceModal.jsx    # Modal foto+video per sherbime
  data/
    services.js         # 8 shërbime me imazhe dhe video
    gallery.js          # 11 imazhe të klasifikuara
    faqs.js             # 6 pyetje & përgjigje
    contact.js          # Telefon, email, adresë
public/
  images/               # Foto pune (11 imazhe + 9 hotel)
  videos/               # Video pune (6 video total)
  logo.png              # Logo e biznesit
```

---

## 📞 Kontakti i biznesit

- **Telefon:** +355 68 6096549
- **Email:** meridon.xhepo@icloud.com
- **Adresa:** Rruga 5 Maji, Tiranë
- **Orari:** E Hënë – E Diel: 07:00 – 22:00
