
import CategorySection from '../components/CategorySection.js'
import FAQ from '../components/FAQ.js'
import SearchHero from '../components/SearchHero.js'

const Home = () => {
  return (
    <>
      <main>
        <SearchHero />
        <CategorySection />
        <FAQ />
      </main>
    </>
  )
}

export default Home