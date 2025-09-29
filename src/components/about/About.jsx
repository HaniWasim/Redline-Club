import React from "react";
import "./About.css";
import bunch_1 from "../../assets/bunch_1.jpg";
import bunch_2 from "../../assets/bunch_2.jpg";
import bunch_3 from "../../assets/bunch_3.jpg";
import bunch_4 from "../../assets/bunch_4.jpg";
import bunch_5 from "../../assets/bunch_5.jpg";
import play_icon_1 from "../../assets/play_icon_1.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setVideoPlay }) => {
  return (
    <div className="About">
      <div className="About_left">
        <img src={bunch_4} alt="" className="About_image " />
        <img
          src={play_icon_1}
          alt=""
          className="play_icon"
          onClick={() => {
            setVideoPlay(true);
          }}
        />
      </div>
      <div className="About_right">
        <h3>Our Crew</h3>
        <h2>More Than Just Cars</h2>
        <p>
          At Redline Club, we’re not just fans of fast cars — we’re a family
          built on adrenaline, ambition, and the art of engineering perfection.
          Every curve, every roar of the engine, every glint of chrome tells a
          story of passion and performance. We exist for those who live to
          drive, those who see a stretch of road as a canvas for power and
          precision. From legendary supercars that redefined speed to the future
          of automotive innovation, our crew celebrates every heartbeat of the
          machine. Whether you’re a racer chasing milliseconds,
        </p>
        <p>
          a builder perfecting your dream ride, or simply someone who loves the
          smell of burning rubber and the thrill of motion — you belong here.
          The Redline Club is more than a community; it’s a movement that
          thrives on connection, creativity, and the unbreakable bond between
          man and machine. Together, we fuel a culture where speed isn’t just
          measured in miles per hour — it’s a way of life.
        </p>
      </div>
    </div>
  );
};

export default About;
