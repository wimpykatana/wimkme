import * as React from "react"
import { Link } from "gatsby"
import Logo from "./icons/Logo"
import Footer from "./Footer"
import { IoMdArrowRoundBack } from "react-icons/io"
import "./layoutBlog.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blog`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="main-heading">
        <div className="logoHolderBlog">
          <Link to="/">
            <Logo isColor={true} />
          </Link>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="header-link-home">
        <div className="logoHolderBlog">
          <Link to="/">
            <Logo isColor={true} />
          </Link>
        </div>
        <Link className="arrowLink" to="/blog">
          <IoMdArrowRoundBack />
        </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
