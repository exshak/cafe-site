import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import BackgroundSection from '../components/common/backgroundSection'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import MenuContainer from '../components/menu/menuContainer'

export default ({ data }) => {
  const {
    node: { id, title, category, type, price, image },
  } = data.drink.edges[0]

  return (
    <Layout>
      <SEO title="Menu" />
      <BackgroundSection data={data} title={type} className="menu-image" />
      <MenuContainer title={category} type={type}>
        <div className="col-md-12">
          <hr />
          <div className="row pt-3">
            <div className="col-md-2" />
            <div className="col-md-6 text-center">
              <Img fixed={image.fixed} className="product-image" />
              <h3 className="py-3">{title}</h3>
              <button
                className="btn btn-dark snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-price={price}
                data-item-image={image.fixed.src}
                data-item-url="https://cafelina.netlify.com/"
              >
                {'$' + price}
              </button>
            </div>
          </div>
        </div>
      </MenuContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    drink: allContentfulCafeDrinks(filter: { slug: { eq: $slug } }) {
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
            fixed(width: 200, height: 200) {
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
