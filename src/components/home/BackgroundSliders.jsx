import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import React from 'react'
import { SliderText } from '../Common/SliderText'

const BackgroundSliders = () => {
  const data = useStaticQuery(
    graphql`
      query BackgroundSlider {
        backgrounds: allFile(
          filter: { relativeDirectory: { eq: "backgrounds" } }
        ) {
          nodes {
            childImageSharp {
              fluid(
                quality: 90
                maxWidth: 1920
                duotone: {
                  highlight: "#000000"
                  shadow: "#000000"
                  opacity: 20
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="background-slider">
      <BackgroundSlider query={data}>
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
      </BackgroundSlider>
    </div>
  )
}

export default BackgroundSliders
