import { Link } from "gatsby"
import React from "react"

// NOTE:

export default props => {
  return (
    <div class="container-fluid">
      <div class="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div
            className="sidebar-sticky"
            style={{
              height: `100%`,
              width: `300px`,
              position: `fixed`,
              zIndex: 1,
              top: 200,
              left: 0,
              overflowX: `hidden`,
              paddingLeft: `100px`,
            }}
          >
            <ul
              className="nav flex-column"
              style={{
                listStyleType: `none`,
              }}
            >
              <h4>Drinks</h4>
              {props.category.distinct.map(node => {
                return (
                  <li className="nav-item">
                    <Link
                      to={node.replace(/\W/g, "-").toLowerCase()}
                      className="nav-link"
                      style={{
                        color: `black`,
                        textDecoration: `none`,
                      }}
                    >
                      {node}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
