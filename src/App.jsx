import MyNav from './Components/MyNav'
import Hero from './Components/Hero'
import Solutions from './Components/Solutions'
import Features from './Components/Features'
import Stats from './Components/Stats'
import './App.css'

function App() {
  return (
    <>
      <MyNav />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Stats />
      </main>
      <footer className="site-footer">
        <div>© 2026 Softivo. Building better digital futures.</div>
        <div className="footer-links">
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}

export default App
