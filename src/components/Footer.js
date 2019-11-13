import React from "react"
import Info from "./Info"

// NOTE:

const Footer = () => (
  <footer
    className="mx-auto py-5"
    style={{
      maxWidth: `960px`,
    }}
  >
    <Info />
    <div
      className="pt-5"
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
