import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

// Visual + editorial Stitch per kategori; harga & stok ditarik dari products.json
const CARDS = [
  {
    productId: 'bjbj-001',
    badge: 'Best Seller',
    badgeCls: 'bg-brand text-white',
    title: 'Besi Beton & Wiremesh',
    desc: 'Besi ulir dan polos berstandar SNI dengan ketahanan tarik tinggi untuk struktur beton bertulang kokoh tahan gempa.',
    spec: 'SNI 2052:2017',
    img: '/images/img-04.jpg',
    alt: 'Bundel besi beton ulir dan wiremesh di stockyard industri',
  },
  {
    productId: 'smn-002',
    badge: 'Standar SNI',
    badgeCls: 'bg-navy text-white',
    title: 'Semen & Mortar Instan',
    desc: 'Formula semen berkualitas tinggi untuk pengikatan cepat, kuat tekan maksimal, dan hasil plesteran serta acian mulus tanpa retak.',
    spec: 'Tipe I / PCC / Acian',
    img: '/images/img-25.jpg',
    alt: 'Tumpukan sak semen premium di atas palet kayu dalam gudang',
  },
  {
    productId: 'aac-003',
    badge: 'Presisi Tinggi',
    badgeCls: 'bg-slate2 text-navy border border-line2',
    title: 'Bata Ringan AAC',
    desc: 'Bata ringan presisi hemat semen perekat, berbobot ringan, insulasi suhu optimal, kedap suara, dan andal meredam getaran gempa.',
    spec: 'Tebal 7.5cm & 10cm',
    img: '/images/img-16.jpg',
    alt: 'Bata ringan AAC presisi tersusun rapi di atas palet',
  },
  {
    productId: 'pp-004',
    badge: 'Anti Karat',
    badgeCls: 'bg-emerald-50 text-emerald-700',
    title: 'Pipa Baja & Hollow',
    desc: 'Pipa galvanis dan profil hollow anti karat untuk rangka atap, kanopi, partisi arsitektural, serta instalasi perpipaan industri.',
    spec: 'Galvanis & Hitam',
    img: '/images/img-23.jpg',
    alt: 'Pipa baja galvanis dan hollow tersusun di rak gudang industri',
  },
]

export function FeaturedProducts({ products = [], onRFQ }) {
  const byId = Object.fromEntries(products.map((p) => [p.id, p]))
  return (
    <section className="w-full bg-canvas py-20">
      <div className="mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">
              Katalog Produk
            </span>
            <h2 className="mt-2 font-headline text-2xl font-bold md:text-[32px]">Katalog Produk Unggulan</h2>
            <p className="mt-3 max-w-2xl font-body text-[15px] text-sub">
              Material pilihan dengan standar mutu tertinggi siap kirim untuk kebutuhan proyek residensial, komersial,
              maupun infrastruktur berat.
            </p>
          </div>
          <Link
            to="/katalog"
            className="inline-flex shrink-0 items-center gap-2 font-headline text-sm font-bold text-brand-hover transition-colors hover:text-brand"
          >
            Lihat Seluruh Produk <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => {
            const p = byId[c.productId]
            return (
              <article
                key={c.productId}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-level1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level2"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate2">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 font-headline text-[11px] font-bold uppercase tracking-wider shadow ${c.badgeCls}`}
                  >
                    {c.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-headline text-lg font-semibold text-navy">{c.title}</h3>
                  <p className="mb-4 flex-1 font-body text-[13px] leading-relaxed text-sub">{c.desc}</p>
                  {p && (
                    <p className="mb-4 font-headline text-base font-extrabold text-navy">
                      Rp {p.price.toLocaleString('id-ID')}{' '}
                      <span className="font-body text-xs font-normal text-slate-500">per {p.unit}</span>
                    </p>
                  )}
                  <div className="flex items-center justify-between border-t border-line pt-4">
                    <span className="font-headline text-xs font-bold text-brand-hover">{c.spec}</span>
                    <div className="flex items-center gap-3">
                      {p && onRFQ && (
                        <button
                          onClick={() => onRFQ(p)}
                          className="font-headline text-xs font-bold text-navy hover:text-brand-hover"
                        >
                          Minta RFQ
                        </button>
                      )}
                      <Link
                        to="/katalog"
                        className="inline-flex items-center gap-1 font-headline text-xs font-bold text-navy transition-colors group-hover:text-brand-hover"
                      >
                        Detail <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
