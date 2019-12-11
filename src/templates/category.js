import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSections from '../components/Common/BackgroundSections'
import Layout from '../components/Layout'
import { MenuContainer } from '../components/menu/MenuContainer'
import SubCategory from '../components/menu/SubCategory'

export default ({ pageContext, data, path }) => (
  <Layout>
    <BackgroundSections
      data={data}
      title={pageContext.category}
      className="menu-image"
    />
    <MenuContainer title={pageContext.category}>
      {data.drinks.distinct.map(type => (
        <SubCategory
          key={type}
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
    desktop: file(
      relativePath: { eq: "backgrounds/tony-lee-8IKf54pc3qk-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
