import React from 'react'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import SiteLogo from '../common/siteLogo'
import { SiteMetadata } from '../common/siteMetadata'

const FooterInfo = () => {
  const { contact } = SiteMetadata()

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-6 text-center mx-auto">
          <div className="info-logo py-3">
            <SiteLogo width={300} />
          </div>
          <p className="py-3">
            Travelling the world for the very best quality coffee is something
            we take pride in. When you visit us, you'll always find new blends
            from around the world, mainly from regions in Central and South
            America. We sell our blends in small to large bulk quantities.
            Please visit us in person for more details.
          </p>
          <ul className="list-inline list-unstyled">
            <li className="list-inline-item">
              <p>
                <FaPhone className="list-contact mb-1" /> {contact.phone}
              </p>
            </li>{' '}
            <li className="list-inline-item">
              <p>
                <FaMapMarkerAlt className="list-contact mb-1" />{' '}
                {contact.address}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default FooterInfo
