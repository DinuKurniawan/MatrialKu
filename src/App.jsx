import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Footer, RFQDrawer } from './components/layout'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { About, Portfolio, News, Contact } from './pages/Others'

function NotFound() {
  return (
    <div className="container-matrial py-20 text-center">
      <h1 className="font-headline font-extrabold text-4xl">404</h1>
      <p className="text-sub mt-2">Halaman tidak ditemukan.</p>
      <Link to="/" className="btn-navy mt-6">Kembali ke Beranda</Link>
    </div>
  )
}

export default function App() {
  const [rfqOpen, setRfqOpen] = useState(false)
  const [rfqProduct, setRfqProduct] = useState(null)
  const openRFQ = (p = null) => { setRfqProduct(p); setRfqOpen(true) }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-body">
        <Navbar onRFQ={() => openRFQ()} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onRFQ={openRFQ} />} />
            <Route path="/katalog" element={<Catalog onRFQ={openRFQ} />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/portofolio" element={<Portfolio />} />
            <Route path="/berita" element={<News />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <RFQDrawer open={rfqOpen} product={rfqProduct} onClose={() => setRfqOpen(false)} />
      </div>
    </BrowserRouter>
  )
}
