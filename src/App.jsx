import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Program from './components/Program.jsx'
import Instructors from './components/Instructors.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Program />
        <Instructors />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
