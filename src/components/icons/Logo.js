import React from "react"
import LogoColor from "./logoColor"
import LogoWhite from "./logoWhite"

const Logo = ({ isColor }) => {
  return <div>{isColor ? <LogoColor /> : <LogoWhite />}</div>
}

export default Logo
