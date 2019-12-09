import { Link } from 'gatsby'
import React from 'react'

const SideNav = props => (
  // <div
  //   className="sidebar-sticky"
  //   style={
  //     {
  // height: `100%`,
  // width: `300px`,
  // position: `fixed`,
  // zIndex: 1,
  // top: 200,
  // left: 0,
  // overflowX: `hidden`,
  // paddingLeft: `100px`,
  //     }
  //   }
  // >
  <ul className="nav flex-column">
    <h4>Drinks</h4>
    {props.category.distinct.map(node => {
      return (
        <li className="nav-item">
          <Link
            to={node.replace(/\W/g, '-').toLowerCase()}
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
)

export default SideNav
