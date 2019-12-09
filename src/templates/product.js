import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout'

export default ({ data }) => {
  const {
    node: { id, title, type, price, image },
  } = data.allContentfulCafeDrinks.edges[0]
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            {/* <h1>{type}</h1> */}
            <Image
              fixed={image.fixed}
              style={{
                borderRadius: `50%`,
              }}
            />
            <h1
              style={{
                margin: `20px`,
              }}
            >
              {title}
            </h1>
            <button
              className="btn btn-dark snipcart-add-item"
              data-item-id={id}
              data-item-name={title}
              data-item-price={price}
              data-item-image={image.fixed.src}
              data-item-url="https://gatsby-coffee-project.netlify.com/"
            >
              {price}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allContentfulCafeDrinks(filter: { slug: { eq: $slug } }) {
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
