import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import React from 'react'
import SliderText from '../common/sliderText'

const BackgroundSliders = () => {
  const data = useStaticQuery(graphql`
    query BackgroundSliders {
      backgrounds: allFile(
        filter: { relativeDirectory: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
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
    <section aria-label="Homepage carousel" className="background-slider">
      <BackgroundSlider
        query={data} // direct path, no relative names
        initDelay={4} // delay before the first transition
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        images={[
          // images to include (and their order) from 'relativePath'
          'backgrounds/carousel-entry.jpg',
          'backgrounds/carousel-table.jpg',
          'backgrounds/carousel-front.jpg',
          'backgrounds/carousel-kiosk.jpg',
        ]}
      >
        <SliderText />
        <SliderText />
        <SliderText />
        <SliderText />
      </BackgroundSlider>
    </section>
  )
}

export default BackgroundSliders
