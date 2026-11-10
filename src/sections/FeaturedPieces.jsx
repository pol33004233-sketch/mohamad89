import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { bySlug, featured } from '../data/products'

export default function FeaturedPieces() {
  const pieces = featured.map(bySlug).filter(Boolean)

  return (
    <section className="featured" id="featured">
      <div className="shell">
        <div className="section-head section-head--split">
          <div>
            <Reveal as="p" className="eyebrow">
              Featured Pieces
            </Reveal>
            <Reveal as="h2" className="section-title" delay={80}>
              The curated few
            </Reveal>
          </div>
          <Reveal as="p" className="section-note" delay={140}>
            Three pieces we would choose first. Each embroidered to order, in a batch of twenty.
          </Reveal>
        </div>

        <div className="featured__grid">
          {pieces.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <ProductCard product={product} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="featured__foot" delay={60}>
          <Link className="text-link" to="/shop">
            View all six pieces <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
