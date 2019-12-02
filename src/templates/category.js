import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import Sidenav from '../components/menu/SideNav'
import SubCategory from '../components/menu/SubCategory'

// NOTE: new component for type => item

const getTypes = drinks => {
  let tempHash = {}
  drinks.forEach(({ node }) => {
    if (tempHash[node.type] == null) {
      tempHash[node.type] = [node]
    } else tempHash[node.type] = [...tempHash[node.type], node]
  })
  return tempHash
}

export default ({ data, pageContext, path }) => {
  const drinks = data.allContentfulCafeDrinks
  getTypes(drinks.edges)
  return (
    <Layout>
      <div
        style={{
          textAlign: `center`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          marginLeft: `20%`,
        }}
      >
        <h1>{pageContext.category}</h1>
        <hr />
        {drinks.distinct.map(type => (
          <SubCategory type={type} drinks={drinks} path={path} />
        ))}
      </div>
      <Sidenav category={drinks} />
    </Layout>
    //       {drinks.edges.map(({ node }) => (
    //             <h1>{node.type}</h1>
    //             <div style={{
    //                 display: `flex`,
    //                 margin: `10px`,
    //                 width: `400px`}}
    //               <Image fixed={node.image.fixed}
    //               <Link to={path + "/" + node.slug}>
    //                 <h1 style={{ margin: `20px`}}
    //                   {node.title}
    // {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
  )
}

export const query = graphql`
  query($category: String!) {
    allContentfulCafeDrinks(filter: { category: { eq: $category } }) {
      distinct(field: type)
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
