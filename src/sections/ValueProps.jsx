import Reveal from '../components/Reveal'

const items = [
  {
    title: 'Machine Embroidery',
    copy: 'Heritage motifs rendered with modern precision — not a print, not an imitation.',
  },
  {
    title: 'Hand-Finished Detail',
    copy: 'Every seam inspected, every thread trimmed, every hem closed by hand.',
  },
  {
    title: 'Timeless Silhouette',
    copy: 'Cut for movement and made to outlive the season it was released in.',
  },
  {
    title: 'Small Batches',
    copy: 'Twenty pieces per run. Nothing rushed, nothing wasted, nothing repeated.',
  },
]

export default function ValueProps() {
  return (
    <section className="values">
      <div className="shell values__grid">
        {items.map((item, i) => (
          <Reveal key={item.title} className="values__item" delay={i * 80}>
            <span className="values__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
