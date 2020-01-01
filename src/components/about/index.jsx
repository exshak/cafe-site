import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { GiCoffeeBeans } from 'react-icons/gi'
import { TiLeaf } from 'react-icons/ti'
import { SiteMetadata } from '../common/siteMetadata'

const About = () => {
  const { title, slogan } = SiteMetadata()

  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/ba.jpg" }) {
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
        <article>
          <div className="text-center mb-5 pb-4">
            <h1 className="font-weight-bold mb-3">
              <em>About us</em>
            </h1>
            <p className="font-weight-bold text-uppercase text-muted">
              {slogan}
            </p>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 mb-lg-0 mr-auto mb-4">
              <Img
                fluid={file.childImageSharp.fluid}
                className="rounded half-image half-shadow"
                alt="coffee shop"
              />
            </div>
            <div className="col-xl-6 col-lg-6 text-justify">
              <p className="text-title lead">
                Home to some of the best coffee you've ever tasted.
              </p>
              <p>
                Founded in 1997 by the Yoshimura brothers, our establishment has
                been serving up rich coffee sourced from artisan farmers in
                various regions of South and Central America. We guarantee that
                you will fall in love with our decadent blends the moment you
                walk inside until you finish your last sip.
              </p>
              <p>
                Join us for your daily routine, an outing with friends, or
                simply just to enjoy some alone time.
              </p>
              <p className="text-title lead">{title} stands by:</p>
              <ul className="list-unstyled">
                <li>&#10003; 100% customer satisfaction</li>
                <li>&#10003; Quality artisanal coffee</li>
                <li>&#10003; Free unlimited wi-fi</li>
              </ul>
            </div>
          </div>
        </article>
        <hr className="my-5" />
        <article>
          <h5 className="font-weight-bold text-uppercase text-center my-5 pt-2 pb-4">
            Our Products
          </h5>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card card-body hoverable">
                <TiLeaf className="icon-large align-self-center my-4" />
                <p className="font-weight-bold text-uppercase">Organic</p>
                <p className="font-small">
                  Completely pesticide and herbicide free, with industry tests
                  done regularly to keep every batch of coffee as pure as
                  possible.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-body hoverable">
                <GiCoffeeBeans className="icon-large align-self-center my-4" />
                <p className="font-weight-bold text-uppercase">Roasted</p>
                <p className="font-small">
                  The perfect blend of full flavor roasting along with the best
                  quality beans in the industry provides for great tasting
                  coffee everytime.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-body hoverable">
                <FaShoppingBag className="icon-large align-self-center my-4" />
                <p className="font-weight-bold text-uppercase">Fairtrade</p>
                <p className="font-small">
                  We follow North American fairtrade practices to provide the
                  most excellent coffee beans, sourced locally and
                  internationally.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/menu" className="btn btn-dark">
              Browse Menu
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
