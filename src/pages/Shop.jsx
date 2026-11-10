import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Shop() {
  return (
    <div className="shop shell">
      <header className="shop__head">
        <Reveal as="p" className="eyebrow">
          The Collection
        </Reveal>
        <Reveal as="h1" className="shop__title" delay={80}>
          Six pieces, <em>one season</em>
        </Reveal>
        <Reveal as="p" className="shop__lede" delay={140}>
          A limited collection, embroidered to order in batches of twenty. When a batch closes, the
          piece is retired until the next release.
        </Reveal>
      </header>

      <div className="shop__grid">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 80}>
            <ProductCard product={product} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
