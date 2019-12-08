import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

export const SiteLogo = ({ logoWidth, logoAlt }) => {
  const data = useStaticQuery(
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
      fluid={data.file.childImageSharp.fluid}
      style={{ width: logoWidth }}
      alt={logoAlt}
    />
  )
}

SiteLogo.propTypes = {
  logoWidth: PropTypes.number,
  logoAlt: PropTypes.string,
}

SiteLogo.defaultProps = {
  logoWidth: 500,
  logoAlt: ``,
}
