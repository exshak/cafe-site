import React from "react"

const Footer = () => (
  <footer>
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
