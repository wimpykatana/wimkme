import React, { useEffect, useState } from "react"
import { CgScrollH } from "react-icons/cg"
import "./experience.css"

const experience = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [activeTabDisplay, setActiveTabDisplay] = useState()

  const companyClick = e => {
    const id = Number(e.target.dataset.id)
    setActiveTab(id)
  }
  const showActiveTab = () => {
    switch (activeTab) {
      case 1:
        setActiveTabDisplay(
          <div className="companyContentHolder showAnimation">
            <div className="title">Independent Worker</div>
            <div className="timeToWorking">January 2020 - Present</div>
            <div className="jobDesc">
              <ul>
                <li>
                  Working as freelancer and building a startup with my friend
                </li>
                <li>
                  Communicate with client on weekly basis to find a solution for
                  their technology challenge and web development
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  Gatsby, React, Express, Node, WordPress, Puppeteer, MongoDb,
                  and Heroku
                </li>
                <li>Sharing my knowledge at Social Media</li>
                <li>
                  Building music streaming app ( still working in progress )
                </li>
              </ul>
            </div>
          </div>
        )
        break
      case 2:
        setActiveTabDisplay(
          <div className="companyContentHolder showAnimation">
            <div className="title">Full Stack Developer</div>
            <div className="companyName">Teknologi Asia, PT</div>
            <div className="timeToWorking">April 2017 - December 2019</div>
            <div className="jobDesc">
              <ul>
                <li>
                  Write a modern and maintainable code for e-learing platform
                </li>
                <li>
                  Worked with a team of three people with background as backend
                  developer, frontend developer and designer
                </li>
                <li>
                  Purpose an idea how the brand will do marketing and the brand
                  direction as a platform
                </li>
                <li>Suggesting an idea for the feature for the brand</li>
              </ul>
            </div>
          </div>
        )
        break
      case 3:
        setActiveTabDisplay(
          <div className="companyContentHolder showAnimation">
            <div className="title">Magento Developer</div>
            <div className="companyName">kemana.com</div>
            <div className="timeToWorking">2015 - Maret 2017</div>
            <div className="jobDesc">
              <ul>
                <li>
                  Working as a team for build an ecommerce using magento for
                  kemana.com client
                </li>
                <li>Purpose the client to achieve a good UI / UX</li>
                <li>
                  Communicate with Client on weekly basis to report the progress
                  and give solution for the ecommerce
                </li>
              </ul>
            </div>
          </div>
        )
        break
      case 4:
        setActiveTabDisplay(
          <div className="companyContentHolder showAnimation">
            <div className="title">Software Engineer</div>
            <div className="companyName">Sinar Bintang, PT</div>
            <div className="timeToWorking">2011 - 2015</div>
            <div className="jobDesc">
              <ul>
                <li>Working as a team at Sinar Bintang Web Agency</li>
                <li>Implement SEO and SMO for client marketing purpose</li>
                <li>
                  Developed and maintained code for in-house and client websites
                  primarily using HTML, CSS, Sass, JavaScript, jQuery and
                  WordPress
                </li>
                <li>
                  Responsible for various browsers and mobile devices to ensure
                  cross-browser compatibility and responsiveness{" "}
                </li>
              </ul>
            </div>
          </div>
        )
        break
    }
  }

  useEffect(() => {
    showActiveTab()
  }, [])

  useEffect(() => {
    showActiveTab()
  }, [activeTab])

  return (
    <section id="experience">
      <div className="experienceHeadline">
        <span>02.</span> My Work Experience
      </div>
      <div className="experienceContent">
        <div className="company">
          <ul>
            <li
              data-id="1"
              className={activeTab == 1 ? "active" : ""}
              onClick={companyClick}
            >
              Now
            </li>
            <li
              data-id="2"
              className={activeTab == 2 ? "active" : ""}
              onClick={companyClick}
            >
              Teknologi Asia
            </li>
            <li
              data-id="3"
              className={activeTab == 3 ? "active" : ""}
              onClick={companyClick}
            >
              Kemana
            </li>
            <li
              data-id="4"
              className={activeTab == 4 ? "active" : ""}
              onClick={companyClick}
            >
              Sinar Bintang
            </li>
          </ul>
          <div className="mobileScrollIcon">
            <CgScrollH />
          </div>
        </div>
        <div className="companyContent">{activeTabDisplay}</div>
      </div>
    </section>
  )
}

export default experience
