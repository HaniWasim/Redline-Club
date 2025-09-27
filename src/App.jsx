import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Program from "./components/programs/program";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Arena from "./components/Arena/Arena";
import Fame from "./components/Wall_Of_Fame/Fame";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Modules" Title="What We Offer" />
        <Program />
        <hr />
        <About />
        <hr />
        <Title subTitle="Arena" Title="Machines That Inspire" />

        <Arena />
        <hr />
        <Title subTitle="Wall of Fame" Title="Become a Member" />
        <Fame />
      </div>
    </div>
  );
}

export default App;
