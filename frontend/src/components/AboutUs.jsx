import React from "react";
import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <div>
      <Container className="mt-5 text-white">
        <div className="background-image"></div>
        <div className="overlay-content">
          <h2 className="mb-4">About SoccerVerse</h2>
          <p>
            At SoccerVerse, we breathe football. Whether it's the thunderous
            roar of the crowd, the precise beauty of a last-minute goal, or the
            passion in every dribble – we capture it all.
          </p>
          <p>
            We deliver real-time match updates with an interface that matches
            the thrill of the game itself. From Premier League to Champions
            League, from local derbies to international finals – it's all here.
          </p>
          <p>
            Our glowing match cards, elegant design, and intuitive layout make
            following football more exciting than ever. Welcome to your new home
            for the beautiful game.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
// import React from "react";
// import { Container } from "react-bootstrap";

// function AboutUs() {
//   return (
//     <Container className="mt-5 text-white">
//       <div className="background-image"></div>

//       <h2>About Us</h2>
//       <p>
//         SoccerVerse is your hub for real-time football updates, glowing match
//         cards, and immersive fan experience. Whether you're tracking Premier
//         League or La Liga, we've got you covered.
//       </p>
//     </Container>
//   );
// }

// export default AboutUs;
