import { Link } from "gatsby"
import React from "react"

// NOTE: add api, fix icons, fix links

export default () => (
  <section aria-label="Contact Form" className="contact-section my-5">
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-lg-8">
            <form
              className="card-body form"
              action="https://formspree.io/mzbplopa"
              method="POST"
            >
              <h3 className="mt-4">
                <i className="fas fa-envelope pr-2" />
                Contact us:
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      id="form-contact-name"
                      className="form-control"
                      placeholder="Your name"
                    />
                    <label htmlFor="form-contact-name" hidden>
                      Your name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      id="form-contact-email"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <label htmlFor="form-contact-email" hidden>
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      id="form-contact-phone"
                      className="form-control"
                      placeholder="Your phone"
                    />
                    <label htmlFor="form-contact-phone" hidden>
                      Your phone
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      id="form-contact-company"
                      className="form-control"
                      placeholder="Your company"
                    />
                    <label htmlFor="form-contact-company" hidden>
                      Your company
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <textarea
                      type="text"
                      id="form-contact-message"
                      className="form-control md-textarea"
                      rows="3"
                      placeholder="Type your message here..."
                    ></textarea>
                    <label htmlFor="form-contact-message" hidden>
                      Your message
                    </label>
                    <Link className="btn-floating btn-lg">
                      <i className="far fa-paper-plane" />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="card-body contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Contact Information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pr-2 mb-4" />
                    San Francisco, CA 90123
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone pr-2 mb-4" />
                    (123) 456-7890
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope pr-2" />
                    contact@cafelina.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <Link className="p-2 fa-lg tw-ic">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="p-2 fa-lg li-ic">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="p-2 fa-lg ins-ic">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
