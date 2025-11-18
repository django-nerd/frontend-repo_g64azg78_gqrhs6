import { useRef } from 'react'
import Hero from './components/Hero'
import SinsGallery from './components/SinsGallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const sinsRef = useRef(null)
  const scrollToSins = () => {
    document.querySelector('#sins')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero onExplore={scrollToSins} />
      <SinsGallery ref={sinsRef} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
