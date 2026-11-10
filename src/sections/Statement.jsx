import Reveal from '../components/Reveal'
import { img, images } from '../images'

export default function Statement() {
  return (
    <section className="statement">
      <div className="statement__media">
        <img src={img(images.statement)} alt="Mocha embroidered fabric with golden thread detail" loading="lazy" />
      </div>
      <div className="statement__content shell">
        <Reveal as="p" className="eyebrow eyebrow--light">
          The House
        </Reveal>
        <Reveal as="h2" className="statement__title" delay={90}>
          More Than Clothing.
          <br />
          <em>A Piece of Art.</em>
        </Reveal>
        <Reveal as="p" className="statement__copy" delay={160}>
          Mocha silk, golden thread, and the patience of a traditional atelier — kept in the house,
          piece by piece.
        </Reveal>
        <Reveal className="statement__mark" delay={220}>
          <span aria-hidden="true">✦</span>
          <p>Tradition, Crafted Into Elegance</p>
        </Reveal>
      </div>
    </section>
  )
}
