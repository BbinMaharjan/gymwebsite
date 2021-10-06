import React from "react";
import gym from "../../image/gympic.jpg";
import "./home.css";

const Home = (props) => {
  return (
    <div>
      <div className="image">
        <img src={gym} alt="gym"></img>
      </div>
    </div>
  );
};

export default Home;
