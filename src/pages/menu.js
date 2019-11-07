import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import SEO from "../components/seo"

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulDrinks {
      edges {
        node {
          id
          title
          category
          type
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
  # {
  #   menu: allContentfulCoffeeItem {
  #     edges {
  #       node {
  #         id
  #         title
  #         description {
  #           description
  #         }
  #         price
  #         category
  #         image {
  #           fixed(width: 50, height: 50) {
  #             ...GatsbyContentfulFixed
  #           }
  #         }
  #       }
  #     }
  #   }
  # }
`

export default MenuPage
