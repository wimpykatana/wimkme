import React from "react"
import { Link } from "gatsby"

const indexPage = () => {
  return (
    <div>
      index <br />
      <Link to="/blog">go to blog</Link>
    </div>
  )
}

export default indexPage
