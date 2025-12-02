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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    { /*Casa Nina */}
    <ChatBox />
    
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
      element={

    <main>
    <Header />
    <Hero /> 

    <Accommodation />
    <Highlights />
    <Gallery />
    <Location />
    <CTA />

    <Footer />
    </main>
    }
    />
      <Route path="/kalendar" element={<CalendarPage />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App
