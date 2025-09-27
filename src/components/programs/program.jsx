import React from "react";
import "./program.css";
import driftOne   from "../../assets/driftOne.jpg";
import f1one from "../../assets/f1one.jpeg";
import pic5 from "../../assets/pic5.jpg";
import icon_1 from "../../assets/icon_1.png";
import icon_2 from "../../assets/icon_2.png";
import icon_3 from "../../assets/icon_3.png";
import icon_4 from "../../assets/icon_4.png";






const Program = () => {
  return (
    <>
      
      <div className="programs">
        <div className="program">
          <img src={pic5} alt="" />
          <div className="caption">
            <img src={icon_4} alt="icon_3" />
            <p>Modern cars</p>
          </div>
        </div>
        <div className="program">
          <img src={f1one} alt="" />
          <div className="caption">
            <img src={icon_1} alt="icon_1" />
            <p> F1 Races</p>
          </div>
        </div>
        <div className="program">
          <img src={driftOne} alt="" />
          <div className="caption">
            <img src={icon_2} alt="icon_2" />
            <p> Drifting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
