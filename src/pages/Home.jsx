import { Hero } from '../components/home/Hero'
import { StatsBar } from '../components/home/StatsBar'
import { AboutPreview } from '../components/home/AboutPreview'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { PortfolioHighlights } from '../components/home/PortfolioHighlights'
import { Testimonials } from '../components/home/Testimonials'
import { CtaBanner } from '../components/home/CtaBanner'
import products from '../data/products.json'

export function Home({ onRFQ }) {
  return (
    <div>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <FeaturedProducts products={products} onRFQ={onRFQ} />
      <WhyChooseUs />
      <PortfolioHighlights />
      <Testimonials />
      <CtaBanner onRFQ={onRFQ} />
    </div>
  )
}
