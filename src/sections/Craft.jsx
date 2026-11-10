import Reveal from '../components/Reveal'
import { img } from '../images'

const macro = [
  { src: 'emb1', caption: 'Satin-fill motif — twelve thousand stitches' },
  { src: 'emb2', caption: 'Gold thread on a mocha ground' },
  { src: 'zardozi', caption: 'Traditional patterning, re-hooped six times' },
  { src: 'thread', caption: 'Thread texture, at close range' },
]

export default function Craft() {
  return (
    <section className="craft" id="craftsmanship">
      <div className="shell">
        <div className="craft__head">
          <Reveal as="p" className="eyebrow">
            The Craft · Macro Study
          </Reveal>
          <Reveal as="h2" className="craft__title" delay={80}>
            Every ARIYO creation carries the beauty of traditional inspiration, brought to life
            through carefully executed <em>machine embroidery</em>.
          </Reveal>
          <Reveal as="p" className="craft__lede" delay={150}>
            We work from heirloom textiles — paisley, arabesque, the quiet geometry of woven borders
            — and translate them into thread: dense satin fills, couched goldwork, and borders that
            follow the body rather than fight it. Up close, the surface tells you everything.
          </Reveal>
        </div>

        <div className="craft__grid">
          <Reveal className="craft__figure craft__figure--tall photo" delay={60}>
            <img src={img(macro[0].src)} alt="Macro photograph of dense machine embroidery" loading="lazy" />
            <figcaption>{macro[0].caption}</figcaption>
          </Reveal>

          <div className="craft__stack">
            <Reveal className="craft__figure craft__figure--square photo" delay={140}>
              <img src={img(macro[1].src)} alt="Gold thread embroidery detail on fabric" loading="lazy" />
              <figcaption>{macro[1].caption}</figcaption>
            </Reveal>
            <Reveal className="craft__figure craft__figure--square photo" delay={200}>
              <img src={img(macro[3].src)} alt="Close-up of embroidery thread texture" loading="lazy" />
              <figcaption>{macro[3].caption}</figcaption>
            </Reveal>
          </div>
        </div>

        <Reveal className="craft__band photo" delay={80}>
          <img src={img(macro[2].src)} alt="Artisan working traditional embroidery" loading="lazy" />
          <div className="craft__band-content">
            <p className="eyebrow eyebrow--light">A celebration of heritage</p>
            <blockquote>
              “Detail is not decoration. It is the part of the garment that remembers the hand that
              made it.”
            </blockquote>
            <p className="craft__band-caption">Atelier notes · {macro[2].caption}</p>
          </div>
        </Reveal>

        <div className="craft__facts">
          <Reveal className="craft__fact">
            <span>12,000</span>
            <p>Stitches in a single motif</p>
          </Reveal>
          <Reveal className="craft__fact" delay={80}>
            <span>40h</span>
            <p>Machine time per embroidered hem</p>
          </Reveal>
          <Reveal className="craft__fact" delay={160}>
            <span>6</span>
            <p>Re-hoopings to keep a pattern unbroken</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
