import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const indexPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Welcome to wimk website" />
      <div>
        index <br />
        <Link to="/blog">go to blog</Link>
      </div>
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
