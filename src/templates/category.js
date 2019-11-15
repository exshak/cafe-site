import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Sidenav } from "../components/Sidenav"
import Type from "../components/Type"

// NOTE:

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
        {drinks.distinct.map(type => {
          return (
            <div>
              <h3>{type}</h3>
              <div
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                }}
              >
                {drinks.edges.map(({ node }) => {
                  if (type === node.type) {
                    return <Type node={node} path={path} />
                  } else return null
                })}
              </div>
            </div>
          )
        })}
      </div>
      <Sidenav category={drinks} />
    </Layout>
    // {/* <main>
    //   <div
    //     style={{
    //       textAlign: `center`,
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `0px 1.0875rem 1.45rem`,
    //     }}
    //   >
    //     <Title title={pageContext.category} />
    //     <hr />
    //     <div style={{}}>
    //       {drinks.edges.map(({ node }) => {
    //         return (
    //           <div style={{}}>
    //             <h1>{node.type}</h1>
    //             <div
    //               style={{
    //                 display: `flex`,
    //                 margin: `10px`,
    //                 width: `400px`,
    //               }}
    //             >
    //               <Image
    //                 fixed={node.image.fixed}
    //                 style={{
    //                   borderRadius: `50% 50% 50% 50%`,
    //                 }}
    //               />
    //               <Link to={path + "/" + node.slug}>
    //                 <h1
    //                   style={{
    //                     margin: `20px`,
    //                   }}
    //                 >
    //                   {node.title}
    //                 </h1>
    //               </Link>
    //             </div>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   </div>
    // </main> */}
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
