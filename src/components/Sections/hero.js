import React from "react"
import SocialMedia from "../socialmedia"
import "./hero.css"

const hero = () => {
  return (
    <section id="hi">
      <div className="hiHolder">
        <span className="hiText">Hi, my name is</span>
        <h1 className="nameText">Wimpy Katana.</h1>
        <h1>I build things for the web.</h1>
        <p>
          I'm a software engineer specializing in creating exceptional digital experiences for the web. With a strong focus on frontend development, 
          I'm passionate about crafting seamless, user-friendly websites. 
          {/*I'm always eager to explore and learn about the latest advancements in technology to enhance my skills and stay at the forefront of the industry.*/}
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
