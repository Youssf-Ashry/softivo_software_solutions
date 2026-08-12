import { Badge, Button, Card } from "react-bootstrap";

function SolutionCard({ cardData }) {
  return (
    <Card className="solution-card h-100">
      <div className="card-image">
        <Card.Img variant="top" src={cardData.image} alt={cardData.title} />
        {cardData.featured && (
          <Badge className="featured-badge">Featured</Badge>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="solution-category">{cardData.category}</div>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.description}</Card.Text>
        <div className="mt-auto d-flex align-items-center justify-content-between gap-2">
          <strong>{cardData.price}</strong>
          <Button variant="link" className="details-button">
            Details <span>→</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SolutionCard;
