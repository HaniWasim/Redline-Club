import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";

import { Link } from "react-scroll";
function Navbar() {
  const [Sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    },[]);
  });
const [MobileMenu, setMobileMenu] = useState(false)
const Togglemenu=()=>{
MobileMenu?setMobileMenu(false):setMobileMenu(true)
}
  return (
    <nav className={`container ${Sticky?'dark_nav':''}` }>
      <img src={logo} alt="logo of web" className="logo" />
      <ul className={MobileMenu?"":' hide_menu'}>
        <li><Link className="links" to='Hero' smooth={true} offset={0} duration={500}>Hero Banner</Link></li>
        <li><Link className="links" to='programs' smooth={true} offset={-260} duration={500}>Modules</Link></li>
        <li><Link className="links" to='About' smooth={true} offset={-150} duration={500}>Our Crew</Link></li>
        <li><Link className="links" to='Arena' smooth={true} offset={-260} duration={500}>Arena</Link></li>
        <li><Link className="links" to='Fame' smooth={true} offset={-260 } duration={500}>Wall Of Fame</Link></li>
        <li>
          {/* {" "} */}
          <Link className="btn" to='Club' smooth={true} offset={0 } duration={500}>Join The Club</Link>
        
        </li>
      </ul>
      <img src={menu} alt="" className="menu" onClick={Togglemenu} />
    </nav>
  );
}

export default Navbar;
