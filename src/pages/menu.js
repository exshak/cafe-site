import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import Menu from '../components/menu/Menu'

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <BackgroundSection data={data} title="Menu" className="menu-image" />
    <Menu menu={data} />
  </Layout>
)

export const query = graphql`
  query {
    categories: allContentfulCafeDrinks {
      distinct(field: category)
    }
    background: file(
      relativePath: { eq: "menu/interior-of-a-restaurant-3465604.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
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
