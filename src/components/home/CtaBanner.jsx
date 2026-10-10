import { Link } from 'react-router-dom'
import { MessageCircle, FileText, Zap } from 'lucide-react'

export function CtaBanner({ onRFQ }) {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-matrial px-4 md:px-6 lg:px-12">
        <div className="relative w-full overflow-hidden rounded-3xl border border-brand/20 bg-navy p-10 text-white shadow-level3 lg:p-16">
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 flex max-w-3xl flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3.5 py-1.5 font-headline text-[11px] font-semibold uppercase tracking-widest text-brand">
              <Zap size={14} /> Respon Cepat 24/7
            </div>
            <h2 className="!text-white mb-6 font-headline text-2xl font-bold leading-tight md:text-[32px]">
              Butuh Material Berkualitas untuk Proyek Anda?
            </h2>
            <p className="mb-10 max-w-2xl font-body text-[15px] leading-relaxed text-slate-300">
              Dapatkan penawaran harga terbaik dan konsultasi kebutuhan material gratis hari ini. Tim spesialis pengadaan
              kami siap mendampingi kebutuhan proyek Anda dari fondasi hingga atap.
            </p>
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
              <a
                href="https://wa.me/6281198765432"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-headline text-sm font-semibold text-white shadow-level2 transition-all hover:bg-[#20ba59] hover:shadow-level3"
              >
                <MessageCircle size={20} /> Hubungi via WhatsApp
              </a>
              {onRFQ ? (
                <button onClick={() => onRFQ()} className="btn-primary !px-8 !py-4">
                  <FileText size={20} /> Minta Surat Penawaran (RFQ)
                </button>
              ) : (
                <Link to="/kontak" className="btn-primary !px-8 !py-4">
                  <FileText size={20} /> Minta Surat Penawaran (RFQ)
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
