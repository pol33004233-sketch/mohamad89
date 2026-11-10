import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SizeGuide from '../components/SizeGuide'
import ProductCard from '../components/ProductCard'
import { bySlug, price, products } from '../data/products'
import { img } from '../images'
import { useCart } from '../cart/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`acc ${open ? 'is-open' : ''}`}>
      <button type="button" className="acc__trigger" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{title}</span>
        <span className="acc__icon" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div className="acc__panel">
        <div className="acc__inner">{children}</div>
      </div>
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const product = bySlug(slug)
  const { add } = useCart()
  const [size, setSize] = useState(product?.sizes[1] ?? product?.sizes[0])
  const [active, setActive] = useState(0)
  const [guideOpen, setGuideOpen] = useState(false)

  if (!product) {
    return (
      <div className="missing shell">
        <p className="eyebrow">Piece not found</p>
        <h1>This piece has left the collection.</h1>
        <Link className="btn btn--gold" to="/shop">
          Browse all pieces
        </Link>
      </div>
    )
  }

  const gallery = product.gallery
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="pdp">
      <nav className="pdp__crumbs shell" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/shop">Pieces</Link>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="shell pdp__grid">
        <div className="pdp__gallery">
          <div className="pdp__stage photo">
            {gallery.map((g, i) => (
              <img
                key={g.src + i}
                src={img(g.src)}
                alt={`${product.name} — ${g.label}`}
                className={i === active ? 'is-active' : ''}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <span className="pdp__stage-label">{gallery[active].label}</span>
          </div>

          <div className="pdp__thumbs">
            {gallery.map((g, i) => (
              <button
                key={g.src + i}
                type="button"
                className={`pdp__thumb photo ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`View ${g.label}`}
                aria-pressed={i === active}
              >
                <img src={img(g.src)} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pdp__info">
          <Reveal>
            <p className="eyebrow">{product.collection}</p>
            <h1 className="pdp__name">{product.name}</h1>
            <p className="pdp__price">{price(product.price)}</p>
            <p className="pdp__tagline">{product.tagline}</p>

            <div className="pdp__sizes-head">
              <span>Size</span>
              <button type="button" className="link-underline" onClick={() => setGuideOpen(true)}>
                Size guide
              </button>
            </div>
            <div className="pdp__sizes" role="group" aria-label="Choose a size">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size-chip ${s === size ? 'is-active' : ''}`}
                  aria-pressed={s === size}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <button type="button" className="btn btn--gold btn--wide pdp__add" onClick={() => add(product.slug, size)}>
              Add to Cart — {price(product.price)}
            </button>

            <ul className="pdp__assurances">
              <li>Embroidered to order — dispatched within three weeks</li>
              <li>Complimentary worldwide shipping over $250</li>
              <li>Complimentary alterations at the atelier</li>
            </ul>

            <div className="pdp__acc">
              <Accordion title="Product Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Fabric &amp; Care">
                <p>{product.fabric}</p>
              </Accordion>
              <Accordion title="Machine Embroidery">
                <p>{product.embroidery}</p>
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="pdp__details shell">
        <div className="pdp__details-head">
          <p className="eyebrow">The Details</p>
          <h2>Look closer</h2>
        </div>
        <div className="pdp__details-grid">
          {gallery.slice(1, 4).map((g, i) => (
            <figure key={g.src + i} className="photo">
              <img src={img(g.src)} alt={`${product.name} — ${g.label} detail`} loading="lazy" />
              <figcaption>{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pdp__related shell">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow">Continue</p>
            <h2 className="section-title">You may also like</h2>
          </div>
          <Link className="text-link" to="/shop">
            All pieces <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="featured__grid">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <SizeGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  )
}
