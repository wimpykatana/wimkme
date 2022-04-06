import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Logo from "./icons/logo"
import { Link } from "gatsby"
import "./header.css"

const Header = () => {
  const [menuMobielIsOpen, setMenuMobielIsOpen] = useState(false)
  const menuMobileAction = () => {
    console.log("click")
    setMenuMobielIsOpen(!menuMobielIsOpen)
  }
  console.log(menuMobielIsOpen)
  return (
    <>
      <Helmet>
        <html className={menuMobielIsOpen ? "noScroll" : ""} />
        <body className={menuMobielIsOpen ? "noScroll" : ""} />
      </Helmet>
      <div className="navHolder desktop">
        <div className="logoHolder">
          <Link to="/">
            <Logo isColor={true} />
          </Link>
        </div>
        <div className="menuHolder">
          <ul className="menu-desktop">
            <li>
              <Link to="#about">
                <span className="num secondary-color">01.</span> About
              </Link>
            </li>
            <li>
              <Link to="#experience">
                <span className="num secondary-color">02.</span> Experience
              </Link>
            </li>
            <li>
              <Link to="#contact">
                <span className="num secondary-color">03.</span> Contact
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className="num secondary-color">04.</span> Blog
              </Link>
            </li>
            <li className="btn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/document/wimk.pdf"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navHolder mobile">
        <div className="logoHolder">
          <Logo isColor={true} />
        </div>
        <div onClick={menuMobileAction} className="menuHolder">
          {!menuMobielIsOpen ? (
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="hamburger-close">
              <span></span>
              <span></span>
            </div>
          )}

          <aside
            style={
              menuMobielIsOpen ? { display: "block" } : { display: "none" }
            }
            className="menuContent"
          >
            <ul className="menu-mobile">
              <li>
                <Link to="#about">
                  <span className="num secondary-color">01.</span> About
                </Link>
              </li>
              <li>
                <Link to="#experience">
                  <span className="num secondary-color">02.</span> Experience
                </Link>
              </li>
              <li>
                <Link to="#contact">
                  <span className="num secondary-color">03.</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className="num secondary-color">04.</span> Blog
                </Link>
              </li>
              <li className="btn">
                {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/document/wimk.pdf"
                >
                  Download My RESUME
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Header
