import { Link } from "gatsby"
import React from "react"
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaRegPaperPlane,
  FaTwitter,
} from "react-icons/fa"

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
                <FaEnvelope className="mb-1" /> Contact us:
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
                    <Link
                      to="/contact"
                      className="btn-floating btn-lg btn-dark py-1"
                    >
                      <FaRegPaperPlane />
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
                    <FaMapMarkerAlt className="list-contact mb-1" /> Oakland, CA
                    94621
                  </p>
                </li>
                <li>
                  <p>
                    <FaPhone className="list-contact mb-1" /> (123) 456-7890
                  </p>
                </li>
                <li>
                  <p>
                    <FaEnvelope className="list-contact mb-1" />{" "}
                    contact@cafelina.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <Link to="/contact" className="list-social p-2">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact" className="list-social p-2">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact" className="list-social p-2">
                    <FaInstagram />
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
