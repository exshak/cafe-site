import { graphql, Link, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

// NOTE:

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={(className, 'background-image')}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="text-right">
            <Link
              to="/menu"
              className="btn btn-light"
              style={{
                margin: `20vh 10%`,
              }}
            >
              Browse Menu
            </Link>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
