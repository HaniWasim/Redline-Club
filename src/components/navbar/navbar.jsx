import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  const [Sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <nav className={`container ${Sticky?'dark_nav':''}` }>
      <img src={logo} alt="logo of web" className="logo" />
      <ul>
        <li>Hero Banner</li>
        <li>Modules</li>
        <li>Arena</li>
        <li>Our Crew</li>
        <li>Wall Of Fame</li>
        <li>
          {" "}
          <button className="btn">Join The Club</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
