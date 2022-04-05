import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./about.css"

const about = () => {
  return (
    <section id="about" className="section-about">
      <div className="aboutHeadline">
        <span>01.</span> About Me
      </div>
      <div className="aboutContentHolder">
        <div className="aboutContent">
          <p>
            My name is Wimpy Katana, I like building website and enjoy to create
            new things for web development. I have an interest with web
            development and technology since i have my first PC when i was kid.
            Because of thats interest make me want to learn more about web and
            technology, and make me to become software engineer.
          </p>
          <p>
            I have serveral expreince working with many company and learn more
            in web development world by helping them. And i hope i can still
            create and learn more things in web development for my career.
          </p>
          <p>
            Right now i`m also trying to share my knowledge for web development
            in my youtube channel. Maybe you can visit it{" "}
            <a
              href="https://www.youtube.com/channel/UClvHAgZLmLy0g243uq36EkA"
              target="_blank"
              className="simpleLink"
            >
              at here.
            </a>
          </p>
          <p style={{ marginBottom: "5px" }}>
            Right now im working with few web technology, such as:
          </p>
          <ul className="skill">
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Wordpress</li>
            <li>Pupppeteer</li>
          </ul>
        </div>
        <div className="picture">
          <div className="pp-holder">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/pp.jpeg"
              width={300}
              height={300}
              quality={95}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
