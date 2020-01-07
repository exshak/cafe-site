import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import BackgroundSliders from '../components/home/backgroundSliders'
import Banner from '../components/home/banner'
import Gallery from '../components/home/gallery'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <BackgroundSliders />
    <Banner />
    <BackgroundSection
      data={data}
      title="Seasonal Drinks"
      className="seasonal-image"
    />
    <Gallery />
  </Layout>
)

export const query = graphql`
  query HomePage {
    background: file(relativePath: { eq: "backgrounds/menu-special.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
