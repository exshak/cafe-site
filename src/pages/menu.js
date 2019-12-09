import { graphql } from 'gatsby'
import React from 'react'
import BackgroundAbout from '../components/About/BackgroundAbout'
import Layout from '../components/Layout'
import Menu from '../components/menu/Menu'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <BackgroundAbout />
    <Menu items={data} />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulCafeDrinks {
      distinct(field: category)
      edges {
        node {
          id
          title
          category
          type
          slug
          description {
            description
          }
          price
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    pics: allFile(
      filter: {
        relativePath: { eq: "images/drew-coffman-Dt9kdskj6ek-unsplash.jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 110, height: 110) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
