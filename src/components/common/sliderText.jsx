import { Link } from 'gatsby'
import React from 'react'
import { SiteMetadata } from './siteMetadata'

const SliderText = () => {
  const { title, description } = SiteMetadata()

  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center position-absolute">
      <div className="row scroll-top">
        <div className="col-md-12 text-center text-white">
          <hr className="hr-light" />
          <h1 className="font-weight-bold display-4">
            <em>{title}</em>
          </h1>
          <hr className="hr-light" />
          <h5 className="font-weight-bold text-uppercase">{description}</h5>
          <div className="my-5">
            <Link to="/menu" className="font-weight-bold btn btn-light">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderText
