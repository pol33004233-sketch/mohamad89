import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { price } from '../data/products'
import { img } from '../images'

export default function CartDrawer() {
  const { items, isOpen, close, setQty, remove, subtotal, count } = useCart()
  const [note, setNote] = useState(false)

  useEffect(() => {
    if (!isOpen) setNote(false)
  }, [isOpen])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <div className={`drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button className="drawer__scrim" onClick={close} aria-label="Close bag" tabIndex={isOpen ? 0 : -1} />
      <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <header className="drawer__head">
          <h2>Your Bag {count ? `(${count})` : ''}</h2>
          <button className="drawer__close" onClick={close} aria-label="Close bag">
            ✕
          </button>
        </header>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <p>Your bag is empty.</p>
            <p className="drawer__hint">
              Each piece is embroidered to order and released in small batches.
            </p>
            <Link to="/shop" className="btn btn--gold" onClick={close}>
              Explore the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="drawer__items">
              {items.map((line) => (
                <li key={line.key} className="line">
                  <Link to={`/product/${line.product.slug}`} onClick={close} className="line__media photo">
                    <img src={img(line.product.shot)} alt={line.product.name} />
                  </Link>
                  <div className="line__body">
                    <div className="line__head">
                      <h3>{line.product.name}</h3>
                      <span>{price(line.product.price * line.qty)}</span>
                    </div>
                    <p className="line__meta">Size {line.size}</p>
                    <div className="line__foot">
                      <div className="stepper">
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label={`Decrease quantity of ${line.product.name}`}
                        >
                          −
                        </button>
                        <span>{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label={`Increase quantity of ${line.product.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button className="line__remove" onClick={() => remove(line.key)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="drawer__foot">
              <div className="drawer__row">
                <span>Subtotal</span>
                <span>{price(subtotal)}</span>
              </div>
              <p className="drawer__ship">
                {subtotal >= 250
                  ? 'Complimentary worldwide shipping and duties included.'
                  : `Add ${price(250 - subtotal)} for complimentary worldwide shipping.`}
              </p>
              <button type="button" className="btn btn--gold btn--wide" onClick={() => setNote(true)}>
                Continue to Checkout
              </button>
              {note ? (
                <p className="drawer__note">
                  Checkout opens with our next release — write to atelier@ariyo.com to reserve these
                  pieces now.
                </p>
              ) : null}
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
