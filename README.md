# Pinoo Etkisi

Okullara robotik kodlama etkinliği düzenleme hizmeti sunan profesyonel landing page.

## Proje Hakkında

**Pinoo Etkisi**, okullara robotik kodlama setleri kiralama ve tam kapsamlı etkinlik organizasyonu hizmeti sunan bir platformdur. Bu web sitesi, hizmeti tanıtmak, güven oluşturmak ve potansiyel müşterilerden teklif talebi almak amacıyla tasarlanmıştır.

### Hedef Kitle
- Okul yöneticileri
- Bilişim teknolojileri öğretmenleri
- Eğitim koordinatörleri

### Temel Değer Önermeleri
- Satın alma yerine kiralama ile maliyet avantajı
- Lojistik, bakım ve depolama derdi yok
- Müfredata uyumlu hazır etkinlik senaryoları
- Etkinlik öncesi, sırası ve sonrası tam destek

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **Veritabanı:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Versiyon Kontrolü:** GitHub

## Kurulum

```bash
# Repoyu klonla
git clone https://github.com/pinooetkisi/pinooetkisi.git
cd pinooetkisi

# Bağımlılıkları yükle
npm install

# Environment variables oluştur
cp .env.example .env.local
# .env.local dosyasını düzenle

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Ana sayfa
│   ├── globals.css     # Global stiller
│   └── api/            # API endpoints
├── components/         # React bileşenleri
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── supabase.ts     # Supabase client
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Production sunucusu |
| `npm run lint` | ESLint kontrolü |

## Deployment

Proje Vercel'e otomatik deploy edilir. `main` branch'e yapılan her push, production'a deploy tetikler.

**Production URL:** [pinooetkisi.vercel.app](https://pinooetkisi.vercel.app)

## Dokümantasyon

Detaylı teknik dokümantasyon için: [ARCHITECTURE.md](./ARCHITECTURE.md)

## Lisans

Tüm hakları saklıdır.

---

**Geliştirici:** Pinoo Etkisi
**Email:** pinooetkisi@gmail.com
