import React from "react"
import Footer from "../components/Footer"
import Header from "../components/header"
import Info from "../components/Info"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import { Sidenav } from "../components/Sidenav"

const MenuPage = ({ data }) => (
  <>
    <Header />
    <SEO title="Menu" />
    <Sidenav />
    <Menu
      items={data.menu}
      style={{
        left: `200`,
      }}
    />
    <Info />
    <Footer />
  </>
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
