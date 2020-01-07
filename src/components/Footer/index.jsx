import PropTypes from 'prop-types'
import React from 'react'
import SocialLinks from '../common/socialLinks'
import FooterInfo from './footerInfo'

const Footer = ({ siteTitle, siteAuthor }) => (
  <footer id="footer">
    <FooterInfo />
    <div className="container px-5 py-3">
      <div className="row">
        <div className="col-md-6 footer-copyright">
          © {new Date().getFullYear()}, {siteTitle} by {siteAuthor}
        </div>
        <div className="col-md-6 footer-socials text-right">
          <SocialLinks />
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
  siteAuthor: '',
}

export default Footer
