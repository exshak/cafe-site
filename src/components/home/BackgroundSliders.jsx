import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import React from 'react'
import SliderText from '../common/sliderText'

const BackgroundSliders = () => {
  const data = useStaticQuery(graphql`
    query BackgroundSliders {
      backgrounds: allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          childImageSharp {
            fluid(
              quality: 80
              maxWidth: 1920
              duotone: { highlight: "#000000", shadow: "#000000", opacity: 30 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <section className="background-slider">
      <BackgroundSlider query={data} initDelay={4} transition={4} duration={8}>
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
      </BackgroundSlider>
    </section>
  )
}

export default BackgroundSliders
