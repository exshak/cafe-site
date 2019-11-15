import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

// NOTE:

export default ({ className }) => (
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
          className={(className, "background-image")}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h1
            style={{
              color: `white`,
              fontStyle: `oblique`,
              textAlign: `right`,
              padding: `17vh 10%`,
            }}
          >
            Cafelina
          </h1>
        </BackgroundImage>
      )
    }}
  />
)
