import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const BackgroundAbout = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query BackgroundTest {
        desktop: file(
          relativePath: { eq: "backgrounds/tony-lee-8IKf54pc3qk-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = [
    data.desktop.childImageSharp.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className={(className, 'background-image')}
      fluid={imageData}
    >
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12 text-center text-white">
            <h1 className="display-4 font-weight-bold">
              <em>About Us</em>
            </h1>
            <h5 className="text-uppercase font-weight-bold">Cafelina</h5>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default BackgroundAbout
