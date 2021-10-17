import React from "react";
import gym from "../../image/gympic.jpg";

import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";

import "./home.css";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <div className="image">
        <img src={gym} alt="gym"></img>
      </div>
      <Footer />
    </>
  );
};

export default Home;
