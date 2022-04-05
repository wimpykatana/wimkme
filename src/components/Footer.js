import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer>
      Design & Built by{" "}
      <span style={{ color: "var(--color-secondary)" }}>Wimpy Katana</span>
      <br />
      <span style={{ fontSize: "0.85em" }}>
        Powered{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://www.gatsbyjs.com"
        >
          GatsbyJS
        </a>
      </span>
    </footer>
  )
}

export default Footer
