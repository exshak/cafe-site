import { Link } from 'gatsby'
import React from 'react'

export const SliderText = () => (
  <div className="container-fluid h-100 d-flex justify-content-center align-items-center position-absolute">
    <div className="row smooth-scroll">
      <div className="col-md-12 text-center text-white">
        <hr className="hr-light" />
        <h1 className="display-4 font-weight-bold">
          <em>Cafelina</em>
        </h1>
        <hr className="hr-light" />
        <h5 className="text-uppercase font-weight-bold spacing">
          Cafe & Bakery
        </h5>
        <div className="my-5">
          <Link to="/menu" className="btn btn-outline-light">
            Menu
          </Link>
        </div>
      </div>
    </div>
  </div>
)
