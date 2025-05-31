import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function LiveMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // fetch("https://www.scorebat.com/video-api/v3/")
    fetch("https://football-matches-production.up.railway.app/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.response); // Top 6
      });
  }, []);

  return (
    <Container className="mt-5">
      <div className="background-image"></div>

      <h2 className="mb-4 text-black text-center">Live Matches</h2>
      {matches.map((match, idx) => {
        const [team1, team2] = match.title.split(" - ");
        const date = new Date(match.date).toLocaleString();

        return (
          <div className="match-card" key={idx}>
            <h4>
              {team1} vs {team2}
            </h4>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Location:</strong> {match.competition}
            </p>
          </div>
        );
      })}
    </Container>
  );
}

export default LiveMatches;
