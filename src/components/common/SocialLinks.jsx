import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export const SocialLinks = () => (
  <ul className="list-inline list-unstyled">
    <li className="list-inline-item">
      <a href="/" className="list-social p-2">
        <FaTwitter className="list-social-icon" />
      </a>
    </li>
    <li className="list-inline-item">
      <a href="/" className="list-social p-2">
        <FaFacebookF className="list-social-icon" />
      </a>
    </li>
    <li className="list-inline-item">
      <a href="/" className="list-social p-2">
        <FaInstagram className="list-social-icon" />
      </a>
    </li>
  </ul>
)
