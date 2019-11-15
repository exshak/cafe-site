import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

// NOTE:

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ba.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section aria-label="About Form" className="about mb-5 pb-5" id="about">
      <div className="container">
        <h1 className="text-center font-weight-bold pt-5 mb-3">
          <em>About us</em>
        </h1>
        <p className="text-center text-uppercase font-weight-bold text-muted mb-5 pb-4">
          With love to nature
        </p>
        <div className="row">
          <div className="col-xl-5 mr-auto col-lg-6 mb-lg-0 mb-4">
            <Image
              fluid={data.file.childImageSharp.fluid}
              className="img-fluid rounded z-depth-1-half"
              style={{
                height: `333px`,
              }}
              alt="My photo"
            />
          </div>
          <div className="col-xl-6 col-lg-6 pb-3">
            <p className="lead" align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              animi soluta ratione quisquam, dicta ab cupiditate iure eaque?
              Repellendus voluptatum, magni impedit eaque animi maxime.
            </p>
            <p align="justify">
              Nemo animi soluta ratione quisquam, dicta ab cupiditate iure
              eaque? Repellendus voluptatum, magni impedit eaque delectus,
              beatae maxime temporibus maiores quibusdam quasi rem magnam.
            </p>
            <ul>
              <li>Nemo animi soluta ratione</li>
              <li>Beatae maxime temporibus</li>
              <li>Consectetur adipisicing elit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
