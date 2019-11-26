import React from 'react'
import { Item } from './Item'

// NOTE: destructure

const SubCategory = ({ type, drinks, path }) => (
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
          return <Item node={node} path={path} />
        } else return null
      })}
    </div>
  </div>
)

export default SubCategory
