import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'

const SubCategory = ({ drinkType, drinks, path }) => (
  <div className="col-md-12 pt-5">
    <div className="row">
      <div className="col">
        <h4 className="font-weight-bold">{drinkType}</h4>
        <hr />
      </div>
    </div>
    <div className="col">
      <div className="row">
        {drinks.edges.map(
          ({ node: { id, title, type, slug, image } }) =>
            drinkType === type && (
              <div key={id} className="col-md-4 text-center py-3">
                <Link
                  to={`${path}/${slug}`}
                  style={{
                    color: `black`,
                    textDecoration: `none`,
                  }}
                >
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
                      <h6
                        style={{
                          margin: `20px`,
                        }}
                      >
                        {title}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  </div>
)

export default SubCategory
