import React from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/NabBar";
import gym from "../../image/gympic.jpg";
import "./home.css";

const Home = (props) => {
  return (
    <div>
      <NavBar />
      <div className="image">
        <img src={gym} alt="gym"></img>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
