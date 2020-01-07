import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Banner = () => {
  const { file } = useStaticQuery(graphql`
    query Banner {
      file(relativePath: { eq: "images/home-info.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section aria-label="About Page" className="about-section my-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 mr-auto my-4">
            <Img
              fluid={file.childImageSharp.fluid}
              className="rounded half-image half-shadow"
              alt="coffee shop"
            />
          </div>
          <div className="col-xl-6 col-lg-6 text-justify my-4">
            <p className="text-title lead">
              Home to some of the best coffee you've ever tasted.
            </p>
            <p>
              Our seasonal menu features delicious snacks, baked goods, and even
              full meals perfect for breakfast or lunchtime. We source our
              ingredients from local, oragnic farms whenever possible, alongside
              premium vendors for specialty goods.
            </p>
            <br />
            <p>
              We take pride in our work, and it shows. Every time you order a
              beverage from us, we guarantee that it will be an experience worth
              having. Whether it's our world famous Venezuelan Cappuccino, a
              refreshing iced herbal tea, or something as simple as a cup of
              speciality sourced black coffee, you will be coming back for more!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
