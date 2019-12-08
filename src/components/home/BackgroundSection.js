import { graphql, Link, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: {
            eq: "backgrounds/nafinia-putra-Kwdp-0pok-I-unsplash.jpg"
          }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
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
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row smooth-scroll">
              <div className="col-md-12 text-center text-white">
                <hr className="hr-light" />
                <h1 className="display-4 font-weight-bold">
                  <em>Cafelina</em>
                </h1>
                <hr className="hr-light" />
                <h5 className="text-uppercase font-weight-bold spacing">
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
