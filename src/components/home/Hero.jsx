import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck, BadgeCheck, Headphones } from 'lucide-react'

const HERO_IMG =
  '/images/img-07.jpg'

const TRUST = [
  { icon: ShieldCheck, label: 'SNI Certified' },
  { icon: Truck, label: 'Pengiriman Cepat Se-Indonesia' },
  { icon: BadgeCheck, label: 'Harga Distributor Resmi' },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-dark text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Logistik dan pergudangan material konstruksi modern"
          className="h-full w-full scale-105 object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-black/30" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-matrial flex-col items-start justify-center px-4 pb-36 pt-24 md:px-6 lg:px-12 lg:pb-40 lg:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/10 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand" />
          <span className="font-headline text-xs font-semibold uppercase tracking-wider text-slate-200">
            Penyedia Material Konstruksi Terpercaya di Indonesia
          </span>
        </div>

        <h1 className="!text-white font-headline text-4xl font-extrabold tracking-tight md:max-w-4xl md:text-[56px] md:leading-[64px]">
          Material Berkualitas untuk Bangun{' '}
          <span className="text-brand underline decoration-brand/40 underline-offset-8">Masa Depan</span>
        </h1>

        <p className="mb-10 mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
          Menyediakan besi beton, semen premium, bata ringan, dan agregat berkualitas tinggi berstandar SNI untuk
          proyek infrastruktur, komersial, dan residensial di seluruh Nusantara.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-3">
          <Link to="/katalog" className="btn-primary !px-8 !py-3.5">
            Lihat Produk <ArrowRight size={18} />
          </Link>
          <Link
            to="/kontak"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-headline text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/20"
          >
            <Headphones size={18} className="text-brand" /> Hubungi Kami
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={20} className="text-brand" />
              <span className="font-headline text-xs font-semibold tracking-wide text-slate-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
