import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="background-image"></div>
      <div className="overlay-content">
        <h1 className="mb-3">Welcome to SoccerVerse</h1>
        <p className="text-lg">
          The ultimate destination for football lovers to track live matches,
          watch highlight reels, and explore team stats. Real-time excitement.
          Beautiful design. One passion: football.
        </p>
        <button className="btn btn-live" onClick={() => navigate("/matches")}>
          Live Matches
        </button>
      </div>
    </div>
  );
}

export default Home;
