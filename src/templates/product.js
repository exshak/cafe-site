import Image from 'gatsby-image'
import React from 'react'
import BackgroundSections from '../components/Common/BackgroundSections'
import Layout from '../components/Layout'
import { MenuContainer } from '../components/menu/MenuContainer'

export default ({ data }) => {
  const {
    node: { id, title, category, type, price, image },
  } = data.drink.edges[0]

  return (
    <Layout>
      <BackgroundSections data={data} title={type} className="menu-image" />
      <MenuContainer title={category} type={type}>
        <div className="col-md-12">
          <hr />
          <div className="row pt-3">
            <div className="col-md-2" />
            <div className="col-md-6 text-center">
              <Image
                fixed={image.fixed}
                style={{
                  borderRadius: `50%`,
                }}
              />
              <h3 className="py-3">{title}</h3>
              <button
                className="btn btn-dark snipcart-add-item"
                data-item-id={id}
                data-item-name={title}
                data-item-price={price}
                data-item-image={image.fixed.src}
                data-item-url="https://cafe-site.netlify.com/"
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
