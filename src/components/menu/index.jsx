import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import MenuContainer from './menuContainer'

const MenuSection = ({ menu }) => (
  <MenuContainer title="Menu">
    {menu.categories.edges.map(({ node: { subcategory, image } }, key) => (
      <div key={key} className="col-lg-6 py-3 text-center">
        <Link to={'/menu/' + subcategory.replace(/\W/g, '-').toLowerCase()}>
          <div className="row">
            <div className="col-xs-4 ml-5">
              <Img fixed={image.fixed} className="product-image" />
            </div>
            <div className="col mr-5 align-self-center">
              <h4>{subcategory}</h4>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </MenuContainer>
)

export default MenuSection
