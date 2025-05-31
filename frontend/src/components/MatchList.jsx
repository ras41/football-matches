import React, { useEffect, useState } from "react";
import { Card, Spinner, Container, Row, Col } from "react-bootstrap";

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.response);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="text-muted mt-2">Loading matches...</p>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {matches.map((match, idx) => {
          const [team1, team2] = match.title.split(" - ");
          return (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm match-card">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">
                    {team1} vs {team2}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <strong>Scheduled:</strong>{" "}
                    {new Date(match.date).toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MatchList;
