import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import CalendarPage from "./pages/CalendarPage"
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
import Information from './components/Information'
import Price from './pages/Price.jsx'
import Transfer from './pages/Transfer.jsx'
import Tips from './pages/Tips.jsx'

function App() {
  const [isPriceOpen, setIsPriceOpen] = useState(false)
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'cs')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
  <> 
    <HashRouter>
      <Routes>
        <Route 
          path='/'
          element={
            <main>
              <Header lang={lang} onLangChange={setLang} onOpenPrice={() => setIsPriceOpen(true)} />
              <Hero lang={lang} /> 
              <Accommodation lang={lang} />
              <Highlights lang={lang} />
              <Gallery lang={lang} />
              <Information lang={lang} />
              <Location lang={lang} />
              <CTA lang={lang} />
              <Footer lang={lang} />
            </main>
          }
        />

        <Route path="/kalendar" element={<CalendarPage lang={lang} />} />
        <Route path="/price" element={<Price lang={lang} />} />
        <Route path='/transfer' element={<Transfer lang={lang} />} />
        <Route path='/tips' element={<Tips lang={lang} />} />
      </Routes>

      {isPriceOpen && (
        <Price lang={lang} onClose={() => setIsPriceOpen(false)} />
      )}
    </HashRouter>
  </>
  );
}

export default App;
