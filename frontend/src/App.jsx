import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import LiveMatches from "./components/LiveMatches";
import CustomNavbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar expand="lg" className="navbar-transparent">
          <Container>
            <Navbar.Brand as={Link} to="/" className="text-white">
              ⚽ SoccerVerse
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/matches" className="text-white">
                  Live Matches
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <CustomNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/matches" element={<LiveMatches />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// import React from "react";
// import MatchList from "./components/MatchList";
// import { Container, Navbar } from "react-bootstrap";
// import "./App.css";
// import LiveMatches from "./components/LiveMatches";

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="primary" variant="dark" className="mb-4">
//         <Container>
//           <Navbar.Brand href="/">⚽ Love Football Matches</Navbar.Brand>
//         </Container>
//       </Navbar>
//       {/* <MatchList /> */}
//       <LiveMatches />
//       <footer className="text-center text-muted mt-5 mb-4">
//         Made with ❤️ using React + ScoreBat API
//       </footer>
//     </div>
//   );
// }

// export default App;
