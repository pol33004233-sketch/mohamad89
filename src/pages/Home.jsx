import Hero from '../sections/Hero'
import ValueProps from '../sections/ValueProps'
import Collections from '../sections/Collections'
import Craft from '../sections/Craft'
import Story from '../sections/Story'
import FeaturedPieces from '../sections/FeaturedPieces'
import Statement from '../sections/Statement'
import NewsletterSection from '../sections/NewsletterSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Collections />
      <Craft />
      <Story />
      <FeaturedPieces />
      <Statement />
      <NewsletterSection />
    </>
  )
}
