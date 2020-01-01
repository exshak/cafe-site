import { graphql } from 'gatsby'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import { MenuContainer } from '../components/menu/MenuContainer'
import SubCategory from '../components/menu/SubCategory'

export default ({ pageContext, data, path }) => (
  <Layout>
    <SEO title="" />
    <BackgroundSection
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
    background: file(
      relativePath: { eq: "menu/interior-of-a-restaurant-3465604.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
