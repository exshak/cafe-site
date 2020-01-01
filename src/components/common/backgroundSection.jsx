import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from './siteMetadata'

const BackgroundSection = ({ data, title, className }) => {
  const siteMetadata = SiteMetadata()

  const imageData = [
    data.background.childImageSharp.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
  ].reverse()

  return (
    <BackgroundImage Tag="section" fluid={imageData} className={className}>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12 text-center text-white">
            <h1 className="font-weight-bold display-4">
              <em>{title}</em>
            </h1>
            <h5 className="font-weight-bold text-uppercase">
              {siteMetadata.title}
            </h5>
            {className === 'seasonal-image' && (
              <div className="my-5">
                <Link to="/menu" className="font-weight-bold btn btn-light">
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

BackgroundSection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

BackgroundSection.defaultProps = {
  title: '',
  className: 'background-image',
}

export default BackgroundSection
