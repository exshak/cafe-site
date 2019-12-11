import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from './SiteMetadata'

export const SiteLogo = ({ logoWidth }) => {
  const { title } = SiteMetadata()

  const { file } = useStaticQuery(
    graphql`
      query SiteLogo {
        file(relativePath: { eq: "logo/logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Image
      fluid={file.childImageSharp.fluid}
      style={{ width: logoWidth }}
      alt={title}
    />
  )
}

SiteLogo.propTypes = {
  logoWidth: PropTypes.number,
}

SiteLogo.defaultProps = {
  logoWidth: 500,
}
