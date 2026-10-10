import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'

const ABOUT_IMG =
  '/images/img-02.jpg'

const POINTS = [
  {
    title: 'Sertifikasi Mutu Standar Nasional (SNI)',
    desc: 'Lengkap dengan sertifikat uji lab (Mill Certificate) untuk tiap batch produksi.',
  },
  {
    title: 'Distribusi Tepat Waktu Armada Mandiri',
    desc: 'Dukungan truk trailer, tronton, dan engkel yang siap mobilisasi 24/7.',
  },
  {
    title: 'Konsultasi Teknis & Volume Proyek Gratis',
    desc: 'Kalkulasi presisi kubikasi dan tonase oleh insinyur teknik sipil kami.',
  },
]

export function AboutPreview() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate2 shadow-level3">
              <img
                src={ABOUT_IMG}
                alt="Gudang logistik material bangunan modern dengan stok besi dan semen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 right-4 flex max-w-xs items-center gap-4 rounded-2xl border border-brand/30 bg-navy p-6 text-white shadow-level3 sm:right-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="font-headline text-sm font-semibold text-brand">15+ Tahun Terpercaya</p>
                <p className="font-body text-xs text-slate-300">Melayani Mitra Konstruksi Seluruh Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start pt-6 lg:pt-0">
            <div className="mb-4 inline-flex items-center rounded-md bg-brand-soft px-3 py-1 font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">
              Tentang Kami
            </div>
            <h2 className="mb-6 font-headline text-2xl font-bold leading-tight md:text-[32px] md:leading-[40px]">
              Mitra Strategis Pembangunan Infrastruktur dan Properti Nasional
            </h2>
            <p className="mb-6 font-body text-[15px] leading-relaxed text-sub">
              PT Matrial Bangun Nusantara berdiri di garda depan rantai pasok material konstruksi modern di Indonesia.
              Kami menjembatani produsen bahan baku terkemuka dengan kontraktor skala nasional, memastikan ketersediaan
              volume material berstandar SNI tanpa hambatan logistik.
            </p>
            <p className="mb-8 font-body text-sm leading-relaxed text-sub">
              Dengan jaringan gudang sentral dan armada mandiri di berbagai kota strategis, kami menjamin pasokan
              berkelanjutan untuk memangkas risiko downtime di lokasi pekerjaan konstruksi Anda.
            </p>

            <div className="mb-10 flex w-full flex-col gap-2">
              {POINTS.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3 rounded-xl bg-canvas p-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-brand-hover" />
                  <div>
                    <p className="font-headline text-sm font-semibold text-navy">{pt.title}</p>
                    <p className="font-body text-xs text-sub">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/tentang" className="btn-navy group">
              Selengkapnya <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
