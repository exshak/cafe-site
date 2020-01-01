import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Banner = () => {
  const { file } = useStaticQuery(graphql`
    query Banner {
      file(relativePath: { eq: "images/ba1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-3 my-5">
          <Img
            fluid={file.childImageSharp.fluid}
            alt="Coffee"
            className="rounded half-shadow"
          />
        </div>
        <div className="col align-self-center">
          <h3>Here at Cafelina</h3>
          <p className="lead">
            Our seasonal menu features delicious snacks, baked goods, and even
            full meals perfect for breakfast or lunchtime. We source our
            ingredients from local, oragnic farms whenever possible, alongside
            premium vendors for specialty goods.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
