import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from './siteMetadata'

const SiteLogo = ({ width }) => {
  const { title } = SiteMetadata()

  const { file } = useStaticQuery(graphql`
    query SiteLogo {
      file(relativePath: { eq: "icons/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={file.childImageSharp.fluid} alt={title} style={{ width }} />
  )
}

SiteLogo.propTypes = {
  width: PropTypes.number,
}

SiteLogo.defaultProps = {
  width: 500,
}

export default SiteLogo
