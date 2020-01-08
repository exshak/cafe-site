import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiteMetadata } from './siteMetadata'

const SocialLinks = () => {
  const { social } = SiteMetadata()

  return (
    <ul className="list-inline list-unstyled">
      <li className="list-inline-item">
        <a
          href={social.twitter}
          alt={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaTwitter className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href={social.facebook}
          alt={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaFacebookF className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href={social.instagram}
          alt={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaInstagram className="list-social-icon" />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
