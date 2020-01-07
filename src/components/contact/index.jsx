import { Link } from 'gatsby'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import FormInput from '../common/formInput'
import ContactInfo from './contactInfo'

const ContactSection = () => (
  <section aria-label="Contact Form" className="contact-section my-5">
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-lg-8">
            <form
              className="card-body form"
              action="https://formspree.io/mpzqgkjw"
              method="POST"
            >
              <h3 className="mt-4">
                <FaEnvelope className="mb-1" /> Contact us:
              </h3>
              <div className="row">
                <FormInput label="name" />
                <FormInput label="email" />
              </div>
              <div className="row">
                <FormInput label="phone" />
                <FormInput label="company" />
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
                      Submit
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection
