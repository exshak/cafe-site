import { Link } from 'gatsby'
import React from 'react'

export const SliderText = () => (
  <div className="container-fluid h-100 d-flex justify-content-center align-items-center position-absolute">
    <div className="row scroll-top">
      <div className="col-md-12 text-center text-white">
        <hr className="hr-light" />
        <h1 className="display-4 font-weight-bold">
          <em>Cafelina</em>
        </h1>
        <hr className="hr-light" />
        <h5 className="text-uppercase font-weight-bold">Cafe & Bakery</h5>
        <div className="my-5">
          <Link to="/menu" className="btn btn-light font-weight-bold">
            Menu
          </Link>
        </div>
      </div>
    </div>
  </div>
)
