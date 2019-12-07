import { graphql, Link, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

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
      const imageData = [
        data.desktop.childImageSharp.fluid,
        `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
      ].reverse()
      return (
        <BackgroundImage
          Tag="section"
          className={(className, 'background-image')}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div class="container h-100 d-flex justify-content-center align-items-center">
            <div class="row smooth-scroll">
              <div class="col-md-12 text-center text-white">
                <hr class="hr-light" />
                <h1 class="display-4 font-weight-bold">
                  <em>Cafelina</em>
                </h1>
                <hr class="hr-light" />
                <h5 class="text-uppercase font-weight-bold spacing">
                  Cafe & Bakery
                </h5>
                <div className="my-5">
                  <Link to="/menu" className="btn btn-outline-light">
                    Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
