import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import React from 'react'
import { SliderText } from '../Common/SliderText'

const BackgroundSliders = () => {
  const data = useStaticQuery(
    graphql`
      query BackgroundSliders {
        backgrounds: allFile(
          filter: { relativeDirectory: { eq: "backgrounds" } }
        ) {
          nodes {
            childImageSharp {
              fluid(
                quality: 100
                maxWidth: 1920
                duotone: {
                  highlight: "#000000"
                  shadow: "#000000"
                  opacity: 30
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
    <section className="background-slider">
      <BackgroundSlider query={data} initDelay={4} transition={4} duration={8}>
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
      </BackgroundSlider>
    </section>
  )
}

export default BackgroundSliders
