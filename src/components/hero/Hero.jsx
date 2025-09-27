import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark_arrow.png";
 const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero_text container">
            <h1>Welcome to the Redline Club</h1>
            <p>
                Where Speed Lives - Push your passion to the limit. Join a community where speed, style, and power meet.
            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
export default Hero