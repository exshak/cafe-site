import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'

// NOTE:

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
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
      {/* <div className="row">
        <div className="col mt-5"></div>
      </div> */}
      <div className="row">
        <div className="col-md-6 mx-3 my-5">
          <Image
            fluid={data.file.childImageSharp.fluid}
            className="rounded z-depth-1-half"
            alt="Coffee"
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
