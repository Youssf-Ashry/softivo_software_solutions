import { Button, Container } from 'react-bootstrap'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">SMART SOLUTIONS</p>
          <h1>Build Smarter.<br />Grow Faster.</h1>
          <p className="hero-text">We deliver innovative software solutions that help businesses transform ideas into powerful digital products.</p>
          <Button href="#solutions" className="primary-button">Explore Solutions <span>→</span></Button>
        </div>
        <div className="hero-note"><span>01</span> Digital-first solutions<br />for ambitious teams</div>
      </Container>
    </section>
  )
}

export default Hero
