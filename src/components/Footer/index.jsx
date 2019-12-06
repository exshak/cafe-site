import React from 'react'
import { Info } from './InfoBar'

const Footer = () => (
  <footer id="footer">
    <div className="page-footer mx-auto">
      <Info />
      <div className="footer-copyright py-3 text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </footer>
)

export default Footer
