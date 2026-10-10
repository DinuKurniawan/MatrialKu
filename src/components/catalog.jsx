import { ArrowRight, BadgeCheck, FileText, MessageSquare, ShieldCheck, Truck, X, Zap } from 'lucide-react'

export const HERO_IMAGE =
  '/images/img-30.jpg'

export function CatalogHero({ query, setQuery, onSearch }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <img src={HERO_IMAGE} alt="Gudang logistik Matrial" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/70" />
      <div className="relative container-matrial py-14 md:py-20">
        <nav className="flex items-center gap-2 text-[13px] font-medium text-slate-300">
          <a href="/" className="hover:text-white">Beranda</a>
          <span className="text-slate-400">/</span>
          <span className="text-emerald-400 font-semibold">Produk</span>
        </nav>
        <div className="mt-3 flex items-center gap-3">
          <h1 className="!text-white font-headline text-3xl md:text-[40px] leading-tight font-bold tracking-tight">Katalog Produk</h1>
          <span className="mt-2 inline-block h-1 w-12 rounded-full bg-emerald-500" />
        </div>
        <p className="mt-3 max-w-2xl text-slate-200 text-[15px] md:text-lg leading-relaxed">
          Material bangunan tersertifikasi SNI dan berstandar internasional untuk keandalan konstruksi proyek Anda.
        </p>
        <form
          className="mt-6 flex max-w-2xl items-center gap-2 rounded-xl bg-white p-1.5 shadow-level2"
          onSubmit={(e) => { e.preventDefault(); onSearch && onSearch() }}
        >
          <div className="flex flex-1 items-center gap-2 px-3 text-slate-500">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari nama material, kode SNI, dimensi, atau spesifikasi..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
              aria-label="Cari material"
            />
          </div>
          <button type="submit" className="btn-primary !py-2.5 whitespace-nowrap">
            Cari Material <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function SpecTable({ specs, compact = false }) {
  const entries = Object.entries(specs || {})
  if (entries.length === 0) return null
  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate2/70 p-3 text-left">
        {entries.slice(0, 2).map(([k, v]) => (
          <div key={k}>
            <span className="block text-[11px] text-slate-500">{k}</span>
            <span className="text-[13px] font-semibold text-ink">{v}</span>
          </div>
        ))}
      </div>
    )
  }
  return (
    <table className="w-full overflow-hidden rounded-xl border border-line text-sm">
      <tbody>
        {entries.map(([k, v], i) => (
          <tr key={k} className={i % 2 === 0 ? 'bg-slate2/60' : 'bg-white'}>
            <td className="px-4 py-2.5 text-[13px] text-slate-500 w-2/5">{k}</td>
            <td className="px-4 py-2.5 text-[13px] font-semibold text-navy">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function ProductCard({ p, onDetail, onRFQ }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-level1 transition-all duration-300 hover:shadow-level3" data-testid={`product-${p.id}`}>
      <div className="relative h-56 overflow-hidden bg-slate2">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded bg-emerald-100 px-2 py-0.5 font-headline text-[11px] font-bold uppercase tracking-wider text-emerald-800">{p.grade}</span>
          <span className="rounded bg-white/95 px-2 py-0.5 font-headline text-[11px] font-bold uppercase tracking-wider text-navy">{p.stock}</span>
        </div>
        {p.logistics && (
          <div className="absolute bottom-3 right-3 rounded bg-white/90 px-2 py-1 font-headline text-[11px] font-bold text-navy shadow backdrop-blur">
            {p.logistics}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="font-headline text-[11px] font-semibold uppercase tracking-wider text-emerald-700">{p.category}</p>
          <h3 className="mt-1 line-clamp-1 font-headline text-[17px] font-semibold text-navy transition-colors group-hover:text-emerald-700">{p.name}</h3>
          <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-sub">{p.desc}</p>
          <div className="mt-4"><SpecTable specs={p.specs} compact /></div>
        </div>
        <div className="mt-5 border-t border-line pt-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="block text-[11px] text-slate-500">Estimasi Harga Satuan</span>
              <span className="font-headline text-[19px] font-bold text-navy">
                Rp {Number(p.price).toLocaleString('id-ID')}
                <span className="text-[13px] font-normal text-sub">/{p.unit}</span>
              </span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button onClick={() => onDetail && onDetail(p)} className="btn-navy !px-3 !py-2 text-[13px]">
              Detail <ArrowRight size={15} />
            </button>
            <button onClick={() => onRFQ && onRFQ(p)} className="btn-primary !px-3 !py-2 text-[13px]">
              Minta RFQ
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProductDetailModal({ product, onClose, onRFQ }) {
  if (!product) return null
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={`Detail ${product.name}`}>
      <div className="absolute inset-0 bg-navy-dark/60" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 top-10 md:inset-10 overflow-y-auto rounded-t-2xl md:rounded-2xl bg-white shadow-level3">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white/95 px-5 py-4 backdrop-blur">
          <p className="font-headline text-[11px] font-bold uppercase tracking-widest text-emerald-700">{product.category} • {product.grade}</p>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-slate2" aria-label="Tutup detail"><X size={18} /></button>
        </div>
        <div className="grid gap-8 p-5 md:grid-cols-2 md:p-8">
          <div>
            <div className="overflow-hidden rounded-2xl bg-slate2">
              <img src={product.image} alt={product.name} className="h-72 w-full object-cover md:h-96" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip bg-emerald-50 text-emerald-700"><BadgeCheck size={13} /> {product.grade}</span>
              <span className="chip bg-slate2 text-navy border border-line"><ShieldCheck size={13} /> {product.stock}</span>
              {product.logistics && <span className="chip bg-brand-soft text-brand-hover"><Truck size={13} /> {product.logistics}</span>}
            </div>
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold">{product.name}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-sub">{product.desc}</p>
            <p className="mt-4 font-headline text-3xl font-extrabold text-navy">
              Rp {Number(product.price).toLocaleString('id-ID')}
              <span className="text-base font-normal text-sub"> /{product.unit}</span>
            </p>
            <p className="text-xs text-slate-500">Harga estimasi tier grosir, belum termasuk ongkir. Lock harga 7 hari via RFQ.</p>
            <h3 className="label-matrial mt-6">Tabel Spesifikasi</h3>
            <SpecTable specs={product.specs} />
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button onClick={() => onRFQ && onRFQ(product)} className="btn-primary flex-1"><FileText size={16} /> Minta Penawaran (RFQ)</button>
              <button onClick={onClose} className="btn-outline flex-1">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProcurementCTA({ onRFQ }) {
  return (
    <section className="relative my-12 overflow-hidden bg-navy py-12 text-white">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -top-16 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative container-matrial grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="inline-flex items-center gap-2 rounded bg-emerald-500/20 px-3 py-1 font-headline text-[11px] font-bold uppercase tracking-wider text-emerald-300">
            <BadgeCheck size={15} /> Layanan Pengadaan Proyek Skala Besar
          </p>
          <h2 className="!text-white mt-3 font-headline text-2xl md:text-[32px] font-bold tracking-tight">
            Tidak menemukan spesifikasi material yang Anda cari?
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-300">
            Kami melayani pengadaan material khusus, kontrak volume curah bulanan, toleransi custom fabrikasi baja,
            serta precast spesifik sesuai dokumen BoQ & RKS proyek Anda.
          </p>
          <div className="mt-5 grid gap-3 text-sm font-semibold sm:grid-cols-3">
            <span className="flex items-center gap-2"><Zap size={18} className="text-emerald-400" /> Respon Cepat &lt; 15 Menit</span>
            <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-400" /> Sertifikat Uji Lab Pabrik</span>
            <span className="flex items-center gap-2"><Truck size={18} className="text-emerald-400" /> Armada Tronton & Dumptruck</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <button onClick={() => onRFQ && onRFQ()} className="btn-primary w-full lg:w-full">
            <MessageSquare size={17} /> Konsultasi Pengadaan Khusus
          </button>
          <button onClick={() => onRFQ && onRFQ()} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-headline text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20">
            <FileText size={17} /> Minta Surat Penawaran (RFQ)
          </button>
        </div>
      </div>
    </section>
  )
}

export function TrustBadges() {
  const items = [
    ['100%', 'Standar SNI Teruji'],
    ['50+', 'Gudang & Depo Distribusi'],
    ['12.000+', 'Ton Suplai per Bulan'],
    ['99.4%', 'On-Time Project SLA'],
  ]
  return (
    <section className="container-matrial mb-16">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-white p-8 text-center shadow-level1 md:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l} className="flex flex-col items-center">
            <span className="font-headline text-3xl font-bold text-navy">{v}</span>
            <span className="mt-1 font-headline text-[11px] font-bold uppercase tracking-wider text-sub">{l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
