import React from 'react'
import { Item } from './Item'

const SubCategory = ({ type, drinks, path }) => (
  <div className="col-md-12">
    <div className="row">
      <div className="col">
        <h3>{type}</h3>
        <hr />
      </div>
    </div>
    <div className="col">
      <div className="row">
        {drinks.edges.map(
          ({ node }) => type === node.type && <Item node={node} path={path} />
        )}
      </div>
    </div>
  </div>
)

export default SubCategory
