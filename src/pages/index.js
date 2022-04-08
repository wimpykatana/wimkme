import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutWidth"
import Seo from "../components/seo"
import Hero from "../components/Sections/hero"
import About from "../components/Sections/about"
import Experience from "../components/Sections/experience"
import Contact from "../components/Sections/contact"
import "./index.css"

const indexPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Welcome to Wimpy Katana personal website" />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default indexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
