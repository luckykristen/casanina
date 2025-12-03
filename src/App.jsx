import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import ChatBox from "./components/ChatBox"
import Information from './components/Information'
import Price from './pages/Price.jsx'
import Transfer from './pages/Transfer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <>
    { /*Casa Nina */}
    
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
      element={
    <main>
      <ChatBox />
      <Header onOpenPrice={() => setIsPriceOpen(true)} />
      <Hero /> 

      <Accommodation />
      <Highlights />
      <Gallery />
      <Information />
      <Location />
      <CTA />

      <Footer />
    </main>
    }
    />
      <Route path="/kalendar" element={<CalendarPage />} />
      <Route path="/price" element={<Price />} />
      <Route path='/transfer' element={<Transfer />} />
    </Routes>

    {isPriceOpen && (
      <Price onClose={() => setIsPriceOpen(false)} />
    )}
  </BrowserRouter>
</>
  );
}

export default App
