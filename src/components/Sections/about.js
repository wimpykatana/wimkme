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
            <span style={{fontWeight: "bold"}}>My name is Wimpy Katana.</span><br />
            I have a deep passion for web development, which began when I got my first PC as a child.
            This early interest sparked a lifelong journey into the world of technology and led me to pursue a career as a software engineer.
          </p>
          <p>
          Over the years, I've had the opportunity to work with several companies, 
          where I've honed my skills and expanded my knowledge in web development. 
          I'm committed to continuously learning and creating innovative solutions in this ever-evolving field.
          </p>
          <p>
            Currently, I'm sharing my expertise in web development through my YouTube channel, where I provide insights and tutorials. You can check it out{" "}
            <a
              href="https://www.youtube.com/channel/UClvHAgZLmLy0g243uq36EkA"
              target="_blank"
              className="simpleLink"
              rel="noreferrer"
            >
              here.
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
          <p></p>
          <p>
            Look forward to continuing my journey in web development, constantly learning, and contributing to the field.
          </p>
        </div>
        <div className="picture">
          <div className="pp-holder">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/photo2.jpg"
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
