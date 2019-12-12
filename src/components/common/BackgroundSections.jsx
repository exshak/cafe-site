import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from './SiteMetadata'

const BackgroundSections = ({ data, title, className }) => {
  const siteMetadata = SiteMetadata()

  const imageData = [
    data.desktop.childImageSharp.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
  ].reverse()

  return (
    <BackgroundImage Tag="section" className={className} fluid={imageData}>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12 text-center text-white">
            <h1 className="display-4 font-weight-bold">
              <em>{title}</em>
            </h1>
            <h5 className="text-uppercase font-weight-bold">
              {siteMetadata.title}
            </h5>
            {className === 'seasonal-image' && (
              <div className="my-5">
                <Link to="/menu" className="btn btn-light font-weight-bold">
                  Drinks
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

BackgroundSections.propTypes = {
  className: PropTypes.string,
}

BackgroundSections.defaultProps = {
  className: 'background-image',
}

export default BackgroundSections
