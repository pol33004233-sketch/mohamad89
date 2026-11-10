import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { img, images } from '../images'

const collections = [
  { name: 'The Kaftan Edit', copy: 'Silk, wide through the sleeve', to: '/product/zari-kaftan' },
  { name: 'Silk Essentials', copy: 'Tonal embroidery on cream', to: '/product/nur-silk-blouse' },
  { name: 'Ceremony', copy: 'For the evening that matters', to: '/product/sahar-ceremony-dress' },
  { name: 'Everyday Linen', copy: 'Quiet detail, worn often', to: '/product/gol-wrap-top' },
]

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="shell">
        <div className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Collections
            </Reveal>
            <Reveal as="h2" className="section-title" delay={80}>
              Essential styles, embroidered for every version of you.
            </Reveal>
          </div>
          <Reveal as="p" className="section-note" delay={140}>
            Four small worlds, released three times a year. Each piece is cut in a warm palette
            drawn from raw silk, unbleached linen and coffee-dyed thread.
          </Reveal>
        </div>

        <div className="collections__grid">
          {collections.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <Link to={item.to} className="collection photo">
                <img src={img(images.collections[i])} alt={item.name} loading="lazy" />
                <div className="collection__body">
                  <h3>{item.name}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="collection__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
