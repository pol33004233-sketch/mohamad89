import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { img, images } from '../images'

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow">
            Traditional inspiration · Contemporary femininity
          </Reveal>
          <Reveal as="h1" className="hero__title" delay={90}>
            Beauty, <em>embroidered</em>
            <br />
            into memory.
          </Reveal>
          <Reveal as="p" className="hero__sub" delay={170}>
            ARIYO is a small house of machine-embroidered womenswear. Heritage motifs carried onto
            silk and linen, cut for a woman who chooses her own kind of elegance.
          </Reveal>
          <Reveal className="hero__actions" delay={250}>
            <Link className="btn btn--gold" to="/shop">
              Shop the Collection
            </Link>
            <Link className="text-link" to="/#story">
              Our Story <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal className="hero__proof" delay={330}>
            <span className="hero__dash" aria-hidden="true" />
            <p>
              Embroidered to order · <strong>Forty hours</strong> of machine work in every hem
            </p>
          </Reveal>
        </div>

        <Reveal className="hero__media photo" delay={120}>
          <img src={img(images.hero)} alt="Model wearing an ARIYO linen dress in warm afternoon light" />
          <span className="hero__script">Same soul, new hands</span>
          <span className="hero__caption">Campaign I — Warm Light</span>
        </Reveal>
      </div>
    </section>
  )
}
