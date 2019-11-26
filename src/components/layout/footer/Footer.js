import React from 'react'
import { Info } from './Info'

// NOTE:

export const Footer = () => (
  <footer id="footer">
    <div className="page-footer mx-auto">
      <Info />
      <div className="footer-copyright py-4 text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </footer>
)
