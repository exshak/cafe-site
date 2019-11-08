import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/header"
import Info from "../components/Info"
import Title from "../components/Title"

export default ({ data, pageContext, path }) => {
  const drinks = data.allContentfulDrinks
  const { items } = pageContext
  console.log(data)
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            textAlign: `center`,
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
          }}
        >
          <Title title={pageContext.category} />
          {/* <h1>Drinks</h1> */}
          <hr />
          <div
            style={
              {
                // display: `flex`,
                // flexWrap: `wrap`,
              }
            }
          >
            {drinks.edges.map(({ node }) => {
              return (
                <div
                  style={
                    {
                      // display: `flex`,
                      // flexWrap: `wrap`,
                    }
                  }
                >
                  <h1>{node.type}</h1>
                  <div
                    style={{
                      display: `flex`,
                      margin: `10px`,
                      width: `400px`,
                      // justifyContent: `flex-end`,
                    }}
                  >
                    <Image
                      fixed={node.image.fixed}
                      style={{
                        borderRadius: `50% 50% 50% 50%`,
                      }}
                    />
                    {/* <img
                      src={node.image.fixed.src}
                      alt=""
                      style={{
                        borderRadius: `50% 50% 50% 50%`,
                        height: 100,
                        width: 100,
                      }}
                    /> */}
                    <Link to={path + "/" + node.slug}>
                      <h1
                        style={{
                          margin: `20px`,
                        }}
                      >
                        {node.title}
                      </h1>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Info />
      <Footer />
    </>
    // <Layout>
    //   <div>
    //     {drinks.edges.map(({ node }) => (
    //       <div>
    //         <h1>{node.type}</h1>
    //         <Image fixed={node.image.fixed}/>
    //         <p>{node.title}</p>
    //       </div>
    //     ))}
    //     {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    //   </div>
    // </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    allContentfulDrinks(filter: { category: { eq: $category } }) {
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

// export const query = graphql`
//   query($slug: String!) {
//     allContentfulDrinks {
//       edges {
//         node {
//           id
//           title
//           description {
//             description
//           }
//           price
//           category
//           image {
//             fixed(width: 50, height: 50) {
//               ...GatsbyContentfulFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `
