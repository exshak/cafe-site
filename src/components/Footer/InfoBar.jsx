import { Link } from 'gatsby'
import React from 'react'

export const Info = () => (
  <div class="container py-5">
    <div class="row">
      <div class="col-xl-4 col-lg-4 pt-1 pb-1">
        <h5 class="text-uppercase mb-3">
          <strong>Cafelina</strong>
        </h5>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>
      <hr class="w-100 clearfix d-md-none" />
      <div class="col-xl-3 ml-xl-auto col-lg-4 col-md-6 pt-1 pb-1">
        <h5 class="text-uppercase">
          <strong>Navigate</strong>
        </h5>
        <ul className="navbar-nav ml-auto mt-lg-0 ">
          <li className="nav-item">
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" activeClassName="active">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class="w-100 clearfix d-md-none" />
      <div class="text-center ml-xl-auto col-xl-3 col-lg-4 col-md-6 pt-1 pb-1">
        <h5 class="text-uppercase mb-3">
          <strong>Opening hours</strong>
        </h5>
        <table class="table white-text">
          <tbody>
            <tr>
              <td>Mon - Thu:</td>
              <td>8am - 9pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>8am - 1am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>9am - 10pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
