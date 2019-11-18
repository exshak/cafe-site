import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { FaShoppingBag } from "react-icons/fa"
import { GiCoffeeBeans } from "react-icons/gi"
import { TiLeaf } from "react-icons/ti"

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
    <section aria-label="About Form" className="about" id="about">
      <div className="container">
        <article>
          <h1 className="text-center font-weight-bold pt-5 mb-3">
            <em>About us</em>
          </h1>
          <p className="text-center text-uppercase font-weight-bold text-muted mb-5 pb-4">
            coffee shop & bakery
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
                Home to some of the best coffee you've ever tasted.
              </p>
              <p align="justify">
                Every cup is made with the perfect blend of full flavor roasting
                along with the best quality beans in the industry which provides
                for great tasting coffee everytime.
              </p>
              <p align="justify">Cafelina stands by:</p>
              <ul>
                <li>100% customer satisfaction</li>
                <li>Fun place for the family</li>
                <li>Free unlimited wi-fi</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <hr className="hr-dark my-5" />
          <h5 class="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 pt-2 pb-4">
            <strong>our products</strong>
          </h5>
          <div class="row">
            <div class="col-md-4 mb-4 text-center">
              <div class="card card-body rgba-white-light hoverable">
                <TiLeaf />
                <p class="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Organic</strong>
                </p>
                <p class="dark-grey-text font-small">
                  Completely pesticide and herbicide free, with industry tests
                  done regularly to keep every batch of coffee as pure as
                  possible. Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4 text-center">
              <div class="card card-body rgba-white-light hoverable">
                <GiCoffeeBeans />
                <p class="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Roasted</strong>
                </p>
                <p class="dark-grey-text font-small">
                  The perfect blend of full flavor roasting along with the best
                  quality beans in the industry provides for great tasting
                  coffee everytime.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4 text-center">
              <div class="card card-body rgba-white-light hoverable">
                <FaShoppingBag
                  style={{
                    height: `40px`,
                    width: `40px`,
                  }}
                />
                <p class="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Fairtrade</strong>
                </p>
                <p class="dark-grey-text font-small">
                  Following North American fairtrade practices to provide the
                  most ethical coffee beans, which helps to give back to farmers
                  across the world.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <Link to="/menu" className="btn btn-dark">
              Browse Menu
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
