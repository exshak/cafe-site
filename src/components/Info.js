import React from "react"

const Info = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="d-block mb-2"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </svg>
        <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted">Cool stuff</a>
          </li>
          <li>
            <a className="text-muted">Random feature</a>
          </li>
          <li>
            <a className="text-muted">Team feature</a>
          </li>
          <li>
            <a className="text-muted">Stuff for developers</a>
          </li>
          <li>
            <a className="text-muted">Another one</a>
          </li>
          <li>
            <a className="text-muted">Last time</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted">Resource</a>
          </li>
          <li>
            <a className="text-muted">Resource name</a>
          </li>
          <li>
            <a className="text-muted">Another resource</a>
          </li>
          <li>
            <a className="text-muted">Final resource</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted">Business</a>
          </li>
          <li>
            <a className="text-muted">Education</a>
          </li>
          <li>
            <a className="text-muted">Government</a>
          </li>
          <li>
            <a className="text-muted">Gaming</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted">Team</a>
          </li>
          <li>
            <a className="text-muted">Locations</a>
          </li>
          <li>
            <a className="text-muted">Privacy</a>
          </li>
          <li>
            <a className="text-muted">Terms</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  // <div
  //   style={{
  //     margin: `0 auto`,
  //     maxWidth: 960,
  //     padding: `0px 1.0875rem 1.45rem`,
  //     display: `flex`,
  //     justifyContent: `center`,
  //   }}
  // >
  //   <p>9340 Fashion Ave, CA 90210</p>
  //   <p> | </p>
  //   <p>Monday - Sunday: 12 pm - 11 pm</p>
  //   <p> | </p>
  //   <p>Tel: 1-800-765-3242</p>
  //   <p> | </p>
  //   <p>E-mail: test@gmail.com</p>
  // </div>
)

export default Info
