import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="title">Let's do it together.</h2>
        <p className="spoiler">We travel the world in search of stories. Come along for the ride.</p>
        <button className="btn">View Latest Posts</button>
      </div>
    </section>
  );
};

export default Hero;
