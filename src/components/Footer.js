import React from "react"
import Info from "./Info"

const Footer = () => (
  <footer>
    <Info />
    <div
      style={{
        textAlign: `center`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
