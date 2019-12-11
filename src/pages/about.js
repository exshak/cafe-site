import { graphql } from 'gatsby'
import React from 'react'
import About from '../components/about/About'
import BackgroundSections from '../components/Common/BackgroundSections'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSections data={data} title="About Us" />
    <About />
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
