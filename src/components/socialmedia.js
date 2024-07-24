import { Link } from "gatsby"
import React from "react"
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaCodepen,
  FaLinkedin,
} from "react-icons/fa"

const socialmedia = ({ marginBottom, marginTop }) => {
  const holder = {
    marginBottom: `${marginBottom}px`,
    marginTop: `${marginTop}px`,
  }

  const smitemul = {
    display: "flex",
    flexDirection: "row",
  }

  const smitemlinomr = {
    listStyle: "none",
    marginBottom: "0",
  }

  const smitemlimr = {
    listStyle: "none",
    marginRight: "25px",
    marginBottom: "0",
  }

  return (
    <div style={holder}>
      <ul style={smitemul}>

        <li style={smitemlimr}>
          <Link to="https://www.linkedin.com/in/wimpykatana/" target="_blank">
            <FaLinkedin />
          </Link>
        </li>

        <li style={smitemlimr}>
          <Link to="https://twitter.com/wimpykatana" target="_blank">
            <FaTwitter />
          </Link>
        </li>

        <li style={smitemlimr}>
          <Link to="https://www.instagram.com/wimpy.katana/" target="_blank">
            <FaInstagram />
          </Link>
        </li>

        <li style={smitemlimr}>
          <Link to="https://github.com/wimpykatana" target="_blank">
            <FaGithub />
          </Link>
        </li>

        <li style={smitemlimr}>
          <Link
            to="https://www.youtube.com/channel/UClvHAgZLmLy0g243uq36EkA"
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </li>

        <li style={smitemlinomr}>
          <Link to="https://codepen.io/wimpy" target="_blank">
            <FaCodepen />
          </Link>
        </li>

       

      </ul>
    </div>
  )
}

export default socialmedia
