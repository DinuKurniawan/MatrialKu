import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, HardHat } from 'lucide-react'
import { tokens } from '../tokens/design-tokens'

export function Navbar({ onRFQ }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-level1">
      <div className="bg-navy-dark text-[12px]">
        <div className="container-matrial flex items-center justify-between py-1.5 text-slate-300">
          <p className="font-body">SNI & ASTM Certified • Pengiriman Jabodetabek & Jawa</p>
          <a href="tel:+62210000000" className="hidden sm:flex items-center gap-1.5 hover:text-white"><Phone size={13} /> (021) 000-0000</a>
        </div>
      </div>
      <div className="container-matrial flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand font-headline font-extrabold">M</span>
          <span className="leading-tight">
            <span className="block font-headline font-extrabold text-lg tracking-tight">MATRIAL</span>
            <span className="block text-[11px] uppercase tracking-widest text-slate-300">Building Materials</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {tokens.nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `font-headline text-sm font-semibold ${isActive ? 'text-brand' : 'text-slate-200 hover:text-white'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={onRFQ} className="btn-primary !py-2.5"><HardHat size={16} /> Minta Penawaran</button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 px-4 pb-4 space-y-1">
          {tokens.nav.map(n => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2.5 font-headline font-semibold text-sm text-slate-200">{n.label}</NavLink>
          ))}
          <button onClick={() => { setOpen(false); onRFQ && onRFQ() }} className="btn-primary w-full mt-2">Minta Penawaran</button>
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 mt-20">
      <div className="container-matrial grid md:grid-cols-4 gap-10 py-14">
        <div>
          <p className="font-headline font-extrabold text-white text-lg">MATRIAL</p>
          <p className="text-sm mt-3 leading-relaxed">Distributor bahan bangunan struktural & finishing. Terpercaya kontraktor, arsitek, dan developer di Indonesia.</p>
        </div>
        <div>
          <p className="font-headline font-bold text-white text-sm uppercase tracking-wider mb-4">Navigasi</p>
          <ul className="space-y-2 text-sm">{tokens.nav.map(n => <li key={n.to}><Link className="hover:text-brand" to={n.to}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="font-headline font-bold text-white text-sm uppercase tracking-wider mb-4">Kategori</p>
          <ul className="space-y-2 text-sm"><li>Struktur & Baja</li><li>Semen & Beton</li><li>Dinding AAC</li><li>Pipa & Fitting</li><li>Finishing</li></ul>
        </div>
        <div>
          <p className="font-headline font-bold text-white text-sm uppercase tracking-wider mb-4">Kontak</p>
          <ul className="space-y-2 text-sm"><li>Jl. Raya Industri KM 12, Cikarang</li><li>(021) 000-0000</li><li>sales@matrial.id</li><li>Senin–Sabtu 08.00–17.00</li></ul>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="container-matrial py-5 text-xs flex flex-col sm:flex-row justify-between gap-2"><span>© 2026 Matrial Building Materials</span><span>SNI • ASTM • ISO 9001</span></div></div>
    </footer>
  )
}

export function RFQDrawer({ open, product, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-navy-dark/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-level3 p-6 overflow-y-auto">
        <div className="flex items-start justify-between mb-4">
          <div><h3 className="font-headline font-bold text-xl">Minta Penawaran (RFQ)</h3><p className="text-sm text-sub mt-1">{product ? product.name : 'Ceritakan kebutuhan proyek Anda'}</p></div>
          <button onClick={onClose} className="p-2 hover:bg-slate2 rounded-lg"><X size={18} /></button>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('RFQ terkirim! Tim sales akan menghubungi Anda.'); onClose() }}>
          <div><label className="label-matrial">Nama</label><input required className="input-matrial" placeholder="Nama Anda" /></div>
          <div><label className="label-matrial">Perusahaan / Proyek</label><input className="input-matrial" placeholder="PT / Proyek" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="label-matrial">Qty</label><input required type="number" min="1" defaultValue="100" className="input-matrial" /></div>
            <div><label className="label-matrial">WhatsApp</label><input required className="input-matrial" placeholder="08xx" /></div>
          </div>
          <div><label className="label-matrial">Kebutuhan</label><textarea rows="4" className="input-matrial" placeholder="Contoh: besi D13 500 batang untuk dak..." /></div>
          <button type="submit" className="btn-primary w-full">Kirim RFQ</button>
          <p className="text-xs text-slate-500 text-center">Respon &lt; 2 jam kerja • Harga lock 7 hari</p>
        </form>
      </div>
    </div>
  )
}
