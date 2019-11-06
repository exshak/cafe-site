import React from "react"

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
