# Pinoo Etkisi - Proje Dokümantasyonu

## Proje Özeti

**Pinoo Etkisi**, okullara robotik kodlama etkinliği düzenleme hizmeti sunan bir landing page projesidir. Ziyaretçileri bilgilendirmek, güven oluşturmak ve iletişim formundan teklif almak temel amaçlardır.

---

## Teknik Mimari

### Tech Stack

| Katman | Teknoloji | Versiyon | Açıklama |
|--------|-----------|----------|----------|
| **Framework** | Next.js | 15.x | React tabanlı full-stack framework |
| **Dil** | TypeScript | 5.x | Tip güvenli JavaScript |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS framework |
| **Veritabanı** | Supabase | - | PostgreSQL tabanlı BaaS |
| **Hosting** | Vercel | - | Edge network deployment |
| **Versiyon Kontrolü** | GitHub | - | Git repository |

### Proje Yapısı

```
pinooetkisi/
├── public/                  # Statik dosyalar
│   ├── images/             # Görseller
│   └── favicon.ico
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Ana sayfa
│   │   ├── globals.css     # Global stiller
│   │   └── api/            # API routes
│   │       └── contact/    # İletişim form endpoint
│   ├── components/         # React bileşenleri
│   │   ├── Header.tsx      # Navigasyon
│   │   ├── Hero.tsx        # Ana banner
│   │   ├── Problem.tsx     # Sorun tanımı
│   │   ├── Solution.tsx    # Çözüm sunumu
│   │   ├── Services.tsx    # Hizmet detayları
│   │   ├── Testimonials.tsx # Referanslar
│   │   ├── Contact.tsx     # İletişim formu
│   │   └── Footer.tsx      # Alt bilgi
│   └── lib/                # Yardımcı fonksiyonlar
│       └── supabase.ts     # Supabase client
├── .env.local              # Environment variables (gitignore)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Sayfa Bölümleri ve Özellikleri

### 1. Header (Navigasyon)
- Sabit pozisyon (sticky)
- Logo ve marka ismi
- Navigasyon linkleri: Hizmetler, Nasıl Çalışır, Referanslar, İletişim
- Mobil hamburger menü
- CTA butonu: "Teklif Al"

### 2. Hero Section
- Dikkat çekici başlık ve alt başlık
- Duygusal mesaj: "Unutulmaz teknoloji festivali"
- İstatistikler: 50+ okul, 5000+ öğrenci, %100 memnuniyet
- CTA butonları: "Ücretsiz Teklif Al", "Nasıl Çalışır?"
- Gradient arka plan ve dekoratif elementler

### 3. Problem Section
- Okulların karşılaştığı 6 temel zorluk:
  - Yüksek yatırım maliyeti
  - Depolama ve envanter
  - Bakım ve onarım
  - İçerik geliştirme
  - Sınırlı erişim
  - Teknik destek eksikliği
- Kart tabanlı görsel sunum

### 4. Solution Section (Nasıl Çalışır)
- 4 adımlı süreç: İletişim → Planlama → Teslimat → Etkinlik
- Temel faydalar:
  - Ekonomik erişilebilirlik
  - Operasyonel kolaylık
  - Pedagojik derinlik
  - Kapsayıcılık
- İstatistik kartları: %70 tasarruf, 0 bakım derdi, 10x öğrenci, 7/24 destek

### 5. Services Section
- Detaylı hizmet açıklamaları:
  - Robotik set kiralama
  - Etkinlik senaryoları
  - Lojistik destek
  - Teknik danışmanlık
  - Pinoo 360 dijital kaynaklar

### 6. Testimonials Section
- Referans okul logoları
- Müdür/öğretmen yorumları
- Sosyal kanıt unsurları

### 7. Contact Section
- İletişim formu alanları:
  - Okul adı
  - İletişim kişisi
  - Email
  - Telefon
  - Tahmini öğrenci sayısı
  - Mesaj
- Form validasyonu (client-side)
- Supabase'e kayıt (server-side)

### 8. Footer
- Logo ve kısa açıklama
- Hızlı linkler
- İletişim bilgileri
- Sosyal medya linkleri
- Copyright

---

## Veritabanı Şeması (Supabase)

### Tablo: `contact_requests`

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | uuid | Primary key |
| created_at | timestamp | Oluşturulma tarihi |
| school_name | text | Okul adı |
| contact_person | text | İletişim kişisi |
| email | text | Email adresi |
| phone | text | Telefon numarası |
| student_count | text | Tahmini öğrenci sayısı |
| message | text | Mesaj |
| status | text | pending / contacted / completed |

---

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# (Opsiyonel) Email bildirimi için
SMTP_HOST=smtp.gmail.com
SMTP_USER=pinooetkisi@gmail.com
SMTP_PASS=xxxx
```

---

## Deployment Pipeline

```
[Geliştirici]
    ↓ git push
[GitHub - pinooetkisi/pinooetkisi]
    ↓ webhook trigger
[Vercel]
    ↓ build & deploy
[Production - pinooetkisi.vercel.app]
    ↓ API calls
[Supabase - PostgreSQL]
```

### Vercel Ayarları
- Framework: Next.js (otomatik algılama)
- Build Command: `npm run build`
- Output Directory: `.next`
- Environment Variables: Supabase keys

---

## SEO ve Performans

### Meta Tags
- Title: "Pinoo Etkisi | Okullara Robotik Kodlama Etkinlikleri"
- Description: "Okulunuzda unutulmaz bir teknoloji festivali yaratın..."
- Keywords: robotik kodlama, okul etkinliği, pinoo, STEM eğitimi

### Performans Hedefleri
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### Optimizasyonlar
- Image optimization (next/image)
- Font optimization (next/font)
- Code splitting (otomatik)
- Edge caching (Vercel)

---

## Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Primary Blue | #2563eb | CTA, linkler |
| Primary Dark | #1d4ed8 | Hover states |
| Secondary Green | #10b981 | Başarı, onay |
| Accent Amber | #f59e0b | Vurgular |
| Text Dark | #1f2937 | Ana metin |
| Text Muted | #6b7280 | İkincil metin |
| Background | #ffffff | Sayfa arka planı |
| Gray Light | #f9fafb | Bölüm arka planları |

---

## Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu (local test)
npm run start

# Lint kontrolü
npm run lint
```

---

## Sonraki Adımlar

- [ ] Kalan bileşenleri tamamla (Services, Testimonials, Contact, Footer)
- [ ] Ana sayfa entegrasyonu
- [ ] Supabase projesi oluştur ve bağla
- [ ] İletişim formu API endpoint'i yaz
- [ ] Vercel'e deploy et
- [ ] Custom domain bağla (opsiyonel)
- [ ] Google Analytics entegrasyonu (opsiyonel)

---

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit yapın (`git commit -m 'Yeni özellik eklendi'`)
4. Push yapın (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

---

## Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.

---

**Geliştirici:** Pinoo Etkisi Ekibi
**İletişim:** pinooetkisi@gmail.com
**Repository:** https://github.com/pinooetkisi/pinooetkisi
