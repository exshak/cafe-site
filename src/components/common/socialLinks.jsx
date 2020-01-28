import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiteMetadata } from './siteMetadata'

const SocialLinks = () => {
  const { social } = SiteMetadata()

  return (
    <ul className="list-inline list-unstyled">
      <li className="list-inline-item">
        <a
          aria-label={social.twitter}
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaTwitter className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          aria-label={social.facebook}
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaFacebookF className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          aria-label={social.instagram}
          href={social.instagram}
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
