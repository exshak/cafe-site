import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import Title from "../components/Title"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <BackgroundSection />
//     <Menu />
//   </Layout>
// )

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection />
    <Title title="holiday specials" />
    <Title title="collections" />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
