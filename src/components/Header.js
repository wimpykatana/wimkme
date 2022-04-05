import React from "react"
import Logo from "./icons/logo"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <div className="navHolder">
        <div className="logoHolder">
          <Logo isColor={true} />
        </div>
        <div className="menuHolder">
          <ul className="menu-desktop">
            <li>
              <a href="#about">
                <span className="num secondary-color">01.</span> About
              </a>
            </li>
            <li>
              <a href="#experience">
                <span className="num secondary-color">02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="num secondary-color">03.</span> Contact
              </a>
            </li>
            <li>
              <Link to="/blog">
                <span className="num secondary-color">04.</span> Blog
              </Link>
            </li>
            <li className="btn">RESUME</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
