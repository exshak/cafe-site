import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import { GiCakeSlice, GiCoffeeCup, GiSlicedBread } from 'react-icons/gi'
import Button from '../common/button'

const Gallery = () => {
  const { all, cafe, baked, deserts } = useStaticQuery(graphql`
    query Gallery {
      all: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      cafe: allFile(
        filter: {
          base: { regex: "/cafe/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      baked: allFile(
        filter: {
          base: { regex: "/baked/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      deserts: allFile(
        filter: {
          base: { regex: "/cafe/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
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

  const [galleryImages, setGalleryImages] = useState(all)

  // Gallery images set to labels
  const galleryData = {
    all,
    cafe,
    baked,
    deserts,
  }

  const handleChange = e => {
    const query = e.target.value
    // Check to prevent svg value of null
    typeof query === 'string' && setGalleryImages(galleryData[query])
  }

  return (
    <div className="container my-5">
      <section aria-label="Home Gallery" id="gallery">
        <div className="row">
          <div className="col-md-12 d-flex mb-5">
            <div className="row text-center gallery-buttons">
              <Button
                label="all"
                icon={<FiGrid />}
                handleChange={handleChange}
              />
              <Button
                label="cafe"
                icon={<GiCoffeeCup />}
                handleChange={handleChange}
              />
              <Button
                label="baked"
                icon={<GiSlicedBread />}
                handleChange={handleChange}
              />
              <Button
                label="deserts"
                icon={<GiCakeSlice />}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          {galleryImages.nodes.map(({ childImageSharp: { fluid } }, key) => (
            <figure key={key} className="col-md-4 my-3">
              <a href={fluid.src} target="_blank" rel="noopener noreferrer">
                <Img
                  fluid={fluid}
                  alt="picture"
                  className="gallery-image half-shadow"
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
