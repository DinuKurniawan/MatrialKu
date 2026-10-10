import { Star } from 'lucide-react'

const CLIENTS = ['WIKA', 'ADHI KARYA', 'PT PP', 'WASKITA', 'TOTAL BP', 'CIPUTRA']

const TESTIMONIALS = [
  {
    quote:
      'Kemitraan dengan Matrial selalu berjalan mulus. Pengiriman besi beton ulir SNI selalu tepat waktu sesuai schedule pengecoran, dan sertifikat mutu pengujian selalu lengkap dari pabrik.',
    initials: 'BS',
    avatarCls: 'bg-navy text-white',
    name: 'Ir. Bambang Sutedjo',
    role: 'Project Manager, PT Cipta Bangun Konstruksi',
  },
  {
    quote:
      'Harga distributor yang kompetitif dan transparansi stok riil di gudang sangat memudahkan tim pengadaan kami dalam mengontrol cashflow proyek multi-tower tanpa khawatir fluktuasi harga.',
    initials: 'HP',
    avatarCls: 'bg-brand-hover text-white',
    name: 'Hendrawan Pratama',
    role: 'Procurement Director, Graha Mega Properti',
  },
  {
    quote:
      'Presisi bata ringan AAC dan keseragaman mutu mortar yang disuplai sangat memangkas waktu pengerjaan dinding dan partisi. Sangat direkomendasikan untuk proyek arsitektural modern.',
    initials: 'SR',
    avatarCls: 'bg-navy text-white',
    name: 'Siti Rahmawati',
    role: 'Lead Architect & Developer, Studio Reka Ruang',
  },
]

function Stars() {
  return (
    <div className="mb-6 flex items-center gap-1 text-brand-hover">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="w-full bg-canvas py-20">
      <div className="mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="mb-10 text-center">
          <p className="font-headline text-[11px] font-bold uppercase tracking-widest text-sub">
            Dipercaya oleh Kontraktor & Pengembang Terkemuka
          </p>
        </div>
        <div className="mb-20 grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="flex h-16 items-center justify-center rounded-xl bg-white p-4 opacity-70 shadow-level1 transition-all hover:opacity-100"
            >
              <span className="font-headline text-base font-extrabold tracking-tighter text-navy">{c}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">
            Kepuasan Klien
          </span>
          <h2 className="mt-2 font-headline text-2xl font-bold md:text-[32px]">Apa Kata Mitra Kami?</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-level1 transition-all duration-300 hover:shadow-level2"
            >
              <div>
                <Stars />
                <blockquote className="mb-8 font-body text-sm italic leading-relaxed text-sub">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="flex items-center gap-4 pt-4">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full font-headline text-base font-bold ${t.avatarCls}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-headline text-sm font-semibold text-navy">{t.name}</p>
                  <p className="font-body text-xs text-sub">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
