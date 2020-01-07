import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import MenuContainer from '../components/menu/menuContainer'
import SubCategory from '../components/menu/subCategory'

export default ({ pageContext, data, path }) => (
  <Layout>
    <SEO title="Menu" />
    <BackgroundSection
      data={data}
      title={pageContext.category}
      className="menu-image"
    />
    <MenuContainer title={pageContext.category}>
      {data.drinks.distinct.map((type, key) => (
        <SubCategory
          key={key}
          drinkType={type}
          drinks={data.drinks}
          path={path}
        />
      ))}
    </MenuContainer>
  </Layout>
)

export const query = graphql`
  query($category: String!) {
    drinks: allContentfulCafeDrinks(filter: { category: { eq: $category } }) {
      distinct(field: type)
      edges {
        node {
          id
          title
          type
          slug
          image {
            fixed(width: 140, height: 140) {
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
