import { Button, Col, Container, Row } from "react-bootstrap";

function Features() {
  return (
    <section className="features-section" id="about">
      <Container>
        <Row className="g-4">
          <Col lg={7}>
            <div className="feature-block feature-main">
              <div>
                <p className="eyebrow">THE SOFTIVO DIFFERENCE</p>
                <h2>
                  Empowering Businesses
                  <br />
                  with Software
                </h2>
                <p>
                  We turn complex challenges into simple, powerful digital
                  solutions.
                </p>
                <Button className="light-button">
                  Learn More <span>→</span>
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <Row className="g-4 h-100">
              <Col md={6} lg={12}>
                <div className="feature-block feature-industry">
                  <div>
                    <p className="eyebrow">BUILT FOR YOU</p>
                    <h3>Solutions Designed for Every Industry</h3>
                    <a href="#services">Discover our approach →</a>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={12}>
                <div className="feature-block feature-scale">
                  <div>
                    <p className="eyebrow">READY FOR TOMORROW</p>
                    <h3>Digital Products That Scale</h3>
                    <a href="#contact">Plan your next move →</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <div className="offer-block" id="contact">
              <div>
                <p className="eyebrow">LET'S GROW TOGETHER</p>
                <h2>Get Started Today</h2>
              </div>
              <div className="offer-copy">
                <strong>20% OFF</strong>
                <span>On Your First Project</span>
              </div>
              <Button className="offer-button">
                Claim Offer <span>→</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
