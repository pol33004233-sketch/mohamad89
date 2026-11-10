import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'

export default function SiteFooter() {
  const { open } = useCart()

  return (
    <footer className="footer" id="contact">
      <div className="shell footer__top">
        <div className="footer__brand">
          <span className="footer__wordmark">ARIYO</span>
          <p className="footer__desc">
            A small house of machine-embroidered womenswear. Traditional motifs, contemporary
            silhouettes, and details made slowly enough to be felt.
          </p>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Shop">
          <h4>Shop</h4>
          <Link to="/shop">All Pieces</Link>
          <Link to="/product/zari-kaftan">Kaftans</Link>
          <Link to="/product/nur-silk-blouse">Silk Blouses</Link>
          <Link to="/product/sahar-ceremony-dress">Ceremony</Link>
          <button type="button" className="footer__link" onClick={open}>
            Your Bag
          </button>
        </nav>

        <nav className="footer__col" aria-label="The House">
          <h4>The House</h4>
          <Link to="/#story">Our Story</Link>
          <Link to="/#craftsmanship">Craftsmanship</Link>
          <Link to="/#featured">Featured Pieces</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <nav className="footer__col" aria-label="Client care">
          <h4>Client Care</h4>
          <Link to="/#contact">Customer Support</Link>
          <Link to="/#contact">Shipping &amp; Returns</Link>
          <Link to="/#contact">Size Guide</Link>
          <Link to="/#contact">Privacy Policy</Link>
        </nav>

        <div className="footer__col footer__visit">
          <h4>Visit</h4>
          <p className="footer__address">
            No. 14, Shahin Street
            <br />
            Tehran, Iran
            <br />
            By appointment, Tuesday to Saturday
          </p>
          <a className="footer__mail" href="mailto:atelier@ariyo.com">
            atelier@ariyo.com
          </a>
        </div>
      </div>

      <div className="shell footer__signature">
        <span>Tradition, Crafted Into Elegance</span>
      </div>

      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} ARIYO. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/#contact">Privacy</Link>
          <Link to="/#contact">Terms</Link>
          <Link to="/#contact">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
