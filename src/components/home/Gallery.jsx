import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import { GiCakeSlice, GiCoffeeCup, GiSlicedBread } from 'react-icons/gi'

const Gallery = () => {
  const { all, cafe } = useStaticQuery(graphql`
    query Gallery {
      all: allFile(filter: { relativeDirectory: { eq: "backgrounds" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      cafe: allFile(filter: { relativeDirectory: { eq: "images" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const [gallery, setGallery] = useState(all)

  const variables = {
    all,
    cafe,
  }

  const handleChange = e => {
    const directory = e.target.value
    typeof directory === 'string' && setGallery(variables[directory])
  }

  return (
    <div className="container my-5">
      <section id="gallery">
        <div className="row">
          <div className="col-md-12 d-flex mb-5">
            <div className="row text-center" style={{ display: 'contents' }}>
              <div className="col d-flex justify-content-center">
                <button
                  type="button"
                  value="all"
                  onClick={handleChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 0,
                    outlineColor: 'transparent',
                  }}
                >
                  <FiGrid
                    style={{ color: '#3a3a3a', height: '40px', width: '40px' }}
                  />
                  <br />
                  All
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  type="button"
                  value="cafe"
                  onClick={handleChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 0,
                    outlineColor: 'transparent',
                  }}
                >
                  <GiCoffeeCup
                    style={{ color: '#3a3a3a', height: '40px', width: '40px' }}
                  />
                  <br />
                  Cafe
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  type="button"
                  value="baked"
                  onClick={handleChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 0,
                    outlineColor: 'transparent',
                  }}
                >
                  <GiSlicedBread
                    style={{ color: '#3a3a3a', height: '40px', width: '40px' }}
                  />
                  <br />
                  Baked
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  type="button"
                  value="deserts"
                  onClick={handleChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 0,
                    outlineColor: 'transparent',
                  }}
                >
                  <GiCakeSlice
                    style={{ color: '#3a3a3a', height: '40px', width: '40px' }}
                  />
                  <br />
                  Deserts
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          {gallery.nodes.map(({ childImageSharp: { fluid } }) => (
            <figure key={fluid.src} className="col-md-4 my-3">
              <a href={fluid.src}>
                <Img
                  fluid={fluid}
                  alt="picture"
                  className="half-shadow"
                  style={{ maxHeight: '190px' }}
                />
              </a>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Gallery
