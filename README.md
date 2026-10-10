# 🏗️ Matrial — Website Building Materials

> Website company profile + katalog produk untuk **PT Matrial Bangun Nusantara** — distributor bahan bangunan (baja, semen, AAC, pipa, finishing) bersertifikat SNI & ISO sejak 2008.

Dibangun sebagai **Single Page Application (SPA)** menggunakan React 19 + Vite 8, dengan desain awal dari Google Stitch yang kemudian diimplementasikan ke kode produksi.

---

## 📋 Daftar Isi

- [Ikhtisar Proyek](#-ikhtisar-proyek)
- [Fitur Utama](#-fitur-utama)
- [Halaman & Rute](#-halaman--rute)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Arsitektur Aplikasi](#-arsitektur-aplikasi)
- [Design System](#-design-system)
- [Data & Gambar](#-data--gambar)
- [Alur RFQ (Request for Quotation)](#-alur-rfq-request-for-quotation)
- [Menjalankan Proyek](#-menjalankan-proyek)
- [Build Produksi](#-build-produksi)
- [Kustomisasi](#-kustomisasi)

---

## 🏢 Ikhtisar Proyek

**Matrial** adalah website B2B untuk distributor material konstruksi yang melayani kontraktor, arsitek, dan developer di seluruh Indonesia. Website ini berfungsi sebagai:

- **Company Profile** — Menampilkan sejarah perusahaan sejak 2008, visi-misi, tim direksi, sertifikasi (SNI, ISO 9001, ASTM), dan jaringan gudang (Cikarang, Surabaya, IKN).
- **Katalog Produk Digital** — Menyajikan 142+ produk material bangunan tersertifikasi dengan spesifikasi teknis, harga, dan fitur pencarian/filter/sortir.
- **Portofolio Proyek** — Showcase 500+ proyek infrastruktur nasional (tol Trans Jawa, IKN Nusantara, gedung komersial, dsb.).
- **Platform RFQ** — Formulir permintaan penawaran harga yang dapat diakses dari seluruh halaman.
- **Portal Berita** — Artikel dan update terkait material konstruksi dan industri.

Bahasa antarmuka: **Bahasa Indonesia** (`lang="id"`).

---

## ✨ Fitur Utama

### Global
- 🔝 **Navbar sticky** dengan menu responsif (desktop: inline nav, mobile: hamburger)
- 📞 **Top bar** info sertifikasi + nomor telepon
- 📋 **Drawer RFQ** — panel slide-in untuk request penawaran, bisa dipanggil dari mana saja
- 🦶 **Footer** 4 kolom (profil, navigasi, kategori, kontak)
- 🚫 **Halaman 404** kustom dengan navigasi kembali ke beranda

### Per Halaman
- **Beranda**: Hero full-width, bar statistik animasi, preview produk unggulan, keunggulan perusahaan, highlight portofolio, testimonial, CTA banner
- **Katalog**: Pencarian real-time, filter 8 kategori, 4 mode sortir (populer/harga/SNI), pagination 9 item/halaman, modal detail produk, tabel referensi spesifikasi
- **Tentang**: Timeline interaktif 2008-2024, profil perusahaan dengan foto, visi & misi, 5 nilai inti, info sertifikasi, peta gudang, profil tim direksi
- **Portofolio**: Filter multi-dimensi (kategori + tahun + wilayah), 9 proyek showcase, modal detail (kontraktor, volume, QA/QC), statistik kumulatif, peta logistik
- **Berita**: Daftar artikel dari data JSON, hero banner
- **Kontak**: Form RFQ lengkap (validasi: nama, email, telepon, kategori, pesan min. 20 karakter, upload file ≤25MB), auto-generate pesan WhatsApp

---

## 📑 Halaman & Rute

| Rute | Halaman | Komponen | Deskripsi |
|------|---------|----------|-----------|
| `/` | Beranda | `Home.jsx` | Hero, StatsBar, AboutPreview, FeaturedProducts, WhyChooseUs, PortfolioHighlights, Testimonials, CtaBanner |
| `/katalog` | Katalog Produk | `Catalog.jsx` | Search, filter 8 kategori, sort (populer/murah/mahal/SNI), pagination 9/halaman, modal detail, RFQ per produk |
| `/tentang` | Tentang Kami | `Others.jsx → About` | Hero + statistik, profil perusahaan, visi & misi, nilai inti, timeline 2008–2024, sertifikasi & gudang, tim direksi, CTA kemitraan |
| `/portofolio` | Portofolio | `Others.jsx → Portfolio` | Filter kategori + tahun + wilayah, grid 9 proyek strategis, modal detail (kontraktor, volume, QA/QC), peta logistik |
| `/berita` | Berita & Artikel | `Others.jsx → News` | Hero banner, daftar artikel dari `articles.json` |
| `/kontak` | Hubungi Kami | `Others.jsx → Contact` | Hero, form RFQ tervalidasi, status sukses + link WhatsApp otomatis |
| `*` | 404 Not Found | `App.jsx → NotFound` | Halaman error kustom |

---

## 🛠️ Tech Stack

| Teknologi | Versi | Peran |
|-----------|-------|-------|
| [**React**](https://react.dev) | 19.2.8 | Library UI berbasis komponen dengan hooks (`useState`, `useMemo`). React 19 menghadirkan peningkatan performa dan API baru. |
| [**Vite**](https://vite.dev) | 8.3.0 | Build tool modern dengan dev server instan (HMR), optimized build (Rolldown), dan plugin ecosystem. |
| [**React Router DOM**](https://reactrouter.com) | 7.18.4 | Client-side routing SPA menggunakan `BrowserRouter`, `Routes`, `Route`, `NavLink`, dan `Link`. |
| [**Tailwind CSS**](https://tailwindcss.com) | 3.4.19 | Utility-first CSS framework untuk styling deklaratif dan responsif. |
| [**PostCSS**](https://postcss.org) | 8.5.29 | Pipeline CSS processing (digunakan Tailwind di belakang layar). |
| [**Autoprefixer**](https://github.com/postcss/autoprefixer) | 10.6.1 | Otomatis menambahkan vendor prefix CSS untuk kompatibilitas browser. |
| [**Lucide React**](https://lucide.dev) | 1.55.0 | Library ikon SVG modern (200+ ikon dipakai: `ShieldCheck`, `Truck`, `Building2`, dll.). |
| [**Oxlint**](https://oxc.rs) | 1.81.0 | Linter JavaScript/JSX ultra-cepat berbasis Rust. |
| **Plus Jakarta Sans** | — | Font headline (via Google Fonts, weight 500–800). |
| **Inter** | — | Font body (via Google Fonts, weight 400–600). |

### Plugin Vite

- `@vitejs/plugin-react` v6.1.1 — Fast Refresh + JSX transform untuk React 19

---

## 📂 Struktur Proyek

```
website_matrial/
├── index.html                    # Entry HTML, meta SEO (lang="id"), Google Fonts
├── vite.config.js                # Konfigurasi Vite + plugin React
├── tailwind.config.js            # Token warna, font, shadow, breakpoint Tailwind
├── postcss.config.js             # Pipeline PostCSS (Tailwind + Autoprefixer)
├── .oxlintrc.json                # Konfigurasi Oxlint
├── package.json                  # Dependencies & scripts
│
├── public/
│   ├── favicon.svg               # Ikon tab browser
│   ├── icons.svg                 # Sprite SVG
│   └── images/                   # 33 gambar lokal
│       ├── img-01.jpg ... img-30.jpg   # Foto produk, proyek, hero
│       └── team-ceo.jpg, team-cfo.jpg, team-coo.jpg  # Foto tim
│
├── src/
│   ├── main.jsx                  # Bootstrap React (StrictMode + createRoot)
│   ├── App.jsx                   # Router utama + state RFQ drawer + 404
│   ├── index.css                 # Tailwind directives + utility classes kustom
│   │
│   ├── tokens/
│   │   └── design-tokens.js      # Warna brand + definisi navigasi
│   │
│   ├── data/
│   │   ├── products.json         # 10+ produk (semen, besi, keramik, cat, dll.)
│   │   ├── projects.json         # Data proyek portofolio
│   │   └── articles.json         # Data artikel berita
│   │
│   ├── components/
│   │   ├── layout.jsx            # Navbar, Footer, RFQDrawer
│   │   ├── ui.jsx                # Button, Badge, SectionHeading, ProductCard
│   │   ├── catalog.jsx           # CatalogHero, ProductCard, ProductDetailModal,
│   │   │                         # ProcurementCTA, TrustBadges
│   │   └── home/
│   │       ├── Hero.jsx          # Hero section beranda (full-width, trust badges)
│   │       ├── StatsBar.jsx      # Bar statistik perusahaan
│   │       ├── AboutPreview.jsx  # Preview tentang kami
│   │       ├── FeaturedProducts.jsx  # Grid produk unggulan
│   │       ├── WhyChooseUs.jsx   # Keunggulan kompetitif
│   │       ├── PortfolioHighlights.jsx  # Showcase proyek terpilih
│   │       ├── Testimonials.jsx  # Testimoni klien
│   │       └── CtaBanner.jsx     # CTA ajakan aksi
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Komposisi seluruh section beranda
│   │   ├── Catalog.jsx           # Logika search, filter, sort, pagination katalog
│   │   └── Others.jsx            # About, Portfolio, News, Contact
│   │                             # (termasuk data konten dan validasi form)
│   │
│   └── assets/
│       ├── hero.png              # Asset hero (fallback/alternatif)
│       ├── react.svg             # Logo React
│       └── vite.svg              # Logo Vite
│
└── dist/                         # Output build produksi (git-ignored)
    ├── index.html
    ├── favicon.svg
    ├── icons.svg
    ├── images/                   # Salinan gambar dari public/
    └── assets/
        ├── index-*.css           # CSS bundle (Tailwind + custom)
        └── index-*.js            # JS bundle (React + app code)
```

---

## 🏛️ Arsitektur Aplikasi

```
┌─────────────────────────────────────────────────┐
│                    index.html                    │
│              (entry + meta + fonts)              │
└───────────────────┬─────────────────────────────┘
                    │
            ┌───────▼───────┐
            │   main.jsx    │  ← StrictMode + createRoot
            └───────┬───────┘
                    │
            ┌───────▼───────┐
            │   App.jsx     │  ← BrowserRouter + RFQ state
            │               │
            │  ┌──────────┐ │
            │  │  Navbar   │ │  ← Sticky header + mobile menu
            │  └──────────┘ │
            │  ┌──────────┐ │
            │  │  Routes   │ │  ← 6 halaman + 404
            │  └──────────┘ │
            │  ┌──────────┐ │
            │  │  Footer   │ │
            │  └──────────┘ │
            │  ┌──────────┐ │
            │  │ RFQDrawer │ │  ← Overlay panel (state di App)
            │  └──────────┘ │
            └───────────────┘
```

### Alur Data

1. **Design tokens** (`tokens/design-tokens.js`) → mendefinisikan warna brand dan item navigasi, dipakai oleh Navbar & Footer.
2. **Data JSON** (`data/*.json`) → sumber data produk, proyek, dan artikel. Diimpor langsung oleh komponen halaman.
3. **State RFQ** → `useState` di `App.jsx` mengelola buka/tutup drawer dan produk yang dipilih. Fungsi `openRFQ` di-pass sebagai prop ke seluruh halaman.

---

## 🎨 Design System

Tema visual diambil dari desain Stitch dengan konsep **"navy otoritatif + aksen oranye konstruksi"** yang mencerminkan kekokohan dan kepercayaan industri B2B.

### Palet Warna

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `navy` | `#0F2A47` | Header, hero, heading, elemen utama |
| `navy-dark` | `#00152C` | Top bar, footer, overlay |
| `navy-light` | `#1E3A5F` | Hover state header |
| `navy-muted` | `#7A92B4` | Teks sekunder pada dark bg |
| `brand` | `#F58220` | CTA button, aksen, badge aktif |
| `brand-hover` | `#E06D12` | Hover state CTA |
| `brand-soft` | `#FFF3E8` | Badge latar terang |
| `canvas` | `#F8FAFC` | Background section alternatif |
| `slate2` | `#F1F5F9` | Background kartu/filter |
| `line` | `#E2E8F0` | Border kartu |
| `line2` | `#CBD5E1` | Border input |
| `ink` | `#111C2D` | Teks utama body |
| `sub` | `#43474D` | Teks sekunder/deskripsi |

### Tipografi

| Peran | Font | Weight | Token Tailwind |
|-------|------|--------|----------------|
| Headline | Plus Jakarta Sans | 500–800 | `font-headline` |
| Body | Inter | 400–600 | `font-body` |

### Elevasi (Shadow)

| Level | Penggunaan | Nilai |
|-------|------------|-------|
| `shadow-level1` | Kartu default | Subtle, 1px blur |
| `shadow-level2` | Kartu hover, CTA | Medium, 10px blur |
| `shadow-level3` | Modal, overlay | Prominent, 20px blur |

### Komponen CSS Kustom

Didefinisikan di [`index.css`](src/index.css) menggunakan `@layer components`:

| Kelas | Deskripsi |
|-------|-----------|
| `.container-matrial` | Container dengan `max-width: 1320px`, padding responsif |
| `.btn-primary` | Tombol oranye (brand), efek hover naik + shadow |
| `.btn-navy` | Tombol navy, untuk aksi sekunder |
| `.btn-outline` | Tombol outline putih dengan border |
| `.card-matrial` | Kartu dengan border, rounded-2xl, shadow, hover effect |
| `.chip` | Badge kecil pill-shaped untuk status/label |
| `.input-matrial` | Input field dengan focus ring brand |
| `.label-matrial` | Label form uppercase tracking wider |

---

## 💾 Data & Gambar

### Sumber Data

Data disimpan sebagai file JSON statis yang diimpor langsung oleh komponen React:

| File | Isi | Jumlah |
|------|-----|--------|
| [`products.json`](src/data/products.json) | Katalog produk material bangunan | 10+ item |
| [`projects.json`](src/data/projects.json) | Data proyek portofolio | Dipakai di halaman portofolio |
| [`articles.json`](src/data/articles.json) | Artikel berita | Dipakai di halaman berita |

#### Skema Produk (`products.json`)

```json
{
  "id": "smn-pcc-50",
  "name": "Semen Portland Komposit (PCC) 50kg",
  "category": "Semen & Mortar",
  "grade": "SNI 2049:2015",
  "price": 68500,
  "unit": "sak",
  "stock": "Ready Stock",
  "logistics": "Truk / Tronton",
  "popularity": 98,
  "sniYear": 2015,
  "image": "https://...",
  "desc": "Deskripsi teknis produk...",
  "specs": {
    "Kemasan": "Sak 50 Kg",
    "Kuat Tekan 28H": "≥ 280 kg/cm²",
    "Tipe": "PCC Komposit",
    "Standar": "SNI 2049:2015"
  }
}
```

#### Kategori Produk

- Semen & Mortar
- Besi & Baja
- Keramik & Granit
- Cat & Pelapis
- Kayu & Multiplex
- Pasangan Dinding
- Pemipaan & Fitting

### Gambar

Semua gambar disimpan **lokal** di `public/images/` dan diakses via path absolut:

```jsx
<img src="/images/img-07.jpg" alt="..." />
```

> ⚠️ **Penting**: Jangan hotlink ke `lh3.googleusercontent.com` (URL Stitch bersifat sementara dan bisa kena rate-limit 429). Field `image` di `products.json` berisi URL Stitch sebagai referensi, tapi di komponen dipakai gambar lokal.

**Cara menambah gambar baru:**
1. Simpan file di `public/images/nama-file.jpg`
2. Referensikan sebagai `/images/nama-file.jpg` di komponen atau data JSON

---

## 📨 Alur RFQ (Request for Quotation)

RFQ adalah fitur inti yang memungkinkan calon pelanggan B2B meminta penawaran harga:

```
┌──────────────────────────────────────────────────────────────┐
│                   Titik Akses RFQ                            │
│                                                              │
│  ┌──────────┐   ┌──────────────┐   ┌──────────────────────┐ │
│  │  Navbar   │   │ Tombol RFQ   │   │ Halaman Kontak       │ │
│  │  "Minta   │   │ per Produk   │   │ (form lengkap +      │ │
│  │ Penawaran"│   │ di Katalog   │   │  validasi + upload)  │ │
│  └─────┬─────┘   └──────┬───────┘   └──────────────────────┘ │
│        │                │                                     │
│        ▼                ▼                                     │
│  ┌─────────────────────────────┐                             │
│  │       RFQ Drawer            │                             │
│  │  (slide-in panel kanan)     │                             │
│  │                             │                             │
│  │  • Nama                     │                             │
│  │  • Perusahaan / Proyek      │                             │
│  │  • Qty + WhatsApp           │                             │
│  │  • Kebutuhan (textarea)     │                             │
│  │  • Submit → alert sukses    │                             │
│  └─────────────────────────────┘                             │
└──────────────────────────────────────────────────────────────┘
```

### Alur Teknis

1. `App.jsx` mengelola state `rfqOpen` dan `rfqProduct` via `useState`.
2. Fungsi `openRFQ(product?)` di-pass sebagai prop ke semua halaman dan komponen.
3. Klik tombol RFQ → `setRfqProduct(p)` + `setRfqOpen(true)` → `RFQDrawer` muncul.
4. Di halaman **Kontak** (`/kontak`), form RFQ terpisah dengan validasi lebih lengkap:
   - Nama, email, telepon, kategori produk
   - Pesan minimal 20 karakter
   - Upload file (PDF/XLSX/DWG ≤ 25MB)
   - Status sukses + tombol "Lanjut via WhatsApp" (pesan terisi otomatis)

---

## 🚀 Menjalankan Proyek

### Prasyarat

- **Node.js** ≥ 18.x
- **npm** (bawaan Node.js)

### Instalasi & Development

```bash
# Clone atau navigasi ke folder proyek
cd website_matrial

# Install dependencies (sekali saja)
npm install

# Jalankan development server (HMR aktif)
npm run dev
# → http://localhost:5173
```

### Perintah NPM

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Jalankan dev server Vite dengan Hot Module Replacement |
| `npm run build` | Build optimized untuk produksi ke folder `dist/` |
| `npm run preview` | Preview hasil build produksi secara lokal |
| `npm run lint` | Jalankan Oxlint untuk cek kualitas kode |

---

## 📦 Build Produksi

```bash
npm run build
```

Output di folder `dist/`:
- `index.html` — Entry HTML
- `assets/index-*.js` — JS bundle (React + seluruh kode app, tree-shaken)
- `assets/index-*.css` — CSS bundle (Tailwind purged, hanya class yang terpakai)
- `images/` — Salinan semua gambar dari `public/images/`

Untuk preview lokal:
```bash
npm run preview
# → http://localhost:4173
```

> **Catatan deploy**: Karena menggunakan `BrowserRouter` (client-side routing), server produksi harus dikonfigurasi untuk redirect semua rute ke `index.html`. Contoh untuk Nginx:
>
> ```nginx
> location / {
>   try_files $uri $uri/ /index.html;
> }
> ```

---

## ⚙️ Kustomisasi

### Menambah Produk Baru

Edit [`src/data/products.json`](src/data/products.json) — tambahkan objek baru mengikuti skema di atas. Tidak perlu mengubah komponen.

### Mengubah Warna Brand

Edit [`tailwind.config.js`](tailwind.config.js) pada bagian `theme.extend.colors`:

```js
colors: {
  navy: { DEFAULT: '#0F2A47', dark: '#00152C', light: '#1E3A5F' },
  brand: { DEFAULT: '#F58220', hover: '#E06D12', soft: '#FFF3E8' },
  // ...
}
```

Sinkronkan juga dengan [`src/tokens/design-tokens.js`](src/tokens/design-tokens.js).

### Menambah Halaman Baru

1. Buat komponen di `src/pages/NamaHalaman.jsx`
2. Tambahkan `<Route>` di [`App.jsx`](src/App.jsx)
3. Tambahkan item navigasi di [`design-tokens.js`](src/tokens/design-tokens.js) → array `nav`

### Menambah Item Navigasi

Edit `tokens.nav` di [`design-tokens.js`](src/tokens/design-tokens.js):

```js
nav: [
  { to: '/', label: 'Beranda' },
  { to: '/katalog', label: 'Katalog Produk' },
  // tambahkan item baru di sini
]
```

Navbar dan Footer otomatis mengambil dari array ini.

---

## 📄 Lisensi

Proyek ini bersifat **privat** dan dimiliki oleh PT Matrial Bangun Nusantara.

---

<p align="center">
  Dibangun dengan ❤️ menggunakan <strong>React 19</strong> + <strong>Vite 8</strong> + <strong>Tailwind CSS 3</strong>
</p>
