import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

const SideNav = () => {
  const { categories } = useStaticQuery(
    graphql`
      query SideNav {
        categories: allContentfulCafeDrinks {
          distinct(field: category)
        }
      }
    `
  )

  return (
    <ul className="nav flex-column">
      <h4 className="pl-3">Drinks</h4>
      {categories.distinct.map(category => (
        <li key={category} className="nav-item">
          <Link
            to={'/menu/' + category.replace(/\W/g, '-').toLowerCase()}
            className="nav-link"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <h6>{category}</h6>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideNav
