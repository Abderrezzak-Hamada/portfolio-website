import React from "react";
import { Link } from "react-router-dom";
import "../index.css";


const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="HOMETEKST">
          Abderrezzak Hamada
          <br />
          Software Developer
        </h1>
        <div className="button-section">
          <Link to="/About" className="home-button">
           Over Mij
          </Link>
        </div>
      </div>

      <div className="image-section">
        <img src='./images/gg1.jpg' alt="Abderrezzak Hamada" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
