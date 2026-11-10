import Reveal from '../components/Reveal'
import Newsletter from '../components/Newsletter'

export default function NewsletterSection() {
  return (
    <section className="subscribe" id="newsletter">
      <div className="shell subscribe__inner">
        <div className="subscribe__copy">
          <Reveal as="p" className="eyebrow">
            The Letter
          </Reveal>
          <Reveal as="h2" className="subscribe__title" delay={80}>
            Enter the World of <em>ARIYO</em>
          </Reveal>
          <Reveal as="p" className="subscribe__lede" delay={140}>
            Be the first to discover our latest creations, exclusive collections, and inspirations.
          </Reveal>
        </div>
        <Reveal className="subscribe__form" delay={120}>
          <Newsletter />
        </Reveal>
      </div>
    </section>
  )
}
