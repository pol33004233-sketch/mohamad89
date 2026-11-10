import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { img, images } from '../images'

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="shell story__inner">
        <Reveal className="story__media photo">
          <img src={img(images.story)} alt="Editorial portrait of a model wearing ARIYO" loading="lazy" />
          <span className="story__caption">The Atelier · Spring Study</span>
        </Reveal>

        <div className="story__body">
          <Reveal as="p" className="eyebrow">
            Our Story
          </Reveal>
          <Reveal as="h2" className="story__title" delay={70}>
            Beauty <em>Beyond</em> Fashion
          </Reveal>

          <Reveal as="p" className="story__lede" delay={130}>
            ARIYO began with a bolt of inherited fabric and a question: what happens when the
            patience of traditional embroidery meets the clarity of a contemporary cut?
          </Reveal>

          <Reveal as="p" className="story__copy" delay={180}>
            Our pieces are drawn — not designed in a hurry — from the ornament of heirloom textiles:
            paisley, arabesque, the quiet geometry of a woven border. Then the machine does what
            hands alone cannot, carrying a motif around a sleeve or across a hem in one unbroken
            line.
          </Reveal>

          <Reveal as="p" className="story__copy" delay={220}>
            We believe femininity is not a trend; it is a point of view. Each piece is made in small
            numbers, in warm and light palettes, for women who would rather own one garment with a
            story than ten with a season.
          </Reveal>

          <Reveal className="story__sign" delay={260}>
            <span className="story__signature">— ARIYO Atelier</span>
            <Link className="text-link" to="/shop">
              Discover the collection <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="story__stats">
            <Reveal className="story__stat" delay={60}>
              <span>2019</span>
              <p>House founded in Tehran</p>
            </Reveal>
            <Reveal className="story__stat" delay={120}>
              <span>40h</span>
              <p>Average machine time per piece</p>
            </Reveal>
            <Reveal className="story__stat" delay={180}>
              <span>20</span>
              <p>Pieces per batch, no more</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
