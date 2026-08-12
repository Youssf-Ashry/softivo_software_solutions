import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import solutionList from "../Data/solutionList";
import SolutionCard from "./SolutionCard";

const categories = [
  "ALL",
  "DEVELOPMENT",
  "CLOUD",
  "AI & DATA",
  "SECURITY",
  "DESIGN",
];

function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const displayedSolutions =
    selectedCategory === "ALL"
      ? solutionList
      : solutionList.filter(
          (solution) => solution.category === selectedCategory,
        );

  return (
    <section className="solutions-section" id="solutions">
      <Container>
        <div className="section-heading">
          <p className="eyebrow text-primary">WHAT WE DO</p>
          <h2>Our Solutions</h2>
          <p>
            Everything you need to turn a promising idea into a product people
            trust.
          </p>
        </div>
        <div className="filter-list">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? "filter active" : "filter"
              }
            >
              {category}
            </Button>
          ))}
        </div>
        <Row className="g-4">
          {displayedSolutions.map((item) => (
            <Col key={item.title} lg={3} md={6}>
              <SolutionCard cardData={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Solutions;
