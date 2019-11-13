import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"

// NOTE:

export default ({ data, node, pageContext, path }) => {
  return (
    <div
      style={{
        // display: `flex`,
        margin: `10px`,
        // flexWrap: `wrap`,
        width: `250px`,
      }}
    >
      <Image
        fixed={node.image.fixed}
        style={{
          borderRadius: `50% 50% 50% 50%`,
        }}
      />
      <Link
        to={path + "/" + node.slug}
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <h4
          style={{
            margin: `20px`,
          }}
        >
          {node.title}
        </h4>
      </Link>
    </div>
  )
}

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allContentfulCafeDrinks(
//           filter: {
//             category: { eq: "Hot Coffees" }
//             type: { eq: "Brewed Coffees" }
//           }
//         ) {
//           edges {
//             node {
//               title
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       const items = data.allContentfulCafeDrinks
//       console.log(items)
//       return (
//         <div>
//           {items.edges.map(({ node }) => {
//             return <h6>{node.title}</h6>
//           })}
//         </div>
//       )
//     }}
//   />
// )
