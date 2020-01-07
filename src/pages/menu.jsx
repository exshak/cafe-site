import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import MenuSection from '../components/menu'

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <BackgroundSection data={data} title="Menu" className="menu-image" />
    <MenuSection menu={data} />
  </Layout>
)

export const query = graphql`
  query MenuPage {
    categories: allContentfulCafeMenu(sort: { order: ASC, fields: order }) {
      edges {
        node {
          subcategory
          image {
            fixed(height: 120, width: 120) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    background: file(relativePath: { eq: "backgrounds/menu-section.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
