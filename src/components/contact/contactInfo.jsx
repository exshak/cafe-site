import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SiteMetadata } from '../common/siteMetadata'
import SocialLinks from '../common/socialLinks'

const ContactInfo = () => {
  const { contact } = SiteMetadata()

  return (
    <div className="col-lg-4">
      <div className="card-body contact text-center text-white h-100">
        <h3 className="my-4 pb-2">Contact Information</h3>
        <ul className="text-lg-left list-unstyled ml-4">
          <li>
            <p>
              <FaMapMarkerAlt className="list-contact mb-1" /> {contact.address}
            </p>
          </li>
          <li>
            <p>
              <FaPhone className="list-contact mb-1" /> {contact.phone}
            </p>
          </li>
          <li>
            <p>
              <FaEnvelope className="list-contact mb-1" /> {contact.email}
            </p>
          </li>
        </ul>
        <hr className="bg-light my-4" />
        <SocialLinks />
      </div>
    </div>
  )
}

export default ContactInfo
