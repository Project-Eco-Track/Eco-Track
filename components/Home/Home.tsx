import React from "react";
import "./Home.scss";
import Card from "@components/Home/Card";
import Rows from "./Rows";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="left">
        <Card />
      </div>
      <div className="right">
        <Rows />
      </div>
    </div>
  );
};

export default Home;
