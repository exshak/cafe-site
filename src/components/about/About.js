import { graphql, Link, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { GiCoffeeBeans } from 'react-icons/gi'
import { TiLeaf } from 'react-icons/ti'

const About = () => {
  const data = useStaticQuery(graphql`
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
          <hr className="my-5" />
          <h5 className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 pt-2 pb-4">
            <strong>us</strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <TiLeaf />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Organic</strong>
                </p>
                <p className="dark-grey-text font-small">
                  Every cup of our quality artisan coffee starts with locally
                  sourced, hand picked ingredients. Once you try it, our coffee
                  will be a blissful addition to your everyday morning routine -
                  we guarantee it!
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <GiCoffeeBeans />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Roasted</strong>
                </p>
                <p className="dark-grey-text font-small">
                  When you walk into our shop to start your day, we are
                  dedicated to providing you with friendly service, a welcoming
                  atmosphere, and above all else, excellent products made with
                  the highest quality ingredients. If you are not satisfied,
                  please let us know and we will do whatever we can to make
                  things right!
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <FaShoppingBag
                // style={{
                //   height: `40px`,
                //   width: `40px`,
                // }}
                />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Fairtrade</strong>
                </p>
                <p className="dark-grey-text font-small">
                  Founded in 1987 by the Hernandez brothers, our establishment
                  has been serving up rich coffee sourced from artisan farmers
                  in various regions of South and Central America. We are
                  dedicated to travelling the world, finding the best coffee,
                  and bringing back to you here in our cafe. We guarantee that
                  you will fall in lust with our decadent blends the moment you
                  walk inside until you finish your last sip. Join us for your
                  daily routine, an outing with friends, or simply just to enjoy
                  some alone time.
                </p>
              </div>
            </div>
          </div>
        </article>
        {/* <article>
          <hr className="hr-dark my-5" />
          <h5 className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 pt-2 pb-4">
            <strong>more info</strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <TiLeaf />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Organic</strong>
                </p>
                <p className="dark-grey-text font-small">
                  We take pride in our work, and it shows. Every time you order
                  a beverage from us, we guarantee that it will be an experience
                  worth having. Whether it's our world famous Venezuelan
                  Cappuccino, a refreshing iced herbal tea, or something as
                  simple as a cup of speciality sourced black coffee, you will
                  be coming back for more.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <GiCoffeeBeans />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Roasted</strong>
                </p>
                <p className="dark-grey-text font-small">
                  Our seasonal menu features delicious snacks, baked goods, and
                  even full meals perfect for breakfast or lunchtime. We source
                  our ingredients from local, oragnic farms whenever possible,
                  alongside premium vendors for specialty goods.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <FaShoppingBag
                // style={{
                //   height: `40px`,
                //   width: `40px`,
                // }}
                />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Fairtrade</strong>
                </p>
                <p className="dark-grey-text font-small">
                  Travelling the world for the very best quality coffee is
                  something take pride in. When you visit us, you'll always find
                  new blends from around the world, mainly from regions in
                  Central and South America. We sell our blends in smaller to
                  large bulk quantities. Please visit us in person for more
                  details.
                </p>
              </div>
            </div>
          </div>
        </article> */}
        <article>
          <hr className="my-5" />
          <h5 className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 pt-2 pb-4">
            <strong>our products</strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <TiLeaf />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Organic</strong>
                </p>
                <p className="dark-grey-text font-small">
                  Completely pesticide and herbicide free, with industry tests
                  done regularly to keep every batch of coffee as pure as
                  possible. Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <GiCoffeeBeans />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Roasted</strong>
                </p>
                <p className="dark-grey-text font-small">
                  The perfect blend of full flavor roasting along with the best
                  quality beans in the industry provides for great tasting
                  coffee everytime.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <div className="card card-body rgba-white-light hoverable">
                <FaShoppingBag
                // style={{
                //   height: `40px`,
                //   width: `40px`,
                // }}
                />
                <p className="font-weight-bold font-weight-bold dark-grey-text text-uppercase spacing">
                  <strong>Fairtrade</strong>
                </p>
                <p className="dark-grey-text font-small">
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

export default About
