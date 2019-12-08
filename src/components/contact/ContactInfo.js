import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SocialLinks } from '../Common/SocialLinks'

export const ContactInfo = () => (
  <div className="col-lg-4">
    <div className="card-body contact text-center h-100 white-text">
      <h3 className="my-4 pb-2">Contact Information</h3>
      <ul className="text-lg-left list-unstyled ml-4">
        <li>
          <p>
            <FaMapMarkerAlt className="list-contact mb-1" /> Oakland, CA 94621
          </p>
        </li>
        <li>
          <p>
            <FaPhone className="list-contact mb-1" /> (123) 456-7890
          </p>
        </li>
        <li>
          <p>
            <FaEnvelope className="list-contact mb-1" /> contact@cafelina.com
          </p>
        </li>
      </ul>
      <hr className="hr-light my-4" />
      <SocialLinks />
    </div>
  </div>
)
