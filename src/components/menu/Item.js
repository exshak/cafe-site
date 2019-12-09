import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'

export const Item = ({ node: { title, slug, image }, path }) => (
  <div className="col-md-4 text-center py-3">
    <div className="row">
      <div className="col">
        <Image
          fixed={image.fixed}
          style={{
            borderRadius: `50%`,
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Link
          to={`${path}/${slug}`}
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
            {title}
          </h4>
        </Link>
      </div>
    </div>
  </div>
)
