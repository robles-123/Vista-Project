import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [background, setBackground] = useState("background1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        setBackground("background1");
      } else {
        setBackground("background2");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Vista</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/destinations">Destinations</Link>
        </div>
        <div className="sign-up">
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`hero-section ${background === "background1" ? "active" : ""}`}>
        <div className="hero-content">
          <h1>The Land of Promise</h1>
          <p>
            Vista offers a platform to discover and explore the best tourist spots in the Philippines.
          </p>
          <button className="join-btn">Join us!</button>
        </div>
      </section>

      {/* About Section */}
      <section className={`about-section ${background === "background2" ? "active" : ""}`}>
        <h2>About Us</h2>
        <p>
        At Vista, we're dedicated to helping you explore the beauty and diversity of the Philippines. 
        Our platform guides travelers and locals to discover stunning beaches, 
        mountainous trails, historical sites, and thrilling watery adventures. 
        With detailed information, user ratings, and a community-driven approach, 
        we aim to make every journey memorable. Join us in celebrating the rich culture and natural wonders of the Philippines,
         one destination at a time!
        </p>
        <div className="about-images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72M7ATvBeECh3IMGiRoF1RziJOLrQK8j7p8hXam_96w1Wo_LFZp2vJcn8mSJ5Wx8zgaI&usqp=CAU" alt="Plane" />
          <img src="https://static.vecteezy.com/system/resources/previews/010/195/834/non_2x/young-tourist-couple-watching-spectacular-mountain-scenery-in-high-mountains-man-and-woman-hiker-on-top-rock-a-couple-of-travelers-in-love-people-greet-the-dawn-lovers-travel-copy-space-free-photo.jpg" alt="Hikers" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
