import { graphql } from 'gatsby'
import React from 'react'
import About from '../components/about'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'

export default ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection data={data} title="About Us" />
    <About />
  </Layout>
)

export const query = graphql`
  query {
    background: file(
      relativePath: { eq: "about/tony-lee-8IKf54pc3qk-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
