import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSections from '../components/Common/BackgroundSections'
import Layout from '../components/Layout'
import Menu from '../components/menu/Menu'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <BackgroundSections data={data} title="Menu" className="menu-image" />
    <Menu menu={data} />
  </Layout>
)

export const query = graphql`
  query {
    categories: allContentfulCafeDrinks {
      distinct(field: category)
    }
    desktop: file(
      relativePath: { eq: "backgrounds/tony-lee-8IKf54pc3qk-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pictures: allFile(
      filter: {
        relativePath: { eq: "images/drew-coffman-Dt9kdskj6ek-unsplash.jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
