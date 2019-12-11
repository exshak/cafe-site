import { Link } from 'gatsby'
import React from 'react'
import SideNav from './SideNav'

export const MenuContainer = ({ title, type, children }) => (
  <div className="container py-5">
    <div className="row pt-3">
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
            <Link
              to="/menu"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Menu
            </Link>{' '}
            /{' '}
            <Link
              to={'/menu/' + title.replace(/\W/g, '-').toLowerCase()}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
            {type && ' / ' + type}
          </div>
        )}
        <div className="row">{children}</div>
      </div>
    </div>
  </div>
)
