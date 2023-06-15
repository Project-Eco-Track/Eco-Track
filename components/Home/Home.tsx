import React from "react";
import "./Home.scss";
import Card from "@components/Home/Card";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="left">
        <Card />
      </div>
      <div className="right">
        <Card />
      </div>
    </div>
  );
};

export default Home;
