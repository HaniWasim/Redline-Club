import React from "react";
import "./arena.css";
import show_1 from '../../assets/show_1.jpg'
import show_2 from '../../assets/show_2.jpg'
import show_3 from '../../assets/show_3.jpg'
import show_4 from '../../assets/show_4.jpg'
import show_5 from '../../assets/show_5.jpg'
import show_6 from '../../assets/show_6.jpg'
import show_7 from '../../assets/show_7.jpg'
import show_8 from '../../assets/show_8.jpg'
import show_9 from '../../assets/show_9.jpg'

import dark_arrow from '../../assets/dark_arrow.png'




function Arena() {
  return (

    <div className="Arena">
      <div className="gallery">
        <img src={show_1} alt="" />
        <img src={show_4} alt="" />
        <img src={show_6} alt="" />
        <img src={show_9} alt="" />
      </div>
      <button className="btn">See More Here <img src={dark_arrow}alt="" /></button>
    </div>


  );
}

export default Arena;
