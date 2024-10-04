import React, { useEffect, useState } from "react"
import { CgScrollH } from "react-icons/cg"
import "./experience.css"

const joblist = [
  {
    id: 1,
    nama: 'Self Employed',
    title: 'Independent Worker',
    periode: 'January 2020 - Present',
    desc: [
      'Developed a startup as a freelancer, achieving a client satisfaction rate of over 90%.',
      'Communicated with clients weekly to identify and resolve technology challenges, resulting in a 25% reduction in project turnaround time.',
      'Utilized various programming languages and frameworks including JavaScript, Gatsby, React, and Node to enhance web development projects, improving site performance by 30%.'
    ]
  },
  {
    id: 2,
    nama: 'Inphosoft Indonesia',
    title: 'Application Consultant',
    periode: 'September 2022 - September 2024',
    desc: [
      'Leading few project that was handle by Inphosoft IndonesiaLead multiple projects for Inphosoft Indonesia, resulting in a 30% increase in project delivery efficiency',
      'Developed a web application and mobile application that improved user engagement by 25%.',
      'Maintained Singapore Government web applications, achieving a 99% uptime rate.',
      'Managed developer resources for Inphosoft projects, optimizing team performance and reducing project completion time by 15%.',
      'Mentored and guided new developers, enhancing productivity by 20% within the first three months.',
      'Collaborated with business teams and other Singapore Government agencies, facilitating a 40% improvement in inter-agency communication.'
    ]
  },
  {
    id: 3,
    nama: 'Fomolabs',
    title: 'React.Js Developer',
    periode: 'January 2022 - September 2022',
    desc: [
      'Developed a web3 application using React.js, enhancing user engagement by 30%.',
      'Led a small team of two, completing projects ahead of schedule by 15%.',
      'Collaborated with the business team to identify and resolve UI/UX issues, improving user satisfaction ratings by 25%',
    ]
  },
  { 
    id: 4,
    nama: 'Trimegah Sekuritas Indonesia',
    title: 'Full Stack Developer',
    periode: 'April 2017 - December 2019',
    desc: [
      'Developed modern and maintainable code for an e-learning platform, resulting in a 30% increase in user engagement.',
      'Collaborated with multi-disciplinary teams of three members, enhancing project efficiency and achieving on-time delivery of all milestones.',
      'Proposed a comprehensive marketing strategy that improved brand visibility by 25% within six months.',
      'Suggested innovative features for the brand, contributing to a 15% increase in user satisfaction ratings.'
    ]
  },
  { 
    id: 5,
    nama: 'Kemana',
    title: 'Magento Developer',
    periode: '2015 - Maret 2017',
    desc:[
      'Collaborated with a team to build an eCommerce platform using Magento for a client, resulting in a 30% increase in user engagement.'
    ]
  },
  { 
    id: 6,
    nama: 'Sinar Bintang',
    title: 'Software Engineer',
    periode: '2011 - 2015',
    desc:[
      'Collaborated with a team at Sinar Bintang Web Agency to enhance project delivery efficiency by 20%.',
      'Implemented SEO and SMO strategies that increased client website traffic by 30%.',
      'Developed and maintained code for in-house and client websites using HTML, CSS, Sass, JavaScript, jQuery, and WordPress, resulting in a 25% improvement in site load times.',
      'Ensured cross-browser compatibility and responsiveness across various browsers and mobile devices, achieving a 95% user satisfaction rate.'
    ]
  },
];

const Experience = () => {
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
            <div className="companyName">{joblist[activeTab - 1].periode} <span>@</span> <span className="name">{joblist[activeTab - 1].nama}</span> </div>
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

export default Experience
