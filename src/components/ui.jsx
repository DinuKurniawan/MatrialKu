import { Link } from 'react-router-dom'

export function Button({ to, href, variant = 'primary', children, onClick, type = 'button', className = '' }) {
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'navy' ? 'btn-navy' : 'btn-outline'
  const c = `${cls} ${className}`
  if (to) return <Link to={to} className={c}>{children}</Link>
  if (href) return <a href={href} className={c}>{children}</a>
  return <button type={type} onClick={onClick} className={c}>{children}</button>
}

export function Badge({ tone = 'stock', children }) {
  const map = {
    stock: 'bg-emerald-50 text-emerald-700',
    spec: 'bg-slate2 text-navy border border-line2',
    truck: 'bg-brand-soft text-brand-hover',
  }
  return <span className={`chip ${map[tone] || map.stock}`}>{children}</span>
}

export function SectionHeading({ eyebrow, title, desc, center }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-10`}>
      {eyebrow && <p className="font-headline text-[11px] font-bold uppercase tracking-[0.08em] text-brand-hover mb-3">{eyebrow}</p>}
      <h2 className="font-headline text-2xl md:text-[32px] leading-tight font-bold">{title}</h2>
      {desc && <p className="mt-3 text-sub text-[15px] leading-relaxed">{desc}</p>}
    </div>
  )
}

export function ProductCard({ p, onRFQ }) {
  return (
    <div className="card-matrial p-5 flex flex-col" data-testid={`product-${p.id}`}>
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge tone="stock">{p.stock}</Badge>
        <Badge tone="spec">{p.grade}</Badge>
      </div>
      <p className="text-xs font-headline font-semibold uppercase tracking-wider text-slate-500">{p.category}</p>
      <h3 className="font-headline font-semibold text-[17px] text-navy mt-1 leading-snug">{p.name}</h3>
      <div className="mt-3 text-[13px] text-sub space-y-1">
        {Object.entries(p.specs || {}).slice(0, 3).map(([k, v]) => (
          <div key={k} className="flex justify-between gap-2 border-b border-dashed border-line pb-1">
            <span className="text-slate-500">{k}</span><span className="font-medium text-ink">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="font-headline font-extrabold text-lg text-navy">Rp {p.price.toLocaleString('id-ID')}</p>
          <p className="text-xs text-slate-500">per {p.unit}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button onClick={() => onRFQ && onRFQ(p)} className="btn-primary !px-3 !py-2 text-[13px]">Minta RFQ</button>
        <Link to="/katalog" className="btn-outline !px-3 !py-2 text-[13px]">Detail</Link>
      </div>
    </div>
  )
}
