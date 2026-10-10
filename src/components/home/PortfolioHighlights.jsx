import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const PROJECTS = [
  {
    badge: 'Komersial',
    badgeCls: 'bg-navy text-white',
    location: 'Jakarta Pusat',
    title: 'Pembangunan Menara Sudirman Suites',
    desc: 'Pasokan Besi Beton & Semen Curah intensif untuk struktur podium dan menara 45 lantai dengan standar ketahanan gempa zona tinggi.',
    volume: '12.000 Ton Besi & Semen',
    img: '/images/img-20.jpg',
    alt: 'Konstruksi menara kembar bertingkat dengan tower crane saat senja',
  },
  {
    badge: 'Infrastruktur',
    badgeCls: 'bg-brand text-white',
    location: 'Jawa Barat',
    title: 'Tol Trans Jawa Seksi IV',
    desc: 'Pasokan berkala agregat kelas A, pasir cor grade 1, serta geotekstil stabilisasi tanah sepanjang trase jalur logistik nasional.',
    volume: '85.000 m³ Agregat & Pasir',
    img: '/images/img-12.jpg',
    alt: 'Pekerjaan jalan tol dengan alat berat pemadat aspal',
  },
  {
    badge: 'Residensial',
    badgeCls: 'bg-navy text-white',
    location: 'Tangerang Selatan',
    title: 'Kawasan Residensial BSD Eco Park',
    desc: 'Suplai komprehensif bata ringan AAC presisi tinggi, baja ringan truss profil C, serta semen mortar instan untuk 400+ unit hunian mewah.',
    volume: '4.200 m³ Bata Ringan',
    img: '/images/img-05.jpg',
    alt: 'Kawasan perumahan modern dalam tahap konstruksi',
  },
]

export function PortfolioHighlights() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">
              Kiprah Nyata
            </span>
            <h2 className="mt-2 font-headline text-2xl font-bold md:text-[32px]">Portofolio Proyek Unggulan</h2>
            <p className="mt-3 max-w-2xl font-body text-[15px] text-sub">
              Bukti nyata keandalan pasokan kami dalam mendukung proyek-proyek prestisius berskala masif di seluruh
              Indonesia.
            </p>
          </div>
          <Link to="/portofolio" className="btn-outline shrink-0">
            Lihat Semua Proyek <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((pr) => (
            <article
              key={pr.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-level1 transition-all duration-300 hover:shadow-level2"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate2">
                <img
                  src={pr.img}
                  alt={pr.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 font-headline text-[11px] font-bold uppercase tracking-wider shadow ${pr.badgeCls}`}
                >
                  {pr.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-1.5 font-medium text-brand-hover">
                  <MapPin size={16} />
                  <span className="font-headline text-xs font-semibold">{pr.location}</span>
                </div>
                <h3 className="mb-3 font-headline text-lg font-semibold text-navy">{pr.title}</h3>
                <p className="mb-6 flex-1 font-body text-sm text-sub">{pr.desc}</p>
                <div className="flex items-center justify-between rounded-xl bg-canvas p-3">
                  <span className="font-body text-xs text-sub">Volume Pasokan:</span>
                  <span className="font-headline text-xs font-bold text-navy">{pr.volume}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
