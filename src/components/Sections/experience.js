import React, { useEffect, useState } from "react"
import { CgScrollH } from "react-icons/cg"
import "./experience.css"

const joblist = [
  {
    id: 1,
    nama: 'Now',
    title: 'Independent Worker',
    periode: 'January 2020 - Present',
    desc: [
      'Working as freelancer and building a startup with my friend',
      'Communicate with client on weekly basis to find a solution for their technology challenge and web development',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as Python, JavaScript, Gatsby, React, Express, Node, WordPress, Puppeteer, MongoDb, and Web3',
      'Sharing my knowledge at Social Media',
      'Building Web3 Project ( still working in progress )'
    ]
  },
  { 
    id: 2,
    nama: 'Teknologi Asia',
    title: 'Full Stack Developer',
    periode: 'April 2017 - December 2019',
    desc: [
      'Write a modern and maintainable code for e-learing platform',
      'Worked with a team of three people with background as backend developer, frontend developer and designer',
      'Purpose an idea how the brand will do marketing and the brand direction as a platform',
      'Suggesting an idea for the feature for the brand'
    ]
  },
  { 
    id: 3,
    nama: 'Kemana',
    title: 'Magento Developer',
    periode: '2015 - Maret 2017',
    desc:[
      'Working as a team for build an ecommerce using magento for kemana.com client',
      'Purpose the client to achieve a good UI / UX',
      'Communicate with Client on weekly basis to report the progress and give solution for their ecommerce'
    ]
  },
  { 
    id: 4,
    nama: 'Sinar Bintang',
    title: 'Software Engineer',
    periode: '2011 - 2015',
    desc:[
      'Working as a team at Sinar Bintang Web Agency',
      'Implement SEO and SMO for client marketing purpose',
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, jQuery and WordPress',
      'Responsible for various browsers and mobile devices to ensure cross-browser compatibility and responsiveness'
    ]
  },
];

const experience = () => {
  const [activeTab, setActiveTab] = useState(1)

  const companyClick = e => {
    const id = Number(e.target.dataset.id)
    setActiveTab(id)
  }

  return (
    <section id="experience">
      <div className="experienceHeadline">
        <span>02.</span> My Work Experience
      </div>
      <div className="experienceContent">
        <div className="company">
          <ul>
            {joblist.map(({id, nama}) => (
              <li
                data-id={id}
                className={activeTab == id ? "active" : ""}
                onClick={companyClick}
                key={nama}
              >
                {nama}
              </li>
            ))}
          </ul>
          <div className="mobileScrollIcon">
            <CgScrollH />
          </div>
        </div>
        <div className="companyContent">
          <div className="companyContentHolder showAnimation">
            <div className="title">{joblist[activeTab - 1].title}</div>
            <div className="companyName">{activeTab === 1 ? '' : joblist[activeTab - 1].nama}</div>
            <div className="timeToWorking">{joblist[activeTab - 1].periode}</div>
            <div className="jobDesc">
              <ul>
                {joblist[activeTab - 1].desc.map((val)=>(
                  <li key={ val }> { val } </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
