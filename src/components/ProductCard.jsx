import { Link } from 'react-router-dom'
import { price } from '../data/products'
import { img } from '../images'
import { useCart } from '../cart/CartContext'
import { useState } from 'react'

export default function ProductCard({ product, index = 0 }) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0])
  const { add } = useCart()
  const second = product.gallery[1]?.src ?? product.shot

  return (
    <article className="card" style={{ '--i': index }}>
      <Link to={`/product/${product.slug}`} className="card__media photo" aria-label={product.name}>
        <img className="card__img card__img--front" src={img(product.shot)} alt={product.name} loading="lazy" />
        <img className="card__img card__img--back" src={img(second)} alt="" aria-hidden="true" loading="lazy" />
        <span className="card__collection">{product.collection}</span>
      </Link>

      <div className="card__body">
        <div className="card__head">
          <h3 className="card__name">
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <span className="card__price">{price(product.price)}</span>
        </div>
        <p className="card__tagline">{product.tagline}</p>

        <div className="card__sizes" role="group" aria-label={`Sizes for ${product.name}`}>
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              className={`chip ${s === size ? 'is-active' : ''}`}
              aria-pressed={s === size}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button type="button" className="btn btn--add" onClick={() => add(product.slug, size)}>
          Add to Bag
        </button>
      </div>
    </article>
  )
}
