import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SideNav from './sideNav'

const MenuContainer = ({ title, type, children }) => (
  <section aria-label="Menu Page" id="menu-page">
    <div className="container">
      <div className="row">
        <div className="col-md-3 d-none d-sm-block">
          <SideNav />
        </div>
        <div className="col-md-9">
          {title === 'Menu' ? (
            <div>
              <h4 className="font-weight-bold">{title}</h4>
              <hr />
            </div>
          ) : (
            <div className="font-weight-bold">
              <Link to="/menu">Menu</Link>
              <span> / </span>
              <Link to={'/menu/' + title.replace(/\W/g, '-').toLowerCase()}>
                {title}
              </Link>
              {type && ' / ' + type}
            </div>
          )}
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  </section>
)

MenuContainer.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
}

MenuContainer.defaultProps = {
  title: '',
  type: '',
}

export default MenuContainer
