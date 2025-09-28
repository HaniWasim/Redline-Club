import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Program from "./components/programs/program";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Arena from "./components/Arena/Arena";
import Fame from "./components/Wall_Of_Fame/Fame";
import Contact from "./components/Contact/Contact";
import pummp from "./assets/pump.png";
import Footer from "./components/Wall_Of_Fame/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Modules" Title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Arena" Title="Machines That Inspire" />

        <Arena />
        <Title subTitle="Wall of Fame" Title="Become a Member" />
        <Fame />
        <div className="footer">
          <Title subTitle="Join The Club"  Title="Fuel Your Passion" />
            <span>
              <img className="pump" src={pummp} alt="" />
            </span>
          <Contact />
        </div>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
