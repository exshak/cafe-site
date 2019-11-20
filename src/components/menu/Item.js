import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"

// NOTE: refactor

export default ({ node, path }) => {
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
        to={`${path}/${node.slug}`}
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
