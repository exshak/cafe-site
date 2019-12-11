import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSections from '../components/Common/BackgroundSections'
import BackgroundSliders from '../components/Home/BackgroundSliders'
import Banner from '../components/home/Banner'
import Gallery from '../components/Home/Gallery'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSliders />
    <Banner />
    <BackgroundSections
      data={data}
      title="Seasonal Drinks"
      className="seasonal-image"
    />
    <Gallery />
  </Layout>
)

export const query = graphql`
  query {
    desktop: file(
      relativePath: { eq: "backgrounds/tony-lee-8IKf54pc3qk-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
