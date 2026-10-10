import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2, BadgeCheck, Truck, Calculator, CreditCard, Eye, Flag,
  Scale, ShieldCheck, Clock, Handshake, Leaf, Warehouse, MapPin,
  MessageCircle, FileText, Lock, Zap, ChevronRight, Home, Award, Factory,
  User, Mail, Phone, Tag, Paperclip, Send, Timer, Headset, Navigation,
  Map as MapIcon, CheckCircle2, Upload, Info, ArrowRight, Bookmark,
  ChevronLeft, Search, Share2, SlidersHorizontal, BellRing,
  Route, Hospital, Train, Ship, CalendarDays, X, Package, ChevronDown, Radar,
} from 'lucide-react'
import { SectionHeading, Badge } from '../components/ui'

const stats = [
  { value: '15+', label: 'Tahun Pengalaman', sub: 'Sejak 2008' },
  { value: '12+', label: 'Hub Logistik Nasional', sub: 'Cikarang • Surabaya • IKN' },
  { value: '850+', label: 'Proyek Disuplai', sub: 'BUMN • Swasta • Developer' },
  { value: '98%', label: 'On-Time Delivery SLA', sub: 'GPS-tracked armada' },
]

const highlights = [
  { icon: ShieldCheck, title: 'Sertifikasi SNI & ISO 9001', desc: 'Lengkap dengan Mill Test Certificate asli setiap lot.' },
  { icon: Truck, title: 'Armada Mandiri 24/7', desc: 'Tronton, dump truck, & trailer terpantau GPS real-time.' },
  { icon: Calculator, title: 'Konsultasi Volume & RAB', desc: 'Perhitungan teknis optimal tanpa biaya tambahan untuk proyek B2B.' },
  { icon: CreditCard, title: 'Fasilitas Kredit Kontraktor', desc: 'Skema pembayaran termin fleksibel disesuaikan progres opname.' },
]

const values = [
  { icon: Scale, title: 'Integritas & Transparansi', desc: 'Keterbukaan spesifikasi teknis toleransi baja dan keakuratan timbangan jembatan tanpa kompromi.', tag: 'Toleransi SNI Murni' },
  { icon: BadgeCheck, title: 'Standar Mutu Tertinggi', desc: 'Setiap batch dilengkapi sertifikat uji tarik, tekan, dan Mill Test Certificate resmi pabrikan.', tag: 'Mill Certificate Certified' },
  { icon: Clock, title: 'Ketepatan Waktu Proyek', desc: 'Pengiriman terjadwal presisi guna mencegah idle time pengecoran dan perakitan lapangan.', tag: 'On-Time Delivery SLA' },
  { icon: Handshake, title: 'Kemitraan Strategis', desc: 'Solusi pengadaan B2B jangka panjang dengan pendampingan spesialis rekayasa teknis material.', tag: 'Dedicated Key Account' },
  { icon: Leaf, title: 'Keberlanjutan Lingkungan', desc: 'Komitmen material rendah jejak emisi karbon untuk masa depan nusantara.', tag: 'Green Building Support', accent: true },
]

const timeline = [
  { year: '2008', title: 'Awal Mula Pendirian', desc: 'Didirikan di Jakarta sebagai distributor spesialis besi beton lokal untuk kontraktor residensial Jabodetabek.', meta: 'Kapasitas awal: 500 Ton/bulan', icon: Building2, tone: 'navy' },
  { year: '2013', title: 'Ekspansi Gudang Cikarang & Akreditasi SNI', desc: 'Pusat distribusi 2,5 ha di Cikarang serta sertifikasi SNI & ISO 9001 untuk seluruh portofolio produk.', meta: 'Standarisasi Mutu Nasional SNI', icon: BadgeCheck, tone: 'brand' },
  { year: '2017', title: 'Penetrasi Proyek Strategis Nasional (PSN)', desc: 'Mitra pemasok konsorsium BUMN untuk tol Trans Jawa, bandara komersial, dan jembatan bentang panjang.', meta: 'Pemasok 15+ ruas tol utama', icon: Factory, tone: 'navy' },
  { year: '2021', title: 'Transformasi Logistik Digital & Armada Mandiri', desc: 'Monitoring GPS, 80+ unit tronton & trailer heavy duty, plus portal pemesanan spesifikasi digital.', meta: 'Fleet Management Telematics', icon: Truck, tone: 'brand' },
  { year: '2024', title: 'Ekspansi IKN Nusantara & Green Construction', desc: 'Koridor pasokan ke IKN dan Indonesia Timur, plus lini material rendah emisi berlabel Green Building.', meta: 'Logistik koridor IKN aktif', icon: Leaf, tone: 'green' },
]

const team = [
  { initials: 'HG', photo: '/images/team-ceo.jpg', name: 'Ir. Hendra Gunawan, M.T.', role: 'Direktur Utama / CEO', desc: '25+ tahun memimpin rantai pasok baja dan infrastruktur strategis nasional di konsorsium BUMN & swasta.', foot: 'Alumni Teknik Sipil ITB', badge: 'CEO' },
  { initials: 'DW', photo: '/images/team-cfo.jpg', name: 'Dewi Kusuma Wardhani, S.E., M.B.A.', role: 'Direktur Keuangan & Kemitraan', desc: 'Pakar tata kelola finansial korporasi dan sindikasi perbankan untuk modal kerja proyek bernilai tinggi.', foot: 'Ex-Corporate Banking VP', badge: 'CFO' },
  { initials: 'BS', photo: '/images/team-coo.jpg', name: 'Budi Santoso, S.T., PMP', role: 'Direktur Operasional & Logistik', desc: 'Spesialis armada berat, pergudangan WMS modern, dan keselamatan operasional K3 bersertifikasi.', foot: 'Lead Supply Chain Auditor', badge: 'COO' },
]

const certs = ['SNI 7064 Semen', 'SNI 07-2052 Baja', 'ASTM A615', 'SNI 06-0084 PVC', 'ISO 9001:2015', 'Green Product Certified']

const warehouses = [
  { icon: Warehouse, city: 'Cikarang — Hub Utama', spec: '2,5 ha • WMS • Jembatan timbang', desc: 'Stok baja, semen, dan AAC untuk Jawa & Sumatra. Bongkar-muat 24/7 dengan QC lab uji tarik & tekan.' },
  { icon: Warehouse, city: 'Surabaya — Hub Timur', spec: '1,8 ha • Dermaga curah', desc: 'Koridor Kalimantan, Sulawesi & Indonesia Timur. Buffer stock 4.000+ ton untuk proyek PSN.' },
  { icon: MapPin, city: 'Koridor IKN Nusantara', spec: 'Transit yard • Penajam', desc: 'Staging area untuk suplai bertahap ke IKN dengan jadwal pengiriman terjadwal presisi.' },
]

export function About() {
  return (
    <div>
      {/* 1. Hero + statistik */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        <img
          src="/images/img-28.jpg"
          alt="Tim engineering Matrial di lokasi proyek konstruksi"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/40" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
        <div className="relative container-matrial py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-headline font-semibold text-slate-300">
            <Link to="/" className="flex items-center gap-1 hover:text-white"><Home size={14} /> Beranda</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-brand">Tentang Kami</span>
          </nav>
          <div className="flex items-center gap-3 mt-4">
            <span className="w-1 h-9 rounded-full bg-brand" aria-hidden="true" />
            <h1 className="!text-white font-headline font-extrabold text-3xl md:text-[40px] leading-tight">Tentang Kami</h1>
          </div>
          <p className="mt-2 max-w-2xl text-slate-300 text-[15px] leading-relaxed">
            Mengenal Matrial — mitra terpercaya penyedia material konstruksi bersertifikat SNI & ISO sejak 2008.
          </p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 border border-white/15 backdrop-blur px-5 py-4">
                <p className="font-headline font-extrabold text-2xl md:text-3xl text-white">{s.value}</p>
                <p className="font-headline text-[13px] font-bold mt-1">{s.label}</p>
                <p className="text-xs text-slate-300 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Profil perusahaan + foto/gudang visual */}
      <section className="container-matrial py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-level2 bg-navy min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-6">
              <img
                src="/images/img-30.jpg"
                alt="Pusat distribusi dan gudang material bangunan Matrial"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy/20 to-transparent" aria-hidden="true" />
              <div className="absolute top-6 left-6 flex items-center gap-2 text-white" aria-hidden="true">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand font-headline font-extrabold text-xl">M</span>
                <span className="text-left leading-tight">
                  <span className="block font-headline font-extrabold tracking-tight text-white">MATRIAL</span>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-300">Logistics Hub</span>
                </span>
              </div>
              <div className="relative flex flex-wrap gap-3 items-end justify-between">
                <div className="rounded-xl bg-white/95 px-4 py-3 shadow-level1">
                  <p className="flex items-center gap-2 font-headline text-[13px] font-bold text-navy"><Warehouse size={17} className="text-brand-hover" /> Hub Logistik Utama</p>
                  <p className="text-xs text-sub mt-0.5">Cikarang & Surabaya • 4,3 ha total</p>
                </div>
                <div className="rounded-xl bg-navy-dark/90 border border-white/15 text-white px-4 py-3 flex items-center gap-2">
                  <Truck size={20} className="text-brand" />
                  <span>
                    <span className="block text-[10px] font-headline font-bold uppercase tracking-widest text-slate-300">Kapasitas pengiriman</span>
                    <span className="block font-headline font-extrabold">12+ Hub Nasional</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -right-4 items-center gap-3 rounded-xl bg-brand text-white px-5 py-4 shadow-level2">
              <BadgeCheck size={28} />
              <span>
                <span className="block font-headline font-bold text-sm">Teruji & Terakreditasi</span>
                <span className="block text-xs opacity-90">ISO 9001:2015 & SNI Certified</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Badge tone="truck">PT Matrial Bangun Nusantara</Badge>
            <h2 className="font-headline font-bold text-2xl md:text-[32px] leading-tight mt-3">
              Dedikasi lebih dari 15 tahun dalam rantai pasok konstruksi Indonesia
            </h2>
            <p className="mt-4 text-sub text-[15px] leading-relaxed">
              Sejak 2008, Matrial berkembang dari distributor besi lokal menjadi entitas logistik bahan bangunan
              terintegrasi skala nasional — menjembatani kebutuhan teknis kontraktor B2B, arsitek, dan developer
              dengan produsen baja, semen, dan prefabrikasi terbaik.
            </p>
            <p className="mt-3 text-sm text-sub leading-relaxed">
              Didukung armada mandiri, QC lab digital, dan kemitraan langsung pabrikan bersertifikat, setiap ton dan
              kubik material tiba tepat waktu dengan mutu tanpa deviasi.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-3 rounded-xl bg-canvas border border-line p-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-white border border-line text-brand-hover shrink-0"><h.icon size={20} /></span>
                  <span>
                    <span className="block font-headline font-bold text-sm text-navy">{h.title}</span>
                    <span className="block text-[13px] text-sub mt-1 leading-relaxed">{h.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="bg-canvas border-y border-line py-14 lg:py-20">
        <div className="container-matrial">
          <SectionHeading center eyebrow="Arah & Fondasi Komitmen" title="Visi & Misi PT Matrial Bangun Nusantara" desc="Pilar strategis yang mengarahkan setiap pergerakan operasional dalam menopang pembangunan infrastruktur Indonesia." />
          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5 card-matrial p-8 flex flex-col justify-between">
              <div>
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-soft text-brand-hover"><Eye size={24} /></span>
                <p className="mt-5 font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">Visi Korporasi</p>
                <h3 className="font-headline font-bold text-xl text-navy mt-2">Menjadi garda terdepan pasokan konstruksi terpercaya Asia Tenggara</h3>
                <p className="mt-4 text-sub leading-relaxed">
                  “Menjadi mitra penyedia material konstruksi nomor satu dan paling terpercaya di Asia Tenggara
                  yang mendorong pembangunan berkelanjutan dan kemandirian infrastruktur nasional.”
                </p>
              </div>
              <p className="mt-6 pt-5 border-t border-line flex items-center gap-2 text-sm font-headline font-semibold text-brand-hover"><Zap size={16} /> Standardisasi global, kebanggaan nasional</p>
            </div>
            <div className="lg:col-span-7 card-matrial p-8">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy text-white"><Flag size={24} /></span>
              <p className="mt-5 font-headline text-[11px] font-bold uppercase tracking-widest text-navy">Misi Operasional</p>
              <h3 className="font-headline font-bold text-xl text-navy mt-2 mb-5">4 langkah nyata mewujudkan standar tertinggi</h3>
              <ol className="space-y-4">
                {[
                  ['Jaminan mutu & ketersediaan stok SNI', 'Kepastian stok bersertifikat SNI/internasional secara konsisten, lengkap dengan Mill Certificate.'],
                  ['Optimalisasi rantai pasok tepat waktu', 'Logistik efisien seluruh Indonesia dengan armada mandiri dan tracking GPS.'],
                  ['Transparansi finansial & harga kompetitif', 'Harga pabrik transparan, timbangan presisi, dan skema pembayaran terpercaya.'],
                  ['Prinsip berkelanjutan (green building)', 'Material rendah karbon dengan green product certification.'],
                ].map(([t, d], i) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-brand text-white font-headline font-bold text-sm shrink-0">{i + 1}</span>
                    <span>
                      <span className="block font-headline font-bold text-navy">{t}</span>
                      <span className="block text-sm text-sub mt-0.5">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nilai inti */}
      <section className="container-matrial py-14 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <SectionHeading eyebrow="Nilai Inti Kami" title="Prinsip yang menggerakkan Matrial" desc="Etika kerja dan dedikasi profesional untuk ribuan proyek di seluruh Indonesia." />
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {values.map((v) => (
            <div key={v.title} className="card-matrial p-6 flex flex-col justify-between">
              <div>
                <span className={`grid place-items-center w-11 h-11 rounded-xl mb-4 ${v.accent ? 'bg-brand text-white' : 'bg-canvas border border-line text-navy'}`}><v.icon size={22} /></span>
                <h3 className="font-headline font-bold text-navy">{v.title}</h3>
                <p className="text-[13px] text-sub mt-2 leading-relaxed">{v.desc}</p>
              </div>
              <p className="mt-5 pt-4 border-t border-line font-headline text-[11px] font-bold uppercase tracking-wider text-brand-hover">{v.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="bg-canvas border-y border-line py-14 lg:py-20">
        <div className="container-matrial max-w-5xl">
          <SectionHeading center eyebrow="Perjalanan Kami" title="15+ tahun dedikasi membangun Indonesia" desc="Transformasi PT Matrial Bangun Nusantara menjadi rantai pasok terdepan." />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-line2 md:-translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-8">
              {timeline.map((m, i) => (
                <li key={m.year} className={`relative flex flex-col md:flex-row md:items-center gap-3 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <span className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10 grid place-items-center w-9 h-9 rounded-full text-white shadow-level1 ${m.tone === 'brand' ? 'bg-brand' : m.tone === 'green' ? 'bg-emerald-600 ring-4 ring-emerald-200' : 'bg-navy'}`}>
                    <m.icon size={17} />
                  </span>
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 1 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <span className={`inline-block rounded-md px-3 py-1 font-headline text-xs font-bold text-white ${m.tone === 'green' ? 'bg-emerald-600' : m.tone === 'brand' ? 'bg-brand' : 'bg-navy'}`}>{m.year}</span>
                    <h3 className="font-headline font-bold text-lg text-navy mt-2">{m.title}</h3>
                    <p className="text-sm text-sub mt-1.5 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 1 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <p className={`font-headline text-[11px] font-bold uppercase tracking-widest ${m.tone === 'green' ? 'text-emerald-700' : 'text-sub'}`}>{m.meta}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6. Sertifikasi + Gudang */}
      <section className="container-matrial py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="card-matrial p-7">
            <Badge tone="stock"><Award size={13} /> Sertifikasi</Badge>
            <h3 className="font-headline font-bold text-xl text-navy mt-3">Standar yang kami pegang</h3>
            <p className="text-sm text-sub mt-2 leading-relaxed">
              Setiap pengiriman dilampiri mill certificate dan hasil uji lab internal — cocok untuk proyek
              pemerintah & swasta yang mensyaratkan traceability.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {certs.map((s) => <Badge key={s} tone="spec">{s}</Badge>)}
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-sub">
              <li className="flex gap-2"><ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" /> CoA + surat jalan + faktur lengkap untuk audit proyek.</li>
              <li className="flex gap-2"><FileText size={16} className="text-emerald-600 shrink-0 mt-0.5" /> Surat dukungan tender resmi untuk paket PSN & BUMN.</li>
              <li className="flex gap-2"><Lock size={16} className="text-emerald-600 shrink-0 mt-0.5" /> Data proyek dijamin kerahasiaannya (NDA tersedia).</li>
            </ul>
          </div>
          <div className="card-matrial p-7">
            <Badge tone="truck"><Warehouse size={13} /> Jaringan Gudang</Badge>
            <h3 className="font-headline font-bold text-xl text-navy mt-3">Gudang & hub distribusi</h3>
            <div className="mt-4 space-y-3">
              {warehouses.map((w) => (
                <div key={w.city} className="rounded-xl border border-line bg-canvas p-4 flex gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-navy text-white shrink-0"><w.icon size={19} /></span>
                  <span>
                    <span className="block font-headline font-bold text-sm text-navy">{w.city}</span>
                    <span className="block font-headline text-[11px] font-bold uppercase tracking-wider text-brand-hover mt-0.5">{w.spec}</span>
                    <span className="block text-[13px] text-sub mt-1 leading-relaxed">{w.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Tim */}
      <section className="container-matrial pb-14 lg:pb-20">
        <SectionHeading center eyebrow="Pimpinan Kami" title="Di balik keandalan pasokan Matrial" desc="Profesional dan insinyur berpengalaman yang memimpin tata kelola mutu dan efisiensi pengadaan skala nasional." />
        <div className="grid md:grid-cols-3 gap-5">
          {team.map((t) => (
            <article key={t.name} className="card-matrial overflow-hidden flex flex-col">
              <div className="relative h-72 md:h-80 bg-gradient-to-br from-navy to-navy-light grid place-items-center overflow-hidden">
                <span className="grid place-items-center w-20 h-20 rounded-full bg-white/15 border border-white/25 font-headline font-extrabold text-2xl text-white" aria-hidden="true">{t.initials}</span>
                <img src={t.photo} alt={t.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => { e.currentTarget.style.display = 'none' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute top-4 right-4 rounded-full bg-navy-dark/70 border border-white/20 text-white text-[11px] font-headline font-bold px-3 py-1">{t.badge}</span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline font-bold text-lg text-navy">{t.name}</h3>
                  <p className="font-headline text-xs font-bold text-brand-hover mt-1">{t.role}</p>
                  <p className="text-sm text-sub mt-3 leading-relaxed">{t.desc}</p>
                </div>
                <p className="mt-5 pt-4 border-t border-line flex items-center justify-between text-[13px] text-sub">
                  {t.foot} <BadgeCheck size={18} className="text-brand-hover" />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 w-[560px] h-56 bg-brand/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative container-matrial py-14 text-center flex flex-col items-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/10 px-4 py-1.5 font-headline text-[11px] font-bold uppercase tracking-widest text-brand"><Handshake size={15} /> Kemitraan Kontraktor & B2B</p>
          <h2 className="!text-white font-headline font-bold text-2xl md:text-[32px] mt-4">Siap bermitra untuk proyek konstruksi Anda?</h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-[15px] leading-relaxed">
            Diskusikan spesifikasi teknis, estimasi volume, dan penawaran harga khusus kontraktor bersama tim spesialis kami hari ini.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="https://wa.me/6281198765432" target="_blank" rel="noreferrer" className="btn-primary !bg-emerald-600 hover:!bg-emerald-700">
              <MessageCircle size={17} /> Hubungi via WhatsApp
            </a>
            <Link to="/kontak" className="btn-outline !bg-transparent !text-white !border-emerald-500/80 hover:!bg-emerald-600/10">
              <FileText size={17} /> Minta Penawaran (RFQ)
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-slate-300">
            <span className="flex items-center gap-1.5"><Zap size={15} className="text-brand" /> Respon cepat &lt; 15 menit</span>
            <span className="flex items-center gap-1.5"><Lock size={15} className="text-brand" /> Data proyek terjamin</span>
            <span className="flex items-center gap-1.5"><FileText size={15} className="text-brand" /> Surat dukungan tender resmi</span>
          </div>
        </div>
      </section>
    </div>
  )
}

const PORTFOLIO_CATEGORIES = [
  { key: 'all', label: 'Semua Proyek', count: 48 },
  { key: 'infrastruktur', label: 'Infrastruktur & Transportasi', count: 16 },
  { key: 'gedung', label: 'Gedung Komersial', count: 14 },
  { key: 'residensial', label: 'Residensial & Perumahan', count: 10 },
  { key: 'publik', label: 'Fasilitas Publik & Medis', count: 5 },
  { key: 'industri', label: 'Kawasan Industri', count: 8 },
]

const PORTFOLIO_PROJECTS = [
  { id: 'menara-sudirman', title: 'Menara Sudirman Suites 45 Lantai', category: 'gedung', categoryLabel: 'Gedung Komersial', Icon: Building2, location: 'Sudirman, Jakarta Pusat', contractor: 'PT Wijaya Karya (Persero) Tbk', materials: '12.000 Ton Besi Beton Ulir BjTS 420B, 45.000 Sak Semen Portland Curah High Strength', period: '2023 - 2024', year: '2024', region: 'jawa', status: 'Selesai Tepat Waktu', statusTone: 'bg-emerald-600 text-white', image: '/images/img-15.jpg', volume: '12.000 ton BjTS 420B + 45.000 sak semen curah', scope: 'Struktur atas 45 lantai, core wall & kolom high-strength', cert: 'Mill Certificate SNI + uji tarik per batch' },
  { id: 'tol-trans-jawa', title: 'Jalan Tol Trans Jawa Seksi IV & Interchange', category: 'infrastruktur', categoryLabel: 'Infrastruktur', Icon: Route, location: 'Cirebon - Batang, Jawa Tengah', contractor: 'PT Jasa Marga & PT PP Konstruksi', materials: '85.000 m³ Agregat & Pasir Cor, 24.000 Ton Wiremesh & Baja Prategang ASTM Grade', period: '2021 - 2023', year: '2023', region: 'jawa', status: 'Beroperasi Penuh', statusTone: 'bg-emerald-700 text-white', image: '/images/img-24.jpg', volume: '85.000 m³ agregat + 24.000 ton wiremesh & PC strand', scope: 'Rigid pavement, jembatan & interchange cloverleaf', cert: 'ASTM A615 Grade 60 + test report laboratorium' },
  { id: 'bsd-eco-park', title: 'Kawasan Hunian Mandiri BSD Eco Park Cluster', category: 'residensial', categoryLabel: 'Residensial', Icon: Home, location: 'Tangerang Selatan, Banten', contractor: 'Sinar Mas Land & Mitra Kontraktor', materials: '4.200 m³ Bata Ringan AAC Kualitas Ekspor, 18.000 Sak Mortar Perekat Thinbed SNI', period: '2024 - Sekarang', year: '2025', region: 'jawa', status: 'Konstruksi Fase 2', statusTone: 'bg-amber-600 text-white', image: '/images/img-01.jpg', volume: '4.200 m³ AAC + 18.000 sak thinbed & plester', scope: '420 unit tahap 1-2, dinding presisi 3mm', cert: 'SNI Bata Ringan + zero reject QC' },
  { id: 'bijb-kertajati', title: 'BIJB Perluasan Terminal & Kargo Hub', category: 'publik', categoryLabel: 'Fasilitas Publik', Icon: Warehouse, location: 'Majalengka, Jawa Barat', contractor: 'PT Adhi Karya (Persero) Tbk', materials: '8.500 Ton Rangka Baja Hollow & Profil WF, Pipa Galvanis ASTM, Baut High-Tensile', period: '2022 - 2023', year: '2023', region: 'jawa', status: 'Selesai', statusTone: 'bg-emerald-600 text-white', image: '/images/img-06.jpg', volume: '8.500 ton WF, hollow & space frame', scope: 'Bentang atap 72m terminal + gudang kargo', cert: 'SNI Baja + torque test sambungan baut' },
  { id: 'mega-hub-cikarang', title: 'Pusat Logistik Terpadu Mega Hub', category: 'industri', categoryLabel: 'Kawasan Industri', Icon: Warehouse, location: 'Cikarang Dry Port, Jawa Barat', contractor: 'PT Total Bangun Persada Tbk', materials: '32.000 m² Plat Bondek 0.75mm & Wiremesh M8, Cat Epoxy Heavy Duty', period: '2023 - 2024', year: '2024', region: 'jawa', status: 'Selesai', statusTone: 'bg-emerald-600 text-white', image: '/images/img-22.jpg', volume: '32.000 m² bondek + M8 + epoxy 3 lapis', scope: 'Warehouse 6 blok + apron beton 25cm', cert: 'SNI Bondek + uji tekan beton K-350' },
  { id: 'ikn-nusantara', title: 'Hunian ASN & Fasilitas IKN Nusantara', category: 'infrastruktur', categoryLabel: 'Proyek Strategis (PSN)', Icon: Flag, location: 'Sepaku, Penajam Paser Utara, Kaltim', contractor: 'Konsorsium BUMN Karya (HK - Waskita)', materials: 'Semen Ramah Lingkungan (Green Cement Blended) & Besi Beton SNI Tahan Korosi', period: '2023 - 2024', year: '2024', region: 'ikn', status: 'Prioritas Nasional', statusTone: 'bg-navy text-white', image: '/images/img-10.jpg', volume: 'Green cement blended + BjTS tahan korosi', scope: 'Tower ASN + fasilitas ministerial, logistik tongkang', cert: 'SNI + EPD semen hijau, CoA tiap tongkang' },
  { id: 'rsud-pratama', title: 'RSUD Pratama & Pusat Diagnostik', category: 'publik', categoryLabel: 'Fasilitas Publik', Icon: Hospital, location: 'Sleman, D.I. Yogyakarta', contractor: 'PT Hutama Karya (Persero)', materials: 'Granite Tile Antibakteri 60x60cm, Bata Ringan AAC, Cat Weather-Shield Premium', period: '2022 - 2023', year: '2023', region: 'jawa', status: 'Selesai', statusTone: 'bg-emerald-600 text-white', image: '/images/img-13.jpg', volume: '18.000 m² granit antibakteri + AAC + coating', scope: 'Gedung 8 lantai + IGD & lab diagnostik', cert: 'SNI Keramik + sertifikat antibakteri' },
  { id: 'tod-sentratimur', title: 'Apartemen TOD Sentra Timur Residence', category: 'residensial', categoryLabel: 'Residensial & TOD', Icon: Train, location: 'Cakung, Jakarta Timur', contractor: 'Perum Perumnas & Mitra Joint Venture', materials: 'Besi Tulangan Ulir SNI, Mortar Plester & Acian 15.000 Sak, Waterproofing Membrane', period: '2023 - Sekarang', year: '2025', region: 'jawa', status: 'Finishing & Façade', statusTone: 'bg-amber-600 text-white', image: '/images/img-09.jpg', volume: '9.800 ton besi + 15.000 sak mortar + membrane', scope: '3 tower 32 lantai terintegrasi stasiun LRT', cert: 'SNI BjTS + flood test waterproofing' },
  { id: 'patimban-port', title: 'Akses Jembatan Pelabuhan Patimban', category: 'infrastruktur', categoryLabel: 'Infrastruktur Maritim', Icon: Ship, location: 'Subang, Jawa Barat', contractor: 'PT Waskita Karya (Persero) Tbk', materials: 'Plywood Film Faced 18mm Bekisting, 14.500 Ton Baja BjTS Tahan Salinitas', period: '2020 - 2022', year: '2022', region: 'jawa', status: 'Beroperasi Penuh', statusTone: 'bg-emerald-700 text-white', image: '/images/img-21.jpg', volume: '14.500 ton BjTS coastal-grade + bekisting marine', scope: 'Trestle 8,2 km + causeway pelabuhan dalam', cert: 'SNI + salt-spray test tulangan' },
]

const PORTFOLIO_STATS = [
  { value: '500+', label: 'Proyek Selesai & Berjalan', sub: 'Di seluruh kepulauan nusantara' },
  { value: '1,2 Jt', label: 'Ton Besi & Baja SNI', sub: 'Tersalurkan dengan Mill Cert resmi' },
  { value: '3,5 Jt', label: 'Sak Semen & Mortar', sub: 'PCC, OPC & Thinbed standar SNI' },
  { value: '34', label: 'Provinsi Terjangkau', sub: 'Jejak logistik armada mandiri' },
]

function PortfolioDetailModal({ project, onClose }) {
  if (!project) return null
  const Icon = project.Icon
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-navy-dark/70" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-level3 overflow-hidden max-h-[92vh] overflow-y-auto">
        <div className="relative h-64">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
          <button onClick={onClose} aria-label="Tutup" className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-white/95 text-navy hover:bg-white"><X size={18} /></button>
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="chip bg-navy/90 text-white backdrop-blur"><Icon size={13} />{project.categoryLabel}</span>
            <span className={`chip ${project.statusTone}`}>{project.status}</span>
          </div>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3 className="font-headline font-bold text-xl md:text-2xl leading-tight !text-white">{project.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200"><MapPin size={14} />{project.location} • {project.period}</p>
          </div>
        </div>
        <div className="p-6 md:p-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div>
            <p className="label-matrial">Kontraktor pelaksana</p>
            <p className="font-headline font-bold text-navy">{project.contractor}</p>
            <p className="label-matrial mt-5">Pasokan material utama</p>
            <p className="text-sm text-ink leading-relaxed">{project.materials}</p>
            <div className="mt-5 rounded-xl bg-canvas border border-line p-4 space-y-3 text-sm">
              <div className="flex gap-2"><Package size={16} className="text-brand-hover shrink-0 mt-0.5" /><p><b>Volume:</b> {project.volume}</p></div>
              <div className="flex gap-2"><Truck size={16} className="text-brand-hover shrink-0 mt-0.5" /><p><b>Lingkup:</b> {project.scope}</p></div>
              <div className="flex gap-2"><ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" /><p><b>QA/QC:</b> {project.cert}</p></div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-line p-4">
              <p className="font-headline font-bold text-sm text-navy">Jadwal pengiriman bertahap?</p>
              <p className="text-[13px] text-sub mt-1 leading-relaxed">Duplikasi skema batching proyek ini untuk proyek Anda. Estimasi tonase + SLA 24/7.</p>
            </div>
            <a href="https://wa.me/6281123456789" target="_blank" rel="noreferrer" className="btn-primary w-full"><MessageCircle size={16} /> Konsultasi WA</a>
            <Link to="/kontak" className="btn-navy w-full"><FileText size={16} /> Ajukan RFQ / BOQ</Link>
            <p className="text-xs text-slate-500 text-center">Mill Certificate • Harga pabrik • TOP B2B</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('all')
  const [year, setYear] = useState('all')
  const [region, setRegion] = useState('all')
  const [selected, setSelected] = useState(null)
  const [loadState, setLoadState] = useState('idle')

  const filtered = useMemo(() => PORTFOLIO_PROJECTS.filter((p) => {
    if (activeTab !== 'all' && p.category !== activeTab) return false
    if (year !== 'all' && year !== '2021' && p.year !== year) return false
    if (year === '2021' && p.year !== '2022' && p.year !== '2021' && p.year !== '2020') return false
    if (region === 'jawa' && p.region !== 'jawa') return false
    if (region === 'ikn' && p.region !== 'ikn') return false
    if (region === 'luar-jawa' && p.region === 'jawa') return false
    return true
  }), [activeTab, year, region])

  return (
    <div className="w-full bg-white">
      <section className="w-full bg-gradient-to-b from-slate2 to-white pt-8 pb-10">
        <div className="container-matrial flex flex-col gap-6">
          <nav className="flex items-center gap-1.5 text-[13px] text-sub">
            <Link to="/" className="flex items-center gap-1 hover:text-navy"><Home size={14} /> Beranda</Link>
            <ChevronRight size={14} className="opacity-40" />
            <span className="text-navy font-semibold">Portofolio Proyek</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="chip bg-emerald-50 text-emerald-700"><BadgeCheck size={13} /> Jejak Rekam & Distribusi Nasional</span>
              <h1 className="font-headline font-extrabold tracking-tight text-navy text-3xl md:text-[40px] md:leading-[48px] mt-3">Portofolio Pasokan Material Proyek Strategis di Seluruh Indonesia</h1>
              <p className="mt-3 text-sub text-[15px] md:text-base leading-relaxed">Telah dipercaya menyuplai kebutuhan material struktural dan arsitektural untuk lebih dari 500+ proyek infrastruktur nasional, kawasan komersial modern, serta perumahan skala kota mandiri.</p>
            </div>
            <a href="#proyek-grid" className="btn-navy shrink-0">Telusuri Proyek <ChevronDown size={16} /></a>
          </div>
          <div className="bg-navy text-white rounded-2xl shadow-level3 p-6 md:p-8 mt-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:divide-x md:divide-white/10">
              {PORTFOLIO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 md:pl-8 first:md:pl-0">
                  <p className="font-headline font-extrabold text-2xl md:text-[32px] !text-white">{s.value}</p>
                  <p className="font-headline text-xs font-semibold text-slate-200">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proyek-grid" className="sticky top-[104px] lg:top-[113px] z-30 bg-white/95 backdrop-blur-md py-4 border-b border-line scroll-mt-32">
        <div className="container-matrial flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 lg:mx-0 lg:px-0" role="tablist" aria-label="Filter kategori">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button key={c.key} role="tab" aria-selected={activeTab === c.key} onClick={() => setActiveTab(c.key)} className={`whitespace-nowrap px-4 py-2 rounded-lg font-headline text-xs font-semibold transition-all ${activeTab === c.key ? 'bg-emerald-600 text-white shadow-level1' : 'bg-slate2 text-ink hover:bg-line'}`}>
                {c.label} <span className={`ml-1 ${activeTab === c.key ? 'opacity-80' : 'text-sub'}`}>({c.count})</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="relative min-w-[150px] flex-1 lg:flex-none">
              <span className="sr-only">Tahun Proyek</span>
              <CalendarDays size={16} className="absolute right-3 top-3 text-sub pointer-events-none" />
              <select value={year} onChange={(e) => setYear(e.target.value)} className="input-matrial !py-2.5 pr-9 text-[13px] appearance-none cursor-pointer">
                <option value="all">Semua Tahun</option>
                <option value="2025">Tahun 2025</option>
                <option value="2024">Tahun 2024</option>
                <option value="2023">Tahun 2023</option>
                <option value="2022">Tahun 2022</option>
                <option value="2021">Tahun 2020 - 2021</option>
              </select>
            </label>
            <label className="relative min-w-[160px] flex-1 lg:flex-none">
              <span className="sr-only">Lokasi Wilayah</span>
              <MapPin size={16} className="absolute right-3 top-3 text-sub pointer-events-none" />
              <select value={region} onChange={(e) => setRegion(e.target.value)} className="input-matrial !py-2.5 pr-9 text-[13px] appearance-none cursor-pointer">
                <option value="all">Semua Wilayah</option>
                <option value="jawa">Pulau Jawa</option>
                <option value="luar-jawa">Luar Pulau Jawa</option>
                <option value="ikn">IKN & Kalimantan</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="container-matrial py-10">
        {filtered.length === 0 ? (
          <div className="card-matrial p-10 text-center">
            <p className="font-headline font-bold text-navy">Tidak ada proyek pada filter ini</p>
            <p className="text-sm text-sub mt-1">Coba ubah kategori, tahun, atau wilayah.</p>
            <button onClick={() => { setActiveTab('all'); setYear('all'); setRegion('all') }} className="btn-outline mt-5">Reset filter</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const Icon = p.Icon
              return (
                <article key={p.id} className="card-matrial overflow-hidden flex flex-col group cursor-pointer" onClick={() => setSelected(p)}>
                  <div className="relative h-60 overflow-hidden bg-slate2">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/90 text-white text-[11px] font-headline font-bold backdrop-blur"><Icon size={13} />{p.categoryLabel}</div>
                    <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-headline font-bold ${p.statusTone}`}>{p.status}</div>
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white text-[11px] font-headline font-semibold flex items-center gap-1"><CalendarDays size={13} /> Periode: {p.period}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div>
                      <h3 className="font-headline font-bold text-[18px] text-navy leading-snug line-clamp-1 group-hover:text-brand-hover transition-colors">{p.title}</h3>
                      <p className="flex items-center gap-1 text-[13px] text-sub mt-1"><MapPin size={14} className="text-emerald-600" />{p.location}</p>
                      <div className="mt-3 py-2 px-3 rounded-lg bg-canvas border border-line flex items-center gap-2">
                        <span className="w-8 h-8 grid place-items-center rounded-lg bg-white border border-line text-navy shrink-0"><Building2 size={16} /></span>
                        <div><p className="text-[11px] text-sub">Kontraktor Pelaksana:</p><p className="text-xs font-headline font-bold text-navy leading-tight">{p.contractor}</p></div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-dashed border-line">
                      <p className="text-[11px] font-headline font-bold uppercase tracking-wider text-sub mb-1">Pasokan Material Utama:</p>
                      <p className="text-[13px] text-ink font-medium line-clamp-2">{p.materials}</p>
                      <span className="inline-flex items-center gap-1 mt-3 text-[13px] font-headline font-bold text-navy group-hover:text-brand-hover">Lihat detail proyek <ChevronRight size={14} /></span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <button
            onClick={() => { if (loadState === 'idle') { setLoadState('loading'); setTimeout(() => setLoadState('done'), 800) } }}
            disabled={loadState === 'done'}
            className="btn-outline disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loadState === 'loading' ? 'Memuat Data Tambahan...' : loadState === 'done' ? (<span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> Seluruh 48 Proyek Telah Ditampilkan</span>) : `Muat Lebih Banyak Proyek (Menampilkan ${filtered.length} dari 48 Proyek)`}
          </button>
          <p className="text-[13px] text-sub">Arsip data proyek 2018 - 2025 tersedia lengkap dalam katalog pengadaan tahunan.</p>
        </div>
      </section>

      <section className="bg-canvas border-y border-line py-12">
        <div className="container-matrial">
          <div className="card-matrial p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 !rounded-2xl">
            <div className="lg:w-1/2">
              <span className="chip bg-emerald-50 text-emerald-700">Cakupan Distribusi Terpadu</span>
              <h2 className="font-headline font-bold text-2xl md:text-[32px] leading-tight mt-3">Jaringan Logistik Maritim & Darat Siap Kirim ke Seluruh Pelosok Proyek</h2>
              <p className="text-sm text-sub mt-3 leading-relaxed">Didukung oleh 12 gudang regional (hub) dan kemitraan dengan 450+ armada truk tronton & kapal tongkang curah, Matrial memastikan jadwal batching pengecoran dan pemasangan struktur proyek Anda tidak pernah terhenti.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <div className="flex items-center gap-3 p-3 bg-canvas border border-line rounded-xl"><Truck size={22} className="text-emerald-600 shrink-0" /><div><p className="text-[13px] font-headline font-bold text-navy">SLA 24/7 Pengiriman</p><p className="text-xs text-sub">Untuk proyek prioritas tinggi</p></div></div>
                <div className="flex items-center gap-3 p-3 bg-canvas border border-line rounded-xl"><Package size={22} className="text-emerald-600 shrink-0" /><div><p className="text-[13px] font-headline font-bold text-navy">Buffer Stock Aman</p><p className="text-xs text-sub">Kapasitas 150.000 ton di gudang</p></div></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-80 rounded-xl overflow-hidden relative border border-line">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/img-14.png')" }} />
              <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur p-4 rounded-xl text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3"><Radar size={26} className="text-emerald-400 shrink-0" /><div><p className="text-[13px] font-headline font-bold !text-white">Pelacakan Logistik GPS Aktif</p><p className="text-xs text-slate-300">Pemantauan armada real-time</p></div></div>
                <span className="chip bg-emerald-600 text-white shrink-0">Live Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-matrial relative flex flex-col items-center text-center gap-6">
          <span className="chip bg-emerald-500/20 text-emerald-300"><Handshake size={13} /> Kolaborasi Pengadaan Proyek</span>
          <h2 className="font-headline font-bold text-2xl md:text-[40px] md:leading-[48px] max-w-3xl !text-white">Punya Proyek Konstruksi Mendatang? Pastikan Pasokan Material Anda Tepat Waktu & Berstandar SNI</h2>
          <p className="text-slate-300 max-w-2xl text-[15px]">Diskusikan estimasi tonase, jadwal pengiriman bertahap (batching), dan skema pembayaran korporat B2B bersama tim procurement engineer Matrial.</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="https://wa.me/6281123456789" target="_blank" rel="noreferrer" className="btn-primary !bg-emerald-600 hover:!bg-emerald-500 !px-8 !py-4"><MessageCircle size={18} /> Konsultasi via WhatsApp</a>
            <Link to="/kontak" className="inline-flex items-center justify-center gap-2 bg-white text-navy font-headline font-semibold text-sm rounded-lg px-8 py-4 hover:bg-slate2"><FileText size={18} /> Ajukan RFQ / Kirim BOQ</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full pt-4">
            {['Mill Certificate SNI Resmi', 'Harga Pabrik Langsung', 'Termin Pembayaran TOP B2B', 'Armada Logistik GPS Terpadu'].map((t) => (
              <div key={t} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-[12px] font-headline font-semibold text-slate-200"><ShieldCheck size={16} className="text-emerald-400 shrink-0" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioDetailModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

const NEWS_CATEGORIES = ['Semua Topik', 'Tren Industri', 'Standar & SNI', 'Harga Material', 'Panduan B2B', 'Teknik Sipil']

const FEATURED_ARTICLE = {
  tag1: 'Sorotan Utama',
  tag2: 'Analisis Pasar',
  source: 'Riset Industri Matrial',
  date: '14 Oktober 2024',
  readTime: '5 Menit Baca',
  title: 'Kenaikan Permintaan Semen Ramah Lingkungan & Beton Precast dalam Proyek Infrastruktur Nasional 2025',
  desc: 'Menghadapi mandat efisiensi jejak karbon sektor konstruksi, integrasi blended cement berstandar SNI 7064 serta modular precast mengalami lonjakan hingga 28%. Simak komparasi teknis mutu struktur dan kesiapan pasokan logistik nasional.',
  metric1: ['Reduksi Emisi', '-21.4% CO₂'],
  metric2: ['Lead Time Proyek', '1.8× Lebih Cepat'],
  image: '/images/img-19.jpg',
}

const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'Standar & SNI',
    badge: 'Spesifikasi Teknis',
    date: '10 Okt 2024',
    readTime: '4 mnt',
    title: 'Panduan Memilih Besi Beton Ulir Standar SNI 2052 untuk Ketahanan Gempa',
    desc: 'Memahami toleransi diameter sirip, batas luluh yield strength minimal BjTS 420B, serta teknik uji bending laboratorium sebelum proses instalasi pembesian struktural utama.',
    image: '/images/img-26.jpg',
    cert: 'SNI 2052:2017',
  },
  {
    id: 2,
    category: 'Tren Industri',
    badge: 'Logistik & Distribusi',
    date: '08 Okt 2024',
    readTime: '6 mnt',
    title: 'Optimalisasi Rantai Pasok Baja Ringan di Wilayah Jabodetabek & Jawa Barat',
    desc: 'Solusi pengiriman material tepat waktu (JIT) bagi kontraktor perumahan skala menengah guna menekan biaya sewa gudang dan meminimalisir risiko oksidasi dini pada material seng-aluminium.',
    image: '/images/img-03.jpg',
    cert: null,
  },
  {
    id: 3,
    category: 'Teknik Sipil',
    badge: 'Inovasi Material',
    date: '05 Okt 2024',
    readTime: '5 mnt',
    title: 'Keunggulan Bata Ringan AAC Dibanding Bata Konvensional pada Bangunan Bertingkat',
    desc: 'Analisis beban mati struktural, kecepatan pasang dinding per meter persegi, dan penghematan pemakaian plester semen instan pada pembangunan hotel dan apartemen.',
    image: '/images/img-17.jpg',
    cert: 'Beban -50%',
  },
  {
    id: 4,
    category: 'Standar & SNI',
    badge: 'Quality Assurance',
    date: '02 Okt 2024',
    readTime: '7 mnt',
    title: 'Mengenal Uji Slump dan Kuat Tekan Beton Mutu K-300 ke Atas Sesuai PBI',
    desc: 'Standard Operating Procedure (SOP) penerimaan adukan ready mix di job site, pengetesan slump 12±2 cm, serta prosedur perawatan kubus beton umur 7, 14, dan 28 hari.',
    image: '/images/img-08.jpg',
    cert: null,
  },
  {
    id: 5,
    category: 'Panduan B2B',
    badge: 'Panduan B2B',
    date: '28 Sep 2024',
    readTime: '5 mnt',
    title: 'Strategi Manajemen Inventory Material Konstruksi untuk Mencegah Idle Time Proyek',
    desc: 'Mengatur safety stock besi ulir dan semen curah, menyelaraskan delivery schedule dengan kurva S pekerjaan sipil, serta integrasi digital RFQ Matrial.',
    image: '/images/img-11.jpg',
    cert: null,
  },
  {
    id: 6,
    category: 'Tren Industri',
    badge: 'Green Building',
    date: '24 Sep 2024',
    readTime: '6 mnt',
    title: 'Penerapan Green Building & Sertifikasi EDGE pada Gedung Komersial Modern',
    desc: 'Kriteria seleksi material dengan embodied energy rendah dan kontribusinya dalam mendapatkan poin kredit sertifikasi Greenship GBCI dan EDGE IFC Bank Dunia.',
    image: '/images/img-27.jpg',
    cert: 'EDGE Certified',
  },
  {
    id: 7,
    category: 'Harga Material',
    badge: 'Harga Material',
    date: '20 Sep 2024',
    readTime: '4 mnt',
    title: 'Tren Harga Semen & Besi Beton Q4: Strategi Lock-Price untuk Kontraktor',
    desc: 'Analisis pergerakan harga semen curah dan besi BjTS 420B, plus skema penguncian harga 7–30 hari agar RAB proyek tetap aman.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
    cert: null,
  },
  {
    id: 8,
    category: 'Panduan B2B',
    badge: 'Panduan B2B',
    date: '16 Sep 2024',
    readTime: '5 mnt',
    title: 'Cara Menghitung Kebutuhan Besi Beton Dak 2 Lantai Tanpa Over-Budget',
    desc: 'Rumus cepat + tabel berat besi per batang agar hemat 8–12% dan minim waste di lapangan.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&auto=format&fit=crop',
    cert: null,
  },
]

export function News() {
  const [activeCat, setActiveCat] = useState('Semua Topik')
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState(() => new Set())
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const perPage = 6

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return NEWS_ARTICLES.filter((a) => {
      const matchCat = activeCat === 'Semua Topik' || a.category === activeCat
      const matchQ = !q || (a.title + ' ' + a.desc + ' ' + a.badge).toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [activeCat, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const safePage = Math.min(page, totalPages)
  const pageItems = filtered.slice((safePage - 1) * perPage, safePage * perPage)

  const toggleSave = (id) => {
    setSaved((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="bg-canvas">
      {/* 1. Hero Banner */}
      <section className="relative w-full min-h-[320px] flex items-center overflow-hidden bg-navy">
        <img
          src="/images/img-18.jpg"
          alt="Konstruksi gedung bertingkat"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-black/30" />
        <div className="relative z-10 w-full max-w-matrial mx-auto px-4 md:px-6 lg:px-12 flex flex-col justify-between py-6 min-h-[320px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-headline font-bold tracking-wider text-slate-300">
            <Link to="/" className="hover:text-white flex items-center gap-1"><Home size={14} /> Beranda</Link>
            <span className="text-slate-400">/</span>
            <span className="text-brand">Berita & Artikel</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-6 mb-2">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-brand/30 backdrop-blur-sm text-orange-200 font-headline text-[11px] font-bold tracking-wider uppercase">Wawasan & Analisis</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-slate-200 font-headline text-xs">Edisi Q4 2024</span>
              </div>
              <h1 className="font-headline text-3xl md:text-[40px] leading-tight font-bold text-white tracking-tight mb-2">Berita & Artikel</h1>
              <div className="w-14 h-1 bg-brand rounded-full mb-3" />
              <p className="text-slate-200 text-base max-w-xl line-clamp-2">Informasi terkini seputar pergerakan pasar material konstruksi, regulasi SNI, panduan teknis proyek, serta perkembangan ekosistem Matrial.</p>
            </div>
            <div className="w-full md:w-auto md:min-w-[340px] bg-white/10 backdrop-blur-md p-2 rounded-xl flex items-center gap-2">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1) }}
                  className="w-full bg-white/90 text-navy placeholder:text-slate-500 text-sm pl-9 pr-3 py-2 rounded-lg outline-none focus:bg-white transition-all"
                  placeholder="Cari topik atau komoditas..."
                  type="text"
                />
              </div>
              <button aria-label="Cari artikel" className="bg-brand hover:bg-brand-hover text-white px-3.5 py-2 rounded-lg transition-colors flex items-center justify-center shrink-0">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Filter Tabs */}
      <section className="w-full bg-white shadow-sm">
        <div className="max-w-matrial mx-auto px-4 md:px-6 lg:px-12 py-3.5 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            {NEWS_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCat(c); setPage(1) }}
                className={`px-4 py-1.5 rounded-full font-headline text-[11px] font-bold tracking-wider whitespace-nowrap transition-all ${activeCat === c ? 'bg-navy text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-sub'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-sub font-headline text-xs shrink-0">
            <SlidersHorizontal size={16} />
            <span>Urutkan: <strong className="text-navy">Terbaru</strong></span>
          </div>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="w-full max-w-matrial mx-auto px-4 md:px-6 lg:px-12 mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-level2 border border-line overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
          <div className="lg:col-span-7 relative h-72 md:h-96 lg:h-auto min-h-[340px] overflow-hidden bg-slate-200">
            <img src={FEATURED_ARTICLE.image} alt="Pengecoran fondasi high-rise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 items-center">
              <span className="px-3 py-1 rounded bg-brand text-white font-headline text-[11px] font-bold tracking-wider shadow">{FEATURED_ARTICLE.tag1.toUpperCase()}</span>
              <span className="px-3 py-1 rounded bg-navy-dark/85 backdrop-blur-sm text-white font-headline text-[11px] font-semibold tracking-wide">{FEATURED_ARTICLE.tag2.toUpperCase()}</span>
            </div>
            <div className="absolute bottom-3 left-4 text-white/90 font-headline text-xs flex items-center gap-2 lg:hidden">
              <Clock size={14} /><span>{FEATURED_ARTICLE.date} • {FEATURED_ARTICLE.readTime}</span>
            </div>
          </div>
          <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="hidden lg:flex items-center gap-2 text-sub font-headline text-xs mb-3">
                <span className="inline-flex items-center gap-1 text-brand-hover font-semibold"><BadgeCheck size={15} /> {FEATURED_ARTICLE.source}</span>
                <span>•</span><span>{FEATURED_ARTICLE.date}</span><span>•</span>
                <span className="inline-flex items-center gap-1"><Clock size={14} /> {FEATURED_ARTICLE.readTime}</span>
              </div>
              <h2 className="font-headline text-2xl md:text-[32px] leading-tight font-bold text-navy tracking-tight group-hover:text-brand-hover transition-colors mb-4">{FEATURED_ARTICLE.title}</h2>
              <p className="text-sm text-sub leading-relaxed mb-6">{FEATURED_ARTICLE.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-lg bg-canvas border border-line">
                <div className="flex flex-col">
                  <span className="font-headline text-[11px] font-bold text-sub uppercase">{FEATURED_ARTICLE.metric1[0]}</span>
                  <span className="font-headline text-xl text-navy font-bold">{FEATURED_ARTICLE.metric1[1]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-[11px] font-bold text-sub uppercase">{FEATURED_ARTICLE.metric2[0]}</span>
                  <span className="font-headline text-xl text-brand-hover font-bold">{FEATURED_ARTICLE.metric2[1]}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <a href="#artikel" className="btn-navy !px-5 !py-2.5">Baca Selengkapnya <ArrowRight size={18} /></a>
              <div className="flex items-center gap-1 text-sub">
                <button className="p-2 rounded-lg hover:bg-slate-100 hover:text-navy transition-colors" title="Simpan Artikel" onClick={() => toggleSave('featured')}>
                  <Bookmark size={20} className={saved.has('featured') ? 'fill-brand text-brand' : ''} />
                </button>
                <button className="p-2 rounded-lg hover:bg-slate-100 hover:text-navy transition-colors" title="Bagikan" onClick={() => alert('Tautan artikel disalin!')}>
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Article Grid */}
      <section id="artikel" className="w-full max-w-matrial mx-auto px-4 md:px-6 lg:px-12 mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-headline text-2xl text-navy font-bold tracking-tight">Artikel & Panduan Terkini</h3>
            <p className="text-sm text-sub mt-0.5">Analisis teknis komprehensif untuk pengadaan cerdas para profesional konstruksi</p>
          </div>
          <span className="hidden sm:inline-block font-headline text-xs text-sub px-3 py-1 rounded bg-slate-200">Total {filtered.length} Publikasi</span>
        </div>
        {pageItems.length === 0 ? (
          <div className="bg-white border border-line rounded-2xl p-10 text-center text-sub">Tidak ada artikel untuk filter ini. Coba kata kunci lain.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((a) => (
              <article key={a.id} className="card-matrial flex flex-col overflow-hidden group">
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded font-headline text-[11px] uppercase font-bold tracking-wider text-white ${a.badge === 'Green Building' || a.badge === 'Logistik & Distribusi' || a.badge === 'Panduan B2B' || a.badge === 'Harga Material' ? 'bg-brand' : 'bg-navy/90'}`}>
                    {a.badge}
                  </span>
                  {a.cert && (
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/90 text-navy font-headline text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <BadgeCheck size={13} className="text-emerald-600" /> {a.cert}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sub font-headline text-[11px] font-semibold mb-2.5">
                      <span>{a.date}</span><span>•</span>
                      <span className="flex items-center gap-1"><Clock size={13} /> {a.readTime}</span>
                      <span>•</span><span className="text-brand-hover">{a.category}</span>
                    </div>
                    <h4 className="font-headline text-[20px] leading-snug font-semibold text-navy group-hover:text-brand-hover transition-colors mb-2.5 line-clamp-2">{a.title}</h4>
                    <p className="text-sm text-sub line-clamp-3 mb-4 leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-line flex items-center justify-between">
                    <span className="text-sm font-headline font-semibold text-brand-hover inline-flex items-center gap-1.5 cursor-pointer">Baca Selengkapnya <ArrowRight size={16} /></span>
                    <button onClick={() => toggleSave(a.id)} aria-label="Simpan" className="text-slate-400 hover:text-navy">
                      <Bookmark size={18} className={saved.has(a.id) ? 'fill-brand text-brand' : ''} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. Pagination */}
      <section className="w-full max-w-matrial mx-auto px-4 md:px-6 lg:px-12 mb-16">
        <div className="bg-white rounded-xl p-4 shadow-level1 border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-sub">
            Menampilkan <strong className="text-navy font-semibold">{filtered.length === 0 ? 0 : (safePage - 1) * perPage + 1}–{Math.min(safePage * perPage, filtered.length)}</strong> dari <strong className="text-navy font-semibold">{filtered.length}</strong> artikel
          </span>
          <div className="flex items-center gap-1">
            <button aria-label="Halaman sebelumnya" disabled={safePage <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className={`w-9 h-9 rounded-lg flex items-center justify-center ${safePage <= 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-100 hover:bg-slate-200 text-navy shadow-sm'}`}>
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((n) => (
              <button key={n} onClick={() => setPage(n)} className={`w-9 h-9 rounded-lg font-headline text-xs font-bold transition-colors ${n === safePage ? 'bg-navy text-white shadow-sm' : 'hover:bg-slate-100 text-sub hover:text-navy'}`}>{n}</button>
            ))}
            <button aria-label="Halaman selanjutnya" disabled={safePage >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-sm ${safePage >= totalPages ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-100 hover:bg-slate-200 text-navy'}`}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Newsletter */}
      <section className="w-full max-w-matrial mx-auto px-4 md:px-6 lg:px-12 pb-4">
        <div className="relative bg-gradient-to-r from-navy via-navy-dark to-navy rounded-2xl overflow-hidden shadow-level3 p-8 md:p-12 text-white">
          <Mail size={260} className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none" strokeWidth={1} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand/30 text-orange-200 font-headline text-[11px] font-bold uppercase tracking-wider mb-3">
                <BellRing size={14} /> Buletin Pengadaan Konstruksi B2B
              </div>
              <h3 className="font-headline text-2xl md:text-[40px] leading-tight font-bold tracking-tight mb-3 text-white">Dapatkan Wawasan Industri & Pembaruan Harga Material Mingguan</h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">Kurasian data fluktuasi harga besi SNI, semen curah, wiremesh, serta analisis regulasi proyek strategis langsung di kotak masuk email Anda setiap Senin pagi.</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-slate-300 font-headline text-xs">
                {['100% Gratis', 'Tanpa Spam', 'Berhenti Kapan Saja'].map((t) => (
                  <span key={t} className="flex items-center gap-1"><CheckCircle2 size={16} className="text-emerald-400" /> {t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              {subscribed ? (
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
                  <p className="font-headline font-bold mt-2">Berhasil berlangganan!</p>
                  <p className="text-sm text-slate-300 mt-1">Wawasan pasar Matrial akan dikirim ke {email}.</p>
                </div>
              ) : (
                <form className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }}>
                  <label className="font-headline text-[11px] font-bold text-slate-200" htmlFor="sub-email">Alamat Email Kerja / Perusahaan</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      className="flex-1 bg-white text-navy placeholder:text-slate-400 text-sm px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-brand transition-all"
                      id="sub-email"
                      placeholder="nama@kontraktor.co.id"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn-primary shrink-0" type="submit"><span>Langganan Gratis</span><Send size={18} /></button>
                  </div>
                  <p className="text-xs text-slate-300/80 mt-1">Data Anda dijaga kerahasiaannya sesuai Kebijakan Privasi PT Matrial Bangun Nusantara.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const CONTACT_CATEGORIES = [
  'Besi & Baja Tulangan (SNI TP280 / TS420)',
  'Semen Portland & Mortar Instan',
  'Bata Ringan AAC & Panel Lantai',
  'Ready Mix Concrete & Beton Precast',
  'Pipa Baja, Galvanis & Saluran Sanitasi',
  'Paket Tender / Semua Kebutuhan Proyek',
]

const CONTACT_BRANCHES = [
  {
    name: 'Kantor Pusat Administrasi',
    title: 'Gedung Graha Konstruksi, Lt. 8',
    addr: 'Jl. TB Simatupang No. 18, Cilandak, Jakarta Selatan 12430, DKI Jakarta',
    Icon: Building2,
  },
  {
    name: 'Hub Barat — Cikarang',
    title: 'Kawasan Industri MM2100, Cikarang Barat',
    addr: 'Gudang 2,4 ha • Bekasi • Melayani Jabodetabek, Banten & Jawa Barat',
    Icon: Warehouse,
  },
  {
    name: 'Hub Timur — Surabaya',
    title: 'Rungkut Industri Megah Kav. 12-14',
    addr: 'Surabaya • Melayani Jawa Timur, Bali & Nusa Tenggara',
    Icon: Warehouse,
  },
]

function ContactFieldError({ msg }) {
  if (!msg) return null
  return <p className="text-xs text-red-700 font-body mt-1">{msg}</p>
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', category: '', message: '' })
  const [errors, setErrors] = useState({})
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState('')
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: '' }))
  }

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0]
    setFileError('')
    if (!f) { setFile(null); return }
    if (!/\.(pdf|xlsx|xls|dwg)$/i.test(f.name)) { setFileError('Format berkas harus .PDF, .XLSX, atau .DWG.'); return }
    if (f.size > 25 * 1024 * 1024) { setFileError('Ukuran berkas maksimal 25MB.'); return }
    setFile(f)
  }

  const validate = () => {
    const er = {}
    if (form.name.trim().length < 3) er.name = 'Nama lengkap minimal 3 karakter.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = 'Masukkan email perusahaan/proyek yang valid.'
    if (!/^\+?[0-9 ()\-]{9,16}$/.test(form.phone.trim())) er.phone = 'Nomor telepon/WhatsApp tidak valid (9–15 digit).'
    if (!form.category) er.category = 'Pilih kategori material terlebih dahulu.'
    if (form.message.trim().length < 20) er.message = 'Tuliskan kebutuhan + lokasi site proyek (min. 20 karakter).'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  const reset = () => {
    setForm({ name: '', email: '', phone: '', category: '', message: '' })
    setFile(null)
    setErrors({})
    setFileError('')
    setSent(false)
  }

  const waLink = `https://wa.me/6281198765432?text=${encodeURIComponent('Halo Matrial, saya butuh penawaran material proyek. ' + (form.category ? '[' + form.category + '] ' : '') + (form.message ? form.message.slice(0, 120) : ''))}`

  return (
    <div>
      {/* 1 — HERO (Stitch: navy gradient + breadcrumb + orange accent bar) */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <img
          src="/images/img-29.jpg"
          alt="Resepsionis kantor pusat Matrial dan layanan pelanggan"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/40" aria-hidden="true" />
        <div className="relative">
          <div className="container-matrial pt-10 pb-10 md:pt-14 md:pb-12">
            <nav className="flex items-center gap-1.5 text-xs font-headline mb-4" aria-label="Breadcrumb">
              <Link to="/" className="flex items-center gap-1 text-slate-300 hover:text-white"><Home size={14} /> Beranda</Link>
              <span className="text-slate-500">/</span>
              <span className="text-brand font-semibold">Kontak</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="!text-white font-headline font-extrabold text-3xl md:text-[40px] md:leading-[48px] tracking-tight">Hubungi Kami</h1>
              <div className="h-1 w-16 bg-brand rounded-full mt-2 mb-3" />
              <p className="text-slate-300 text-[15px] md:text-base leading-relaxed">
                Tim spesialis kami siap membantu kebutuhan estimasi volume, sertifikasi SNI, dan pasokan
                material proyek konstruksi Anda di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — FORM RFQ + INFO KANTOR */}
      <section className="container-matrial py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: RFQ form (7 cols) */}
          <div className="lg:col-span-7 card-matrial p-6 md:p-8">
            <Badge tone="spec"><Tag size={12} /> Layanan B2B &amp; Proyek</Badge>
            <h2 className="font-headline font-bold text-xl md:text-2xl mt-3">Kirim Pesan atau Permintaan Penawaran (RFQ)</h2>
            <p className="text-sm text-sub mt-2 leading-relaxed">
              Konsultan pengadaan kami akan menghubungi Anda dalam waktu maksimal 15 menit pada jam
              operasional kerja untuk penawaran harga pabrik &amp; jadwal pengiriman.
            </p>

            {sent ? (
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center" role="status">
                <CheckCircle2 size={36} className="mx-auto text-emerald-600" />
                <h3 className="font-headline font-bold text-lg text-navy mt-3">Permintaan penawaran terkirim!</h3>
                <p className="text-sm text-sub mt-2 leading-relaxed">
                  Terima kasih, <b>{form.name}</b>. Permintaan untuk kategori <b>[{form.category}]</b> telah
                  kami terima. Tim Estimator Matrial akan menghubungi <b>{form.phone}</b> dalam ±15 menit
                  pada jam kerja.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-2 justify-center">
                  <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary !py-2.5"><MessageCircle size={16} /> Lanjut via WhatsApp</a>
                  <button onClick={reset} className="btn-outline !py-2.5">Kirim RFQ Lain</button>
                </div>
              </div>
            ) : (
              <form className="mt-6 flex flex-col gap-5" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-matrial" htmlFor="ct-name">Nama Lengkap <span className="text-red-600">*</span></label>
                    <div className="relative">
                      <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input id="ct-name" className="input-matrial !pl-11" placeholder="Ir. Bambang Hartono" value={form.name} onChange={set('name')} />
                    </div>
                    <ContactFieldError msg={errors.name} />
                  </div>
                  <div>
                    <label className="label-matrial" htmlFor="ct-email">Email Perusahaan / Proyek <span className="text-red-600">*</span></label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input id="ct-email" type="email" className="input-matrial !pl-11" placeholder="bambang@kontraktor-jaya.co.id" value={form.email} onChange={set('email')} />
                    </div>
                    <ContactFieldError msg={errors.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-matrial" htmlFor="ct-phone">Nomor Telepon / WhatsApp <span className="text-red-600">*</span></label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input id="ct-phone" type="tel" className="input-matrial !pl-11" placeholder="0812-3456-7890" value={form.phone} onChange={set('phone')} />
                    </div>
                    <ContactFieldError msg={errors.phone} />
                  </div>
                  <div>
                    <label className="label-matrial" htmlFor="ct-cat">Kategori Material / Kebutuhan <span className="text-red-600">*</span></label>
                    <select id="ct-cat" className="input-matrial" value={form.category} onChange={set('category')}>
                      <option value="">Pilih Kategori Material</option>
                      {CONTACT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ContactFieldError msg={errors.category} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="label-matrial !mb-0" htmlFor="ct-msg">Pesan / Estimasi Volume Proyek <span className="text-red-600">*</span></label>
                    <span className="text-xs text-slate-500">Min. cantumkan lokasi site</span>
                  </div>
                  <textarea id="ct-msg" rows="4" className="input-matrial" placeholder="Tuliskan rincian kebutuhan material, estimasi volume (cth: 120 Ton Besi D16, 500 sak Semen PC), timeline pengerjaan, dan alamat pengiriman site proyek Anda..." value={form.message} onChange={set('message')} />
                  <ContactFieldError msg={errors.message} />
                </div>

                <div className="p-3.5 rounded-xl bg-canvas border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-soft text-brand-hover shrink-0"><Paperclip size={18} /></span>
                    <div>
                      <p className="font-headline text-xs font-semibold text-navy">Lampirkan BoQ atau Daftar Spesifikasi Proyek</p>
                      <p className="text-xs text-sub">Format .PDF, .XLSX, atau .DWG (Maks. 25MB)</p>
                      {file && <p className="text-xs text-emerald-700 font-medium mt-1">Berkas terpilih: {file.name}</p>}
                      <ContactFieldError msg={fileError} />
                    </div>
                  </div>
                  <label className="btn-outline !py-2 !px-4 text-[13px] cursor-pointer whitespace-nowrap">
                    <Upload size={15} /> Pilih Berkas
                    <input type="file" className="hidden" accept=".pdf,.xlsx,.xls,.dwg" onChange={onFile} />
                  </label>
                </div>

                <button className="btn-primary w-full !py-3.5" type="submit">
                  Kirim Permintaan Penawaran <Send size={16} />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    [Timer, 'Respon Kilat', '< 15 Menit Jam Kerja', 'text-emerald-600'],
                    [Lock, 'Kerahasiaan', 'NDA & Dokumen Aman', 'text-navy'],
                    [BadgeCheck, 'Legalitas SNI', 'Faktur & Mill Sheet', 'text-brand-hover'],
                  ].map(([Icon, a, b, cls]) => (
                    <div key={a} className="flex items-center gap-2 p-2.5 rounded-xl bg-canvas border border-line">
                      <Icon size={20} className={cls} />
                      <div><p className="font-headline text-[11px] font-bold uppercase text-navy">{a}</p><p className="text-xs text-sub">{b}</p></div>
                    </div>
                  ))}
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: WhatsApp CTA + info kantor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-white p-6 shadow-level2">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-headline text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Estimator On-Duty 24/7
                </span>
                <Headset size={30} className="text-brand" />
              </div>
              <h3 className="!text-white font-headline font-bold text-xl">Konsultasi Cepat via WhatsApp B2B</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Butuh surat dukungan tender cepat, verifikasi mill certificate, atau negosiasi volume partai
                besar? Hubungi estimator teknis kami langsung.
              </p>
              <a href="https://wa.me/6281198765432?text=Halo%20Matrial%2C%20saya%20butuh%20penawaran%20material%20proyek." target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-headline font-semibold text-sm transition-all">
                <MessageCircle size={18} /> Chat WhatsApp (+62 811 9876 5432)
              </a>
              <p className="text-[11px] text-slate-400 mt-2 text-center">Rata-rata dibalas dalam 5 menit pada jam kerja</p>
            </div>

            <div className="card-matrial p-6 flex flex-col gap-5">
              {CONTACT_BRANCHES.map((b) => (
                <div key={b.name}>
                  <div className="flex items-start gap-4">
                    <span className="grid place-items-center w-10 h-10 rounded-lg bg-slate2 text-navy shrink-0"><b.Icon size={20} /></span>
                    <div>
                      <p className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">{b.name}</p>
                      <p className="font-headline font-bold text-[15px] text-navy mt-0.5">{b.title}</p>
                      <p className="text-[13px] text-sub mt-0.5 leading-relaxed">{b.addr}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="h-px w-full bg-line" />

              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-slate2 text-navy shrink-0"><Phone size={20} /></span>
                <div className="w-full">
                  <p className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">Kontak Langsung Divisi Proyek</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <p className="text-xs text-slate-500">Telepon Kantor (Hunting)</p>
                      <a className="font-semibold text-navy hover:text-brand-hover" href="tel:+622178901234">+62 21 7890 1234</a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">WhatsApp Pengadaan</p>
                      <a className="font-semibold text-emerald-700 hover:underline" href="https://wa.me/6281198765432" target="_blank" rel="noreferrer">+62 811 9876 5432</a>
                    </div>
                    <div className="sm:col-span-2 pt-1">
                      <p className="text-xs text-slate-500">Email Resmi Pengadaan &amp; CS</p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5 text-[13px]">
                        <a className="text-navy hover:text-brand-hover font-medium" href="mailto:pengadaan@matrial.co.id">pengadaan@matrial.co.id</a>
                        <span className="text-line2">•</span>
                        <a className="text-navy hover:text-brand-hover font-medium" href="mailto:cs@matrial.co.id">cs@matrial.co.id</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-line" />

              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-slate2 text-navy shrink-0"><Clock size={20} /></span>
                <div className="w-full">
                  <p className="font-headline text-[11px] font-bold uppercase tracking-widest text-brand-hover">Jam Operasional Layanan</p>
                  <div className="flex flex-col gap-1 mt-2 text-[13px]">
                    <div className="flex items-center justify-between"><span className="text-sub">Senin – Jumat:</span><span className="font-semibold text-navy">08:00 – 18:00 WIB</span></div>
                    <div className="flex items-center justify-between"><span className="text-sub">Sabtu:</span><span className="font-semibold text-navy">08:00 – 14:00 WIB</span></div>
                    <div className="flex items-center justify-between gap-2"><span className="text-sub">Minggu &amp; Libur:</span><span className="text-emerald-700 font-medium text-right">Darurat via WhatsApp Siaga</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — MAPS + DISTRIBUSI (Stitch: full-width band) */}
      <section className="w-full bg-canvas border-y border-line py-10 md:py-14">
        <div className="container-matrial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <Badge tone="spec"><MapIcon size={12} /> Cakupan Suplai Nasional</Badge>
              <h2 className="font-headline font-bold text-2xl md:text-[32px] mt-3">Lokasi Kantor Pusat &amp; Jaringan Distribusi</h2>
              <p className="text-sm text-sub mt-2 leading-relaxed">
                Didukung armada logistik tronton, trailer, dan dump truck mandiri yang siap melayani proyek
                infrastruktur maupun gedung tinggi di seluruh wilayah pulau Jawa hingga pelosok Nusantara.
              </p>
            </div>
            <a href="https://maps.google.com/?q=TB+Simatupang+Jakarta+Selatan" target="_blank" rel="noreferrer" className="btn-outline !bg-white whitespace-nowrap shrink-0 self-start md:self-auto">
              <MapIcon size={16} className="text-brand-hover" /> Buka di Google Maps
            </a>
          </div>

          {/* Maps placeholder + overlay pin card */}
          <div className="relative w-full min-h-[460px] rounded-2xl overflow-hidden shadow-level2 border border-line bg-navy">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F2A47_0%,#1E3A5F_45%,#2b4a73_100%)]" aria-hidden="true" />
            <div
              className="absolute inset-0 opacity-25"
              aria-hidden="true"
              style={{
                backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <div className="absolute inset-0 grid place-items-center pointer-events-none" aria-hidden="true">
              <p className="font-headline font-bold text-white/20 text-lg tracking-wide flex items-center gap-2"><MapPin size={20} /> MAPS PLACEHOLDER — embed Google Maps di sini</p>
            </div>

            <div className="absolute bottom-5 left-5 right-5 sm:right-auto max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-level3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-headline text-[11px] font-bold uppercase tracking-wider text-brand-hover"><span className="w-2.5 h-2.5 rounded-full bg-brand" /> Markas Pusat Eksekutif</p>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">AKTIF</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-navy leading-tight">Graha Konstruksi Tower</h3>
              <p className="text-xs text-sub">Akses langsung Jl. TB Simatupang No. 18, Jakarta Selatan 12430</p>
              <div className="p-2.5 rounded-lg bg-canvas border border-line flex items-start gap-2">
                <Truck size={18} className="text-brand-hover shrink-0 mt-0.5" />
                <p className="text-xs leading-snug text-ink"><b>Akses Logistik Strategis:</b> 300 meter dari Gerbang Tol Cilandak/Simatupang. Jalur truk tronton &amp; kontainer berat 24 jam.</p>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://maps.google.com/?q=TB+Simatupang+Jakarta" target="_blank" rel="noreferrer" className="btn-navy flex-1 !py-2 !text-[13px]"><Navigation size={15} /> Petunjuk Arah</a>
                <span className="inline-flex items-center gap-1 py-2 px-3 rounded-lg bg-slate2 text-navy font-headline text-[13px] font-semibold" title="Hub MM2100 melayani koridor barat–timur Jabar; Hub Rungkut melayani Jatim, Bali & Nusa Tenggara."><Info size={15} /> Info Rute</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute top-5 right-5 flex-col gap-2">
              {[
                ['12 Gudang Terintegrasi', 'Jabodetabek, Cilegon, Semarang, Surabaya', 'bg-emerald-500'],
                ['Armada 80+ Truk Derek & Mixer', 'Pengiriman Tepat Waktu (SLA 99,4%)', 'bg-brand'],
              ].map(([a, b, dot]) => (
                <div key={a} className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-level1 flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${dot} shrink-0`} />
                  <div><p className="font-headline text-xs font-bold text-navy">{a}</p><p className="text-xs text-sub">{b}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Info cabang strip */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {CONTACT_BRANCHES.map((b) => (
              <div key={b.name} className="card-matrial p-5 flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-soft text-brand-hover shrink-0"><b.Icon size={18} /></span>
                <div>
                  <p className="font-headline text-[11px] font-bold uppercase tracking-wider text-brand-hover">{b.name}</p>
                  <p className="font-headline font-semibold text-sm text-navy mt-0.5">{b.title}</p>
                  <p className="text-xs text-sub mt-1">{b.addr}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA band */}
          <div className="mt-6 rounded-2xl bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-emerald-600 shrink-0"><MessageCircle size={24} /></span>
              <div>
                <h3 className="!text-white font-headline font-bold text-xl">Butuh respon di bawah 15 menit?</h3>
                <p className="text-slate-300 text-sm mt-1">Kirim BOQ via WhatsApp — estimator standby untuk tender &amp; volume partai besar.</p>
              </div>
            </div>
            <a href="https://wa.me/6281198765432?text=Halo%20Matrial%2C%20saya%20butuh%20penawaran%20cepat%20untuk%20proyek%20saya." target="_blank" rel="noreferrer" className="btn-primary whitespace-nowrap !bg-emerald-600 hover:!bg-emerald-700">
              <MessageCircle size={16} /> WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
