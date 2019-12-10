import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import SideNav from './SideNav'

const Menu = props => (
  <div className="container py-5">
    <div className="row">
      <div className="col text-center">
        <h1>Menu</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 d-none d-sm-block">
        <SideNav category={props.items.menu} />
      </div>
      <div className="col-md-9">
        <hr />
        <div className="row">
          {props.items.menu.distinct.map(category => (
            <div className="col-lg-6 py-3">
              <div className="row">
                <div className="col-4">
                  <Image
                    fixed={props.items.pics.edges[0].node.childImageSharp.fixed}
                    style={{
                      borderRadius: `50%`,
                    }}
                  />
                </div>
                <div className="col align-self-center">
                  <Link
                    to={category.replace(/\W/g, '-').toLowerCase()}
                    style={{
                      color: `black`,
                      textDecoration: `none`,
                    }}
                  >
                    <h3>{category}</h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Menu
