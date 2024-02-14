import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Team/>
      </main>
      <Footer/>
    </>
  )
}