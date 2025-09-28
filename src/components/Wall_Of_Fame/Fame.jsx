import React, { useRef } from "react";
import "./Fame.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Fame() {
  const slider = useRef();
  let tx = 0;
  const forward = () => {
    if (tx > -50) {
      tx -= 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };
  const backward = () => {
    if (tx < 0) {
      tx += 25;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };
  return (
    <div className="Fame">
      <img
        src={back_icon}
        alt="back_icon"
        className="back_icon "
        onClick={backward}
      />
      <img
        src={next_icon}
        alt="next_icon"
        className="next_icon"
        onClick={forward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sara Andrew</h3>
                  <span>Redline Club,USA</span>
                </div>
              </div>
              <p>
                At Redline Club, we’re not just fans of fast cars — we’re a
                family built on adrenaline, ambition, and the art of engineering
                perfection. Every curve, every roar of the engine, every glint
                of chrome tells a story of passion and performance. We exist for
                those who live to drive, those who see a stretch of road as a
                canvas for power and precision.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Redline Club,USA</span>
                </div>
              </div>
              <p>
                At Redline Club, we’re not just fans of fast cars — we’re a
                family built on adrenaline, ambition, and the art of engineering
                perfection. Every curve, every roar of the engine, every glint
                of chrome tells a story of passion and performance. We exist for
                those who live to drive, those who see a stretch of road as a
                canvas for power and precision.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ellie Callin</h3>
                  <span>Redline Club,USA</span>
                </div>
              </div>
              <p>
                At Redline Club, we’re not just fans of fast cars — we’re a
                family built on adrenaline, ambition, and the art of engineering
                perfection. Every curve, every roar of the engine, every glint
                of chrome tells a story of passion and performance. We exist for
                those who live to drive, those who see a stretch of road as a
                canvas for power and precision.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Ben</h3>
                  <span>Redline Club,USA</span>
                </div>
              </div>
              <p>
                At Redline Club, we’re not just fans of fast cars — we’re a
                family built on adrenaline, ambition, and the art of engineering
                perfection. Every curve, every roar of the engine, every glint
                of chrome tells a story of passion and performance. We exist for
                those who live to drive, those who see a stretch of road as a
                canvas for power and precision.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fame;
