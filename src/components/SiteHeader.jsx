import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../cart/CartContext'

const links = [
  { label: 'Collections', to: '/#collections' },
  { label: 'Our Story', to: '/#story' },
  { label: 'Craftsmanship', to: '/#craftsmanship' },
  { label: 'Contact', to: '/#contact' },
]

export default function SiteHeader() {
  const { count, open } = useCart()
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <>
      <div className="notice">
        <p>Complimentary worldwide shipping over $250 — every piece embroidered to order</p>
      </div>

      <header className={`header ${stuck ? 'is-stuck' : ''}`}>
        <div className="header__inner shell">
          <button
            className="header__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>

          <Link to="/" className="wordmark">
            ARIYO
          </Link>

          <nav className="header__nav" aria-label="Primary">
            {links.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link className="header__shop" to="/shop">
              Shop
            </Link>
            <button className="bag-button" onClick={open} aria-label="Open shopping bag">
              Bag
              <span className={count ? 'bag-button__count is-filled' : 'bag-button__count'}>{count}</span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop All Pieces
          </Link>
        </nav>
        <p className="mobile-menu__foot">Tradition, Crafted Into Elegance</p>
      </div>
    </>
  )
}
