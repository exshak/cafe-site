import React from "react"

export const Sidenav = props => {
  return (
    <div
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
        style={{
          listStyleType: `none`,
        }}
      >
        <h4>Drinks</h4>
        {props.category.distinct.map(node => {
          return <li>{node}</li>
        })}
      </ul>
    </div>
  )
}
