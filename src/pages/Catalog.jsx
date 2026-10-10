import { useMemo, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import products from '../data/products.json'
import { CatalogHero, ProcurementCTA, ProductCard, ProductDetailModal, TrustBadges } from '../components/catalog'

const CATEGORIES = ['Semua', 'Semen & Mortar', 'Besi & Baja', 'Keramik & Granit', 'Cat & Pelapis', 'Kayu & Multiplex', 'Pasangan Dinding', 'Pemipaan & Fitting']
const SORTS = [
  { id: 'populer', label: 'Urutan: Terpopuler' },
  { id: 'murah', label: 'Harga: Terendah ke Tertinggi' },
  { id: 'mahal', label: 'Harga: Tertinggi ke Terendah' },
  { id: 'sni', label: 'Spesifikasi: SNI Terbaru' },
]
const PAGE_SIZE = 9

export function Catalog({ onRFQ }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Semua')
  const [sort, setSort] = useState('populer')
  const [page, setPage] = useState(1)
  const [detail, setDetail] = useState(null)

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    let list = products.filter((p) => {
      const inCat = cat === 'Semua' || p.category === cat
      if (!inCat) return false
      if (!needle) return true
      const hay = [p.name, p.category, p.grade, p.stock, p.desc, ...Object.values(p.specs || {})]
        .join(' ')
        .toLowerCase()
      return needle.split(/\s+/).every((w) => hay.includes(w))
    })
    list = [...list].sort((a, b) => {
      if (sort === 'murah') return a.price - b.price
      if (sort === 'mahal') return b.price - a.price
      if (sort === 'sni') return (b.sniYear || 0) - (a.sniYear || 0)
      return (b.popularity || 0) - (a.popularity || 0)
    })
    return list
  }, [q, cat, sort])

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pages)
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const from = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1
  const to = Math.min(safePage * PAGE_SIZE, filtered.length)

  const reset = () => { setQ(''); setCat('Semua'); setSort('populer'); setPage(1) }

  return (
    <div className="bg-canvas">
      <CatalogHero query={q} setQuery={(v) => { setQuerySafe(v, setQ, setPage) }} onSearch={() => setPage(1)} />

      <section className="container-matrial py-10">
        {/* Controls */}
        <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-line bg-white p-4 shadow-level1 md:flex-row md:items-center">
          <div className="flex items-center gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter kategori">
            {CATEGORIES.map((c) => {
              const count = c === 'Semua' ? products.length : products.filter((p) => p.category === c).length
              if (c !== 'Semua' && count === 0) return null
              const active = cat === c
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => { setCat(c); setPage(1) }}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 font-headline text-[13px] font-semibold transition-colors ${
                    active ? 'bg-navy text-white shadow' : 'bg-slate2 text-navy hover:bg-line'
                  }`}
                >
                  {c} <span className={active ? 'text-slate-300' : 'text-slate-500'}>({c === 'Semua' ? 142 : count})</span>
                </button>
              )
            })}
          </div>
          <div className="flex items-center justify-between gap-3 md:justify-end">
            <span className="hidden items-center gap-1.5 font-headline text-[12px] font-semibold text-sub lg:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {filtered.length} dari 142 Terverifikasi
            </span>
            <label className="flex items-center gap-2 rounded-lg bg-slate2 px-3 py-2">
              <SlidersIcon />
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1) }}
                className="cursor-pointer bg-transparent font-headline text-[13px] font-semibold text-navy outline-none"
                aria-label="Urutkan produk"
              >
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </label>
          </div>
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.id} p={p} onDetail={setDetail} onRFQ={onRFQ} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-white p-10 text-center text-sub">
            Tidak ada hasil untuk “{q}”. Coba kata kunci lain atau{' '}
            <button className="font-semibold text-brand-hover" onClick={reset}>reset filter</button>.
          </div>
        )}

        {/* Pagination */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
          <p className="text-sm text-sub" data-testid="catalog-count">
            Menampilkan <span className="font-semibold text-navy">{from} - {to}</span> dari total{' '}
            <span className="font-semibold text-navy">{filtered.length}</span> produk bersertifikat
          </p>
          <div className="flex items-center gap-1 rounded-xl border border-line bg-white p-1 shadow-level1">
            <button
              className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 hover:bg-slate2 hover:text-navy disabled:opacity-40"
              disabled={safePage <= 1}
              onClick={() => setPage(safePage - 1)}
              aria-label="Halaman sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).slice(0, 5).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-10 w-10 rounded-lg font-headline text-[13px] font-bold transition-colors ${
                  n === safePage ? 'bg-navy text-white shadow' : 'text-navy hover:bg-slate2'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              className="grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate2 disabled:opacity-40"
              disabled={safePage >= pages}
              onClick={() => setPage(safePage + 1)}
              aria-label="Halaman berikutnya"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Inline spec reference */}
        {filtered.length > 0 && (
          <div className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-level1">
            <h2 className="font-headline text-lg font-bold">Referensi spesifikasi cepat</h2>
            <p className="mt-1 text-sm text-sub">Acuan engineer untuk verifikasi BoQ sebelum RFQ. Klik Detail untuk tabel spesifikasi penuh per produk.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-[12px] uppercase tracking-wider text-slate-500">
                    <th className="py-2 pr-4">Produk</th>
                    <th className="py-2 pr-4">Standar</th>
                    <th className="py-2 pr-4">Spec kunci</th>
                    <th className="py-2 text-right">Estimasi</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((p) => {
                    const [k, v] = Object.entries(p.specs || {})[0] || ['-', '-']
                    return (
                      <tr key={p.id} className="border-b border-line last:border-0 hover:bg-canvas">
                        <td className="py-2.5 pr-4 font-semibold text-navy">
                          <button onClick={() => setDetail(p)} className="hover:text-brand-hover">{p.name}</button>
                        </td>
                        <td className="py-2.5 pr-4 text-sub">{p.grade}</td>
                        <td className="py-2.5 pr-4 text-sub">{k}: <span className="font-semibold text-ink">{v}</span></td>
                        <td className="py-2.5 text-right font-bold text-navy">
                          Rp {Number(p.price).toLocaleString('id-ID')}<span className="font-normal text-sub">/{p.unit}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <ProcurementCTA onRFQ={onRFQ} />
      <TrustBadges />

      <ProductDetailModal product={detail} onClose={() => setDetail(null)} onRFQ={(p) => { setDetail(null); onRFQ && onRFQ(p) }} />

      {/* SEO / cross-link */}
      <div className="container-matrial pb-4">
        <button onClick={reset} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-hover">
          Lihat semua kategori <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

function setQuerySafe(v, setQ, setPage) { setQ(v); setPage(1) }

function SlidersIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
    </svg>
  )
}
