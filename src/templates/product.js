import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"

// NOTE:

export default ({ data, pageContext }) => {
  const { node } = data.allContentfulCafeDrinks.edges[0]
  // const { items } = pageContext
  return (
    <Layout>
      <h1>{node.type}</h1>
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={node.image.fixed}
          style={{
            borderRadius: `50% 50% 50% 50%`,
          }}
        />
        <h1
          style={{
            margin: `20px`,
          }}
        >
          {node.title}
        </h1>
        <button
          className="snipcart-add-item"
          data-item-id={node.id}
          data-item-name={node.title}
          data-item-price={node.price}
          data-item-image={node.image.fixed.src}
          data-item-url="https://gatsby-coffee-project.netlify.com/"
          style={{
            width: `100px`,
          }}
        >
          {node.price}
        </button>
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
