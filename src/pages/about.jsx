import { graphql } from 'gatsby'
import React from 'react'
import AboutSection from '../components/about'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection data={data} title="About Us" />
    <AboutSection />
  </Layout>
)

export const query = graphql`
  query AboutPage {
    background: file(relativePath: { eq: "backgrounds/about-section.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
