import { graphql } from 'gatsby'
import React from 'react'
import SEO from '../components/common/seo'
import Layout from '../components/layout/layout'
import Menu from '../components/menu/Menu'
import SideNav from '../components/menu/Sidenav'

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <SideNav category={data.menu} />
    <Menu items={data.menu} />
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
  }
`
