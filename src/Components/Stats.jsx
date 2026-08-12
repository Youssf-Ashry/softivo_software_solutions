import { Col, Container, Row } from "react-bootstrap";

const stats = [
  { value: "150+", label: "Happy Clients" },
  { value: "250+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

function Stats() {
  return (
    <section className="stats-section" id="services">
      <Container>
        <Row>
          {stats.map((stat) => (
            <Col key={stat.label} md={3} xs={6} className="stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Stats;
