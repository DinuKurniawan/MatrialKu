import { ShieldCheck, Wallet, Zap, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Kualitas Terjamin',
    desc: 'Semua produk melewati uji laboratorium independen yang ketat dan memiliki sertifikat SNI resmi serta mill certificate asli pabrik.',
  },
  {
    icon: Wallet,
    title: 'Harga Kompetitif',
    desc: 'Harga langsung distributor tangan pertama dengan skema termin pembayaran fleksibel (B2B Project Terms) yang mendukung cashflow proyek.',
  },
  {
    icon: Zap,
    title: 'Pengiriman Tepat Waktu',
    desc: 'Didukung armada logistik terpadu dengan pelacakan GPS yang siap menjangkau lokasi proyek tepat jadwal tanpa penundaan kerja lapangan.',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    desc: 'Tim spesialis teknik material siap memberikan asistensi spesifikasi teknis (RAB) dan estimasi kubikasi akurat secara cuma-cuma.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-navy py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy opacity-95" />
      <div className="relative z-10 mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand">
            Keunggulan Kami
          </span>
          <h2 className="!text-white mt-2 font-headline text-2xl font-bold md:text-[32px]">Mengapa Memilih Matrial?</h2>
          <p className="mt-4 font-body text-[15px] text-slate-300">
            Kami memahami bahwa kepastian mutu, waktu, dan anggaran adalah pilar utama keberhasilan setiap proyek
            konstruksi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/5 p-8 shadow-level1 backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-level2"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-brand/15 text-brand">
                <Icon size={30} />
              </div>
              <h3 className="!text-white mb-3 font-headline text-lg font-semibold">{title}</h3>
              <p className="font-body text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
