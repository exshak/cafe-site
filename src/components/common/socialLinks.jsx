import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiteMetadata } from './siteMetadata'

const SocialLinks = () => {
  const {
    social: { twitter, facebook, instagram },
  } = SiteMetadata()

  return (
    <ul className="list-inline list-unstyled">
      <li className="list-inline-item">
        <a
          aria-label={`Visit ${twitter}`}
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaTwitter className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          aria-label={`Visit ${facebook}`}
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="list-social p-2"
        >
          <FaFacebookF className="list-social-icon" />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          aria-label={`Visit ${instagram}`}
          href={instagram}
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
