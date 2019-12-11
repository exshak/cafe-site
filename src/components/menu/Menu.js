import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import { MenuContainer } from './MenuContainer'

const Menu = ({ menu }) => (
  <MenuContainer title="Menu">
    {menu.categories.distinct.map(category => (
      <div key={category} className="col-lg-6 py-3">
        <Link
          to={'/menu/' + category.replace(/\W/g, '-').toLowerCase()}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <Image
                fixed={menu.pictures.edges[0].node.childImageSharp.fixed}
                style={{
                  borderRadius: '50%',
                }}
              />
            </div>
            <div className="col align-self-center">
              <h4>{category}</h4>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </MenuContainer>
)

export default Menu
