import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import Sidenav from "../components/Sidenav"

export default ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <Sidenav category={data.menu} />
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
