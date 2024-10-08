import React from "react"
import SocialMedia from "../socialmedia"
import "./contact.css"

const contact = () => {
  return (
    <section id="contact" className="first-section">
      <div className="contactHeadline">
        <h1>Get In Touch</h1>
        <p>
          Right now i`m looking and open for any new opportunities, my inbox is
          always open. You can drop me a mail or just say hi, and i will reach
          you back, and Thank you!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <SocialMedia />
      </div>
      <div className="btnHolder">
        <a
          className="btnSecondary"
          href="mailto:sayhi.wimk@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Say Hello !!!
        </a>
      </div>
    </section>
  )
}

export default contact
