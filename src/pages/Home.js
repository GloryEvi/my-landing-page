import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container flash">
      <div className="row">
        <div className="one col-8">
          <h1 className="First mt-4">Uncork the Perfect Bottle.</h1>
          <p className="First0">Discover Exquisite Wines for Every Palate.</p>
          <p className="First1">
            Explore our curated selection of fine wines from renowned vineyards
            around the world. Whether you're a connoisseur or a casual
            enthusiast, we have the perfect bottle to elevate your experience.
            From rich reds to crisp whites, our collection promises to delight
            and inspire.
          </p>
          <button className="first2">Shop Now</button>
        </div>

        <div className="one1 col-4">
          <img
            src={`${process.env.PUBLIC_URL}/hng11.jpg`}
            alt="Home"
            className="home-image"
          />
        </div>

        <p className="part1">Sip, Savor, and Celebrate with Us</p>
        <div className="col-4">
          <img
            src={`${process.env.PUBLIC_URL}/hng90.jpg`}
            alt="Home90"
            className="home-images"
          />
        </div>
        <div className="col-4">
          <img
            src={`${process.env.PUBLIC_URL}/hng91.jpg`}
            alt="Home91"
            className="home-images"
          />
        </div>
        <div className="col-4">
          <img
            src={`${process.env.PUBLIC_URL}/hng92.jpg`}
            alt="Home92"
            className="home-images"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
