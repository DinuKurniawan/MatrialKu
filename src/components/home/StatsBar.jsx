import { History, Landmark, Users, Package } from 'lucide-react'

const METRICS = [
  { icon: History, value: '15+ Tahun', label: 'Pengalaman Industri', accent: true },
  { icon: Landmark, value: '500+ Proyek', label: 'Selesai & Berhasil', accent: false },
  { icon: Users, value: '200+ Klien', label: 'Kontraktor & Pengembang', accent: true },
  { icon: Package, value: '50+ Produk', label: 'Material Konstruksi SNI', accent: false },
]

export function StatsBar() {
  return (
    <section className="relative z-20 mx-auto -mt-14 mb-20 w-full max-w-matrial px-4 md:px-6 lg:px-12">
      <div className="grid w-full grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-level3 lg:grid-cols-4 lg:gap-8 lg:p-8">
        {METRICS.map(({ icon: Icon, value, label, accent }) => (
          <div key={value} className="flex items-center gap-4 p-2">
            <div
              className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${
                accent ? 'bg-brand-soft text-brand-hover' : 'bg-navy/5 text-navy'
              }`}
            >
              <Icon size={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-bold tracking-tight text-navy">{value}</span>
              <span className="font-body text-xs font-medium text-sub">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
