import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

// NOTE:

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ba1.jpg" }) {
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
        <div className="col mt-5"></div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-3 my-5">
          <Image
            fluid={data.file.childImageSharp.fluid}
            // className="rounded"
            alt="Coffee"
          />
        </div>
        <div className="col align-self-center">
          <h3>
            Fancy display heading
            <small className="text-muted"> With faded secondary</small>
          </h3>
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus.
          </p>
          <blockquote class="blockquote">
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
