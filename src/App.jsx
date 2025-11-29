import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Accommodation from './components/Accommodation'
import Highlights from './components/Highlights'
import Location from './components/Location'
import CTA from './components/CTA'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
    <Hero /> 

    <Accommodation />
    <Highlights />
    <Gallery />
    <Location />
    <CTA />

    </main>
    <Footer />
    </>
  );
}

export default App
