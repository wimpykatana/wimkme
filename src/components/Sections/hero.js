import React from "react"
import SocialMedia from "../socialmedia"
import "./hero.css"

const hero = () => {
  return (
    <section id="hi">
      <div className="hiHolder">
        <span className="hiText">Hi, my name is</span>
        <h1>Wimpy Katana.</h1>
        <h1>I build things for the web.</h1>
        <p>
          I'm a software engineer, who specializing building website with an
          exceptional Digital Experience.
          <br />
          And like to learn more about new tech
        </p>
        <SocialMedia marginBottom="55" marginTop="25" />
        <a
          className="btnSecondary"
          href="https://www.youtube.com/channel/UClvHAgZLmLy0g243uq36EkA"
          target="_blank"
        >
          Check out my Youtube Channel!
        </a>
      </div>
    </section>
  )
}

export default hero
